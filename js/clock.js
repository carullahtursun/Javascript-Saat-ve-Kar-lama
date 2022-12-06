
var name =prompt("isminizi girin : ");

document.getElementById('myName').innerHTML=name;
let a;
    let time;
    setInterval(() => {
      a = new Date();
      time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
      document.getElementById('myClock').innerHTML = time;
    }, 1000);


