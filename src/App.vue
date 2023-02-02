<template>
    <div v-cloak>
        <Navbar />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import "./assets/font-awesome/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/journal/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "sweetalert/dist/sweetalert.min.js";
import "./assets/font-awesome/js/all.js"

import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: { Navbar },
};
</script>
<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

/* Show it is fixed to the top */
body {
    min-height: 75rem;
    padding-top: 4.5rem;
}

.bg-purple {
    background-color: #7367f0;
}

.bg-purple-light {
    background: #e6e4ff !important;
}

[v-cloak] {
    display: none;
}
</style>
