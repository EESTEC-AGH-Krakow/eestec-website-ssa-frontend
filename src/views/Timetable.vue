<template>
    <b-row no-gutters>
        <b-col cols="12" class="bg-primary pb-2">
            <carousel :per-page="1" :per-page-custom="[[576, 2],[768, 3],[992, 4],[1200, 5]]" :pagination-enabled="true" :pagination-color="'#7AC244'">
                <slide v-for="day of Object.keys(timetable)" :key="new Date(day).getDate()">
                    <b-card class="bg-primary">
                        <b-card-body class="d-flex flex-column align-items-center p-0">
                            <span>{{new Date(day).getDate()}}.{{new Date(day).getMonth() + 1}}</span>
                            <span>{{week[new Date(day).getDay()]}}</span>
                        </b-card-body>
                    </b-card>
                </slide>
            </carousel>
        </b-col>
        <b-col cols="12" md="6" class="mt-2 mx-2">
            <b-row>
                <b-col cols="12" lg="6" v-for="(item, index) in temp" :key="index" class="d-flex mb-2">
                    <WorkshopCard class="flex-fill"/>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" md="6">
            <b-card>

            </b-card>
        </b-col>
    </b-row>
</template>

<script>
  import mockTimetable from '@/mocks/timetable'
  import WorkshopCard from '../components/WorkshopCard'
  import { mapState } from 'vuex'

  export default {
    name: 'Timetable',
    data () {
      return {
        timetable: mockTimetable,
        temp: [...Array(6).keys()]
      }
    },
    created() {

    },
    components: {
      WorkshopCard
    },
    methods: {

    },
    computed: {
      ...mapState(['week'])
    },
    watch: {},
  }
</script>

<style scoped lang="scss">

</style>
