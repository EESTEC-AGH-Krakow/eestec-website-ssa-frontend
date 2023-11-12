<template>
  <b-row no-gutters>
    <b-col cols="12" class="pb-3">
      <carousel
        :per-page="1"
        :per-page-custom="[[0,1],[263,3],[768, 4],[992, 6]]"
        :pagination-color="'#7AC244'"
      >
        <slide v-for="day of Object.keys(timetable)" :key="new Date(day).getDate()">
          <b-card
            class="bg-primary clickable"
            @click="selectDay(day)"
            :class="{ active: selectedDay(day) }"
          >
            <b-card-body class="d-flex flex-column align-items-center p-0">
              <span>{{ new Date(day).getDate() }}.{{ new Date(day).getMonth() + 1 }}</span>
              <span>{{ week[new Date(day).getDay()] }}</span>
            </b-card-body>
          </b-card>
        </slide>
      </carousel>
    </b-col>
    <b-col cols="12" class="mb-3">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="5" align="center">
            <b-row class="row justify-content-center">
              <b-col
                cols="12"
                lg="12"
                v-for="(workshop, index) in selectedWorkshops"
                :key="index"
                class="d-flex  mb-3"
                @click="selectWorkshop(workshop)"
              >
                <WorkshopCard :workshop="workshop" class="flex-fill" />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="7" class="d-none d-md-flex">
            <b-card
              :title="selectedWorkshop.name"
              title-tag="h5"
              align="center"
              body-class="d-flex flex-column"
              class="flex-fill mb-2"
            >
              <WorkshopDetails
                :selectedWorkshop="selectedWorkshop"
                @openSpeakerModal="openSpeakerModal"
              />
            </b-card>
          </b-col>
          <b-modal id="modal-workshop" :title="selectedWorkshop.name" centered ok-only size="lg">
            <WorkshopDetails :selectedWorkshop="selectedWorkshop" />
          </b-modal>
          <b-modal id="modal-speaker" :title="selectedSpeaker.name" centered ok-only size="lg">
            <SpeakerModal :selectedSpeaker="selectedSpeaker" />
          </b-modal>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import mockTimetable from '@/mocks/timetable';
import WorkshopCard from '../components/WorkshopCard';
import WorkshopDetails from '../components/WorkshopDetails';
import SpeakerModal from '../components/SpeakerModal';
import { mapState } from 'vuex';

export default {
  name: 'Timetable',
  data() {
    return {
      timetable: mockTimetable,
      selectedWorkshops: [],
      selectedWorkshop: {},
      selectedSpeaker: null,
    };
  },
  components: {
    WorkshopCard,
    WorkshopDetails,
    SpeakerModal,
  },
  methods: {
    selectDay(day) {
      this.selectedWorkshops = this.timetable[day];
    },
    selectWorkshop(workshop) {
      this.selectedWorkshop = workshop;
      if (!this.$screen.md) {
        this.$bvModal.show('modal-workshop');
      }
    },
    openSpeakerModal(speaker) {
      this.selectedSpeaker = speaker;
      this.$bvModal.show('modal-speaker');
    },
  },
  computed: {
    ...mapState(['week']),
    selectedDay() {
      return (day) => this.selectedWorkshops === this.timetable[day];
    },
  },
};
</script>

<style scoped lang="scss"></style>