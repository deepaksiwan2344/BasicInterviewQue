/*

1. What is Next.js?

Next.js is a React framework for building web applications with built-in features like server-side
rendering (SSR), static site generation (SSG), API routes, and automatic code splitting.


2. What are the key features of Next.js?

Server-side rendering (SSR)
Static site generation (SSG)
File-based routing
API routes
Image optimization
Incremental Static Regeneration (ISR)
Fast refresh

3. What is the difference between SSR and SSG?

SSR (Server-Side Rendering): Page is rendered on each request.
SSG (Static Site Generation): Page is generated at build time and reused.

4. How does routing work in Next.js?

Routing in Next.js is file-based. Each file inside the /pages directory automatically becomes a route.

5. What is getStaticProps()?

A special function used for static generation. It runs at build time and fetches data for
pre-rendering the page.

6. What is getServerSideProps()?

A special function used for server-side rendering. It runs on every request to fetch data
and render the page.

7. What is getStaticPaths()?

Used with getStaticProps() for dynamic routes. It tells Next.js which paths to statically
generate at build time.

8. What is the difference between Link and a tag in Next.js?

next/link enables client-side navigation without reloading the page. <a> causes a full page reload.

9. What is API routing in Next.js?

Next.js allows you to create backend API routes inside the /pages/api folder.
Each file exports a function that handles HTTP requests.

10. How do you create a dynamic route in Next.js?

Use square brackets in the file name.


11. What is Image Optimization in Next.js?

Using next/image, Next.js optimizes images (lazy loading, resizing, WebP conversion)
automatically for performance.

12. How do you fetch data in Next.js?

getStaticProps() – at build time
getServerSideProps() – on request

13. What is the difference between client-side and server-side rendering?

Client-side: Content is rendered in the browser.
Server-side: Content is rendered on the server and sent as HTML.

14. What is middleware in Next.js (from v12+)?
Middleware allows you to run code before a request is completed, useful for redirects,
auth checks, etc. It runs on the edge (faster than server).







*/