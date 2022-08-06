require('dotenv').config();
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
// cloudinary.config({ 
//     cloud_name: 'fullstack-juan-buitrago', 
//     api_key: '416476475935711', 
//     api_secret: 'a9OT57bQCgLpUE0E7AmbesDs5bg',
//     secure: true
//   });

async function uploadImage(image) {
    try{
        const result = await cloudinary.uploader.upload(image);
        console.log('image_example',result.url);
        } catch(err) {
            console.log(err);
        }
    }

uploadImage('./moto.jpg');