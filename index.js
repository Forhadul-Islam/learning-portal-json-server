const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const auth = require("json-server-auth");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8080;

const app = jsonServer.create();
app.use(middleware);

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(auth);
app.use(router);
app.listen(port);
