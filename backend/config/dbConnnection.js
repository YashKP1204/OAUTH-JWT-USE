const mongoose= require("mongoose");

const DB_URL = process.env.DB_URL;
console.log(DB_URL);
const main = async()=>{
    mongoose.connect("mongodb+srv://devneufrom:O3EUOm0SAVbTsi8L@doctrack.qj9tc.mongodb.net/?retryWrites=true&w=majority&appName=docTrack");
}
module.exports = main ;