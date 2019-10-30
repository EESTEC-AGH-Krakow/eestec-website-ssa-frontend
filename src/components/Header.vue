<template>
    <b-container fluid>
        <b-row class="align-items-center text-uppercase">
            <b-col cols="2" class="p-2">
                <SVGSSAFull/>
            </b-col>
            <b-col cols="8" class="d-flex">
                <b-nav fill class="flex-fill">
                    <b-nav-item v-for="option in options" v-bind:key="option"> {{ option }} </b-nav-item>
                </b-nav >
            </b-col>
            <b-col cols="2" class="d-flex">
                <b-button variant="primary" class="flex-grow-1">Aplikuj</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SVGSSAFull from '@/assets/images/ssa_full.svg'

    export default {
        name: "Header",
        data () {
            return {
                options: ['O nas', 'Harmonogram', 'Prelegenci', 'Partnerzy', 'Poprzednie edycje']
            }
        },
        components: {
            SVGSSAFull
        },
        methods: {},
        watch: {},
        computed: {}
    }
</script>

<style scoped lang="scss">
    /* SVG classes */
    .st0{fill:#C0CE47;}
    .st1{display:none;}
    .st2{display:inline;}
    .st3{display:inline;fill:#FFFFFF;}
    .st4{display:inline;fill:#C0CE47;}
    .st5{fill:#FFFFFF;}
</style>
