let nextBtn = document.querySelector(".next");
let backBtn = document.querySelector(".back");
let count = 0;
let into = document.querySelector("section.into");
nextBtn.addEventListener("click", async () => {
   into.classList.add("hide");
   increasePage();
   let currLink = "https://swapi.dev/api/people/?page=" + count;
   hideCharacterList();
   showPreLoaderChracter();
   setTimeout(() => {
      hidePreLoaderChracter();
      showCharacterList();
   }, 1500);
   await fetch(currLink)
      .then((res) => res.json())
      .then((characters) => {
         let characterArr = [];
         let allClick = document.querySelectorAll("main > .container > .characters > section > ul > li");
         for (let i of characters.results) {
            characterArr.push(i);
         }
         console.log(characterArr);
         let charName1 = document.querySelector(".char1");
         charName1.innerHTML = characterArr[0].name;
         let charName2 = document.querySelector(".char2");
         charName2.innerHTML = characterArr[1].name;
         let charName3 = document.querySelector(".char3");
         charName3.innerHTML = characterArr[2].name;
         let charName4 = document.querySelector(".char4");
         charName4.innerHTML = characterArr[3].name;
         let charName5 = document.querySelector(".char5");
         charName5.innerHTML = characterArr[4].name;
         let charName6 = document.querySelector(".char6");
         charName6.innerHTML = characterArr[5].name;
         let charName7 = document.querySelector(".char7");
         charName7.innerHTML = characterArr[6].name;
         let charName8 = document.querySelector(".char8");
         charName8.innerHTML = characterArr[7].name;
         let charName9 = document.querySelector(".char9");
         charName9.innerHTML = characterArr[8].name;
         let charName10 = document.querySelector(".char10");
         charName10.innerHTML = characterArr[9].name;
         for (let y of allClick) {
            y.addEventListener("click", () => {
               hideCharacterDetails();
               showPreLoaderWorldDetails();
               showPreLoaderDetails();
               setTimeout(() => {
                  hidePreLoaderDetails();
                  hidePreLoaderWorldDetails();
                  showCharacterDetails();
                  let name = document.querySelector(".name");
                  name.innerHTML = `Name: ${characterArr[y.value].name}`;
                  let height = document.querySelector(".height");
                  height.innerHTML = `Height: ${characterArr[y.value].height}`;
                  let mass = document.querySelector(".mass");
                  mass.innerHTML = `Mass: ${characterArr[y.value].mass}`;
                  let hair = document.querySelector(".hair");
                  hair.innerHTML = `Hair: ${characterArr[y.value].hair_color}`;
                  let skin = document.querySelector(".skin");
                  skin.innerHTML = `Skin: ${characterArr[y.value].skin_color}`;
                  let eye = document.querySelector(".eye");
                  eye.innerHTML = `Eye: ${characterArr[y.value].eye_color}`;
                  let bday = document.querySelector(".bday");
                  bday.innerHTML = `Birth year: ${characterArr[y.value].birth_year}`;
                  let gender = document.querySelector(".gender");
                  gender.innerHTML = `Gender: ${characterArr[y.value].gender}`;
               }, 1500);
               fetch(characterArr[y.value].homeworld)
                  .then((res) => res.json())
                  .then((home) => {
                     console.log(home);
                     let planet = document.querySelector(".planet");
                     planet.innerText = home.name;
                     let rotation = document.querySelector(".rotation");
                     rotation.innerText = `Rotation period: ${home.rotation_period} h`;
                     let orbit = document.querySelector(".orbit");
                     orbit.innerText = `Orbit period: ${home.orbital_period} days`;
                     let diameter = document.querySelector(".diameter");
                     diameter.innerText = `Diameter: ${home.diameter} km`;
                     let gravity = document.querySelector(".gravity");
                     gravity.innerText = `Gravity: ${home.gravity} standard`;
                     let terrain = document.querySelector(".terrain");
                     terrain.innerText = `Terrain: ${home.terrain}`;
                  });
            });
         }
      });
});

