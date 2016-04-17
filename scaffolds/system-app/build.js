var path = require("path")
var Builder = require('systemjs-builder')

var builder = new Builder('src', './config.js')

builder
.bundle('index.js', 'build/bundle.js')
.then(function() {
	builder.config({
    separateCSS: true
  })
  console.log('Good to Go!')
})
.catch(function(err) {
  console.log('Error!')
  console.log(err)
})
