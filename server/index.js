import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import postRoutes from "./routes/posts"; j'ai eu une erreur pcq j'ai pas mis l'extension js
// en react on peut ne pas mettre l'extension js MAIS dans le node nous devons le mettre
import postRoutes from "./routes/posts.js";
const app = express();

// it's like connection at localhost:5000/posts
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// MERN_social_media_app;

const CONNECTION_URL =
  "mongodb+srv://gs_yasin:azerty17@cluster0.fgdhg.mongodb.net/MERN_social_media_app?retryWrites=true&w=majority";
// voir si la connection fonctionne
{
  /* <username><password><dbname> */
}
// "mongodb+srv://gs_yasin:azerty17@cluster0.fgdhg.mongodb.net/MERN_social_media_app?retryWrites=true&w=majority";
// decoupler la logique de connection a mongodb pour me souvenir la prochaine fois

const PORT = process.env.PORT || 5000;
console.log("hadi la commit yap");
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));

// mongoose.set("useFindAndModify", false);
// this make  sure we dont get any warnings in the console
// mdfg
