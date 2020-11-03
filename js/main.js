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
         //-----------
         let homeWorld0 = [];
         fetch(characterArr[0].homeworld)
            .then((res) => res.json())
            .then((home0) => {
               homeWorld0.push(home0);
            });
         let homeWorld1 = [];
         fetch(characterArr[1].homeworld)
            .then((res) => res.json())
            .then((home1) => {
               homeWorld1.push(home1);
            });
         let homeWorld2 = [];
         fetch(characterArr[2].homeworld)
            .then((res) => res.json())
            .then((home2) => {
               homeWorld2.push(home2);
            });
         let homeWorld3 = [];
         fetch(characterArr[3].homeworld)
            .then((res) => res.json())
            .then((home3) => {
               homeWorld3.push(home3);
            });
         let homeWorld4 = [];
         fetch(characterArr[4].homeworld)
            .then((res) => res.json())
            .then((home4) => {
               homeWorld4.push(home4);
            });
         let homeWorld5 = [];
         fetch(characterArr[5].homeworld)
            .then((res) => res.json())
            .then((home5) => {
               homeWorld5.push(home5);
            });
         let homeWorld6 = [];
         fetch(characterArr[6].homeworld)
            .then((res) => res.json())
            .then((home6) => {
               homeWorld6.push(home6);
            });
         let homeWorld7 = [];
         fetch(characterArr[7].homeworld)
            .then((res) => res.json())
            .then((home7) => {
               homeWorld7.push(home7);
            });
         let homeWorld8 = [];
         fetch(characterArr[8].homeworld)
            .then((res) => res.json())
            .then((home8) => {
               homeWorld8.push(home8);
            });
         let homeWorld9 = [];
         fetch(characterArr[9].homeworld)
            .then((res) => res.json())
            .then((home9) => {
               homeWorld9.push(home9);
            });

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
                  name.innerHTML = `Name: ${characters.results[y.value].name}`;
                  let height = document.querySelector(".height");
                  height.innerHTML = `Height: ${characters.results[y.value].height}`;
                  let mass = document.querySelector(".mass");
                  mass.innerHTML = `Mass: ${characters.results[y.value].mass}`;
                  let hair = document.querySelector(".hair");
                  hair.innerHTML = `Hair: ${characters.results[y.value].hair_color}`;
                  let skin = document.querySelector(".skin");
                  skin.innerHTML = `Skin: ${characters.results[y.value].skin_color}`;
                  let eye = document.querySelector(".eye");
                  eye.innerHTML = `Eye: ${characters.results[y.value].eye_color}`;
                  let bday = document.querySelector(".bday");
                  bday.innerHTML = `Birth year: ${characters.results[y.value].birth_year}`;
                  let gender = document.querySelector(".gender");
                  gender.innerHTML = `Gender: ${characters.results[y.value].gender}`;
                  let planet = document.querySelector(".planet");
                  let rotation = document.querySelector(".rotation");
                  let orbit = document.querySelector(".orbit");
                  let diameter = document.querySelector(".diameter");
                  let gravity = document.querySelector(".gravity");
                  let terrain = document.querySelector(".terrain");
                  if (y.value == 0) {
                     planet.innerText = homeWorld0[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld0[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld0[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld0[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld0[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld0[0].terrain}`;
                  } else if (y.value == 1) {
                     planet.innerText = homeWorld1[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld1[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld1[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld1[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld1[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld1[0].terrain}`;
                  } else if (y.value == 2) {
                     planet.innerText = homeWorld2[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld2[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld2[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld2[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld2[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld2[0].terrain}`;
                  } else if (y.value == 3) {
                     planet.innerText = homeWorld3[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld3[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld3[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld3[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld3[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld3[0].terrain}`;
                  } else if (y.value == 4) {
                     planet.innerText = homeWorld4[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld4[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld4[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld4[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld4[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld4[0].terrain}`;
                  } else if (y.value == 5) {
                     planet.innerText = homeWorld5[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld5[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld5[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld5[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld5[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld5[0].terrain}`;
                  } else if (y.value == 6) {
                     planet.innerText = homeWorld6[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld6[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld6[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld6[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld6[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld6[0].terrain}`;
                  } else if (y.value == 7) {
                     planet.innerText = homeWorld7[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld7[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld7[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld7[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld7[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld7[0].terrain}`;
                  } else if (y.value == 8) {
                     planet.innerText = homeWorld8[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld8[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld8[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld8[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld8[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld8[0].terrain}`;
                  } else if (y.value == 9) {
                     planet.innerText = homeWorld9[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld9[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld9[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld9[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld9[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld9[0].terrain}`;
                  }
               }, 1500);
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
         //-----------
         let homeWorld0 = [];
         fetch(characterArr[0].homeworld)
            .then((res) => res.json())
            .then((home0) => {
               homeWorld0.push(home0);
            });
         let homeWorld1 = [];
         fetch(characterArr[1].homeworld)
            .then((res) => res.json())
            .then((home1) => {
               homeWorld1.push(home1);
            });
         let homeWorld2 = [];
         fetch(characterArr[2].homeworld)
            .then((res) => res.json())
            .then((home2) => {
               homeWorld2.push(home2);
            });
         let homeWorld3 = [];
         fetch(characterArr[3].homeworld)
            .then((res) => res.json())
            .then((home3) => {
               homeWorld3.push(home3);
            });
         let homeWorld4 = [];
         fetch(characterArr[4].homeworld)
            .then((res) => res.json())
            .then((home4) => {
               homeWorld4.push(home4);
            });
         let homeWorld5 = [];
         fetch(characterArr[5].homeworld)
            .then((res) => res.json())
            .then((home5) => {
               homeWorld5.push(home5);
            });
         let homeWorld6 = [];
         fetch(characterArr[6].homeworld)
            .then((res) => res.json())
            .then((home6) => {
               homeWorld6.push(home6);
            });
         let homeWorld7 = [];
         fetch(characterArr[7].homeworld)
            .then((res) => res.json())
            .then((home7) => {
               homeWorld7.push(home7);
            });
         let homeWorld8 = [];
         fetch(characterArr[8].homeworld)
            .then((res) => res.json())
            .then((home8) => {
               homeWorld8.push(home8);
            });
         let homeWorld9 = [];
         fetch(characterArr[9].homeworld)
            .then((res) => res.json())
            .then((home9) => {
               homeWorld9.push(home9);
            });
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
                  name.innerHTML = "Name: " + characters.results[y.value].name;
                  let height = document.querySelector(".height");
                  height.innerHTML = "Height: " + characters.results[y.value].height;
                  let mass = document.querySelector(".mass");
                  mass.innerHTML = "Mass: " + characters.results[y.value].mass;
                  let hair = document.querySelector(".hair");
                  hair.innerHTML = "Hair: " + characters.results[y.value].hair_color;
                  let skin = document.querySelector(".skin");
                  skin.innerHTML = "Skin: " + characters.results[y.value].skin_color;
                  let eye = document.querySelector(".eye");
                  eye.innerHTML = "Eye: " + characters.results[y.value].eye_color;
                  let bday = document.querySelector(".bday");
                  bday.innerHTML = "Birth year: " + characters.results[y.value].birth_year;
                  let gender = document.querySelector(".gender");
                  gender.innerHTML = "Gender: " + characters.results[y.value].gender;
                  let planet = document.querySelector(".planet");
                  let rotation = document.querySelector(".rotation");
                  let orbit = document.querySelector(".orbit");
                  let diameter = document.querySelector(".diameter");
                  let gravity = document.querySelector(".gravity");
                  let terrain = document.querySelector(".terrain");
                  if (y.value == 0) {
                     planet.innerText = homeWorld0[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld0[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld0[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld0[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld0[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld0[0].terrain}`;
                  } else if (y.value == 1) {
                     planet.innerText = homeWorld1[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld1[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld1[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld1[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld1[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld1[0].terrain}`;
                  } else if (y.value == 2) {
                     planet.innerText = homeWorld2[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld2[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld2[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld2[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld2[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld2[0].terrain}`;
                  } else if (y.value == 3) {
                     planet.innerText = homeWorld3[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld3[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld3[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld3[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld3[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld3[0].terrain}`;
                  } else if (y.value == 4) {
                     planet.innerText = homeWorld4[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld4[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld4[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld4[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld4[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld4[0].terrain}`;
                  } else if (y.value == 5) {
                     planet.innerText = homeWorld5[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld5[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld5[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld5[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld5[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld5[0].terrain}`;
                  } else if (y.value == 6) {
                     planet.innerText = homeWorld6[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld6[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld6[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld6[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld6[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld6[0].terrain}`;
                  } else if (y.value == 7) {
                     planet.innerText = homeWorld7[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld7[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld7[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld7[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld7[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld7[0].terrain}`;
                  } else if (y.value == 8) {
                     planet.innerText = homeWorld8[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld8[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld8[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld8[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld8[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld8[0].terrain}`;
                  } else if (y.value == 9) {
                     planet.innerText = homeWorld9[0].name;
                     rotation.innerText = `Rotation period: ${homeWorld9[0].rotation_period} h`;
                     orbit.innerText = `Orbit period: ${homeWorld9[0].orbital_period} days`;
                     diameter.innerText = `Diameter: ${homeWorld9[0].diameter} km`;
                     gravity.innerText = `"Gravity: ${homeWorld9[0].gravity} standard`;
                     terrain.innerText = `Terrain: ${homeWorld9[0].terrain}`;
                  }
               }, 1500);
            });
         }
      });
});
