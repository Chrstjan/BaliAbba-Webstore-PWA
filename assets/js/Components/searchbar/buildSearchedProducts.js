export const buildSearchedProducts = (searchProducts) => {
  console.log(searchProducts);

  searchProducts.map((products) => {
    let searchedProduct = `
        <figure>
            <img src="${products.thumbnail}" />
            <header>
                <h3>${products.title}</h3>
            </header>
        </figure>`;

    searchContainer.innerHTML += searchedProduct;
  });
};
