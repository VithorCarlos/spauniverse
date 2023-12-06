const menu = document.querySelectorAll("#menu a");

export function handleMenu(href) {
  menu.forEach((link) => { 
    if(href === link.href){

      menu.forEach((otherLink) => otherLink.classList.remove("selected"));
      link.classList.add("selected");
    }
  })
}

menu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.forEach((otherLink) => otherLink.classList.remove("selected"));

    link.classList.add("selected");
  });
});
