mymodal.factory('myFactory', function(myService) {
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

var dataLocations=[
    {id:1,name:"Hyderabad"}
    ,{id:2,name:"Bangalore"}
    ,{id:3,name:"Delhi"}
];

var dataCategory=[
    {id:1,name:"Books"}
    ,{id:2,name:"Movie"}
    ,{id:3,name:"Travel"}
];

var baseUrl='http://127.0.0.1:8080/api/';
    return {
        getItems: function() {
            return dataItems;
        },
         getLocation :function(){
             myService.sortData(dataLocations);

             return dataLocations;
         },
           getCategory :function(){
             myService.sortData(dataCategory);
             return dataCategory;
         },
         getBaseUrl:function(){
            return baseUrl;
         }

    };

   
});