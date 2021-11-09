const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// npm install --save connect-history-api-fallback
// added this line to avoid 404 error on refresh
var history = require("connect-history-api-fallback");

const path = __dirname + "/app/views/";

const app = express();

// added this line to avoid 404 error on refresh
app.use(history());

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081",
};

// Original line
// app.use(cors(corsOptions));

//updated with below line to overcome the CORS allow origin error
app.use(cors({ origin: corsOptions, credentials: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
// const Role = db.role;
// const Branch = db.branches;
// const Dept = db.depts;
// const Ins = db.inss;

// after the first sync use the below code
// db.sequelize.sync();

// initial() function helps us to create 3 rows in database.
// In development, you may need to drop existing tables and re-sync database. So you can use force: true as code below.
// For production, just insert these rows manually and use sync() without parameters to avoid dropping data

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  // res.json({ message: "Welcome to aasbtech application." });
  res.sendFile(path + "index.html");
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/member.routes")(app);
require("./app/routes/branch.routes")(app);
require("./app/routes/ins.routes")(app);
require("./app/routes/dept.routes")(app);
require("./app/routes/access.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//   // Hardcoded Roles

//   Role.create({
//     id: 1,
//     name: "ADJUSTER",
//     brCode: "adjuster",
//   });

//   Role.create({
//     id: 2,
//     name: "ADMIN",
//     brCode: "admin",
//   });

//   Role.create({
//     id: 3,
//     name: "BRANCH CLERK",
//     brCode: "branchclerk",
//   });

//   Role.create({
//     id: 4,
//     name: "BRANCH MANAGER",
//     brCode: "branchmanager",
//   });

//   Role.create({
//     id: 5,
//     name: "CLERK",
//     brCode: "clerk",
//   });

//   Role.create({
//     id: 6,
//     name: "DIRECTOR",
//     brCode: "director",
//   });

//   Role.create({
//     id: 7,
//     name: "EDITOR",
//     brCode: "editor",
//   });

//   Role.create({
//     id: 8,
//     name: "MANAGER",
//     brCode: "manager",
//   });

//   Role.create({
//     id: 9,
//     name: "STAFF",
//     brCode: "staff",
//   });

//   // Hardcoded Branches

//   Branch.create({
//     id: 1,
//     name: "Kuala Lumpur",
//     brCode: "KL",
//   });

//   Branch.create({
//     id: 2,
//     name: "Kelantan",
//     brCode: "KEL",
//   });

//   Branch.create({
//     id: 3,
//     name: "Johor",
//     brCode: "JB",
//   });

//   Branch.create({
//     id: 4,
//     name: "Penang",
//     brCode: "PEN",
//   });

//   Branch.create({
//     id: 5,
//     name: "Melaka",
//     brCode: "MEL",
//   });

//   // Hardcoded Departments

//   Dept.create({
//     id: 1,
//     name: "BI",
//     description: "Bodily Injury",
//   });

//   Dept.create({
//     id: 2,
//     name: "OD",
//     description: "Own Damage",
//   });

//   Dept.create({
//     id: 3,
//     name: "TPBI",
//     description: "Third Party Bodily Injury",
//   });

//   // Hardcoded Insurers

//   Ins.create({
//     id: 1,
//     name: "MAYBANK",
//     insCode: "MAYBANK",
//   });

//   Ins.create({
//     id: 2,
//     name: "ZURICH",
//     insCode: "ZURICH",
//   });

//   Ins.create({
//     id: 3,
//     name: "KURNIA",
//     insCode: "KURNIA",
//   });
// }
