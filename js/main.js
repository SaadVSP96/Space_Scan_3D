document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".nav__toggler");
  toggler.addEventListener("click", function () {
    const nav = this.closest(".nav");
    nav.classList.toggle("collapsible--expanded");
    document
      .getElementsByClassName("collapsible__content")[0]
      .classList.toggle("collapsible_rand");
  });
});
