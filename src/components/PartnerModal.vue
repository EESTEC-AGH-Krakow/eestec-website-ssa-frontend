<template>
    <b-modal id="modal-partner" size="lg" centered title="Partner" title-tag="h3" ok-only>
        <b-row no-gutters class="d-flex flex-column">
            <b-col cols="6" class="align-self-center">
                <img :src="currentPartner.image" class="img-fluid mb-4">
            </b-col>
            <h3 class="mb-3">{{currentPartner.name}}</h3>
            <article class="text-justify mt-2" v-html="currentPartner.description">
            </article>
        </b-row>
    </b-modal>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "PartnerModal",
        components: {},
        methods: {},
        watch: {},
        computed: {
            ...mapState(['currentPartner'])
        }
    }
</script>

<style scoped lang="scss">

</style>