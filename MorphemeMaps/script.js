//console.log(data);

function getText (i) {
  
  var strReturn = "";
  
  for ( let j = 0; j < data[i].native.length; j++ ) {
    
    strReturn += "<span style='color:";
    strReturn += colours[ j % colours.length ];
    strReturn += ";'>";
    strReturn += data[i].native[j];
    strReturn += "</span>";
    
  }
  
  if( data[i].hasOwnProperty('transliteration') ) {
    
    strReturn += "</td></tr><tr style='background-color: white;'><td colspan='3'>";
    
    for ( let j = 0; j < data[i].transliteration.length; j++ ) {
 
      strReturn += "<span style='color:";
      strReturn += colours[ j % colours.length ];
      strReturn += ";'>";
      strReturn += data[i].transliteration[j];
      strReturn += "</span>";
    
    }
    
  }

  strReturn += "</td></tr><tr style='background-color: white;'><td colspan='3'>";
  
  for ( let j = 0; j < data[i].english.length; j++ ) {
    
    strReturn += "<span style='color:";
    strReturn += colours[ data[i].englishMap[j] % colours.length ];
    strReturn += ";'>";
    strReturn += data[i].english[j] + "</span>";
    
  }
  
  return strReturn;
  
}

const colours = ["red", "orange", "lime", "green", "tomato", "blue", "maroon", "fuchsia", "blueviolet", "orchid", "purple", "seagreen", "black", "darksalmon", "teal", "palegreen", "indigo"];

for ( let i = 0; i < data.length; i++ ) {
  
  document.getElementById("morphemeMapsTableBlock").innerHTML += ( "<table><tr><th style='text-align: left; padding-left: 8px;'>" + data[i].code.toUpperCase() + "</th><th style='padding-left: 8px;'>" + data[i].language + "</th><th style='text-align: right; padding-right: 8px;'>" + data[i].creator + "</th></tr><tr style='background-color: white;'><td colspan='3'>" + getText(i) + "</td></tr></table>");
  
}