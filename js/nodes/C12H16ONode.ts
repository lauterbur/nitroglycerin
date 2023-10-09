// Copyright 2013-2022, University of Colorado Boulder

/**
 * C12H16O Molecule
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
export type C12H16ONodeOptions = SelfOptions & MoleculeNodeOptions;

export default class C12H16ONode extends MoleculeNode {

  public constructor( providedOptions?: C12H16ONodeOptions ) {

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
    const ONode = new AtomNode( Element.O, merge( {
      centerX: sideC1Node.centerX,
      centerY: sideC1Node.centerY - ( 0.67 * sideC1Node.width )
    }, atomNodeOptions ) );
    const sideC3Node = new AtomNode( Element.C, merge( {
      centerX: sideC2Node.centerX + ( 0.67 * sideC2Node.width ),
      centerY: sideC2Node.centerY - ( 0.67 * sideC2Node.width )
    }, atomNodeOptions ) );
    const sideC4Node = new AtomNode( Element.C, merge( {
      centerX: sideC3Node.centerX + ( 0.67 * sideC3Node.width ),
      centerY: sideC3Node.centerY + ( 0.67 * sideC3Node.width )
    }, atomNodeOptions ) );
    const sideC5Node = new AtomNode( Element.C, merge( {
      centerX: sideC4Node.centerX + ( 0.67 * sideC4Node.width ),
      centerY: sideC4Node.centerY - ( 0.67 * sideC4Node.width )
    }, atomNodeOptions ) );
    const sideC6Node = new AtomNode( Element.C, merge( {
      centerX: sideC5Node.centerX + ( 0.67 * sideC5Node.width ),
      centerY: sideC5Node.centerY + ( 0.67 * sideC5Node.width )
    }, atomNodeOptions ) );
    const H2Node = new AtomNode( Element.H, merge( {
      centerX: sideC2Node.centerX - (0.25 * sideC3Node.width ),
      centerY: sideC2Node.bottom + (0 * sideC3Node.width )
    }, atomNodeOptions ) );
    const H3Node = new AtomNode( Element.H, merge( {
      centerX: sideC2Node.centerX + (0.25 * sideC4Node.width ),
      centerY: sideC2Node.bottom + (0 * sideC4Node.width )
    }, atomNodeOptions ) );
    const H4Node = new AtomNode( Element.H, merge( {
      centerX: sideC3Node.centerX + (0.25 * sideC3Node.width ),
      centerY: sideC3Node.top - (0 * sideC3Node.width )
    }, atomNodeOptions ) );
    const H5Node = new AtomNode( Element.H, merge( {
      centerX: sideC3Node.centerX - (0.25 * sideC3Node.width ),
      centerY: sideC3Node.top + (0 * sideC3Node.width )
    }, atomNodeOptions ) );
    const H6Node = new AtomNode( Element.H, merge( {
      centerX: sideC4Node.centerX + (0.25 * sideC4Node.width ),
      centerY: sideC4Node.bottom + (0 * sideC4Node.width )
    }, atomNodeOptions ) );
    const H7Node = new AtomNode( Element.H, merge( {
      centerX: sideC4Node.centerX - (0.25 * sideC4Node.width ),
      centerY: sideC4Node.bottom + (0 * sideC4Node.width )
    }, atomNodeOptions ) );
    const H8Node = new AtomNode( Element.H, merge( {
      centerX: sideC5Node.centerX + (0.25 * sideC5Node.width ),
      centerY: sideC5Node.top + (0 * sideC5Node.width )
    }, atomNodeOptions ) );
    const H9Node = new AtomNode( Element.H, merge( {
      centerX: sideC5Node.centerX - (0.25 * sideC5Node.width ),
      centerY: sideC5Node.top + (0 * sideC5Node.width )
    }, atomNodeOptions ) );
    const H10Node = new AtomNode( Element.H, merge( {
      centerX: sideC6Node.centerX + (0.33 * sideC6Node.width ),
      centerY: sideC6Node.bottom + (0 * sideC6Node.width )
    }, atomNodeOptions ) );
    const H11Node = new AtomNode( Element.H, merge( {
      centerX: sideC6Node.centerX + (0.5 * sideC6Node.width ),
      centerY: sideC6Node.centerY - (0.33 * sideC6Node.width )
    }, atomNodeOptions ) );
    const H12Node = new AtomNode( Element.H, merge( {
      centerX: sideC6Node.centerX - (0.33 * sideC6Node.width ),
      centerY: sideC6Node.bottom + (0 * sideC6Node.width )
    }, atomNodeOptions ) );

    const atomNodes = [ topNode, topRightNode, rightNode, bottomNode, bottomLeftNode, leftNode,
                        smallTopNode, smallRightNode, smallBottomNode, smallBottomLeftNode, smallLeftNode,
                        H2Node, H4Node, H6Node, H8Node, H10Node,
                        sideC1Node, sideC2Node, ONode, sideC3Node, sideC4Node,
                        H3Node, sideC5Node, H5Node, sideC6Node, H7Node,
                        H9Node, H11Node, H12Node ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'C12H16ONode', C12H16ONode );
