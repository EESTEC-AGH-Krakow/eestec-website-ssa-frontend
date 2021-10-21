<template>
    <b-modal id="modal-speaker" size="lg" centered title="Prelegent" title-tag="h3" ok-only>
        <b-row no-gutters class="d-flex flex-column align-items-center">
            <b-col cols="6">
                <img :src="currentSpeaker.image" class="img-fluid rounded-circle mb-4">
            </b-col>
            <h3 class="mb-3">{{currentSpeaker.firstName}} {{currentSpeaker.lastName}}</h3>
            <h5 class="text-muted text-center" :key="index" v-for="(workshopName, index) in currentSpeaker.workshopNames">{{workshopName}}</h5>
            <article class="text-justify mt-2" v-html="currentSpeaker.description">
            </article>
        </b-row>
    </b-modal>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "SpeakerModal",
        components: {},
        methods: {},
        watch: {},
        computed: {
            ...mapState(['currentSpeaker'])
        }
    }
</script>

<style scoped lang="scss">

</style>