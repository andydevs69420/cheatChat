

<template>
    <!-- navbar -->
    <Navbar/>

    <!-- page -->
    <div id="page-body">
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-4 offset-md-4 my-5 justify-content-center text-center">
                    
                    <!-- center panel -->
                    <div id="signin__center-panel" class="card border-0 shadow">
    
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <span></span>
                                    <!-- email field -->
                                    <div class="form-label text-start small">
                                        <strong>email</strong>
                                    </div>
                                    <InputBar @email__inputBarChanged="emailChanged" id="email" icon-class="envelope" type="email" placeholder="email"/>
                                    
                                    <!-- email feeback -->
                                    <div class="d-block invalid-feedback text-start">
                                        <strong class="text-danger" role="text">{{ emailFeedback }}</strong>
                                    </div>
                                </div>
                                <div class="col-12 my-2">
                                    <!-- password field -->
                                    <div class="form-label text-start small">
                                        <strong>password</strong>
                                    </div>
                                    <InputBar @password__inputBarChanged="passwChanged" id="password" icon-class="lock" type="password" placeholder="password"/>

                                    <!-- password feeback -->
                                    <div v-if="passwFeedback" class="d-block invalid-feedback text-start">
                                        <strong class="text-danger" role="text">{{ passwFeedback }}</strong>
                                    </div>
                                </div>
                                <div class="col-12 my-2">
                                    <!-- confirm password field -->
                                    <div class="form-label text-start small">
                                        <strong>confirm password</strong>
                                    </div>
                                    <InputBar @confirm_password__inputBarChanged="cpassChanged" id="confirm_password" icon-class="check-circle" type="password" placeholder="confirm password"/>
                                    
                                    <!-- confirm pass feeback -->
                                    <div v-if="cpassFeedback" class="d-block invalid-feedback text-start">
                                        <strong class="text-danger" role="text">{{ cpassFeedback }}</strong>
                                    </div>
                                </div>
                                <div class="col-12 my-2">
                                    <button class="btn btn-success shadow-sm w-100" @click="onSignup">
                                        <strong class="small">signup</strong>
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
import axios from "axios";
import PasswordValidator from 'password-validator';
import Navbar from "../components/Navbar.vue";
import InputBar from "../components/InputBar.vue";


const validator = new PasswordValidator();
      validator
      .is().min(8)
      .is().max(32)
      .has().digits(1)
      .has().uppercase()
      .has().lowercase()
      .has().not().spaces()


export default {
    name: "Signup",
    components: {Navbar, InputBar},
    computed: {

    },
    data() 
    {
        return {
            // values
            emailVal: "",
            passwVal: "",
            cpassVal: "",
            // field validation feedback
            emailFeedback: null,
            passwFeedback: null,
            cpassFeedback: null
        }
    },
    methods: {
        emailChanged(_val) {
            this.emailVal = _val;
        }, 
        passwChanged(_val) {
            this.passwVal = _val;
        }, 
        cpassChanged(_val) {
            this.cpassVal = _val;
        }, 
        check() {
            // password
            this.passwFeedback = (!validator.validate(this.passwVal))? 
                "Invalid password!" : null;

            // confirm password
            this.cpassFeedback = (this.cpassVal != this.passwVal)? 
                "Password did not matched!" : null;
            
            return (this.emailFeedback && this.passwFeedback && this.cpassFeedback);
        },
        onSignup() {
            if (!this.check()) return;

            console.log(this.emailVal, this.passwVal, this.cpassVal);
        }
    }
}
</script>