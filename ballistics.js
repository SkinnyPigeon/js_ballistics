var degrees = Math.PI /180

var missile = {
  welcome: function() {
    return "Hello Master";
  },
  gravity: 9.8,
  horizontal: function( speed, angle ) {
    var sum = angle * degrees
    var answer = speed * Math.cos( sum )
    return Math.round( answer * 100) / 100
  },
  vertical: function( speed, angle ) {
    var sum = angle * degrees
    var answer = speed * Math.sin( sum )
    return Math.round( answer * 100 ) / 100
  }
}


module.exports = missile;