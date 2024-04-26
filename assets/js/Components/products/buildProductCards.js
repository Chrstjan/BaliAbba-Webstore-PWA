import { productCardCallback } from "./getProducts.js";
let cardsContainer = document.getElementById("app");

export const buildProductsCards = (featuredProducts) => {
  clearApp();

  console.log(featuredProducts);
  const randRatingsAmount = Math.floor(Math.random() * 3500 + 1);
  featuredProducts.map((products) => {
    let productFigure = document.createElement("figure");
    productFigure.classList.add("product-card");
    productFigure.addEventListener("click", () => {
      productCardCallback(products.id);
    });

    let productFigureContent = `
            <header class="product-name">
                <h2>${products.title}</h2>
            </header>
            <img class="product-thumbnail" src="${products.thumbnail}" alt="${products.title}" />
            <figcaption class="about-product">
                <span class="ratings-container">
                    <span class="stars-container">
                        <p>${products.rating}</p>
                        <p>★</p>
                    </span>
                    <p>(${randRatingsAmount} reviews)</p>
                </span>
                <div class="button-container">
                    <h3>${products.price} $</h3>
                    <button>Add to cart</button>
                </div>
                <footer class="product-description">
                    <h4>${products.description}</h4>
                    <p>${products.stock} in stock</p>
                </footer>
            </figcaption>`;
    productFigure.innerHTML += productFigureContent;
    cardsContainer.appendChild(productFigure);
  });
};

export const buildProductDetailsCard = (product) => {
  clearApp();

  console.log(product);
  const randRatingsAmount = Math.floor(Math.random() * 3500 + 1);
  let productDetailFigure = document.createElement("figure");
  productDetailFigure.classList.add("product-detail-card");

  let productImages = "";
  //This creates the small product images
  product.images.map((img) => {
    productImages += `<img class="small-img" src="${img}" />`;
  });

  console.log(productImages);

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
                    <p>(${randRatingsAmount} reviews)</p>
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
