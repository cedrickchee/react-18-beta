import dynamic from 'next/dynamic';
import { lazy, Suspense } from 'react';

// Shared Components
import Spinner from '../components/spinner'

// Client Components
import Page from '../components/page.client'
// import Story from '../components/story.client'
// import Footer from '../components/footer.client'

// These two ways are identical:
const NewsWithData = dynamic(() => import('../components/newswithdata.client'), { suspense: true });
// const NewsWithData = lazy(() => import('../components/newswithdata.client'));

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