import { categoryProductCallback } from "./receivedProducts.js";

let cardsContainer = document.getElementById("app");

export const buildProductDetailsCard = (product) => {
  clearApp();

  console.log(product);
  const backBtnContainer = `
    <span class="back-btn-container">
        <button class="back-btn">&#8592</button>
    </span>`;

  cardsContainer.innerHTML += backBtnContainer;

  const backBtn = document.querySelector(".back-btn");
  backBtn.addEventListener("click", () => {
    console.log(product);
    categoryProductCallback(product.category);
  });

  let productDetailFigure = document.createElement("figure");
  productDetailFigure.classList.add("product-detail-card");

  let productImages = "";
  //This creates the small product images
  product.images.map((img) => {
    productImages += `<img class="small-img" src="${img}" />`;
  });

  let productDetailFigureContent = `
            <header class="product-name">
                <h2>${product.title}</h2>
            </header>
            <img class="product-thumbnail" src="${product.thumbnail}" alt="${product.title}" />
            <figcaption class="about-product">
                <div class="product-images">
                    ${productImages}
                </div>
                <span class="ratings-container">
                    <span class="stars-container">
                        <p>${product.rating}</p>
                        <p>★</p>
                    </span>
                    <p>(${product.ratingsAmount} reviews)</p>
                </span>
                <div class="button-container">
                    <h3>${product.price} $</h3>
                    <button>Add to cart</button>
                </div>
                <footer class="product-description">
                    <h4>${product.description}</h4>
                    <p>${product.stock} in stock</p>
                </footer>
            </figcaption>`;

  productDetailFigure.innerHTML += productDetailFigureContent;
  cardsContainer.appendChild(productDetailFigure);
};

const clearApp = () => {
  cardsContainer.innerHTML = "";
};
