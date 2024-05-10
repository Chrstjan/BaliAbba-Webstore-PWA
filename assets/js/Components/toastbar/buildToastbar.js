const toastbarParentContainer = document.getElementById("app");
let toastbar;

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
