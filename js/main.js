let currLink = "https://swapi.dev/api/people/?page=1";
let newLink = "";
const allNameList = document.querySelectorAll(".characters > section > ul > li");
const allSubDetailsList = document.querySelectorAll(".details > .sub-list > ul > li");
const homeworldInfo = document.querySelector(".planet-info");
const speciesInfo = document.querySelector(".species-info");
const vehicleInfo = document.querySelector(".vehicle-info");
let defaultData = () => {
   fetch(currLink)
      .then((res) => res.json())
      .then((char) => {
         let characterArr = [];
         for (let i of char.results) {
            characterArr.push(i);
         }
         hideCharacterList();
         showPreLoaderChracter();
         setTimeout(() => {
            hidePreLoaderChracter();
            showCharacterList();
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
         }, 1500);
         for (let i of allNameList) {
            i.addEventListener("click", function (event) {
               hideCharacterDetails();
               showPreLoaderDetails();
               setTimeout(() => {
                  hidePreLoaderDetails();
                  showCharacterDetails();
                  let name = document.querySelector(".name");
                  name.innerHTML = "Name: " + characterArr[i.value].name;
                  let height = document.querySelector(".height");
                  height.innerHTML = "Height: " + characterArr[i.value].height;
                  let mass = document.querySelector(".mass");
                  mass.innerHTML = "Mass: " + characterArr[i.value].mass;
                  let hair = document.querySelector(".hair");
                  hair.innerHTML = "Hair: " + characterArr[i.value].hair_color;
                  let skin = document.querySelector(".skin");
                  skin.innerHTML = "Skin: " + characterArr[i.value].skin_color;
                  let eye = document.querySelector(".eye");
                  eye.innerHTML = "Eye: " + characterArr[i.value].eye_color;
                  let bday = document.querySelector(".bday");
                  bday.innerHTML = "Birth year: " + characterArr[i.value].birth_year;
                  let gender = document.querySelector(".gender");
                  gender.innerHTML = "Gender: " + characterArr[i.value].gender;
                  for (let y of allSubDetailsList) {
                     y.addEventListener("click", () => {
                        if (y.value == "0") {
                           fetch(characterArr[i.value].homeworld)
                              .then((res) => res.json())
                              .then((home) => {
                                 console.log(home);
                                 showPreLoaderSubDetails();
                                 setTimeout(() => {
                                    hidePreLoaderSubDetails();
                                    let planet = document.querySelector(".planet");
                                    planet.innerText = home.name;
                                    let rotation = document.querySelector(".rotation");
                                    rotation.innerHTML = "Rotation period: " + home.rotation_period + " h";
                                    let orbit = document.querySelector(".orbit");
                                    orbit.innerText = "Orbit period: " + home.orbital_period + " days";
                                    let diameter = document.querySelector(".diameter");
                                    diameter.innerText = "Diameter: " + home.diameter + " km";
                                    let gravity = document.querySelector(".gravity");
                                    gravity.innerText = "Gravity: " + home.gravity + " standard";
                                    let terrain = document.querySelector(".terrain");
                                    terrain.innerText = "Terrain: " + home.terrain;
                                 }, 1500);
                              });
                        } else if (y.value == "1") {
                           fetch(characterArr[i.value].species)
                              .then((res) => res.json())
                              .then((h) => {
                                 console.log(h);
                              });
                        } else if (y.value == "2") {
                           fetch(characterArr[i.value].vehicles[0])
                              .then((res) => res.json())
                              .then((vehicle) => {
                                 console.log(vehicle);
                              });
                        } else if (y.value == "3") {
                           console.log(3);
                        } else {
                           console.error(404);
                        }
                     });
                  }
               }, 1500);
            });
         }
      });
};
defaultData();
let nextBtn = document.querySelector(".next");
let backBtn = document.querySelector(".back");
let count = 1;
nextBtn.addEventListener("click", async () => {
   if (count >= 8) {
      count = 1;
      currLink = "https://swapi.dev/api/people/?page=1";
   } else {
      increasePage();
      hideCharacterList();
      showPreLoaderChracter();
      setTimeout(() => {
         hidePreLoaderChracter();
         showCharacterList();
      }, 1500);
      await fetch(currLink)
         .then((res) => res.json())
         .then((link) => {
            newLink = link.next;
            currLink = newLink;
         });
      let characterArr = [];
      await fetch(currLink)
         .then((res) => res.json())
         .then((characters) => {
            for (let i of characters.results) {
               characterArr.push(i);
            }
            console.log(characterArr);
            let charName1 = document.querySelector(".char1");
            charName1.innerHTML = characters.results[0].name;
            let charName2 = document.querySelector(".char2");
            charName2.innerHTML = characters.results[1].name;
            let charName3 = document.querySelector(".char3");
            charName3.innerHTML = characters.results[2].name;
            let charName4 = document.querySelector(".char4");
            charName4.innerHTML = characters.results[3].name;
            let charName5 = document.querySelector(".char5");
            charName5.innerHTML = characters.results[4].name;
            let charName6 = document.querySelector(".char6");
            charName6.innerHTML = characters.results[5].name;
            let charName7 = document.querySelector(".char7");
            charName7.innerHTML = characters.results[6].name;
            let charName8 = document.querySelector(".char8");
            charName8.innerHTML = characters.results[7].name;
            let charName9 = document.querySelector(".char9");
            charName9.innerHTML = characters.results[8].name;
            let charName10 = document.querySelector(".char10");
            charName10.innerHTML = characters.results[9].name;
            for (let i of allNameList) {
               i.addEventListener("click", () => {
                  hideCharacterDetails();
                  showPreLoaderDetails();
                  setTimeout(() => {
                     hidePreLoaderDetails();
                     showCharacterDetails();
                     let name = document.querySelector(".name");
                     name.innerHTML = "Name: " + characters.results[i.value].name;
                     let height = document.querySelector(".height");
                     height.innerHTML = "Height: " + characters.results[i.value].height;
                     let mass = document.querySelector(".mass");
                     mass.innerHTML = "Mass: " + characters.results[i.value].mass;
                     let hair = document.querySelector(".hair");
                     hair.innerHTML = "Hair: " + characters.results[i.value].hair_color;
                     let skin = document.querySelector(".skin");
                     skin.innerHTML = "Skin: " + characters.results[i.value].skin_color;
                     let eye = document.querySelector(".eye");
                     eye.innerHTML = "Eye: " + characters.results[i.value].eye_color;
                     let bday = document.querySelector(".bday");
                     bday.innerHTML = "Birth year: " + characters.results[i.value].birth_year;
                     let gender = document.querySelector(".gender");
                     gender.innerHTML = "Gender: " + characters.results[i.value].gender;
                  }, 1500);
               });
            }
         });
   }
});

