<template>
    <b-col cols="12" sm="6" md="4" lg="3" class="px-5 d-flex flex-column justify-content-center">

        <template v-if="partner.description !== ''">
            <b-button v-b-modal.modal-partner
                      variant="none"
                      class="partner"
                      @click="changePartner(partner)"
            >
                <img class="img-fluid" :src="partner.image" :alt="partner.name">
            </b-button>
        </template>
        <template v-else>
            <img class="img-fluid" :src="partner.image" :alt="partner.name">
        </template>

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
    .partner {
        outline: none;
    }

</style>