backBtn.addEventListener("click", async () => {
   decreasePage();
   let currLink = "https://swapi.dev/api/people/?page=" + count;
   hideCharacterList();
   showPreLoaderChracter();
   setTimeout(() => {
      hidePreLoaderChracter();
      showCharacterList();
   }, 1500);
   let characterArr = [];
   await fetch(currLink)
      .then((res) => res.json())
      .then((characters) => {
         let allClick = document.querySelectorAll("main > .container > .characters > section > ul > li");
         for (let i of characters.results) {
            characterArr.push(i);
         }
         console.log(characterArr);
         let charName1 = document.querySelector(".char1");
         charName1.innerHTML = characterArr[0].name;
         let charName2 = document.querySelector(".char2");
         charName2.innerHTML = characterArr[1].name;
         let charName3 = document.querySelector(".char3");
         charName3.innerHTML = characterArr[2].name;
         let charName4 = document.querySelector(".char4");
         charName4.innerHTML = characterArr[3].name;
         let charName5 = document.querySelector(".char5");
         charName5.innerHTML = characterArr[4].name;
         let charName6 = document.querySelector(".char6");
         charName6.innerHTML = characterArr[5].name;
         let charName7 = document.querySelector(".char7");
         charName7.innerHTML = characterArr[6].name;
         let charName8 = document.querySelector(".char8");
         charName8.innerHTML = characterArr[7].name;
         let charName9 = document.querySelector(".char9");
         charName9.innerHTML = characterArr[8].name;
         let charName10 = document.querySelector(".char10");
         charName10.innerHTML = characterArr[9].name;
         for (let y of allClick) {
            y.addEventListener("click", () => {
               hideCharacterDetails();
               showPreLoaderWorldDetails();
               showPreLoaderDetails();
               setTimeout(() => {
                  hidePreLoaderDetails();
                  hidePreLoaderWorldDetails();
                  showCharacterDetails();
                  let name = document.querySelector(".name");
                  name.innerHTML = `Name: ${characterArr[y.value].name}`;
                  let height = document.querySelector(".height");
                  height.innerHTML = `Height: ${characterArr[y.value].height}`;
                  let mass = document.querySelector(".mass");
                  mass.innerHTML = `Mass: ${characterArr[y.value].mass}`;
                  let hair = document.querySelector(".hair");
                  hair.innerHTML = `Hair: ${characterArr[y.value].hair_color}`;
                  let skin = document.querySelector(".skin");
                  skin.innerHTML = `Skin: ${characterArr[y.value].skin_color}`;
                  let eye = document.querySelector(".eye");
                  eye.innerHTML = `Eye: ${characterArr[y.value].eye_color}`;
                  let bday = document.querySelector(".bday");
                  bday.innerHTML = `Birth year: ${characterArr[y.value].birth_year}`;
                  let gender = document.querySelector(".gender");
                  gender.innerHTML = `Gender: ${characterArr[y.value].gender}`;
                  fetch(characterArr[i.value].homeworld)
                     .then((res) => res.json())
                     .then((home) => {
                        console.log(home);
                        let planet = document.querySelector(".planet");
                        planet.innerText = home.name;
                        let rotation = document.querySelector(".rotation");
                        rotation.innerText = `Rotation period: ${home.rotation_period} h`;
                        let orbit = document.querySelector(".orbit");
                        orbit.innerText = `Orbit period: ${home.orbital_period} days`;
                        let diameter = document.querySelector(".diameter");
                        diameter.innerText = `Diameter: ${home.diameter} km`;
                        let gravity = document.querySelector(".gravity");
                        gravity.innerText = `Gravity: ${home.gravity} standard`;
                        let terrain = document.querySelector(".terrain");
                        terrain.innerText = `Terrain: ${home.terrain}`;
                     });
               }, 1500);
            });
         }
      });
});
