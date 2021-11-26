// Copyright 2013-2021, University of Colorado Boulder

/**
 * C2H5Cl Molecule
 * Structure is similar to C2H6, but with Cl replacing one of the H's.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import { Node } from '../../../scenery/js/imports.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class C2H5ClNode extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const leftNode = new AtomNode( Element.C, options.atomOptions );
    const centerNode = new AtomNode( Element.C, merge( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, options.atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: smallTopLeftNode.centerX,
      centerY: leftNode.bottom
    }, options.atomOptions ) );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, options.atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, options.atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, merge( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.Cl, merge( {
      left: centerNode.centerX + ( 0.11 * leftNode.width ),
      centerY: centerNode.centerY
    }, options.atomOptions ) );

    assert && assert( !options.children, 'C2H5ClNode sets children' );
    options.children = [ new Node( {
      children: [
        smallBottomRightNode, smallTopRightNode, centerNode, rightNode,
        smallLeftNode, leftNode, smallBottomLeftNode, smallTopLeftNode
      ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'C2H5ClNode', C2H5ClNode );
export default C2H5ClNode;