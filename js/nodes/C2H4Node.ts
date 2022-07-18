// Copyright 2013-2022, University of Colorado Boulder

/**
 * C2H4 Molecule
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
export type C2H4NodeOptions = SelfOptions & MoleculeNodeOptions;

export default class C2H4Node extends MoleculeNode {

  public constructor( providedOptions?: C2H4NodeOptions ) {

    const atomOptions = providedOptions?.atomNodeOptions;

    // atoms
    const bigLeftNode = new AtomNode( Element.C, atomOptions );
    const smallOffset = 0.165 * bigLeftNode.width;
    const bigRightNode = new AtomNode( Element.C, combineOptions<AtomNodeOptions>( {
      left: bigLeftNode.centerX + ( 0.25 * bigLeftNode.width ),
      centerY: bigLeftNode.centerY
    }, atomOptions ) );
    const smallTopLeftNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.top + smallOffset
    }, atomOptions ) );
    const smallTopRightNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.top + smallOffset
    }, atomOptions ) );
    const smallBottomLeftNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: bigLeftNode.left + smallOffset,
      centerY: bigLeftNode.bottom - smallOffset
    }, atomOptions ) );
    const smallBottomRightNode = new AtomNode( Element.H, combineOptions<AtomNodeOptions>( {
      centerX: bigRightNode.right - smallOffset,
      centerY: bigRightNode.bottom - smallOffset
    }, atomOptions ) );

    const atomNodes = [
      smallTopRightNode, smallTopLeftNode,
      bigLeftNode, bigRightNode,
      smallBottomLeftNode, smallBottomRightNode
    ];

    super( atomNodes, providedOptions );
  }
}

nitroglycerin.register( 'C2H4Node', C2H4Node );