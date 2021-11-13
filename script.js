var request =new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all ','true')
request.send();

request.onload=function(){

    var data=JSON.parse(request.response);

    console.log(data);
   var res= data.filter(function (element) {
   return element.name,element.region,element.subregion,element.population;
       });
      
       console.log(res);
    
  
   
}

