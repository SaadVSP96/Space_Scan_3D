document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".nav__toggler")
    .addEventListener("click", function () {
      document.querySelector(".nav__list").classList.toggle("hidden");
    });
});
