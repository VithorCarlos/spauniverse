import { Router } from "./router.js";

const router = new Router();

router.add("/", "src/pages/home");
router.add("/exploration", "src/pages/exploration");
router.add("/universe", "src/pages/universe");
router.add(404, "src/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
