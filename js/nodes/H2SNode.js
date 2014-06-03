// Copyright 2002-2014, University of Colorado

/**
 * H2S Molecule
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( Node, function H2SNode( options ) {
    Node.call( this );

    // atom nodes
    var smallLeftNode = new AtomNode( Element.H, options );
    var smallRightNode = new AtomNode( Element.H, options );
    var bigNode = new AtomNode( Element.S, options );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( bigNode );
    parentNode.addChild( smallLeftNode );
    parentNode.addChild( smallRightNode );

    // layout
    var x = 0;
    var y = 0;
    bigNode.setTranslation( x, y );
    x = bigNode.left;
    y = bigNode.bottom - ( 0.25 * bigNode.height );
    smallLeftNode.setTranslation( x, y );
    x = bigNode.right;
    y = smallLeftNode.y;
    smallRightNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );
