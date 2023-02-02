//Citation: https://www.w3schools.com/css/css_dropdowns.asp

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown = dropdowns2[i];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
}