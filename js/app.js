/*
  For at aktivere et kort, tilføj en css class med navnet active
  eks. object.classList.add("active"); . men husk også at fjerne class hvis 
  kortet ikke matcher. .classList.remove("active");
*/

// Step 1. Tilføj click event på alle kort holder elemente <figure>.
// Step 2. Tilføj check om 2 billeder som er aktive matcher.

// Ekstra opgaver.
// 1. Indbyg en score som give + point ved korret match, og - point ved forkert.
// 2. Indbyg en reset knap så spillet kan genstrate.
// 3. Udskriv billeder i tilfældig rækkefølge.
/*
eks ved at bruge en array:
const memoryPictureUrls = [
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
];
*/
// 4. Når spillet er forbi, brug confetti.js til at vise confetti på skærmen. Mere info her : https://github.com/abelmoricz/abelmoricz.github.io/tree/9eac02160de7bb57170441a441db96b36e8341d8/confetti.js-master




let card = document.getElementsByClassName("card");

let firstImg ="";

for (let index = 0; index < card.length; index++) {
  card[index].addEventListener("click", (data) => {
    console.log();

    if (firstImg === "") {
      firstImg = data.target;
      data.target.classList.add("active");
    } else {
      if (data.target.children[0].src === firstImg.children[0].src) {
        console.log("Dette er et match");
        data.target.classList.add("active");
        firstImg.classList.add("match")
        data.target.classList.add("match");
        firstImg = "";
      } else {
        firstImg = "";
        console.log("Dette er ikke et match");


        // Fjern activ klassen fra de 2 valg
       
        setTimeout(() => {
          for (let i = 0; i < card.length; i++) {
            card[i].classList.remove("active")
          }
        }, "1000");
      }
    }
  });
}
