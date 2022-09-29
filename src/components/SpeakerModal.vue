<template>
    <b-modal id="modal-speaker" size="lg" centered title-tag="h3" hide-footer="true">
        <ModalContainer>
                <b-row no-gutters class="d-flex flex-column align-items-center">
                    <b-col cols="6">
                        <img :src="currentSpeaker.image" class="img-fluid rounded-circle mb-4">
                    </b-col>
                    <h3 class="mb-3">{{currentSpeaker.firstName}} {{currentSpeaker.lastName}}</h3>
                    <h5 class="text-muted text-center" :key="index" v-for="(workshopName, index) in currentSpeaker.workshopNames">{{workshopName}}</h5>
                    <article class="text-justify mt-2 speaker-description" v-html="currentSpeaker.description">
                    </article>
                </b-row>
        </ModalContainer>
    </b-modal>
</template>

<script>
    import {mapState} from 'vuex'
    import ModalContainer from './ModalContainer.vue';

    export default {
        name: "SpeakerModal",
        components: {ModalContainer},
        methods: {},
        watch: {},
        computed: {
            ...mapState(['currentSpeaker'])
        }
    }
</script>

<style scoped lang="scss">
    .speaker-description > a {
        color: #7AC244
    }
</style>