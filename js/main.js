//fetch api under api
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
