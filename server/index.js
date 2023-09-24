// -----------------------API / JSON modules -----------------------------------


// const http = require('http');
// const fs = require('fs');
// // const file = ;
// const server = http.createServer((req,res)=>{
//   if(req.url=='/') res.end("Home page");
//   if(req.url=='/about') res.end("About page");
//   if(req.url=='/api'){
//     fs.readFile("./bio.json","utf-8",(err,data)=>{
//       if(err)console.log(err);
//       else{
//         let dataa = JSON.parse(data);
//         console.log(data);
//         res.end(dataa[0].first_name);
//       }
//     })
//   }
// })

// server.listen(8000,125.0,()=>{
//   console.log("Server is working properly");
// })
// -----------------Events module-----------------------------------------------------------------------

// const Event = require('events');

// const event = new Event();

// event.on("MeAagya",(arg,arg2)=>{
//   console.log(`Me aagyaaa yrrr yaha , sath me ${arg} or ${arg2} ko bhi leke aaya hu`);
// });

// event.emit("MeAagya",'argument1','argument2');

// ----- Stream using FS-----------------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');


// const server = http.createServer();
// server.on('request',(req,res)=>{
//   const stream = fs.createReadStream("./data.txt");
//   stream.on('data',(chunk)=>{
//     res.write(chunk);
//   })
//   stream.on('end',()=>{
//     res.end();
//   })
// })

// server.listen(8000,"127.0.0.1");

// practise again--------

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer();
// server.on('request',(req,res)=>{
//   const stream = fs.createReadStream('./data.txt');

  
 
//   stream.on('data',(chunk)=>{
//     res.write(chunk);
//   })
//   stream.on('end',()=>{
//     res.end();
//       })}
// )
// server.listen(8000,"127.0.1",()=>{
//   console.log("Server is loaded successfully")
// })


// --------PIPE method in stream-----------------

const http =  require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request',(req,res)=>{
  if(req.url=="/"){
    const stream1 = fs.createReadStream
    res.end("Home page");
  }
  else if(req.url=="/about"){
  const Rstream = fs.createReadStream('./data.txt');
  Rstream.pipe(res);}
})
server.listen(8000,"127.0.0.1")