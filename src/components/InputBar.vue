

<template>
    <div class="input-group">
        <span class="input-group-text">@</span>
        <input class="form-control" v-model="value" :type="type" :placeholder="placeholder" @keypress="textChange"/>
    </div>
</template>



<script>
export default {
    name: "InputBar",
    data() {
        return {
            value: ""
        }
    },
    props: {
        type: String,
        placeholder: String
    },
    methods: {
        textChange(e) {
            console.log(e.target.value);
        }
    }
}
</script>
