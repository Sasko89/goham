const e = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fileUpload = require('express-fileupload')
const path = require('path')
const {getAllHamsters, search, addHamster} = require('./database.js');
const fs = require('fs');
// Middleware
app.use(express.static(__dirname + "/../build"));
// app.use(express.static('Server'))
app.use(fileUpload())
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json());




// Routes

app.get("/hamsters", (req, res) => {
  let urlAdded = []
    getAllHamsters(dataOrError => {
      urlAdded =  dataOrError.map(item => {item.imgUrl = `${__dirname}/assets/${item.imgName}`;return item;})
    res.send(urlAdded)
    
  });
});

app.get("/hamstersPhotos", (req, res) => {
  const obj = req.query 
  const imageName = obj[Object.keys(obj)[0]]
  console.log('what is the req????????' , obj)
   const pathToImage = path.join(__dirname, '../Server/assets', `${imageName}`)
    // res.sendFile();
    fs.readFile( 
      `${pathToImage}`, 'base64', 
      (err, base64Image) => { 
        // 2. Create a data URL 
        const dataUrl = `data:image/jpeg;base64, ${base64Image}` 
        return res.send(`${dataUrl}`); 
      } 
    ); 

});


app.get("/battle", (req, res) => {
    res.send('battle')
  //     console.log('test',req.query.id)
  //     deleteBoat(req.query.id, dataOrError => {
  //     res.send(dataOrError)
  //   });
});

app.get("/result/:id", (req, res) => {
    res.send('resutl')
  //   console.log(req.body.params)
  // 	addBoat(req.body.params, dataOrError => {
  // 		res.send(dataOrError)
  // 	})
});

app.get("/stats", (req, res) => {
    res.send('stats')
  //   console.log(req.body.params)
  // 	addBoat(req.body.params, dataOrError => {
  // 		res.send(dataOrError)
  // 	})
});

app.post("/upload", (req, res) => {
  
  addHamster(req.body.params, dataOrError => {
    res.send(dataOrError)
  })
});

app.post("/upload/photo", (req, res) => {


    const file = req.files.file;
    file.mv(`${__dirname}/assets/${file.name}`, err =>{
      if(err){
        console.error(err)
        return res.status(500).send(err)
      }
      res.json({fileName: file.name, filePath: `/assets/${file.name}`});
    });

  });
app.get("/search", (req, res) => {

  search(req.query, dataOrError => {
  	res.send(dataOrError)
  })
});

app.listen(port, () => console.log("Server is listening on port " + port));
