let increasePage = () => {
   count++;
   let pageNr = document.querySelector("main > .container > .characters > .btn > p");
   pageNr.innerHTML = count + "/8";
   console.log(count);
};
let decreasePage = () => {
   count--;
   let pageNr = document.querySelector("main > .container > .characters > .btn > p");
   pageNr.innerHTML = count + "/8";
   console.log(count);
   return count;
};
let hideCharacterList = () => {
   let cList = document.querySelector(".cList");
   cList.classList.add("hide");
};
let hideCharacterDetails = () => {
   let cSelfInfo = document.querySelector(".self-info > ul");
   cSelfInfo.classList.add("hide");
   let cHome = document.querySelector(".home-world-info > ul");
   cHome.classList.add("hide");
};
let showCharacterList = () => {
   let cList = document.querySelector(".cList");
   cList.classList.remove("hide");
};
let showCharacterDetails = () => {
   let cSelfInfo = document.querySelector(".self-info > ul");
   cSelfInfo.classList.remove("hide");
   let cHome = document.querySelector(".home-world-info > ul");
   cHome.classList.remove("hide");
};
let showPreLoaderChracter = () => {
   let preLoader = document.querySelector(".loader-chracter");
   preLoader.classList.remove("hide");
};
let hidePreLoaderChracter = () => {
   let preLoader = document.querySelector(".loader-chracter");
   preLoader.classList.add("hide");
};
let showPreLoaderDetails = () => {
   let preLoader = document.querySelector(".loader-details");
   preLoader.classList.remove("hide");
};
let hidePreLoaderDetails = () => {
   let preLoader = document.querySelector(".loader-details");
   preLoader.classList.add("hide");
};
let showPreLoaderWorldDetails = () => {
   let preLoader = document.querySelector(".loader-world-details");
   preLoader.classList.remove("hide");
};
let hidePreLoaderWorldDetails = () => {
   let preLoader = document.querySelector(".loader-world-details");
   preLoader.classList.add("hide");
};
