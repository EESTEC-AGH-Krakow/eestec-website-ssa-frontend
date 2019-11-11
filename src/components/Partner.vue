<template>
    <b-col cols="12" sm="6" md="4" lg="3" class="px-5 d-flex flex-column justify-content-center">
        <b-button
            v-b-modal.modal-partner
            variant="none"
            @click="changePartner(partner)"
        >
            <img class="img-fluid" :src="partner.image">
        </b-button>
    </b-col>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "Partner",
        props: ['partner'],
        components: {},
        methods: {
            ...mapMutations(['changePartner']),
        },
        watch: {},
        computed: {}
    }
</script>

<style scoped lang="scss">

</style>