const {Router} = require('express');
const multer = require('multer');
const router = Router();

const { uploadSingleHandler} = require('./controller')

const upload = multer({dest: './temp'});

router.post('/image', upload.single('file'), uploadSingleHandler)

module.exports = router;