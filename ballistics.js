var degrees = Math.PI /180

var missile = {
  welcome: function() {
    return "Hello Master";
  },
  gravity: 9.8,
  horizontal: function( speed, angle ) {
    var sum = angle * degrees;
    var answer = speed * Math.cos( sum );
    return Math.round( answer * 100) / 100;
  },

  vertical: function( speed, angle ) {
    var sum = angle * degrees;
    var answer = speed * Math.sin( sum );
    return Math.round( answer * 100 ) / 100;
  },

  distance: function( speed, time ) {
    var answer = speed * time;
    return answer;
  },

  height: function( speed, time ) {

    var answer = ( speed * time ) - ( 0.5 * this.gravity * time * time )



    // var sum = this.gravity * time;

    // var answer = ( ( speed * time ) - ( time * this.gravity ) );
    // console.log( speed * time )
    return answer;
  }



}


module.exports = missile;