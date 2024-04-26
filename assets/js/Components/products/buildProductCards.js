let cardsContainer = document.getElementById("app");

export const buildProductsCards = (featuredProducts) => {
  console.log(featuredProducts);
  const randRatingsAmount = Math.floor(Math.random() * 3500 + 1);
  featuredProducts.map((products) => {
    let productFigure = `
        <figure class="product-card">
            <header class="product-name">
                <h2>${products.title}</h2>
            </header>
            <img src="${products.thumbnail}" alt="${products.title}" />
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
            </figcaption>
        </figure>`;
    cardsContainer.innerHTML += productFigure;
  });
};