backBtn.addEventListener("click", async () => {
   decreasePage();
   hideCharacterList();
   showPreLoaderChracter();
   setTimeout(() => {
      hidePreLoaderChracter();
      showCharacterList();
   }, 1500);
   await fetch(currLink)
      .then((res) => res.json())
      .then((link) => {
         if (count <= 0) {
            increasePage();
            currLink = "https://swapi.dev/api/people/?page=1";
         } else {
            newLink = link.previous;
            currLink = newLink;
         }
      });
   let characterArr = [];
   await fetch(currLink)
      .then((res) => res.json())
      .then((characters) => {
         for (let i of characters.results) {
            characterArr.push(i);
         }
         console.log(characterArr);
         let charName1 = document.querySelector(".char1");
         charName1.innerHTML = characters.results[0].name;
         let charName2 = document.querySelector(".char2");
         charName2.innerHTML = characters.results[1].name;
         let charName3 = document.querySelector(".char3");
         charName3.innerHTML = characters.results[2].name;
         let charName4 = document.querySelector(".char4");
         charName4.innerHTML = characters.results[3].name;
         let charName5 = document.querySelector(".char5");
         charName5.innerHTML = characters.results[4].name;
         let charName6 = document.querySelector(".char6");
         charName6.innerHTML = characters.results[5].name;
         let charName7 = document.querySelector(".char7");
         charName7.innerHTML = characters.results[6].name;
         let charName8 = document.querySelector(".char8");
         charName8.innerHTML = characters.results[7].name;
         let charName9 = document.querySelector(".char9");
         charName9.innerHTML = characters.results[8].name;
         let charName10 = document.querySelector(".char10");
         charName10.innerHTML = characters.results[9].name;
         for (let i of allNameList) {
            i.addEventListener("click", () => {
               hideCharacterDetails();
               showPreLoaderDetails();
               setTimeout(() => {
                  hidePreLoaderDetails();
                  showCharacterDetails();
                  let name = document.querySelector(".name");
                  name.innerHTML = "Name: " + characters.results[i.value].name;
                  let height = document.querySelector(".height");
                  height.innerHTML = "Height: " + characters.results[i.value].height;
                  let mass = document.querySelector(".mass");
                  mass.innerHTML = "Mass: " + characters.results[i.value].mass;
                  let hair = document.querySelector(".hair");
                  hair.innerHTML = "Hair: " + characters.results[i.value].hair_color;
                  let skin = document.querySelector(".skin");
                  skin.innerHTML = "Skin: " + characters.results[i.value].skin_color;
                  let eye = document.querySelector(".eye");
                  eye.innerHTML = "Eye: " + characters.results[i.value].eye_color;
                  let bday = document.querySelector(".bday");
                  bday.innerHTML = "Birth year: " + characters.results[i.value].birth_year;
                  let gender = document.querySelector(".gender");
                  gender.innerHTML = "Gender: " + characters.results[i.value].gender;
               }, 1500);
            });
         }
      });
});
