// Copyright 2002-2014, University of Colorado

/**
 * C2H5OH Molecule
 * Structure is similar to C2H6, but with OH replacing one of the H's.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( Node, function C2H5OHNode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    Node.call( this );

    // atom nodes
    var leftNode = new AtomNode( Element.C, options.atomOptions );
    var centerNode = new AtomNode( Element.C, options.atomOptions );
    var smallTopLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallLeftNode = new AtomNode( Element.H, options.atomOptions );
    var smallTopRightNode = new AtomNode( Element.H, options.atomOptions );
    var smallBottomRightNode = new AtomNode( Element.H, options.atomOptions );
    var rightNode = new AtomNode( Element.O, options.atomOptions );
    var smallRightNode = new AtomNode( Element.H, options.atomOptions );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( smallBottomRightNode );
    parentNode.addChild( smallTopRightNode );
    parentNode.addChild( centerNode );
    parentNode.addChild( smallRightNode );
    parentNode.addChild( rightNode );
    parentNode.addChild( smallLeftNode );
    parentNode.addChild( leftNode );
    parentNode.addChild( smallBottomLeftNode );
    parentNode.addChild( smallTopLeftNode );

    // layout
    var x = 0;
    var y = 0;
    leftNode.setTranslation( x, y );
    x = leftNode.right + ( 0.25 * centerNode.width );
    y = leftNode.y;
    centerNode.setTranslation( x, y );
    x = leftNode.x;
    y = leftNode.top;
    smallTopLeftNode.setTranslation( x, y );
    x = smallTopLeftNode.x;
    y = leftNode.bottom;
    smallBottomLeftNode.setTranslation( x, y );
    x = leftNode.left;
    y = leftNode.y;
    smallLeftNode.setTranslation( x, y );
    x = centerNode.x;
    y = centerNode.top;
    smallTopRightNode.setTranslation( x, y );
    x = centerNode.x;
    y = centerNode.bottom;
    smallBottomRightNode.setTranslation( x, y );
    x = centerNode.right;
    y = centerNode.y;
    rightNode.setTranslation( x, y );
    x = rightNode.right;
    y = rightNode.y;
    smallRightNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );
