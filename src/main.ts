import App from "./App.svelte";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

new App({
    target: document.getElementById("app"),
    props: {
        answer: 42
    }
});