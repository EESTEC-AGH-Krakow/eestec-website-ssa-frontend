<template>
    <b-col cols="12" md="5" lg="4" xl="3">
        <b-card class="grey-in-on-hover" v-b-modal.modal-speaker @click="changeSpeaker(speaker)">
            <b-card-body class="text-center text-justify">
                <b-card-img :src="speaker.image" class="rounded-circle mb-4" v-b-modal.modal-speaker @click="changeSpeaker(speaker)" ></b-card-img>
                <b-card-title>{{speaker.firstName}} {{speaker.lastName}}</b-card-title>
                <b-card-sub-title :key="index" class="mb-2" v-for="(workshopName, index) in speaker.workshopNames">{{workshopName}} </br></b-card-sub-title>
                <b-card-text class="d-flex flex-column align-items-center">
                    <article class="text-justify">{{speaker.description | striphtml | truncate(150)}}
                    </article>
                    <a class="justify-self-end btn-prelegent">więcej</a>
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
    .btn-prelegent {
        text-decoration: underline;
        color: #666666;
        margin-top: 10px;
    }

    .grey-in-on-hover :hover {
        background-color: #ececec;
    }
</style>