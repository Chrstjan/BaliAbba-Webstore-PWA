const toastbarParentContainer = document.getElementById("app");
let toastbar;
let productInShoppingCart = false;

export const buildProductAddToastbar = () => {
  console.log("Toastbar!!!");
  if (!toastbar) {
    let toastbarContainer = `
    <div class="toastbar">
        <h4>Product added to shopping cart</h4>
    </div>`;

    toastbarParentContainer.innerHTML += toastbarContainer;

    toastbar = document.querySelector(".toastbar");
  } else {
    console.log("Already toasting!");
    let toastbarContainerProductAdd = `
    <div class="toastbar-update">
        <h4>Product added to shopping cart</h4>
    </div>`;

    toastbarParentContainer.innerHTML += toastbarContainerProductAdd;

    toastbar = document.querySelector(".toastbar-update");
  }

  toastbar.classList.add("hide-toastbar");

  removeToastbar();
};

export const buildProductUpdateToastbar = () => {
  console.log("Toastbar!!!");
  if (!toastbar) {
    let toastbarContainer = `
    <div class="toastbar">
        <h4>Product Amount updated</h4>
    </div>`;

    toastbarParentContainer.innerHTML += toastbarContainer;

    toastbar = document.querySelector(".toastbar");
  } else {
    console.log("Already toasting!");
    let toastbarContainerProductAdd = `
    <div class="toastbar-update">
        <h4>Product Amount updated</h4>
    </div>`;

    toastbarParentContainer.innerHTML += toastbarContainerProductAdd;

    toastbar = document.querySelector(".toastbar-update");
  }

  toastbar.classList.add("hide-toastbar");

  removeToastbar();
};

const removeToastbar = () => {
  setTimeout(() => {
    toastbar.remove();
    toastbar = true;
  }, 3000);
};
