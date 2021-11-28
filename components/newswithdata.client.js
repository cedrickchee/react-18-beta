import { Suspense } from 'react';

// Shared Components
import Spinner from './spinner';

// Client Components
import StoryWithData from './storywithdata.client';

// Utils
import fetchData from "../lib/fetch-data";
import useData from "../lib/use-data";

export default function NewsWithData() {
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