<template>
    <b-row no-gutters>
        <b-col cols="12" class="bg-primary">
            <carousel :per-page="1" :per-page-custom="[[$screen.sm, 2],[$screen.md, 3],[$screen.lg, 4],[$screen.xl, 5]]" :pagination-enabled="false">
                <slide>
                    <div class="d-flex flex-column">
                        <span>29.11</span>
                        <span>Niedziela</span>
                    </div>
                </slide>
                <slide>
                    <div class="d-flex flex-column">
                        <span>29.11</span>
                        <span>Niedziela</span>
                    </div>
                </slide>
                <slide>
                    <div class="d-flex flex-column">
                        <span>29.11</span>
                        <span>Niedziela</span>
                    </div>
                </slide>
                <slide>
                    <div class="d-flex flex-column">
                        <span>29.11</span>
                        <span>Niedziela</span>
                    </div>
                </slide>
            </carousel>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    name: 'Timetable',
    data () {
      return {}
    },
    components: {},
    methods: {},
    computed: {},
    watch: {},
  }
</script>

<style scoped lang="scss">

</style>
