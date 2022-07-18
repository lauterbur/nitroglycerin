// Copyright 2013-2020, University of Colorado Boulder

/**
 * CS2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EmptyObjectType from '../../../phet-core/js/types/EmptyObjectType.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import HorizontalMoleculeNode, { HorizontalMoleculeNodeOptions } from './HorizontalMoleculeNode.js';

type SelfOptions = EmptyObjectType;
export type CS2NodeOptions = SelfOptions & HorizontalMoleculeNodeOptions;

export default class CS2Node extends HorizontalMoleculeNode {

  public constructor( providedOptions?: CS2NodeOptions ) {
    super( [ Element.S, Element.C, Element.S ], providedOptions );
  }
}

nitroglycerin.register( 'CS2Node', CS2Node );