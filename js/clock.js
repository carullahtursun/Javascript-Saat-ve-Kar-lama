
var name =prompt("isminizi girin : ");

var days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","pazar"];

document.getElementById('myName').innerHTML=name;
let a;
    let time;
    setInterval(() => {
      a = new Date();
      time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() +' '+ days[a.getDay()-1] ;
      document.getElementById('myClock').innerHTML = time;
    }, 1000);


// functions    ++++


