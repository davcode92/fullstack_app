//importation de express
const express = require("express");
const connect = require("./config/connectDB");
const User = require("./models/User");
require("dotenv").config({ path: "./config/.env"});

//Assigner toutes les methodes(fonctionalités) express à une variable
const app = express();

app.use(express.json())

connect();

//CRUD
//1-AJOUTER LES DONNEES A LA BASE DE DONNEES:POST
app.post("/add",async (req,res) => {
    const { fullName, phone, email} = req.body;
//req.body est la partie de la request qui va contenir les données dans la partie frontend
try {
  const newUser = new User({
   fullName,
   email,
   phone
  })
  await newUser.save();
  res.send(newUser);
} catch (error) {
 console.log(error);
}
});

//OBTENIR DES DONNEES:GET
app.get("/get",async (req, res) => {
try {
  const users = await User.find();
  res.send(users);
} catch (error) {
console.log(error);
}
});

//OBTENIR UNE DONNES SPECIFIQUES DANS LA BASE DE DONNEES
app.get("/get/:_id",async (req, res) => {
  try {
    const oneUser = await User.findById(req.params._id);
    res.send(oneUser);
  } catch (error) {
  console.log(error);
  }
  });
//MODIFIER UN UTILISATEUR SPECIFIQUE
app.put("/update/:_id",async (req, res) => {
  try {
    const editedUser = await User.findByIdAndUpdate(
      req.params._id, 
      {
      ...req.body,
    },
     {new: true}
   );
    res.send(editedUser);
    } catch (error) {
     console.log(error);
   }
  });

//SUPRIMER UN UTILISATEUR SPECIFIQUE

app.delete("/delete/:_id",async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params._id);
    res.send("User Deleted.");
    } catch (error) {
     console.log(error);
   }
  });




//Assigner un port au Backend pour notre server
PORT = process.env.port || 5000;

//Création du server
 
app.listen(PORT, (err) => 
    err ? console.log(err) :console.log(`Server running on port ${PORT}`)
  );