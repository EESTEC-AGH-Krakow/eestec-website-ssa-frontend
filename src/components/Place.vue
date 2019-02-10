<template>
    <b-row class="bg-blue-dark text-white" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-5 display-4">Jak dojechać</h1>
        </b-col>
        <b-col class="mb-5 mb-lg-0" cols="10" lg="5" offset="1" offset-lg="1" xl="4">
            <l-map :center="center"
                   :zoom="zoom"
                   @update:center="centerUpdated"
                   @update:zoom="zoomUpdated"
                   class="map w-100">
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker :lat-lng="placeMarker">
                    <l-tooltip class="font-weight-bold">Krakowski Park Technologiczny<br>
                        ul. Podole 60<br>
                        30-394, Kraków
                    </l-tooltip>
                </l-marker>
            </l-map>
        </b-col>
        <b-col class="d-flex flex-column justify-content-around" cols="10" lg="4" offset="1" offset-lg="1" xl="5">
            <b-row class="mb-3" no-gutters>
                <b-col cols="2">
                    <font-awesome-icon icon="map-marker-alt" size="lg"></font-awesome-icon>
                </b-col>
                <b-col>
                    <span>Krakowski Park Technologiczny</span><br>
                    <span>Podole 60</span>
                </b-col>
            </b-row>
            <b-row no-gutters>
                <b-col cols="2">
                    <font-awesome-icon icon="bus" size="lg"></font-awesome-icon>
                </b-col>
                <b-col>
                    <span>Linie: {{ buses }}</span>
                </b-col>
            </b-row>
        </b-col>
        <img alt="mountains" class="img-fluid w-100" src="@/assets/images/mountains-middle.png"/>
    </b-row>
</template>

<script>

	export default {
		name: 'Place',
		data () {
			return {
				zoom: 15,
				center: [50.0211894, 19.8862796046309],
              placeMarker: [50.0211894, 19.8862796046309],
				busArray: [230, 157, 194, 17, 18],
				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
			}
		},
		methods: {
			zoomUpdated (zoom) {
				this.zoom = zoom
			},
			centerUpdated (center) {
				this.center = center
			},
			boundsUpdated (bounds) {
				this.bounds = bounds
			},
		},
		computed: {
			buses () {
				return this.busArray.join(', ')
			},
		},
	}
</script>

<style lang="scss" scoped>
    .map {
        height: 15rem;
    }

    .img-fluid {
        transform: rotate(180deg);
    }
</style>
