import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

/*
POST /api/v1/user/signup
POST /api/v1/user/signin
POST /api/v1/blog
PUT /api/v1/blog
GET /api/v1/blog/:id
GET /api/v1/blog/bulk
*/

app.post("/api/v1/user/signup", (c) => {
  return c.text("user sign up api created");
});

app.post("/api/v1/user/signin", (c) => {
  return c.text("user sign in api created");
});

app.post("/api/v1/user/blog", (c) => {
  return c.text("user can post blog");
});

app.put("/api/v1/user/blog", (c) => {
  return c.text("user can edit the uploaded blog");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text(`fetch all blog`);
});

app.get("/api/v1/blog/:id", (c) => {
  let id = c.req.param("id");
  console.log("id: ", id);
  return c.text(`fetch bog as per given id ${id}`);
});

export default app;
