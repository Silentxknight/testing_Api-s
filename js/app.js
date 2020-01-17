// $(function () { 
// var Pokeurl="https://pokeapi.co/api/v2/pokemon";

// console.log(Pokeurl);

//  $.getJSON(Pokeurl).done(function(data) {
//         console.log(data);
      
//             });





//  });
var xhr =new XMLHttpRequest();
xhr.open("GET","http://api.open-notify.org/iss-now.json");
xhr.onload=function(){
    if(xhr.readyState!=4 || xhr.status!=200) return;
    var data=JSON.parse(xhr.responseText);
   console.log(data);
   console.log(data['iss_position']);
   for(i=0;i<data['iss_position'];i++){
       
   }
   
   
  
}
xhr.send();  