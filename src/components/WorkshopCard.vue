<template>
    <b-card bg-variant="secondary" :title="workshop.name" title-tag="h5" align="center" body-class="d-flex flex-column clickable clickable-dark">
        <h6 v-for="(speaker, index) in workshop.speakers" :key="index">{{speaker.firstName}} {{speaker.lastName}}</h6>
        <div class="d-flex flex-column mt-auto">
            <span>{{workshop.start}} - {{workshop.end}}</span>
            <span>{{workshop.location}}</span>
        </div>
    </b-card>
</template>

<script>
  export default {
    name: 'WorkshopCard',
    data () {
      return {}
    },
    props: ['workshop'],
    components: {},
    methods: {},
    computed: {},
    watch: {},
  }
</script>

<style scoped lang="scss">
    h6 {
        color: $text-muted;
    }
</style>
