const app = require("express")();

app.use(require("cors")());

app.get("/users", (req, res) => {
  console.log("users");
  return res.status(200).json({
    users: [
      { name: "Jackson Pereira da Silva" },
      { name: "Juvenal Laerte" },
      { name: "Jailson Souza" },
      { name: "Crébinho Couto" }
    ]
  });
});

app.post("/createUser", (req, res) => {
  if (req.headers.authorization === "jackson") {
    return res.status(200).json({
      token: "###666###"
    });
  } else {
    return res.status(500).json({
      message: "User not founded!"
    });
  }
});

app.listen(3001, () => console.log(`Users API listening on port 3001!`));
