//importation de mongoose
const mongoose = require('mongoose');
//création de la fonction qui va connecter le serveur à la base de données
const connect = async () => {
     try {
        await mongoose.connect(process.env.db);
        console.log("database is connected.")
     } catch (error) {
       console.log(Error);
    }
   };

   module.exports = connect;