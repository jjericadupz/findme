
function getLocation() {
  if (navigator.geolocation) {            
          navigator.geolocation.getCurrentPosition(showPosition);
  } 
} 

function showPosition(position) {
    
  fetch("/", 
    { 
    method: "POST", 
    body: JSON.stringify({ 
    //userId: 1, 
    loc: "https:"+"/"+"/"+"www.google.com/maps/place/" + position.coords.latitude + "+" + position.coords.longitude, 
    completed: false 
    }), 
        headers: { 
        "Content-type": "application/json; charset=UTF-8" 
                 }
    });
}

 
 
 

