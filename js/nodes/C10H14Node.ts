// Copyright 2013-2022, University of Colorado Boulder

/**
 * C10H14 Molecule
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
export type C10H14NodeOptions = SelfOptions & MoleculeNodeOptions;

export default class C10H14Node extends MoleculeNode {

  public constructor( providedOptions?: C10H14NodeOptions ) {

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
    const sideC1Node = new AtomNode( Element.C, merge( {
      centerX: topRightNode.centerX + ( 0.67 * topRightNode.width ),
      centerY: topRightNode.centerY - ( 0.67 * topRightNode.width )
    }, atomNodeOptions ) );
    const sideC2Node = new AtomNode( Element.C, merge( {
      centerX: sideC1Node.centerX + ( 0.67 * sideC1Node.width ),
      centerY: sideC1Node.centerY + ( 0.67 * sideC1Node.width )
    }, atomNodeOptions ) );
    const sideH1Node = new AtomNode( Element.H, merge( {
      centerX: sideC1Node.centerX - ( 0.33 * sideC1Node.width ),
      centerY: sideC1Node.centerY - ( 0.5 * sideC1Node.width )
    }, atomNodeOptions ) );
    const sideH2Node = new AtomNode( Element.H, merge( {
      centerX: sideC1Node.centerX +  ( 0.33 * sideC1Node.width ),
      centerY: sideC1Node.centerY - ( 0.5 * sideC1Node.width )
    }, atomNodeOptions ) );
    const sideC3Node = new AtomNode( Element.C, merge( {
      centerX: sideC2Node.centerX + ( 0.67 * sideC2Node.width ),
      centerY: sideC2Node.centerY + ( 0.67 * sideC2Node.width )
    }, atomNodeOptions ) );
    const sideC4Node = new AtomNode( Element.C, merge( {
      centerX: sideC2Node.centerX + ( 0.67 * sideC2Node.width ),
      centerY: sideC2Node.centerY - ( 0.67 * sideC2Node.width )
    }, atomNodeOptions ) );
    const H1Node = new AtomNode( Element.H, merge( {
      centerX: sideC3Node.centerX + (0.5 * sideC3Node.width ),
      centerY: sideC3Node.bottom - (0.25 * sideC3Node.width )
    }, atomNodeOptions ) );
    const H2Node = new AtomNode( Element.H, merge( {
      centerX: sideC3Node.centerX - (0.1 * sideC3Node.width ),
      centerY: sideC3Node.bottom + (0 * sideC3Node.width )
    }, atomNodeOptions ) );
    const H3Node = new AtomNode( Element.H, merge( {
      centerX: sideC3Node.centerX + (0.5 * sideC3Node.width ),
      centerY: sideC3Node.top + (0.15 * sideC3Node.width )
    }, atomNodeOptions ) );
    const H4Node = new AtomNode( Element.H, merge( {
      centerX: sideC4Node.centerX + (0.5 * sideC4Node.width ),
      centerY: sideC4Node.bottom - (0.25 * sideC4Node.width )
    }, atomNodeOptions ) );
    const H5Node = new AtomNode( Element.H, merge( {
      centerX: sideC4Node.centerX - (0.15 * sideC4Node.width ),
      centerY: sideC4Node.top + (0 * sideC4Node.width )
    }, atomNodeOptions ) );
    const H6Node = new AtomNode( Element.H, merge( {
      centerX: sideC4Node.centerX + (0.5 * sideC4Node.width ),
      centerY: sideC4Node.top + (0.15 * sideC4Node.width )
    }, atomNodeOptions ) );
    const H7Node = new AtomNode( Element.H, merge( {
      centerX: sideC2Node.centerX - (0.33 * sideC2Node.width ),
      centerY: sideC2Node.centerY + (0.33 * sideC2Node.width )
    }, atomNodeOptions ) );
    const atomNodes = [ topNode, topRightNode, rightNode, bottomNode, bottomLeftNode, leftNode,
                        smallTopNode, smallRightNode, smallBottomNode, smallBottomLeftNode, smallLeftNode,
                        sideH1Node, sideC1Node, H7Node, sideC2Node, sideH2Node, H1Node, sideC3Node, H6Node, sideC4Node,
                        H2Node, H3Node, H4Node, H5Node ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'C10H14Node', C10H14Node );
