// Copyright 2013-2022, University of Colorado Boulder

/**
 * C2H5OH Molecule
 * Structure is similar to C2H6, but with OH replacing one of the H's.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { combineOptions } from '../../../phet-core/js/optionize.js';
import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode, { AtomNodeOptions } from './AtomNode.js';
import MoleculeNode, { MoleculeNodeOptions } from './MoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type C2H5OHNodeOptions = SelfOptions & MoleculeNodeOptions;

export default class C2H5OHNode extends MoleculeNode {

  public constructor( providedOptions?: C2H5OHNodeOptions ) {

    const atomOptions = providedOptions?.atomNodeOptions;

    // atoms
    const leftNode = new AtomNode( Element.C, atomOptions );
    const centerNode = new AtomNode( Element.C, combineOptions<AtomNodeOptions>( {
      centerX: leftNode.right + ( 0.25 * leftNode.width ),
      centerY: leftNode.centerY
    }, atomOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: leftNode.centerX,
      centerY: leftNode.top
    }, atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: smallTopLeftNode.centerX,
      centerY: leftNode.bottom
    }, atomOptions ) );
    const smallLeftNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: leftNode.left,
      centerY: leftNode.centerY
    }, atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: centerNode.centerX,
      centerY: centerNode.top
    }, atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: centerNode.centerX,
      centerY: centerNode.bottom
    }, atomOptions ) );
    const rightNode = new AtomNode( Element.O, combineOptions<AtomNodeOptions>( {
      centerX: centerNode.right,
      centerY: centerNode.centerY
    }, atomOptions ) );
    const smallRightNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: rightNode.right,
      centerY: rightNode.centerY
    }, atomOptions ) );

    const atomNodes = [
      smallBottomRightNode, smallTopRightNode, centerNode, smallRightNode, rightNode,
      smallLeftNode, leftNode, smallBottomLeftNode, smallTopLeftNode
    ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'C2H5OHNode', C2H5OHNode );