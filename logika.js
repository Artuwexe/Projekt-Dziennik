const imie = document.querySelector("[name=imie]");//dane
const nazwisko = document.querySelector("[name=nazwisko]");
const klasa = document.querySelector("[name=klasa]");
const rok = document.querySelector("[name=rok]");
const submit1 = document.querySelector("[name=submit1]");
const data = document.querySelector("[name=data]");
const przedmiot = document.querySelector("[name=przedmiot]");
const ocena = document.querySelector("[name=ocena]");
const waga = document.querySelector("[name=waga]");
const nauczyciel = document.querySelector("[name=nauczycior]");
const submit2 = document.querySelector("[name=submit2]");
const typ1 = document.querySelector(".typ1");//singlepage
const typ2 = document.querySelector(".typ2");
const typ3 = document.querySelector(".typ3");
const pokaz = document.querySelector(".pokaz");
const jeden = document.querySelector("#jeden");
const dwa = document.querySelector("#dwa");
const trzy = document.querySelector("#trzy");
const cztery = document.querySelector("#cztery");
const zmien = document.querySelector("[name=edit]");
const singlepage1 = document.querySelector(".singlepage1");
const singlepage2 = document.querySelector(".singlepage2");
const singlepage3 = document.querySelector(".singlepage3");
const srednia1 = document.querySelector(".sredniapl");
const srednia2 = document.querySelector(".sredniam");
const srednia3 = document.querySelector(".sredniac");
const srednia4 = document.querySelector(".sredniah");
const pol = document.querySelector(".pol");
const mat = document.querySelector(".Mat");
const chem = document.querySelector(".chem");
const hist = document.querySelector(".his");
var spr = 0;
/*var polski = new Array(15)
var matma = new Array(15)
var chemia = new Array(15)
var historia = new Array(15)*///oryginalne oceny
var polski1 = new Array(15)//oceny z wagą
var matma1 = new Array(15)
var chemia1 = new Array(15)
var historia1 = new Array(15)
var dziel1 = 0;
var dziel2 = 0;
var dziel3 = 0;
var dziel4 = 0;
//ocena.textContent = input.ocena
submit1.addEventListener("click", (e)=>{
  e.preventDefault();
  typ1.style.display= "none";
  pokaz.style.display= "block";
  jeden.innerHTML = imie.value;
  dwa.innerHTML = nazwisko.value;
  trzy.innerHTML = klasa.value;
  cztery.innerHTML = rok.value;
  spr = 1;
});
zmien.addEventListener("click", (e)=>{
  e.preventDefault();
  typ1.style.display= "block";
  pokaz.style.display= "none";
  spr = 0;
});
singlepage1.addEventListener("click", ()=>{

typ2.style.display="none";
typ3.style.display="none";
if(spr==1){
   pokaz.style.display= "block";
}
else{
  typ1.style.display="block";
}
});
singlepage2.addEventListener("click", ()=>{
typ2.style.display="block";
typ1.style.display="none";
typ3.style.display="none";
if(spr==1){
   pokaz.style.display= "none";
}
});
singlepage3.addEventListener("click", ()=>{
typ3.style.display="block";
typ2.style.display="none";
typ1.style.display="none";
if(spr==1){
   pokaz.style.display= "none";
}
const init1 = 0;
const suma1 = polski1.reduce(
  (accumulator1, currentValue1) => accumulator1 + currentValue1,
  init1
);
const dzial1 = suma1 / dziel1
srednia1.innerHTML = dzial1

const init2 = 0;
const suma2 = matma1.reduce(
  (accumulator2, currentValue2) => accumulator2 + currentValue2,
  init2
);
const dzial2 = suma2 / dziel2
srednia2.innerHTML = dzial2

const init3 = 0;
const suma3 = chemia1.reduce(
  (accumulator3, currentValue3) => accumulator3 + currentValue3,
  init3
);
const dzial3 = suma3 / dziel3
srednia3.innerHTML = dzial3

const init4 = 0;
const suma4 = historia1.reduce(
  (accumulator4, currentValue4) => accumulator4 + currentValue4,
  init4
);
const dzial4 = suma4 / dziel4
srednia4.innerHTML = dzial4
});
submit2.addEventListener
("click", (e)=>{
  e.preventDefault();
  jeden.innerHTML += imie.value;
  dwa.innerHTML += nazwisko.value;
  trzy.innerHTML += klasa.value;
  cztery.innerHTML += rok.value;
  switch(przedmiot.value){
  case "Polski":
    //polski.push(ocena.value)
    polski1.push(ocena.value*waga.value)
    dziel1+=parseInt(waga.value);
    pol.innerHTML+=ocena.value+" "
    break;
  case "Matma":
    //matma.push(ocena.value)
    matma1.push(ocena.value*waga.value)
    dziel2+=parseInt(waga.value);
    mat.innerHTML+=ocena.value+" "
    break;
  case "Chemia":
    //chemia.push(ocena.value)
    chemia1.push(ocena.value*waga.value)
    dziel3+=parseInt(waga.value);
    chem.innerHTML+=ocena.value+" "
    break;
  case "Historia":
    //historia.push(ocena.value)
    historia1.push(ocena.value*waga.value)
    dziel4+=parseInt(waga.value);
    hist.innerHTML+=ocena.value+" "
    break;
  }
});
//API
var request = new XMLHttpRequest()

request.open('GET', 'https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&current_weather=true', true)
request.onload = function () {
  var data = JSON.parse(this.response)

  document.querySelector(".pogoda").innerHTML+="<h3>Temperatura(Warszawa): "+data.current_weather.temperature+"°C</h3> <p>prędkość wiatru: "+data.current_weather.windspeed+"km/h</p>"
}

request.send()