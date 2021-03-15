const fs = require('fs')
const path = require('path')
const widgetWebpack = require('materia-widget-development-kit/webpack-widget')
const copy = widgetWebpack.getDefaultCopyList()

const outputPath = path.join(process.cwd(), 'build')

const customCopy = copy.concat([
	{
		from: path.join(__dirname, 'src', '_guides', 'assets'),
		to: path.join(outputPath, 'guides', 'assets'),
		toType: 'dir'
	},
])

const entries = {
	'creator.js': [
		path.join(__dirname, 'src', 'spectrum.custom.js'),
		path.join(__dirname, 'src', 'draw.js'),
		path.join(__dirname, 'src', 'creator.js')
	],
	'player.js': [
		path.join(__dirname, 'src', 'draw.js'),
		path.join(__dirname, 'src', 'player.js'),
		path.join(__dirname, 'src', 'player.html'),
	],
	'draw3D.js': [
		path.join(__dirname, 'src/three', 'three.min.js'),
		path.join(__dirname, 'src', 'draw3D.js'),
		path.join(__dirname, 'src', 'player.html'),
	],
	// 'draw3D2.js': [
	// 	path.join(__dirname, 'src/three', 'three.min.js'),
	// 	path.join(__dirname, 'src', 'draw3D2.js'),
	// 	path.join(__dirname, 'src', 'player.html'),
	// ],
	'creator.css': [
		path.join(__dirname, 'src', 'creator.html'),
		path.join(__dirname, 'src', 'creator.scss')
	],
	'player.css': [
		path.join(__dirname, 'src', 'player.html'),
		path.join(__dirname, 'src', 'player.scss')
	],
	'guides/guideStyles.css': [
		path.join(__dirname, 'src', '_guides', 'guideStyles.scss'),
	],
	'guides/player.temp.html': [
		path.join(__dirname, 'src', '_guides', 'player.md')
	],
	'guides/creator.temp.html': [
		path.join(__dirname, 'src', '_guides', 'creator.md')
	]
}

const options = {
	copyList: customCopy,
	entries: entries
}

let buildConfig = widgetWebpack.getLegacyWidgetBuildConfig(options)
module.exports = buildConfig

// module.exports = widgetWebpack.getLegacyWidgetBuildConfig(options)
