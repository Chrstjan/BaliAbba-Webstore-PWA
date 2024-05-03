const headerHomeBtn = document.getElementById("header-home-btn");

//Will be used for calling click eventlisteners that are directly connected to products
export const pageNavigation = () => {
  headerHomeBtn.addEventListener("click", () => {
    console.log("Going home!");
  });
};
