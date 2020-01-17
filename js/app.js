$(function () { 
var Pokeurl="https://pokeapi.co/api/v2/";


console.log(Pokeurl)

 $.getJSON(Pokeurl).done(function(data) {
        console.log(data);
      
            });





  });
