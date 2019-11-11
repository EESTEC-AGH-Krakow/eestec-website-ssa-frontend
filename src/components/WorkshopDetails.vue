<template>
    <div>
        <span>{{selectedWorkshop.location}}, {{selectedWorkshop.start}} - {{selectedWorkshop.end}}</span>
        <!--        <carousel class="mt-2" ref="workshop-carousel" :per-page="2" :pagination-color="'#7AC244'">-->
        <!--            <slide v-for="(speaker, index) in selectedWorkshop.speakers" :key="index" class="px-2 mx-auto">-->
        <!--                <img :src="speaker.image" :alt="`${speaker.firstName} ${speaker.lastName}`" class="img-fluid mb-2"/>-->
        <!--                <h6>{{speaker.firstName}} {{speaker.lastName}}</h6>-->
        <!--            </slide>-->
        <!--        </carousel>-->
        <b-carousel
                controls
                indicators
        >
            <b-carousel-slide v-for="(speaker, index) in selectedWorkshop.speakers" :key="index"
                              :caption="`${speaker.firstName} ${speaker.lastName}`"
                              :img-src="speaker.image"></b-carousel-slide>
        </b-carousel>
        <article v-html="selectedWorkshop.description" class="text-justify"></article>
    </div>
</template>

<script>
  export default {
    name: 'WorkshopDetails',
    data () {
      return {}
    },
    mounted () {
      // this.$refs['workshop-carousel'].$el.focus()
      // this.$refs['workshop-carousel'].$nextTick(this.$refs['workshop-carousel'].$forceUpdate())
    },
    props: ['selectedWorkshop'],
    components: {},
    methods: {},
    computed: {},
    watch: {},
  }
</script>

<style scoped lang="scss">

</style>
