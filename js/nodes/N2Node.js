// Copyright 2013-2015, University of Colorado Boulder

/**
 * N2 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Element = require( 'NITROGLYCERIN/Element' );
  const HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const nitroglycerin = require( 'NITROGLYCERIN/nitroglycerin' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function N2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.N, Element.N ], options );
  }

  nitroglycerin.register( 'N2Node', N2Node );

  return inherit( HorizontalMoleculeNode, N2Node );
} );
