let currLink = "https://swapi.dev/api/people/?page=1";
let newLink = "";
let defaultData = () => {
   fetch(currLink)
      .then((res) => res.json())
      .then((char) => {
         let characterArr = [];
         let allClick = document.querySelectorAll("main > .container > .characters > section > ul > li");
         for (let i of char.results) {
            characterArr.push(i);
         }
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
         for (let i of allClick) {
            i.addEventListener("click", function (event) {
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
               fetch(char.results[i.value].homeworld)
                  .then((res) => res.json())
                  .then((home) => {
                     let planet = document.querySelector(".planet");
                     planet.innerHTML = home.name;
                     let rotation = document.querySelector(".rotation");
                     rotation.innerHTML = "Rotation period: " + home.rotation_period + " h";
                     let orbit = document.querySelector(".orbit");
                     orbit.innerHTML = "Orbit period: " + home.orbital_period + " days";
                     let diameter = document.querySelector(".diameter");
                     diameter.innerHTML = "Diameter: " + home.diameter + " km";
                     let gravity = document.querySelector(".gravity");
                     gravity.innerHTML = "Gravity: " + home.gravity + " standard";
                     let terrain = document.querySelector(".terrain");
                     terrain.innerHTML = "Terrain: " + home.terrain;
                  });
            });
         }
      });
};
defaultData();

document.querySelector(".next").addEventListener("click", async () => {
   await fetch(currLink)
      .then((res) => res.json())
      .then((link) => {
         newLink = link.next;
         currLink = newLink;
      });
   await fetch(currLink)
      .then((res) => res.json())
      .then((characters) => {
         let characterArr = [];
         let allClick = document.querySelectorAll("main > .container > .characters > section > ul > li");
         for (let i of characters.results) {
            characterArr.push(i);
         }
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
         for (let i of allClick) {
            i.addEventListener("click", function (event) {
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
               fetch(characters.results[i.value].homeworld)
                  .then((res) => res.json())
                  .then((home) => {
                     let planet = document.querySelector(".planet");
                     planet.innerHTML = home.name;
                     let rotation = document.querySelector(".rotation");
                     rotation.innerHTML = "Rotation period: " + home.rotation_period + " h";
                     let orbit = document.querySelector(".orbit");
                     orbit.innerHTML = "Orbit period: " + home.orbital_period + " days";
                     let diameter = document.querySelector(".diameter");
                     diameter.innerHTML = "Diameter: " + home.diameter + " km";
                     let gravity = document.querySelector(".gravity");
                     gravity.innerHTML = "Gravity: " + home.gravity + " standard";
                     let terrain = document.querySelector(".terrain");
                     terrain.innerHTML = "Terrain: " + home.terrain;
                  });
            });
         }
      });
});
document.querySelector(".back").addEventListener("click", async () => {
   await fetch(currLink)
      .then((res) => res.json())
      .then((link) => {
         newLink = link.previous;
         currLink = newLink;
      });
   await fetch(currLink)
      .then((res) => res.json())
      .then((characters) => {
         let characterArr = [];
         let allClick = document.querySelectorAll("main > .container > .characters > section > ul > li");
         for (let i of characters.results) {
            characterArr.push(i);
         }
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
         for (let i of allClick) {
            i.addEventListener("click", function (event) {
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
               fetch(chara.results[i.value].homeworld)
                  .then((res) => res.json())
                  .then((home) => {
                     let planet = document.querySelector(".planet");
                     planet.innerHTML = home.name;
                     let rotation = document.querySelector(".rotation");
                     rotation.innerHTML = "Rotation period: " + home.rotation_period + " h";
                     let orbit = document.querySelector(".orbit");
                     orbit.innerHTML = "Orbit period: " + home.orbital_period + " days";
                     let diameter = document.querySelector(".diameter");
                     diameter.innerHTML = "Diameter: " + home.diameter + " km";
                     let gravity = document.querySelector(".gravity");
                     gravity.innerHTML = "Gravity: " + home.gravity + " standard";
                     let terrain = document.querySelector(".terrain");
                     terrain.innerHTML = "Terrain: " + home.terrain;
                  });
            });
         }
      });
});
