  mymodal.service('myService', function() {
     this.sortData = function (input) {
         input.sort(function(loc1,loc2){
                 return loc1.name>loc2.name;
             });
    };

    this.getFilterData=function(value,id,data,items){
        if(value=='category'){
            if(id== null || id== undefined){
return items;
            }
     var category= data.filter(function(obj){
          id in obj[value]
      });
      var key =Object.keys(category);
      return items.filter(function(obj){
          var eachCategory=  Object.keys(obj.category);
          return eachCategory.findIndex(function(cat){
              key.indexOf(cat)!=-1
          }) != -1

      }) ;
    }
    };

});