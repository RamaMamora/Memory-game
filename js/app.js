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


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
let card = document.getElementsByClassName("card");
function tilfaeldig(){
  let array = memoryPictureUrls
  shuffleArray(array)
  for (let index = 0; index < card.length; index++) {
    card[index].children[0].src = array[index]
  }
}


tilfaeldig()


let score = document.getElementById("score")
let nyspiller = document.getElementById("nyspiller")
let spiller1 = true 

let andenspiller = 0 
let spil = 0 
let firstImg ="";

for (let index = 0; index < card.length; index++) {
  card[index].addEventListener("click", (data) => {
    console.log();
    data.target.classList.add("active");
    if (firstImg === "") {
      firstImg = data.target;
      
    } else {
      if (data.target.children[0].src === firstImg.children[0].src) {
        console.log("Dette er et match");
        firstImg.classList.add("match")
        if (spiller1) {
          spiller1 = false
          spil += 1

        } else {
          andenspiller += 1
          spiller1 = true
        }

        console.log(firstImg)

        const check1 = document.createElement("p")
        check1.innerText ="✓"
        check1.classList.add("check")
        firstImg.appendChild(check1)

       
        const check2 = document.createElement("p")
        check2.innerText ="✓"
        check2.classList.add("check")
 
        data.target.appendChild(check2)
        data.target.classList.add("match");
        firstImg = "";

        if (document.getElementsByClassName("match").length == 12){
          confetti.start()
        } 
      } else {
        
        console.log("Dette er ikke et match");
        if (spiller1) {
          spiller1 = false
          spil -= 1

        } else {
          andenspiller -= 1
          spiller1 = true
        }

        


        // Fjern activ klassen fra de 2 valg
       
        setTimeout((firstImg) => {
          data.target.classList.remove("active");
          firstImg.classList.remove("active")
        }, "1000", firstImg);
     firstImg = ""; }
    }
    score.innerText = spil.toString()
    nyspiller.innerText = andenspiller.toString()
  });

}

function genstart(){
  confetti.remove()
  tilfaeldig()
  firstImg = ""
  spil = 0
  score.innerText = spil.toString()
  for (let index = 0; index < card.length; index++) {
    card[index].classList.remove("active", "match")
    if (card[index].children[1]) card[index].children[1].remove()
  }
  andenspiller = 0
  nyspiller.innerText = andenspiller.toString()

}

