<template>
    <b-modal id="modal-partner" size="lg" centered title-tag="h3" hide-footer="true">
        <ModalContainer>
            <b-row no-gutters class="d-flex flex-column">
                <b-col cols="6" class="align-self-center">
                    <img :src="currentPartner.image || ''" class="img-fluid mb-4">
                </b-col>
                <h3 class="mb-3 partner-name">{{currentPartner.name}}</h3>
                <article class="text-justify mt-2 partner-description" v-html="currentPartner.description">
                </article>
            </b-row>
        </ModalContainer>
    </b-modal>
</template>

<script>
    import {mapState} from 'vuex'
    import ModalContainer from './ModalContainer.vue';

    export default {
        name: "PartnerModal",
        components: { ModalContainer },
        methods: {},
        watch: {},
        computed: {
            ...mapState(['currentPartner'])
        }
    }
</script>

<style scoped lang="scss">
    .partner-name {
        text-align: center;
    }
    
    .partner-description ::v-deep a {
        color: #7AC244 !important;
    }
</style>