<!--
<template>
    <b-row no-gutters class="d-flex justify-content-center">
        <Speaker
                :key="speaker.id"
                :speaker="speaker"
                v-for="speaker in speakers"
        >
        </Speaker>
    </b-row>
</template>

<script>
    import Speaker from '../components/Speaker.vue'
    import SPEAKERS from '../mocks/speakers.js'

    export default {
        name: 'Speakers',
        data() {
            return {
                speakers: SPEAKERS
            }
        },
        components: {
            Speaker
        },
        methods: {},
        computed: {},
        watch: {},
    }
</script>

<style scoped lang="scss">

</style>
-->

<template>
  <p class = "temp"> <br><br>Więcej informacji wkrótce<br><br></p>
</template>

<script>

</script>

<style scoped lang="scss">
.temp {
        text-align: center;
        font-size: 2.7rem;
    }
</style>