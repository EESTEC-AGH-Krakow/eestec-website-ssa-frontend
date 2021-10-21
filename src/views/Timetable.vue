<template>
    <b-row no-gutters>
        <b-col cols="12" class="pb-2">
            <carousel :per-page="1" :per-page-custom="[[576, 2],[768, 3],[992, 4],[1200, 5]]" :pagination-color="'#7AC244'">
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
        <b-col cols="12" class="mb-3">
            <b-container fluid>
                <b-row>
                    <b-col cols="12" md="6">
                        <b-row>
                            <b-col cols="12" lg="6" v-for="(workshop, index) in selectedWorkshops" :key="index" class="d-flex mb-2" @click="selectWorkshop(workshop)">
                                <WorkshopCard :workshop="workshop" class="flex-fill"/>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" md="6" class="d-none d-md-flex">
                        <b-card :title="selectedWorkshop.name" title-tag="h5" align="center" body-class="d-flex flex-column" class="flex-fill mb-2">
                            <WorkshopDetails :selectedWorkshop="selectedWorkshop" />
                        </b-card>
                    </b-col>
                    <b-modal id="modal-workshop" :title="selectedWorkshop.name" centered ok-only size="lg">
                        <WorkshopDetails :selectedWorkshop="selectedWorkshop" />
                    </b-modal>
                </b-row>
            </b-container>
        </b-col>
    </b-row>
</template>

<script>
  import mockTimetable from '@/mocks/timetable'
  import WorkshopCard from '../components/WorkshopCard'
  import WorkshopDetails from '../components/WorkshopDetails'
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
      WorkshopDetails,
      WorkshopCard,
    },
    methods: {
      selectDay (day) {
        this.selectedWorkshops = this.timetable[day]
      },
      selectWorkshop (workshop) {
        this.selectedWorkshop = workshop
        if(!this.$screen.md) {
          this.$bvModal.show('modal-workshop')
        }
      }
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
