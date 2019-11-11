<template>
    <b-row no-gutters class="bg-primary">
        <b-col cols="12" class="pb-2">
            <carousel :per-page="1" :per-page-custom="[[576, 2],[768, 3],[992, 4],[1200, 5]]" :pagination-enabled="true" :pagination-color="'#7AC244'">
                <slide v-for="day of Object.keys(timetable)" :key="new Date(day).getDate()">
                    <b-card class="bg-primary clickable" @click="selectDay(day)" :class="{active: selectedDay(day)}">
                        <b-card-body class="d-flex flex-column align-items-center p-0">
                            <span>{{new Date(day).getDate()}}.{{new Date(day).getMonth() + 1}}</span>
                            <span>{{week[new Date(day).getDay()]}}</span>
                        </b-card-body>
                    </b-card>
                </slide>
            </carousel>
        </b-col>
        <b-col cols="12">
            <b-container fluid>
                <b-row>
                    <b-col cols="12" md="6">
                        <b-row>
                            <b-col cols="12" lg="6" v-for="(workshop, index) in selectedWorkshops" :key="index" class="d-flex mb-2">
                                <WorkshopCard :workshop="workshop" class="flex-fill"/>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" md="6">
                        <b-card :title="selectedWorkshop.name" title-tag="h5" align="center" body-class="d-flex flex-column">
                            <h6 v-for="(speaker, index) in selectedWorkshop.speakers" :key="index">{{speaker.firstName}} {{speaker.lastName}}</h6>
                            <span>{{selectedWorkshop.location}}, {{selectedWorkshop.start}} - {{selectedWorkshop.end}}</span>
                            <b-row>
                                <b-col v-for="(speaker, index) in selectedWorkshop.speakers" :key="index" cols=""></b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
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
        selectedWorkshops: [],
        selectedWorkshop: {},
      }

    },
    mounted () {
      const now = new Date()
      const month = now.toLocaleString('en-us', { month: 'short' })
      const day = now.getDate()
      const year = now.getFullYear()
      this.selectDay(`${month} ${day}, ${year}` in this.timetable ? `${month} ${day}, ${year}` : Object.keys(this.timetable)[0])
      this.selectedWorkshop = this.selectedWorkshops[0]
    },
    components: {
      WorkshopCard,
    },
    methods: {
      selectDay (day) {
        this.selectedWorkshops = this.timetable[day]
      },
      selectWorkshop () {

      },
    },
    computed: {
      ...mapState(['week']),
      selectedDay () {
        return day => this.selectedWorkshops === this.timetable[day]
      },
    },
    watch: {},
  }
</script>

<style scoped lang="scss">

</style>
