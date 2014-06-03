// Copyright 2002-2014, University of Colorado

/**
 * P4 Molecule
 * Structure is tetrahedral
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

  return inherit( Node, function P4Node() {
    Node.call( this );

    // atom nodes
    var topNode = new AtomNode( Element.P );
    var bottomLeftNode = new AtomNode( Element.P );
    var bottomRightNode = new AtomNode( Element.P );
    var bottomBackNode = new AtomNode( Element.P );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( bottomBackNode );
    parentNode.addChild( bottomRightNode );
    parentNode.addChild( bottomLeftNode );
    parentNode.addChild( topNode );

    // layout
    var x = 0;
    var y = 0;
    topNode.setTranslation( x, y );

    x = topNode.left + ( 0.3 * topNode.width );
    y = topNode.bottom + ( 0.2 * topNode.width );
    bottomLeftNode.setTranslation( x, y );

    x = topNode.right;
    y = topNode.bottom;
    bottomRightNode.setTranslation( x, y );

    x = topNode.left;
    y = topNode.centerY + ( 0.2 * topNode.height );
    bottomBackNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );
