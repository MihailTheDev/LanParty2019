function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav text-center mx-auto") {
        x.className += " responsive";
    } else {
        x.className = "topnav text-center mx-auto";
    }
}
