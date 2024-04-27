const loadingContainer = document.getElementById("app");

export const createLoading = () => {
  clearContainer();

  const loadingAnimation = `
    <span class="loading-container">
        <div class="loading"></div>
        <h2>Loading...</h2
    </span>`;

  loadingContainer.innerHTML = loadingAnimation;
};

const clearContainer = () => {
  loadingContainer.innerHTML = "";
};
