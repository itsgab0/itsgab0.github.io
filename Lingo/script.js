var x = document.getElementsByClassName( "entry" ).length;

console.log(x);

document.getElementById( "numTerms" ).innerHTML += ( "<b>" + x + "</b>");

var topButton = document.getElementById( "topButton" );

window.onscroll = function() { scrollListener() };

function scrollListener() {
  
  if( document.body.scrollTop > 32 || document.documentElement.scrollTop > 32 ) {
    
    topButton.style.display = "block";
    
  } else {
    
    topButton.style.display = "none";
    
  }
  
}

function goTop() {
  
  document.body.scrollTop = 0;
  
  document.documentElement.scrollTop = 0;
  
}