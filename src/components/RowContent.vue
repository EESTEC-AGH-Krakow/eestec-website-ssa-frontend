<template>
    <b-row v-if="reverse" class="flex-wrap-reverse flex-lg-nowrap align-items-center">
        <b-col  md="12" lg="6" class="order-2 order-lg-2 p-5 p-lg-3 p-xl-5">
            <slot></slot>
        </b-col>
        <b-col md="12" lg="6" class="order-1 order-lg-1 p-0">
            <img class="img-fluid" :src="photo" />
        </b-col>
    </b-row>
    <b-row v-else class="flex-wrap-reverse flex-lg-nowrap align-items-center">
        <b-col md="12" lg="6" class="order-1 order-lg-2 p-0">
            <img class="img-fluid" :src="photo" />
        </b-col>
        <b-col md="12" lg="6" class="order-2 order-lg-1 p-5 p-lg-3 p-xl-5">
            <slot></slot>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "RowContent",
        props: {
            photo: {
                type: String,
                required: true
            },
            reverse: {
                type: Boolean,
                default: false
            }
        },
        components: {},
        methods: {},
        watch: {},
        computed: {}
    }
</script>

<style lang="scss" scoped>
    // TODO tutaj jakas zmienna na kolor i konfiguracja wielkosci czcionki
    .row {
        background-color: aquamarine;
    }
    h2 {
        font-size: 32px !important;
        font-weight: bold !important;
    }
    h3 {
        font-size: 20px !important;
        font-weight: bold !important;
    }
    h4 {
        font-size: 15px !important;
    }
</style>