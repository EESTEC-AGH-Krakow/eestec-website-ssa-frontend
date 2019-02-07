<template>
    <b-row :class="{ active: showCollapse }" class="position-fixed" id="container" no-gutters>
        <b-col class="position-fixed d-flex flex-column align-items-stretch" cols="2">
            <b-button @click.stop="showCollapse = !showCollapse" class="px-3 py-2 my-4 align-self-center menu position-fixed" size="sm" variant="outline-secondary">
                <font-awesome-icon icon="bars" size="lg"></font-awesome-icon>
            </b-button>
            <b-navbar class="p-0 flex-fill d-flex align-items-stretch" toggleable="true" type="light" variant="faded">
                <div :class="{ active: showCollapse }" class="bg-light horizontal flex-fill d-flex flex-column align-items-center" ref="collapse">
                    <b-navbar-brand class="m-0">
                        <img alt="logo" class="img-fluid" src="@/assets/images/hackathon-logo.gif"/>
                    </b-navbar-brand>

                    <b-navbar-nav class="font-weight-bold">
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#">Link</b-nav-item>
                    </b-navbar-nav>
                </div>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    name: 'Aside',
    data () {
      return {
        showCollapse: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
    #container {
        width: 100vw;
        height: 100vh;
        background: transparent;
        transition: $transition-base;
        z-index: 500;

        &.active {
            background: transparentize($black, 0.4);
        }
    }

    div.position-fixed.d-flex {
        height: 100vh;
        z-index: 1000;

        .menu {
            z-index: 2000;
        }

        .horizontal {
            padding-top: 1.5*$spacer + 5rem;
            transform: scaleX(0);
            transform-origin: left;
            transition: $transition-base;

            &.active {
                transform: scaleX(1);
            }
        }
    }

    .img-fluid {
        width: 5rem;
        height: auto;
    }
</style>
