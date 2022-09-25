const merge = require('babel-merge')

module.exports = {
	css: {
		sourceMap: true,
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.svg$/, 
					loader: 'vue-svg-loader', 
				},
			],
		}      
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
		
			
		config.module.rules.delete("svg");
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
          'src/assets/sass/all.scss',
          'node_modules/bootstrap/scss/bootstrap.scss',
          'src/assets/sass/animations.scss'
        ]
      }
    },
}
