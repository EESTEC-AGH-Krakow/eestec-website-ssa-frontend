<template>
  <div>
    <span>{{ selectedWorkshop.location }}, {{ selectedWorkshop.start }} - {{ selectedWorkshop.end }}</span>
    <carousel class="mt-2" ref="workshop-carousel" :per-page="2" :pagination-color="'#7AC244'" autoplay loop
      :autoplayTimeout="4000" centerMode>
      <slide v-for="(speaker, index) in selectedWorkshop.speakers" :key="index" class="px-2 mx-auto">
        <img :src="speaker.image" :alt="`${speaker.firstName} ${speaker.lastName}`"
          class="img-fluid card-img rounded-circle mb-4" />
        <h6>{{ speaker.firstName }} {{ speaker.lastName }}</h6>
      </slide>
    </carousel>
    <!--        <b-carousel-->
    <!--                controls-->
    <!--                indicators-->
    <!--        >-->
    <!--            <b-carousel-slide v-for="(speaker, index) in selectedWorkshop.speakers" :key="index"-->
    <!--                              :caption="`${speaker.firstName} ${speaker.lastName}`"-->
    <!--                              :img-src="speaker.image"></b-carousel-slide>-->
    <!--        </b-carousel>-->
    <article v-html="selectedWorkshop.description" class="text-justify"></article>
    <speaker-modal ref="speakerModal"></speaker-modal>
  </div>
</template>

<script>
export default {
  name: 'WorkshopDetails',
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => {
      this.$forceUpdate()
    }, 0)
  },
  props: ['selectedWorkshop'],
  components: {
    SpeakerModal,
  },
  methods: {
    openSpeakerModal(speaker) {
      this.$refs.speakerModal.open(speaker);
    },
  },
  computed: {},
  watch: {},
}
</script>

<style scoped lang="scss"></style>
