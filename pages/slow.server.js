import { Suspense } from 'react';

// Shared Components
import Spinner from '../components/spinner'

// Client Components
import Page from '../components/page.client'
import Story from '../components/story.client'
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
  const storyIds = useData("top", () => fetchData("topstories", 500));
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