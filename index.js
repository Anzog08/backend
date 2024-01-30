import { readFile, readFileSync } from "fs";
import { writeFile } from "node:fs/promises";
import fs from "fs";

import http from "http";
// import mock from "./mock.json" assert { type: "json" };
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";

const port = 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// const app = express();

// app.use(express.json());

// dotenv.config();

// const filePath = "/Users/23LP5619/Desktop/backend/users.json";

// app.get("/", async (req, res) => {
//   try {
//     access(filePath);
//     res.sendFile(filePath);
//     res.status(200).sendFile(filePath);
//   } catch (err) {
//     res.status(404).send("not found");
//   }
// });

// app.delete("/", (req, res) => {
//   if (!filePath) {
//     res.send("file already deleted");
//   } else {
//     fs.unlinkSync(filePath);
//     res.send("deleted");
//   }
// });

// // json array nemeh

// app.post("/signup", (req, res) => {
//   try {
//     const { username, email } = req.body;
//     const users = JSON.parse(readFileSync(filePath, "utf-8"));

//     if (!username || !email) {
//       res.status(400).send({ msg: "Bad request." });
//     } else if (users.hereglegch.find((el) => el.username === username)) {
//       res.status(400).send({ msg: "user already existed" });
//       return;
//     } else {
//       users.hereglegch.push({ username, email });

//       writeFile(filePath, JSON.stringify(users));

//       res.status(201).send("successfully created");
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // json arrayg replace hiih

// const ReadFile = async () => {
//   try {
//     const oldUsers = await fs.readFileSync("./users.json", "utf-8");
//     return oldUsers;
//   } catch (err) {
//     return null;
//   }
// };

// app.post("/update", async (req, res) => {
//   const { username, email: upEmail } = req.body;
//   const allUsers = await ReadFile();
//   const { users } = JSON.parse(allUsers);
//   const correctUser = users.find(({ email }) => {
//     if (email === upEmail) {
//       return true;
//     }
//   });

//   correctUser.username = username;
//   await writeFile("./users.json", JSON.stringify({ users }));
//   res.send("updated");
// });

//user create with id must be unique
// user-n id-gaaraa note create
//user-n id gaar ene user-n buh note-g avch ireh
