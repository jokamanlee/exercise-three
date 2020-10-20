const express = require("express");

const app = express();
const port = 4000; //port 3000 is what create react app uses, so we can run these at the sametime if its 4000

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");
/*----Serve Static Files----*/
app.use("/static", express.static("public"));

/*----Routing in Express----*/
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log("Exercise Three is running!"));
