

<template>
    <div class="input-group">
        <span class="input-group-text text-muted">
            <fa :icon="iconClass"></fa>
        </span>
        <input :id="id" class="form-control" v-model="value" :type="type" :placeholder="placeholder" @change="textChange"/>
    </div>
</template>



<script>
export default {
    name: "InputBar",
    data() {
        return {
            value: "",
        }
    },
    props: {
        id: {
            type:String,
            required: true
        },
        type: String,
        placeholder: String,
        iconClass: {
            type: String,
            required: true
        }
    },
    methods: {
        textChange () {
            this.$emit(this.id + "__inputBarChanged", this.value);
        }
    }
}
</script>
