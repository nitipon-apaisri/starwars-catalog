const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");
let count = 0;
const into = document.querySelector("section.into");
nextBtn.addEventListener("click", async () => {
   if (count == 8) {
      console.log("max");
      decreasePage();
      setTimeout(() => {
         location.reload();
      }, 3000);
      alert("this page will refresh within 3 sex");
   }
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
      .then(async (characters) => {
         let characterArr = [];
         const allClick = document.querySelectorAll("main > .container > .characters > section > ul > li");
         for (let i of characters.results) {
            characterArr.push(i);
         }
         console.log(characterArr);
         const charName1 = document.querySelector(".char1");
         charName1.innerHTML = characterArr[0].name;
         const charName2 = document.querySelector(".char2");
         charName2.innerHTML = characterArr[1].name;
         const charName3 = document.querySelector(".char3");
         charName3.innerHTML = characterArr[2].name;
         const charName4 = document.querySelector(".char4");
         charName4.innerHTML = characterArr[3].name;
         const charName5 = document.querySelector(".char5");
         charName5.innerHTML = characterArr[4].name;
         const charName6 = document.querySelector(".char6");
         charName6.innerHTML = characterArr[5].name;
         const charName7 = document.querySelector(".char7");
         charName7.innerHTML = characterArr[6].name;
         const charName8 = document.querySelector(".char8");
         charName8.innerHTML = characterArr[7].name;
         const charName9 = document.querySelector(".char9");
         charName9.innerHTML = characterArr[8].name;
         const charName10 = document.querySelector(".char10");
         charName10.innerHTML = characterArr[9].name;
         //-----------
         let allWorld = [];
         for (let i = 0; i < 10; i++) {
            await fetch(characterArr[i].homeworld)
               .then((res) => res.json())
               .then((home) => {
                  allWorld.push(home);
               });
         }
         console.log(allWorld);
         for (let y of allClick) {
            y.addEventListener("click", () => {
               hideCharacterDetails();
               showPreLoaderWorldDetails();
               showPreLoaderDetails();
               setTimeout(() => {
                  hidePreLoaderDetails();
                  hidePreLoaderWorldDetails();
                  showCharacterDetails();
                  const name = document.querySelector(".name");
                  name.innerHTML = `Name: ${characterArr[y.value].name}`;
                  const height = document.querySelector(".height");
                  height.innerHTML = `Height: ${characterArr[y.value].height}`;
                  const mass = document.querySelector(".mass");
                  mass.innerHTML = `Mass: ${characterArr[y.value].mass}`;
                  const hair = document.querySelector(".hair");
                  hair.innerHTML = `Hair: ${characterArr[y.value].hair_color}`;
                  const skin = document.querySelector(".skin");
                  skin.innerHTML = `Skin: ${characterArr[y.value].skin_color}`;
                  const eye = document.querySelector(".eye");
                  eye.innerHTML = `Eye: ${characterArr[y.value].eye_color}`;
                  const bday = document.querySelector(".bday");
                  bday.innerHTML = `Birth year: ${characterArr[y.value].birth_year}`;
                  const gender = document.querySelector(".gender");
                  gender.innerHTML = `Gender: ${characterArr[y.value].gender}`;
                  const planet = document.querySelector(".planet");
                  const rotation = document.querySelector(".rotation");
                  const orbit = document.querySelector(".orbit");
                  const diameter = document.querySelector(".diameter");
                  const gravity = document.querySelector(".gravity");
                  const terrain = document.querySelector(".terrain");
                  planet.innerText = allWorld[y.value].name;
                  rotation.innerText = `Rotation period: ${allWorld[y.value].rotation_period} h`;
                  orbit.innerText = `Orbit period: ${allWorld[y.value].orbital_period} days`;
                  diameter.innerText = `Diameter: ${allWorld[y.value].diameter} km`;
                  gravity.innerText = `"Gravity: ${allWorld[y.value].gravity} standard`;
                  terrain.innerText = `Terrain: ${allWorld[y.value].terrain}`;
               }, 1500);
            });
         }
      });
});

