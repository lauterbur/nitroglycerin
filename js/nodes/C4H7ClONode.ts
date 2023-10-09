// Copyright 2013-2022, University of Colorado Boulder

/**
 * C4H7ClO Molecule
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
export type C4H7ClONodeOptions = SelfOptions & MoleculeNodeOptions;

export default class C4H7ClONode extends MoleculeNode {

  public constructor( providedOptions?: C4H7ClONodeOptions ) {

    const atomNodeOptions = providedOptions?.atomNodeOptions;

    // atoms
    const middleNode = new AtomNode (Element.C, atomNodeOptions );
    const leftNode = new AtomNode( Element.C, merge( {
      centerX: middleNode.left - ( 0.25 * middleNode.width ),
      centerY: middleNode.top + (0.25 * middleNode.width )
    }, atomNodeOptions ) );
    const bottomNode = new AtomNode( Element.C, merge( {
      centerX: middleNode.centerX,
      centerY: middleNode.bottom + (0.25 * middleNode.width )
    }, atomNodeOptions ) );
    const rightNode = new AtomNode( Element.C, merge( {
      centerX: middleNode.right + ( 0.25 * middleNode.width ),
      centerY: middleNode.top + (0.25 * middleNode.width )
    }, atomNodeOptions ) );
    const ClNode = new AtomNode( Element.Cl, merge( {
      centerX: rightNode.right + ( 0.25 * rightNode.width ),
      centerY: rightNode.bottom - (0.25 * rightNode.width )
    }, atomNodeOptions ) );
    const ONode = new AtomNode( Element.O, merge( {
      centerX: rightNode.centerX,
      centerY: rightNode.top - (0.25 * rightNode.width )
    }, atomNodeOptions ) );
    const H1Node = new AtomNode( Element.H, merge( {
      centerX: leftNode.top - (0.25 * leftNode.width ),
      centerY: leftNode.top
    }, atomNodeOptions ) );
    const H2Node = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX - (0.5 * leftNode.width ),
      centerY: leftNode.centerY
    }, atomNodeOptions ) );
    const H3Node = new AtomNode( Element.H, merge( {
      centerX: leftNode.centerX - (0.25 * leftNode.width ),
      centerY: leftNode.bottom
    }, atomNodeOptions ) );
    const H4Node = new AtomNode( Element.H, merge( {
      centerX: bottomNode.centerX,
      centerY: bottomNode.bottom
    }, atomNodeOptions ) );
    const H5Node = new AtomNode( Element.H, merge( {
      centerX: bottomNode.centerX + (0.5 * leftNode.width ),
      centerY: bottomNode.bottom - (0.25 * leftNode.width )
    }, atomNodeOptions ) );
    const H6Node = new AtomNode( Element.H, merge( {
      centerX: bottomNode.centerX - (0.5 * leftNode.width ),
      centerY: bottomNode.bottom - (0.25 * leftNode.width )
    }, atomNodeOptions ) );
    const H7Node = new AtomNode( Element.H, merge( {
      centerX: middleNode.centerX,
      centerY: middleNode.top
    }, atomNodeOptions ) );

    const atomNodes = [ H7Node, middleNode, H2Node, leftNode, 
                        H3Node, H4Node, bottomNode, H5Node,
                        H6Node, rightNode, ClNode, ONode,
                        H1Node ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'C4H7ClONode', C4H7ClONode );
