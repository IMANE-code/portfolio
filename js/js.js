//navbar scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

//display Form

function dspmenu() {
  document.getElementById("menu").style.display = "none";
}
function dspform() {
  document.getElementById("form1").style.display = "block";
  dspmenu();
}

//display Section
function sectionHEADER() {
  dspform();
  document.getElementById("section-HEADER").style.display = "block";
}
function sectionABOUT() {
  dspform();
  document.getElementById("section-ABOUT").style.display = "block";
}
function sectionSERVICES() {
  dspform();
  document.getElementById("section-SERVICES").style.display = "block";
}
function sectionVEDEO() {
  dspform();
  document.getElementById("section-VEDEO").style.display = "block";
}
function sectionPROJECT() {
  dspform();
  document.getElementById("section-PROJECT").style.display = "block";
}
function sectionCONTACT() {
  dspform();
  document.getElementById("section-CONTACT").style.display = "block";
}
function sectionLOGIN() {
  dspform();
  document.getElementById("section-LOGIN").style.display = "block";
}
