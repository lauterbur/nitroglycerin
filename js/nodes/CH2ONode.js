// Copyright 2013-2019, University of Colorado Boulder

/**
 * CH2O Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  const Element = require( 'NITROGLYCERIN/Element' );
  const inherit = require( 'PHET_CORE/inherit' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function CH2ONode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var leftNode = new AtomNode( Element.C, options.atomOptions );
    var smallOffset = 0.165 * leftNode.width;
    var rightNode = new AtomNode( Element.O, _.extend( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    var smallTopNode = new AtomNode( Element.H, _.extend( {
      centerX: leftNode.left + smallOffset,
      centerY: leftNode.top + smallOffset
    }, options.atomOptions ) );
    var smallBottomNode = new AtomNode( Element.H, _.extend( {
      centerX: smallTopNode.centerX,
      centerY: leftNode.bottom - smallOffset
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallTopNode, leftNode, rightNode, smallBottomNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  nitroglycerin.register( 'CH2ONode', CH2ONode );

  return inherit( Node, CH2ONode );
} );
