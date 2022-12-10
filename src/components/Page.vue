
<style>
    :root {
        --navbar-height : 61.84px;
        --body-padding: 5px;
    }
    #page-body {
        padding-top: calc(var(--navbar-height) + var(--body-padding));
        padding-left: var(--body-padding);
        padding-right: var(--body-padding);
        padding-bottom: var(--body-padding);
    }
</style>

<template>
    <!-- navbar -->
    <Navbar/>

    <!-- page -->
    <div id="page-body">
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-4 col-xl-3 offset-md-4 offset-xl-4 my-5 justify-content-center text-center">
                    
                    <!-- center panel -->
                    <div class="card border-0 shadow">
    
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <!-- email field -->
                                    <div class="form-label text-start small">
                                        <strong>email</strong>
                                    </div>
                                    <InputBar type="email" placeholder="email"/>
                                </div>
                                <div class="col-12 my-2">
                                    <!-- email field -->
                                    <div class="form-label text-start small">
                                        <strong>password</strong>
                                    </div>
                                    <InputBar type="password" placeholder="password"/>
                                </div>
                                <div class="col-12 my-2">
                                    <button class="btn btn-success shadow-sm w-100">
                                        <strong class="small">signin</strong>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import InputBar  from "./InputBar.vue";

export default {
    components: {Navbar, InputBar},
    data() {
        return ({
            greeting: "Hola!"
        });
    }
}
</script>