<template>
    <b-row no-gutters>
        <b-col cols="12">
            <h1 class="text-center mt-5 display-4">Do zakończenia hackathonu zostało:</h1>
        </b-col>
        <b-col class="mt-3" cols="12">
            <FlipCountdown deadline="2019-04-07 12:00:00" :labels="labels" class="timer"></FlipCountdown>
        </b-col>
    </b-row>
</template>

<script>
  import FlipCountdown from 'vue2-flip-countdown'

  export default {
    name: 'Timer',
    components: {
      FlipCountdown
    },
    data () {
      return {
        labels: {
          days: 'Dni',
          hours: 'Godziny',
          minutes: 'Minuty',
          seconds: 'Sekundy'
        }
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
