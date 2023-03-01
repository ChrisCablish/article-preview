
const shareBtn = document.querySelector(".share-btn");
const hiddenShareBtn = document.querySelector(".hidden-share-btn");
const shareSection = document.querySelector(".share-section");
const shareLink = document.querySelector(".share-link");
const socialMediaSection = document.querySelector(".social-icons");

const toggleSection = () => shareSection.classList.toggle("shown");

shareBtn.addEventListener("click", function () {
  toggleSection();
});
hiddenShareBtn.addEventListener("click", function () {
  toggleSection();
});