backBtn.addEventListener("click", async () => {
   if (count == 0) {
      console.log("hi");
   } else {
      decreasePage();
      let currLink = "https://swapi.dev/api/people/?page=" + count;
      hideCharacterList();
      showPreLoaderChracter();
      setTimeout(() => {
         hidePreLoaderChracter();
         showCharacterList();
      }, 1500);
      await fetch(currLink)
         .then((res) => res.json())
         .then(async (characters) => {
            let characterArr = [];
            let allClick = document.querySelectorAll("main > .container > .characters > section > ul > li");
            for (let i of characters.results) {
               characterArr.push(i);
            }
            console.log(characterArr);
            const charName1 = document.querySelector(".char1");
            charName1.innerHTML = characterArr[0].name;
            const charName2 = document.querySelector(".char2");
            charName2.innerHTML = characterArr[1].name;
            const charName3 = document.querySelector(".char3");
            charName3.innerHTML = characterArr[2].name;
            const charName4 = document.querySelector(".char4");
            charName4.innerHTML = characterArr[3].name;
            const charName5 = document.querySelector(".char5");
            charName5.innerHTML = characterArr[4].name;
            const charName6 = document.querySelector(".char6");
            charName6.innerHTML = characterArr[5].name;
            const charName7 = document.querySelector(".char7");
            charName7.innerHTML = characterArr[6].name;
            const charName8 = document.querySelector(".char8");
            charName8.innerHTML = characterArr[7].name;
            const charName9 = document.querySelector(".char9");
            charName9.innerHTML = characterArr[8].name;
            const charName10 = document.querySelector(".char10");
            charName10.innerHTML = characterArr[9].name;
            //-----------
            let allWorld = [];
            for (let i = 0; i < 10; i++) {
               await fetch(characterArr[i].homeworld)
                  .then((res) => res.json())
                  .then((home) => {
                     allWorld.push(home);
                  });
            }
            console.log(allWorld);
            for (let y of allClick) {
               y.addEventListener("click", () => {
                  hideCharacterDetails();
                  showPreLoaderWorldDetails();
                  showPreLoaderDetails();
                  setTimeout(() => {
                     hidePreLoaderDetails();
                     hidePreLoaderWorldDetails();
                     showCharacterDetails();
                     const name = document.querySelector(".name");
                     name.innerHTML = `Name: ${characterArr[y.value].name}`;
                     const height = document.querySelector(".height");
                     height.innerHTML = `Height: ${characterArr[y.value].height}`;
                     const mass = document.querySelector(".mass");
                     mass.innerHTML = `Mass: ${characterArr[y.value].mass}`;
                     const hair = document.querySelector(".hair");
                     hair.innerHTML = `Hair: ${characterArr[y.value].hair_color}`;
                     const skin = document.querySelector(".skin");
                     skin.innerHTML = `Skin: ${characterArr[y.value].skin_color}`;
                     const eye = document.querySelector(".eye");
                     eye.innerHTML = `Eye: ${characterArr[y.value].eye_color}`;
                     const bday = document.querySelector(".bday");
                     bday.innerHTML = `Birth year: ${characterArr[y.value].birth_year}`;
                     const gender = document.querySelector(".gender");
                     gender.innerHTML = `Gender: ${characterArr[y.value].gender}`;
                     const planet = document.querySelector(".planet");
                     const rotation = document.querySelector(".rotation");
                     const orbit = document.querySelector(".orbit");
                     const diameter = document.querySelector(".diameter");
                     const gravity = document.querySelector(".gravity");
                     const terrain = document.querySelector(".terrain");
                     planet.innerText = allWorld[y.value].name;
                     rotation.innerText = `Rotation period: ${allWorld[y.value].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${allWorld[y.value].orbital_period} days`;
                     diameter.innerText = `Diameter: ${allWorld[y.value].diameter} km`;
                     gravity.innerText = `"Gravity: ${allWorld[y.value].gravity} standard`;
                     terrain.innerText = `Terrain: ${allWorld[y.value].terrain}`;
                  }, 1500);
               });
            }
         });
   }
});
