const merge = require('babel-merge')
const path = require('path')

module.exports = {
	css: {
		sourceMap: true,
	},
	
	chainWebpack: config => {
		config.module.rule('vue').
			use('vue-loader').
			loader('vue-loader').
			tap(options => {
				merge(options, {
					transformToRequire: {
						'img': 'src',
						'image': 'xlink:href',
						'b-img': 'src',
						'b-img-lazy': ['src', 'blank-src'],
						'b-card': 'img-src',
						'b-card-img': 'img-src',
						'b-carousel-slide': 'img-src',
						'b-embed': 'src',
					},
				})
			})
		
		const svgRule = config.module.rule('svg')
		
		svgRule.uses.clear()
		
		svgRule.use('vue-svg-loader').loader('vue-svg-loader')
	},
	
	publicPath: undefined,
	outputDir: undefined,
	assetsDir: 'assets',
	runtimeCompiler: true,
	productionSourceMap: undefined,
	parallel: undefined,
	
	pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
          '/home/blacksmith/Desktop/projects/ssa-front/src/assets/sass/all.scss',
          '/home/blacksmith/Desktop/projects/ssa-front/node_modules/bootstrap/scss/bootstrap.scss',
          '/home/blacksmith/Desktop/projects/ssa-front/src/assets/sass/animations.scss'
        ]
      },
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/',
          '/o-nas',
          '/kontakt',
          '/harmonogram',
          '/partnerzy',
          '/poprzednie-edycje',
          '/prelegenci'
        ],
        useRenderEvent: false,
        headless: true,
        onlyProduction: true
      }
    },
}
