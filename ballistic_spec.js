var assert = require( 'assert' );
var missile = require( './ballistics' );

describe('Ballistics Tests', function(){
  it('Say hello', function(){
    assert.equal("Hello Master", missile.welcome() );
  })
})

describe('Maths Tests', function(){
  it('Horizontal Speed', function(){
    assert.equal( 25, missile.horizontal( 50, 60 ) );
  })

  it()

})
