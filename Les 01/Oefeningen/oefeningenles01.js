// Oefeningen 8
// const massa = Number(prompt("Geef je massa in: "));
// const planeet = prompt("Op welke planeet wil je jouw gewicht berekenen?");

// massa.isInteger;
// if (Number.isInteger(massa) === false) {
//   console.log(
//     "Nummer fout"
//   );
// }
// console.log("A. Maan");
// console.log("B. Jupiter");
// console.log("C. Mars");
// console.log("D. Venus");
// console.log("E. Neptunus");

// let gewicht = 0;
// let hemelichaam = "";
// if (planeet.toUpperCase() === "A") {
//   gewicht = massa * 1.625;
//   hemelichaam = "Maan"
// } else if (planeet.toUpperCase() === "B") {
//   gewicht = massa * 25.93;
//   hemelichaam = "Jupiter"
// } else if (planeet.toUpperCase() === "C") {
//   gewicht = massa * 3.728;
//   hemelichaam = "Mars"
// } else if (planeet.toUpperCase() === "D") {
//   gewicht = massa * 8.872;
//   hemelichaam = "Venus"
// } else if (planeet.toUpperCase() === "E") {
//   gewicht = massa * 11.28;
//   hemelichaam = "Neptunus"
// } else {
//   console.log(
//     "Planeet fout"
//   );
// }
// console.log(`Jouw gewicht op ${hemelichaam} is ${gewicht} newton`)

// Oefening 9

// let check = false
// while (check === false) {
//   const voornaam = prompt("Geef je voornaam in");
//   const familienaam = prompt("Geef je familienaam in");
//   console.log(`je naam is ${voornaam} ${familienaam}`);
//   console.log();

//   check = confirm("Is dit correct?");
// }

// Oefening 10

// const getal = Number(prompt("Geef een getal in: "));
// let tekens = "";
// for (let index = 0; index < getal; index++) {
//   tekens += "+";
// }
// console.log(tekens);

// Oefening 11
// let getal = Number(prompt("Geef een getal in: "));
// let uitkomst = " ";
// while (getal < 100) {
//   uitkomst += getal + " ";
//   getal += 12;
// }

// console.log(uitkomst)

// Oefening 12
// let leeuwen = 50;
// let groeiPercentage = 1.15;
// let jaren = 0;
// let resultaat = "";

// if (confirm("wil je het aantal jaren zien?")) {
//   while (leeuwen < 1000) {
//     leeuwen = parseInt(leeuwen * groeiPercentage)
//     console.log(`${jaren}. ${leeuwen}`)
//     jaren++;
//   }
// }else
// {
//   while (leeuwen < 1000) {
//     leeuwen = parseInt(leeuwen * groeiPercentage)
//     resultaat += `${leeuwen} `
//   }
//   console.log(resultaat)
// }


// Oefening 14
// const number = Number(prompt("Geef getal:"))
// const resultaat = 0;

// MaalTafelBerekenen(number)

// function MaalTafelBerekenen(getal) {
//   for (let index = 1; index <= 10; index++) {
    
//     console.log(`${index} x ${getal} = ${index * getal} `)
    
//   }
// }

// Oefening 15
function genereerRij(start, bewerking) {
  let getal = start;
  let resultaat = "";

  while (getal < 100) {
    resultaat = resultaat + getal + " ";
    getal = bewerking(getal);
  }

  console.log(resultaat);
}



console.log("Maal 2:");
genereerRij(1, verdubbel);

console.log("Kwadraat:");
genereerRij(2, kwadrateer);

function verdubbel(n) {
  return n * 2;
}

function kwadrateer(n) {
  return n * n;
}
