console.log(window.scrollY);
window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 350) {
    document.getElementById("fristNavbar").classList.add("d-none");
    console.log(
      "frist " + document.getElementById("fristNavbar").classList + " start"
    );
    document.getElementById("secondNavbar").classList.remove("d-none");
    console.log(
      "second" + document.getElementById("secondNavbar").classList + " start"
    );
  }
  if (window.scrollY <= 350) {
    document.getElementById("fristNavbar").classList.remove("d-none");
    console.log(
      "frist " + document.getElementById("fristNavbar").classList + " end"
    );
    document.getElementById("secondNavbar").classList.add("d-none");
    console.log(
      "second" + document.getElementById("secondNavbar").classList + " end"
    );
  }
};
