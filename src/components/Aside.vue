<template>
    <b-row :class="{ active: showCollapse }" class="position-fixed" id="container" no-gutters>
        <b-col col>
            <b-button @click.stop="showCollapse = !showCollapse" class="position-relative p-2 p-sm-3 align-self-center menu d-flex" size="sm" variant="outline-secondary">
                <font-awesome-icon icon="bars" size="lg"></font-awesome-icon>
            </b-button>
        </b-col>
        <b-col class="position-fixed d-flex flex-column align-items-stretch" cols="11" lg="4" md="6" sm="8">
            <b-navbar class="p-0 flex-fill d-flex align-items-stretch" toggleable="true" type="light" variant="faded">
                <div class="bg-white pt-5 horizontal flex-fill d-flex flex-column align-items-center" ref="collapse">
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
        z-index: $aside-index;
    }

    #container.active {
        background: transparentize($black, 0.4);

        .horizontal {
            transform: scaleX(1);
        }
    }

    div.position-fixed.d-flex {
        height: 100vh;
        z-index: $aside-index + 1;

        .horizontal {
            transform: scaleX(0);
            transform-origin: left;
            transition: $transition-base;
            overflow-y: scroll;
        }
    }

    .menu {
        z-index: $aside-index + 2;
    }

    .img-fluid {
        width: 5rem;
        height: auto;
    }
</style>
