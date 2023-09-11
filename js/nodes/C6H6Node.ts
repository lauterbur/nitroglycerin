// Copyright 2013-2022, University of Colorado Boulder

/**
 * C6H6 Molecule
 *
 * @author M. Elise Lauterbur after Chris Malley (PixelZoom, Inc.)
 */

import merge from '../../../phet-core/js/merge.js';
import { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';
import MoleculeNode, { MoleculeNodeOptions } from './MoleculeNode.js';

type SelfOptions = EmptySelfOptions;
export type C6H6NodeOptions = SelfOptions & MoleculeNodeOptions;

export default class C6H6Node extends MoleculeNode {

  public constructor( providedOptions?: C6H6NodeOptions ) {

    const atomNodeOptions = providedOptions?.atomNodeOptions;

    // atoms
    const topNode = new AtomNode( Element.C, atomNodeOptions );
    const smallTopNode = new AtomNode( Element.H, merge( {
      centerX: topNode.centerX ,
      centerY: topNode.top - ( 0.25 * topNode.width )
    }, atomNodeOptions ) );
    const topRightNode = new AtomNode( Element.C, merge( {
      centerX: topNode.centerX + ( 0.67 * topNode.width ),
      centerY: topNode.bottom
    }, atomNodeOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, merge( {
      centerX: topRightNode.centerX + ( 0.5 * topRightNode.width ),
      centerY: topRightNode.centerY - ( 0.5 * topRightNode.width )
    }, atomNodeOptions ) );
    const rightNode = new AtomNode( Element.C, merge( {
      centerX: topRightNode.centerX ,
      centerY: topRightNode.bottom
    }, atomNodeOptions ) );
    const smallRightNode = new AtomNode( Element.H, merge( {
      centerX: rightNode.centerX + ( 0.5 * rightNode.width ),
      centerY: rightNode.centerY + ( 0.5 * rightNode.width )
    }, atomNodeOptions ) );
    const bottomNode = new AtomNode( Element.C, merge( {
      centerX: rightNode.centerX - ( 0.67 * rightNode.width ),
      centerY: rightNode.bottom
    }, atomNodeOptions ) );
    const smallBottomNode = new AtomNode( Element.H, merge( {
      centerX: bottomNode.centerX ,
      centerY: bottomNode.top + ( 1 * bottomNode.width )
    }, atomNodeOptions ) );
    const bottomLeftNode = new AtomNode( Element.C, merge( {
      centerX: bottomNode.centerX - ( 0.67 * bottomNode.width ),
      centerY: bottomNode.top
    }, atomNodeOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, merge( {
      centerX: bottomLeftNode.centerX - ( 0.5 * bottomLeftNode.width ),
      centerY: bottomLeftNode.centerY + ( 0.5 * bottomLeftNode.width )
    }, atomNodeOptions ) );
    const leftNode = new AtomNode( Element.C, merge( {
      centerX: bottomLeftNode.centerX ,
      centerY: bottomLeftNode.top
    }, atomNodeOptions ) );
    const smallLeftNode = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX - ( 0.5 * leftNode.width ),
      centerY: leftNode.centerY - ( 0.5 * leftNode.width )
    }, atomNodeOptions ) );

    const atomNodes = [ topNode, topRightNode, rightNode, bottomNode, bottomLeftNode, leftNode,
                        smallTopNode, smallTopRightNode, smallRightNode, smallBottomNode, smallBottomLeftNode, smallLeftNode ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'C6H6Node', C6H6Node );
