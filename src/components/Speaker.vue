<template>
    <b-col cols="12" md="5" lg="4" xl="3">
        <b-card>
            <b-card-body class="text-center text-justify">
                <b-card-img :src="speaker.image" class="rounded-circle mb-4"></b-card-img>
                <b-card-title>{{speaker.firstName}} {{speaker.lastName}}</b-card-title>
                <b-card-sub-title :key="index" class="mb-2" v-for="(workshopName, index) in speaker.workshopNames">{{workshopName}}</b-card-sub-title>
                <b-card-text class="d-flex flex-column align-items-center">
                    <article class="text-justify">{{speaker.description | striphtml | truncate(150)}}
                    </article>
                    <b-button class="align-self-end justify-self-end" v-b-modal.modal-speaker @click="changeSpeaker(speaker)">więcej</b-button>
                </b-card-text>
            </b-card-body>
        </b-card>
    </b-col>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "Speaker",
        props: ['speaker'],
        components: {},
        methods: {
            ...mapMutations(['changeSpeaker']),
        },
        watch: {},
        computed: {}
    }
</script>

<style scoped lang="scss">

</style>