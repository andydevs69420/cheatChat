
<style>

    #brand-icon 
    { width: 35px; }

    #brand-text
    { font-size: 1.4rem; }

</style>

<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm">
        <div class="container-fluid">
            <!-- branding -->
            <div class="navbar-brand">
                <img id="brand-icon" v-bind:src="brand" alt="vue-icon">
                <span id="brand-text" class="ms-2 text-muted" role="text">{{ appname }}</span>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavBar" aria-controls="collapseNavBar" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- collapse -->
            <div id="collapseNavBar" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto ms-sm-auto me-sm-0">
                    
                    <li class="nav-item my-2 my-md-0">
                        <!--  -->
                        <div class="input-group">
                            <input class="form-control form-control-sm " type="email" placeholder="email"/>
                        </div>
                    </li>

                    <li class="nav-item">
                        <button class="ms-0 ms-md-2 btn btn-sm btn-primary shadow-sm w-100">
                            <span class="text-nowrap">FIND ACCOUNT</span>
                        </button>
                    </li>

                </ul>
            </div>

        </div>
    </nav>
</template>

<script>

import vuesvg from "../assets/logo.svg";
export default {
    name: "Navbar",
    
    data() {
        return ({
            appname: "cheatChat",
            brand: vuesvg,
        });
    }
}
</script>
