var express = require( 'express' )
var cors = require( 'cors' )
var app = express()

app.use( cors() )

app.get( '/showcase', function ( req, res, next ) {
    var showcase = [
        {"id":0, "name":"Wedding Web", "img":"#", "link":"/wedding", "desc":"use bootstrap and static html page. use google form widget", "class":"red"},
        {"id":1, "name":"Blog I", "img":"#", "link":"fengs/app", "desc":"use AngularJS", "class":"green"},
        {"id":2, "name":"Todo App", "img":"#", "link":"backbone", "desc":"use BackboneJS, JQuery", "class": "silver"}
    ]

    res.json( showcase )
} )

app.listen( 8080, function () {
} )
