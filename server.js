var express=require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app=express();
var path = require('path');

app.set('view engine','ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use('/public',express.static('public'));

app.use(function(req,res,next){
	//CORS= origin: Access-Control-Allow-Origin, request  server ip,,,  ; header: contect-type,...., methods: get post
	res.header('*');		
	//res.header('Access-Control-Allow-Origin','*');
	next();
});

app.post('/userDetails',urlencodedParser,function(req,res){
  var receive= JSON.parse(req.body);
  var dataItems =[
	{
		name: 'venue 1'
		, url:''
		, image:''
		,category:[
		{1:[1,2,3]}
    ,{
		2:[]
    }
		]
		, marks:1.5
         ,price:30
	}
  
	,	
  {
		name: 'venue 2'
		, url:''
		, image:''
		,category:[]
		, marks:0
        ,price:20
	}
  
	];
	res.json(receive);
});

app.get('/',function(req,res){
	home(req,res);
});

function home(req,res){
    
res.sendFile(path.join(__dirname + '/index.html'));

}

app.listen(8080);
console.log('Express server start at port 8080');