const carouselBox = document.getElementById("carouselExampleControls ");
carouselBox.style.paddingTop = "20px";

const catImage = document.getElementsByClassName("cat__img");

for (const categoryImg of catImage) {
  categoryImg.addEventListener("mouseover", function (e) {
    e.target.style.transform = "scale(1.4)";
    e.target.style.transition = "all 2s linear";
  });

  categoryImg.addEventListener("mouseout", function (e) {
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "all 1s";
  });
}

const shoeOne = document.getElementById("shoe1");
const shoeThree = document.getElementById("shoe3");
shoeThree.style.display = "none";

document.getElementById("cardOne").addEventListener("mouseover", function (e) {
  shoeOne.style.transform = "rotate(-7deg)";
  shoeThree.style.transform = "rotate(-7deg)";
  shoeOne.style.display = "none";
  shoeThree.style.display = "block";
});
document.getElementById("cardOne").addEventListener("mouseleave", function (e) {
  shoeOne.style.transform = "rotate(0deg)";
  shoeThree.style.transform = "rotate(0deg)";
  shoeOne.style.display = "block";
  shoeThree.style.display = "none";
});
