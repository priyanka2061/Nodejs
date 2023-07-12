const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("welcome my about page");
  }
  res.end(
    `<h>oops!</h>
      <p> we can't find the page that you are looking for </p>
      <a hrf="/" >home page</a>`
  );
});
server.listen(5000);
