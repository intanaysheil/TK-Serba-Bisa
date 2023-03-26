// slideshow

let slideIndex = 1;

const imgItem = document.querySelectorAll(".img-item");

slideshow(slideIndex);

function slideItem(n) {
  slideshow((slideIndex += n));
}

function slideshow(n) {
  let i;
  if (n > imgItem.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = imgItem.length;
  }

  for (i = 0; i < imgItem.length; i++) {
    imgItem[i].style.display = "none";
  }

  imgItem[slideIndex - 1].style.display = "block";
}

// calendar
new Calendar({
  id: "#color-calendar",
});

// modal
const modal = document.querySelector("#modalform");

modal.hidden = true;

function showmodal() {
  modal.hidden = false;
  document.body.style.overflowY = "hidden";
}

function closemodal() {
  modal.hidden = true;
  document.body.style.overflowY = "scroll";
  alert("Terima Kasih telah mendaftar");
}
