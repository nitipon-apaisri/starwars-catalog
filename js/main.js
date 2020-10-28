//fetch api under api * concept
fetch("https://swapi.dev/api/people/?page=1")
   .then((res) => res.json())
   .then((characters) => {
      let cArr = [];
      for (let i of characters.results) {
         cArr.push(i);
      }
      document.querySelector(".load").addEventListener("click", () => {
         console.log(cArr[0]);
         fetch(characters.results[0].homeworld)
            .then((res) => res.json())
            .then((home) => {
               console.log(home);
            });
      });
   });
let redirect = async () => {
   let link = "https://swapi.dev/api/people/?page=1";
   document.querySelector(".next").addEventListener("click", () => {
      fetch(link)
         .then((res) => res.json())
         .then((pages) => {});
   });
};

//Fetch the new link and get the new link *concept
let currLink = "https://swapi.dev/api/people/?page=1";
let newLink = "";
document.querySelector(".next").addEventListener("click", async () => {
   await fetch(currLink)
      .then((res) => res.json())
      .then((link) => {
         newLink = link.next;
         currLink = newLink;
      });
   await fetch(newLink)
      .then((res) => res.json())
      .then((char) => {
         console.log(char.results);
      });
});
