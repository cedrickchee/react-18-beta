import { Suspense } from 'react';

// Shared Components
import Spinner from '../components/spinner'

// Client Components
import Page from '../components/page.client'
// import Story from '../components/story.client'
// import Footer from '../components/footer.client'

// Utils
import fetchData from "../lib/fetch-data";
import { transform } from "../lib/get-item";
import useData from "../lib/use-data";

function StoryWithData({ id }) {
  const data = useData(`s-${id}`, () =>
    fetchData(`item/${id}`).then(transform)
  );
  return <Story {...data} />;
}

function NewsWithData() {
  const storyIds = useData("top", () => fetchData("topstories"));
  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense key={id} fallback={<Spinner />}>
            <StoryWithData id={id} />
          </Suspense>
        );
      })}
    </>
  );
}

function Story({
  id,
  title,
  date,
  url,
  user,
  score,
  commentsCount,
}) {
  const { host } = url ? new URL(url) : { host: '#' }

  return (
    <div style={{ margin: '5px 0' }}>
      <div className="title">
        <span
          style={{
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            marginRight: 5,
            color: '#ccc',
          }}
        >
          &#9650;
        </span>
        <a href={url}>{title}</a>
        {url && (
          <span className="source">
            <a href={`http://${host}`}>{host.replace(/^www\./, '')}</a>
          </span>
        )}
      </div>
      <div className="meta">
        {score} {plural(score, 'point')} by{' '}
        <a href={`/user?id=${user}`}>
          {user}
        </a>{' '}
        <a href={`/item?id=${id}`}>
          XXX ago
        </a>{' '}
        |{' '}
        <a href={`/item?id=${id}`}>
          {commentsCount} {plural(commentsCount, 'comment')}
        </a>
      </div>
    </div>
  )
}

const plural = (n, s) => s + (n === 0 || n > 1 ? 's' : '')









// import NewsWithData from '../components/newswithdata.client';

export default function News() {
  return (
    <Page>
      <Suspense fallback={<Spinner />}>
        {/* A component that uses Suspense-based */}
        {/* <Content /> */}
        <NewsWithData />
      </Suspense>
    </Page>
  )
}