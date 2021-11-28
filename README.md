# Next.js 12 and React 18 Beta Demo

Next.js 12 comes with [React 18 Beta support](https://nextjs.org/blog/next-12#preparing-for-react-18).

React 18 will add features like Suspense, automatic batching of updates, APIs
like `startTransition`, and a new streaming API for server rendering with
support for `React.lazy`.

_This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)._

[**React 18 usage in Next.js**](https://nextjs.org/docs/advanced-features/react-18)

I'm making these features available to try today in Next.js 12. This project
have the beta version of React installed:

```sh
$ npm install next@latest react@beta react-dom@beta
```

I have enabled these advanced features (Alpha quality):

- **Server-Side Streaming**: Concurrent features in React 18 include built-in
  support for server-side Suspense and SSR streaming support. This allows you to
  server-render pages using HTTP streaming. This is an experimental feature in
  Next.js 12, but once enabled, SSR will use the same strict runtime as
  Middleware. Enabled using the experimental flag `concurrentFeatures: true` in
  `next.config.js`. (See
  [docs](https://nextjs.org/docs/advanced-features/react-18#enable-ssr-streaming-alpha)
  for more details)

- **React Server Components**: React Server Components allow us to render
  everything, including the components themselves, on the server. This is
  fundamentally different from server-side rendering where you're pre-generating
  HTML on the server. With Server Components, there's zero client-side
  JavaScript needed, making page rendering faster. This improves the user
  experience of your application, pairing the best parts of server-rendering
  with client-side interactivity. Enabled using the experimental flag
  `serverComponents: true`. (See
  [docs](https://nextjs.org/docs/advanced-features/react-18#react-server-components)
  for more details)

This is the demo of Hacker News built with Next.js and React Server Components.

**Try the demo: https://next-news-rsc.vercel.sh**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
