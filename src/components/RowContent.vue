<template>
    <b-row :class="{'flex-row-reverse' : reverse}" class="flex-wrap-reverse flex-lg-nowrap align-items-stretch">
        <b-col md="12" lg="6" class="order-2 order-lg-2 p-5 p-lg-3 p-xl-5 d-flex align-items-center justify-content-center flex-column bg-primary">
            <slot></slot>
        </b-col>
        <b-col md="12" lg="6" class="order-1 order-lg-1 p-0 embed-responsive embed-responsive-16by9 background" :style="{ 'background-image': `url(${photo})` }">
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
    .background {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>
