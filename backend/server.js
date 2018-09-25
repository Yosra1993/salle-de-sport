const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "SportProjet";

MongoClient.connect(
  mongoUrl,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base erreur");
    const db = client.db(dataBase);

    app.get("/EventPromotion", (req, res) => {
      db.collection("EventPromotion")
        .find()
        .toArray((err, data) => {
          if (err) res.send("cant fecth products");
          else res.send(data);
        });
    });

    app.post("/EventPromotion", (req, res) => {
      let new_PromotionEvent = req.body;
      db.collection("EventPromotion").insertOne(new_PromotionEvent, (err, data) => {
        if (err) res.send("cant add products");
        else res.send(data);
      });
    });

    app.put("/EventPromotion/:id", (req, res) => {
      let editePromotionEventt = req.body;
      let id = ObjectID(req.params.id);
      db.collection("EventPromotion").findOneAndUpdate(
        { _id: id },
        { $set: { ...editePromotionEventt } },
        (err, data) => {
          if (err) res.send("cant edit products");
          else res.send(data);
        }
      );
    });

    app.delete("/EventPromotion/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("EventPromotion").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete products");
        else res.send(data);
      });
    });
  }
);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});
