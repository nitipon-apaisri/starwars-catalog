//Fetch the new link and get the new link *concept
let currLink = "https://swapi.dev/api/people/?page=1";
let newLink = "";
let defaultData = () => {
   fetch(currLink)
      .then((res) => res.json())
      .then((def) => {
         let cArr = [];
         for (let i of def.results) {
            cArr.push(i);
         }
         let charName1 = document.querySelector(".char1");
         charName1.innerHTML = cArr[0].name;
         document.querySelector(".char1").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[0].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[0].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[0].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[0].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[0].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[0].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[0].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[0].gender;
            fetch(def.results[0].homeworld)
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
         let charName2 = document.querySelector(".char2");
         charName2.innerHTML = cArr[1].name;
         document.querySelector(".char2").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[1].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[1].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[1].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[1].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[1].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[1].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[1].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[1].gender;
            fetch(def.results[1].homeworld)
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
         let charName3 = document.querySelector(".char3");
         charName3.innerHTML = cArr[2].name;
         document.querySelector(".char3").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[2].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[2].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[2].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[2].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[2].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[2].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[2].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[2].gender;
            fetch(def.results[2].homeworld)
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
         let charName4 = document.querySelector(".char4");
         charName4.innerHTML = cArr[3].name;
         document.querySelector(".char4").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[3].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[3].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[3].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[3].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[3].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[3].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[3].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[3].gender;
            fetch(def.results[3].homeworld)
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
         let charName5 = document.querySelector(".char5");
         charName5.innerHTML = cArr[4].name;
         document.querySelector(".char5").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[4].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[4].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[4].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[4].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[4].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[4].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[4].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[4].gender;
            fetch(def.results[4].homeworld)
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
         let charName6 = document.querySelector(".char6");
         charName6.innerHTML = cArr[5].name;
         document.querySelector(".char6").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[5].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[5].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[5].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[5].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[5].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[5].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[5].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[5].gender;
            fetch(def.results[5].homeworld)
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
         let charName7 = document.querySelector(".char7");
         charName7.innerHTML = cArr[6].name;
         document.querySelector(".char7").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[6].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[6].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[6].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[6].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[6].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[6].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[6].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[6].gender;
            fetch(def.results[6].homeworld)
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
         let charName8 = document.querySelector(".char8");
         charName8.innerHTML = cArr[7].name;
         document.querySelector(".char8").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[7].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[7].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[7].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[7].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[7].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[7].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[7].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[7].gender;
            fetch(def.results[7].homeworld)
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
         let charName9 = document.querySelector(".char9");
         charName9.innerHTML = cArr[8].name;
         document.querySelector(".char9").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[8].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[8].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[8].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[8].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[8].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[8].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[8].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[8].gender;
            fetch(def.results[8].homeworld)
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
         let charName10 = document.querySelector(".char10");
         charName10.innerHTML = cArr[9].name;
         document.querySelector(".char10").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[9].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[9].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[9].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[9].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[9].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[9].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[9].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[9].gender;
            fetch(def.results[9].homeworld)
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
         let cArr = [];
         for (let i of characters.results) {
            cArr.push(i);
         }
         let charName1 = document.querySelector(".char1");
         charName1.innerHTML = cArr[0].name;
         document.querySelector(".char1").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[0].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[0].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[0].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[0].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[0].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[0].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[0].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[0].gender;
            fetch(characters.results[0].homeworld)
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

         let charName2 = document.querySelector(".char2");
         charName2.innerHTML = cArr[1].name;
         document.querySelector(".char2").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[1].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[1].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[1].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[1].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[1].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[1].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[1].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[1].gender;
            fetch(characters.results[1].homeworld)
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
         let charName3 = document.querySelector(".char3");
         charName3.innerHTML = cArr[2].name;
         document.querySelector(".char3").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[2].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[2].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[2].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[2].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[2].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[2].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[2].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[2].gender;
            fetch(characters.results[2].homeworld)
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
         let charName4 = document.querySelector(".char4");
         charName4.innerHTML = cArr[3].name;
         document.querySelector(".char4").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[3].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[3].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[3].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[3].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[3].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[3].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[3].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[3].gender;
            fetch(characters.results[3].homeworld)
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
         let charName5 = document.querySelector(".char5");
         charName5.innerHTML = cArr[4].name;
         document.querySelector(".char5").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[4].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[4].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[4].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[4].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[4].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[4].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[4].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[4].gender;
            fetch(characters.results[4].homeworld)
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
         let charName6 = document.querySelector(".char6");
         charName6.innerHTML = cArr[5].name;
         document.querySelector(".char6").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[5].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[5].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[5].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[5].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[5].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[5].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[5].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[5].gender;
            fetch(characters.results[5].homeworld)
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
         let charName7 = document.querySelector(".char7");
         charName7.innerHTML = cArr[6].name;
         document.querySelector(".char7").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[6].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[6].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[6].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[6].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[6].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[6].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[6].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[6].gender;
            fetch(characters.results[6].homeworld)
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
         let charName8 = document.querySelector(".char8");
         charName8.innerHTML = cArr[7].name;
         document.querySelector(".char8").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[7].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[7].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[7].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[7].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[7].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[7].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[7].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[7].gender;
            fetch(characters.results[7].homeworld)
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
         let charName9 = document.querySelector(".char9");
         charName9.innerHTML = cArr[8].name;
         document.querySelector(".char9").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[8].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[8].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[8].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[8].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[8].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[8].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[8].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[8].gender;
            fetch(characters.results[8].homeworld)
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
         let charName10 = document.querySelector(".char10");
         charName10.innerHTML = cArr[9].name;
         document.querySelector(".char10").addEventListener("click", () => {
            let name = document.querySelector(".name");
            name.innerHTML = "Name: " + cArr[9].name;
            let height = document.querySelector(".height");
            height.innerHTML = "Height: " + cArr[9].height;
            let mass = document.querySelector(".mass");
            mass.innerHTML = "Mass: " + cArr[9].mass;
            let hair = document.querySelector(".hair");
            hair.innerHTML = "Hair: " + cArr[9].hair_color;
            let skin = document.querySelector(".skin");
            skin.innerHTML = "Skin: " + cArr[9].skin_color;
            let eye = document.querySelector(".eye");
            eye.innerHTML = "Eye: " + cArr[9].eye_color;
            let bday = document.querySelector(".bday");
            bday.innerHTML = "Birth year: " + cArr[9].birth_year;
            let gender = document.querySelector(".gender");
            gender.innerHTML = "Gender: " + cArr[9].gender;
            fetch(characters.results[9].homeworld)
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
      });
});
// let addActiveClass = () => {
//    let nameList = document.querySelector(".container > .characters > section > ul > li");
//    nameList.classList.add(".active");
//    console.log("yo");
// };
// let nameList = document.querySelectorAll(".container > .characters > section > ul > li");
// for (let i of nameList) {
//    i.addEventListener("click", () => {
//       addActiveClass();
//       console.log("hi");
//    });
// }
