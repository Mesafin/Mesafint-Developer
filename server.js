const { createBrowserRouter } = require("react-router-dom");
const { createServer } = require("http");
const { parse } = require("url");

const hostname = 'production' !== "production"
    ? "localhost"
    : "https://mesafint-tech.vercel.app/";
const port = process.env.PORT || 3330;

const router = createBrowserRouter([
  {
    path: "/a",
    element: () => <h1>Page A</h1>,
  },
  {
    path: "/b",
    element: () => <h1>Page B</h1>,
  },
]);

createServer(async (req, res) => {
  try {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    await router.render(req, res, {
      pathname,
      query,
    });
  } catch (err) {
    console.error("Error occurred handling", req.url, err);
    res.statusCode = 500;
    res.end("internal server error");
  }
})
  .once("error", (err) => {
    console.error(err);
    process.exit(1);
  })
  .listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
