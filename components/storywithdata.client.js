// Client Components
import Story from './story.client'

// Utils
import fetchData from "../lib/fetch-data";
import { transform } from "../lib/get-item";
import useData from "../lib/use-data";

export default function StoryWithData({ id }) {
  const data = useData(`s-${id}`, () =>
    fetchData(`item/${id}`).then(transform)
  );
  return <Story {...data} />;
}