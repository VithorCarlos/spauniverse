import * as Menu from "./toggleMenu.js";

export class Router {
  routes = {};
  loadedStyles = [];

  add(pathname, url) {
    this.routes[pathname] = url;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  loadStylesheet(href) {
    if (!this.loadedStyles.includes(href)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;

      document.head.appendChild(link);

      this.loadedStyles.push(href);
    }
  }

  handle() {
    const { pathname, href } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
        const urlStyle = `./${this.routes[pathname]}/style.css`;
        if (!this.loadedStyles.includes(urlStyle)) {
          this.loadStylesheet(urlStyle);
        }
      });

      Menu.handleMenu(href);
  }
}
