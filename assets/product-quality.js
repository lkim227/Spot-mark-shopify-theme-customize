let getIcons = document.querySelectorAll(
  ".left-overlay-item span:nth-child(2)"
);
getIcons.forEach((item) => {
  item.addEventListener(
    "click",
    (evt) => {
      let e = evt.target.closest(".left-overlay-item");
      e.firstElementChild.style.opacity = 1;
    },
    false
  );
  document.addEventListener("click", (e) => {
    if (!item.contains(e.target)) {
      let ev = item.closest(".left-overlay-item");
      ev.firstElementChild.style.opacity = 0;
    }
  });
});