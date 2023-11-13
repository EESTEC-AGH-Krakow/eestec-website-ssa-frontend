<template>
    <b-row no-gutters class="elevate w-100 bg-white">
        <b-col cols="12">
            <b-navbar toggleable="lg" type="light">
                <b-row no-gutters class="flex-fill w-100">
                    <b-col cols="12" lg="2" class="d-flex align-items-center justify-content-between justify-content-lg-start">
                        <b-navbar-brand :to="{ name: 'home' }"><SVGSSAFull class="ssa-logo"/></b-navbar-brand>
                        <b-navbar-toggle target="nav-collapse" @click="$store.commit('toggleNav')" />
                    </b-col>
                    <b-col lg="8" xl="8" class="d-none d-lg-flex justify-content-center align-items-center">
                        <HeaderNav class="mx-auto" />
                    </b-col>
                    
                    <b-col lg="2" class="d-none d-lg-flex justify-content-end align-items-center">
                    <b-button size="lg" href="https://forms.gle/qeJmKSbMpk9tbNzC9" target="_blank">ZAPISY</b-button>
                    </b-col>
                   
                </b-row>

                <b-collapse id="nav-collapse" is-nav @hidden="$store.commit('toggleNav', false)" class="bg-white position-absolute menu">
                    <HeaderNav class="d-lg-none"/>
                </b-collapse>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
  import SVGSSAFull from '@/assets/images/ssa_full.svg'
  import HeaderNav from './HeaderNav'
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    components: {
      SVGSSAFull,
      HeaderNav
    },
    data () {
      return {
        links: [
          {
            name: 'start',
            href: {
              name: 'home',
            },
          },
          {
            name: 'o nas',
            href: {
              name: 'about',
            },
          },
          {
            name: 'kontakt',
            href: {
              name: 'contact',
            },
          },
        ],
      }
    },
    computed: {
      ...mapState([
        'isNavOpened'
      ]),
      toggled() {
        return !this.$screen.lg && !this.$screen.xl && this.isNavOpened
      }
    },
    watch: {
      toggled() {
        // document.getElementsByTagName('body')[0].style.overflowY = this.toggled ? 'hidden' : 'auto';
      }
    }
  }
</script>

<style lang="scss" scoped>
    .elevate {
        z-index: 90;
    }

    .menu {
        top: 100%;
        left: 0;
        right: 0;
    }

    .ssa-logo {
        width: 8rem;
    }
</style>
