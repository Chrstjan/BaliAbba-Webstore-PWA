import { buildSidebar } from "../other/sidebar.js";

const sidebarBtn = document.getElementById("hamburger");

let eletronicArray = [];
let homeDecorArray = [];
let clothesArray = [];
let accesoriesArray = [];
let skincareArray = [];
let vehiclesArray = [];
let miscArray = [];

export const receivedCategories = async (categories) => {
  console.log(categories);

  categories.map((category) => {
    switch (category) {
      case "smartphones":
      case "laptops":
        eletronicArray.push(category);
        break;

      case "home-decoration":
      case "furniture":
      case "lighting":
        homeDecorArray.push(category);
        break;

      case "tops":
      case "womens-dresses":
      case "womens-shoes":
      case "mens-shirts":
      case "mens-shoes":
        clothesArray.push(category);
        break;

      case "mens-watches":
      case "womens-watches":
      case "womens-bags":
      case "womens-jewellery":
      case "sunglasses":
        accesoriesArray.push(category);
        break;

      case "fragrances":
      case "skincare":
        skincareArray.push(category);
        break;

      case "automotive":
      case "motorcycle":
        vehiclesArray.push(category);
        break;

      default:
        miscArray.push(category);
        break;
    }
  });

  let supCategoryArray = [
    {
      supCategory: "Eletronic Devices",
      subCategory: eletronicArray,
    },
    {
      supCategory: "Home Decoration",
      subCategory: homeDecorArray,
    },
    {
      supCategory: "Clothes",
      subCategory: clothesArray,
    },
    {
      supCategory: "Accesories",
      subCategory: accesoriesArray,
    },
    {
      supCategory: "Skin Care",
      subCategory: skincareArray,
    },
    {
      supCategory: "Vehicles",
      subCategory: vehiclesArray,
    },
    {
      supCategory: "Misc",
      subCategory: miscArray,
    },
  ];

  sidebarBtn.addEventListener("click", () => {
    buildSidebar(supCategoryArray);
  });
};
