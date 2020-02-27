// Copyright 2013-2019, University of Colorado Boulder

/**
 * P4 Molecule
 * Structure is tetrahedral
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Node from '../../../scenery/js/nodes/Node.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

/**
 * @param {Object} [options]
 * @constructor
 */
function P4Node( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const topNode = new AtomNode( Element.P, options.atomOptions );
  const bottomLeftNode = new AtomNode( Element.P, merge( {
    centerX: topNode.left + ( 0.3 * topNode.width ),
    centerY: topNode.bottom + ( 0.2 * topNode.width )
  }, options.atomOptions ) );
  const bottomRightNode = new AtomNode( Element.P, merge( {
    centerX: topNode.right,
    centerY: topNode.bottom
  }, options.atomOptions ) );
  const bottomBackNode = new AtomNode( Element.P, merge( {
    centerX: topNode.left,
    centerY: topNode.centerY + ( 0.2 * topNode.height )
  }, options.atomOptions ) );

  options.children = [ new Node( {
    children: [ bottomBackNode, bottomRightNode, bottomLeftNode, topNode ],
    center: Vector2.ZERO // origin at geometric center
  } ) ];
  Node.call( this, options );
}

nitroglycerin.register( 'P4Node', P4Node );

inherit( Node, P4Node );
export default P4Node;