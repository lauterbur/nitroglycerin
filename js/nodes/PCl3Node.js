// Copyright 2002-2015, University of Colorado

/**
 * PCl3 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Element = require( 'NITROGLYCERIN/Element' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function PCl3Node( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    // atom nodes
    var centerNode = new AtomNode( Element.P, options.atomOptions );
    var leftNode = new AtomNode( Element.Cl, options.atomOptions );
    var rightNode = new AtomNode( Element.Cl, options.atomOptions );
    var bottomNode = new AtomNode( Element.Cl, options.atomOptions );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( leftNode );
    parentNode.addChild( rightNode );
    parentNode.addChild( centerNode );
    parentNode.addChild( bottomNode );

    // layout
    var x = 0;
    var y = 0;
    centerNode.setTranslation( x, y );
    x = centerNode.left;
    y = centerNode.bottom - ( 0.25 * centerNode.height );
    leftNode.setTranslation( x, y );
    x = centerNode.right;
    y = leftNode.y;
    rightNode.setTranslation( x, y );
    x = centerNode.x;
    y = centerNode.bottom;
    bottomNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  }

  return inherit( Node, PCl3Node );
} );
