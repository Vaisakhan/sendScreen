/*Define dependencies.*/

var express=require("express");
var multer  = require('multer');
var app=express();
var done=false;
var fullfileName;


/*Configure the multer.*/

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path);
  fullfileName= file.path+file.fieldname;
  done=true;
}
}));

/*Handling routes.*/

app.get('/',function(req,res){
   res.sendfile("fileUploader.html");
   
});

app.post('/api/photo',function(req,res){
  if(done==true){
    console.log(req.files);
	res.sendfile("save.html");   
	
  }
});

/*Run the server.*/
app.listen(9900,function(){
    console.log("Working on port 9900");
});