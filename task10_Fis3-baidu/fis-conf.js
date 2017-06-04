fis.match('*', {
	release: '/dist/$0'
})

fis.match('*.{js,css,png,jpg,gif}', {
	useHash: true,
});

fis.match('::package', {
	spriter: fis.plugin('csssprites')
})

fis.match('*.css', {
	useSprite: true
})

fis.match('*.css', {
    optimizer: fis.plugin('clean-css'),
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js'),
});

fis.match('*.png', {
	optimizer: fis.plugin('png-compressor')
})