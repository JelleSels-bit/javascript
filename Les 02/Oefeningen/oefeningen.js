// Oefening 1:
// const namen = ['alan turling', 'bden eddy', 'den erik', 'cjessica','inspiratie is op']

// console.log(`a. ${namen.length}`)

// console.log(`b. `)
// console.log(`Eerste element: ${namen[1-1]}`)
// console.log(`Derde element: ${namen[3-1]}`)
// console.log(`vijfde element: ${namen[5-1]}`)

// console.log(`c.`)
// namen.sort()
// console.log(namen)

// console.log('d.')
// const naamAdd = prompt("Geef een extra naam in")
// namen.push(naamAdd)
// console.log(namen)

// console.log('e.')
// const namenString = namen.join(";")
// console.log(namenString)

// Oefening 2 + 3:
// let getal = null;
// const getallen = [];

// do {
//   getal = prompt("Geef een getal in, of druk op enter om te stoppen: ");
//   if (!Number.isNaN(Number(getal)) && getal !== null) {
//     getallen.push(Number(getal));
//   }
// } while (getal !== null);

// let kleinste = getallen[0];
// for (let i = 1; i <= getallen.length; i++) {
//   if (getallen[i] < kleinste) {
//     kleinste = getallen[i];
//   }
// }

// let grootste = getallen[0];
// for (let i = 1; i <= getallen.length; i++) {
//   if (getallen[i] > grootste) {
//     grootste = getallen[i];
//   }
// }

// const som = getallen.reduce((acc, x) => acc + x, 0);
// const gemiddelde = som / getallen.length;
// getallen.sort((a, b) => a - b);
// let mediaan = 0;
// if (getallen.length % 2 === 0) {
//   mediaan = (getallen[getallen.length / 2]  + getallen[getallen.length / 2 - 1]  ) / 2
// } else {
//     mediaan = getallen[getallen.length / 2 - 0.5]
// }
// console.log(`Het kleinste getal is: ${kleinste}`);
// console.log(`Het grootste getal is: ${grootste}`);
// console.log(`De som van de getallen is: ${som} `);
// console.log(`Het gemiddelde van de getal is: ${gemiddelde} `);
// console.log(`De mediaan is ${mediaan}`);

// Oefening 4:
let invoer = null;
const groenten = [];
const fruit = [];
do {
  invoer = prompt(
    "Geef een fruit of groente in, of druk op enter om te stoppen: "
  );
  if (invoer === null) {
    continue;
  }
  const split = invoer.split(" ");

  if (split[0] === "g" && split.length === 2) {
    groenten.push(split[1]);
  }

  if (split[0] === "f" && split.length === 2) {
    fruit.push(split[1]);
  }
} while (invoer !== null);

console.log(groenten);
console.log(fruit);
