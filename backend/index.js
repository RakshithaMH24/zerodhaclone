require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const { HoldingsModel } = require('./model/HoldingsModel');
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
 
// app.get("/addHoldings",async(req,res)=>{
//   let tempHoldings=[

  //   {
  //   name: "BHARTIARTL",
  //   qty: 2,
  //   avg: 538.05,
  //   price: 541.15,
  //   net: "+0.58%",
  //   day: "+2.99%",
  // },
   
  // {
  //   name: "WIPRO",
  //   qty: 4,
  //   avg: 489.3,
  //   price: 577.75,
  //   net: "+18.08%",
  //   day: "+0.32%",
  // },
//   ];
//   tempHoldings.forEach((item)=>{
//     let newHolding = new HoldingsModel({
//   name:item.name,
//   qty:item.qty,
//   avg:item.avg,
//   price:item.price,
//   net:item.day,
//   day:item.day ,
//     });

//     newHolding.save();
//   });
//   res.send("Holdings added successfully!");
// });

app.get("/allHoldings",async (req , res) => {let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.listen(PORT,()=>{
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB start!");
});

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.use(cors())

mongoose.connect("")