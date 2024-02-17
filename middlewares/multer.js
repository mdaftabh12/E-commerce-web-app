const multer = require("multer");

//==========  Image store with multer  ===========//

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    let exe =  file.originalname.slice(file.originalname.lastIndexOf('.'));
      cb(null, Date.now() + exe);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;