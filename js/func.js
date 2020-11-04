const increasePage = () => {
   count++;
   const pageNr = document.querySelector("main > .container > .characters > .btn > p");
   pageNr.innerHTML = count + "/8";
   console.log(count);
};
const decreasePage = () => {
   count--;
   const pageNr = document.querySelector("main > .container > .characters > .btn > p");
   pageNr.innerHTML = count + "/8";
   console.log(count);
};
const hideCharacterList = () => {
   const cList = document.querySelector(".cList");
   cList.classList.add("hide");
};
const hideCharacterDetails = () => {
   const cSelfInfo = document.querySelector(".self-info > ul");
   cSelfInfo.classList.add("hide");
   const cHome = document.querySelector(".home-world-info > ul");
   cHome.classList.add("hide");
};
const showCharacterList = () => {
   const cList = document.querySelector(".cList");
   cList.classList.remove("hide");
};
const showCharacterDetails = () => {
   const cSelfInfo = document.querySelector(".self-info > ul");
   cSelfInfo.classList.remove("hide");
   const cHome = document.querySelector(".home-world-info > ul");
   cHome.classList.remove("hide");
};
const showPreLoaderChracter = () => {
   const preLoader = document.querySelector(".loader-chracter");
   preLoader.classList.remove("hide");
};
const hidePreLoaderChracter = () => {
   const preLoader = document.querySelector(".loader-chracter");
   preLoader.classList.add("hide");
};
const showPreLoaderDetails = () => {
   const preLoader = document.querySelector(".loader-details");
   preLoader.classList.remove("hide");
};
const hidePreLoaderDetails = () => {
   const preLoader = document.querySelector(".loader-details");
   preLoader.classList.add("hide");
};
const showPreLoaderWorldDetails = () => {
   const preLoader = document.querySelector(".loader-world-details");
   preLoader.classList.remove("hide");
};
const hidePreLoaderWorldDetails = () => {
   const preLoader = document.querySelector(".loader-world-details");
   preLoader.classList.add("hide");
};
