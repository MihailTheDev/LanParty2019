function addSelected(elem) {
  var imgs = document.getElementsByClassName("carousel-indicator")[0].getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove("selected");
  }
  elem.classList.add("selected");

}