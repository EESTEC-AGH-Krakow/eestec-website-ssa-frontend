
<template>
    <div class="content">
        <b-row no-gutters class="d-flex justify-content-center">
            <Speaker :key="speaker.id" :speaker="speaker" v-for="speaker in currentSpeakers">
            </Speaker>
        </b-row>
        <b-alert v-if="this.currentSpeakers.length === 0" show variant="light" class="alert">Prelegenci Soft Skills Academy 13 pojawią się wkrótce</b-alert>
        <b-card-header header-tag="header" class="accordion-container" role="tab">
            <b-button block v-b-toggle.accordion-1 class="accordion-button">
                <div class="accordion-flex"><span>Poprzednie edycje</span>
                    <BIconChevronDown v-if=accordionOpen class="carret-icon" />
                    <BIconChevronRight v-else class="carret-icon" />
                </div>
            </b-button>
        </b-card-header>

        <b-collapse id="accordion-1" :visible="accordionOpen" accordion="speaker-accordion" role="tabpanel">
            <b-row no-gutters class="d-flex justify-content-center">
                <Speaker :key="speaker.id" :speaker="speaker" v-for="speaker in previousSpeakers">
                </Speaker>
            </b-row>
        </b-collapse>
    </div>
</template>

<script>
    import Speaker from '../components/Speaker.vue'
    import CurrentSpeakers from '../mocks/current-speakers.js'
    import PreviousSpeakers from '../mocks/previous-speakers.js'
    import { BIconChevronRight, BIconChevronDown } from 'bootstrap-vue'

    export default {
        name: 'Speakers',
        data() {
            return {
                currentSpeakers: CurrentSpeakers,
                previousSpeakers: PreviousSpeakers,
                accordionOpen: CurrentSpeakers.length === 0
            }
        },
        components: {
            Speaker,
            BIconChevronRight,
            BIconChevronDown
        },
        methods: {},
        computed: {},
        watch: {},
        mounted() {
            this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                if (collapseId === "accordion-1") {
                    this.accordionOpen = isJustShown
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .alert {
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 5px;
        height: 100px;
    }

    .content {
        margin: 30px;
    }

    .accordion-container {
        margin-top: 50px;
        width: 100%;
        padding: 0;
        background-color: transparent;
    }

    .accordion-button {
        height: 50px;
        color: white;
        border-radius: 5px;
    }

    .carret-icon {
        margin-left: 10px;
        height: 18px;
    }

    .accordion-flex {
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>