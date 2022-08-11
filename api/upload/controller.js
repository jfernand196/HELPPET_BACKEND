require("dotenv").config();
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

async function uploadImage(image) {
  try {
    const result = await cloudinary.uploader.upload(image);
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    fs.unlinkSync(image);
  }
}

async function uploadSingleHandler(req, res) {
  try {
    const { file } = req;
    const result = await uploadImage(file.path);
    console.log("result",result.url)
    // res.status(200).json(result.url);
    res.status(200).json({ url:result.url});
    
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  uploadSingleHandler,
};
