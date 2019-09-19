// Copyright 2013-2015, University of Colorado Boulder

/**
 * CO2 Molecule
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
  function CO2Node( options ) {
    HorizontalMoleculeNode.call( this, [ Element.O, Element.C, Element.O ], options );
  }

  nitroglycerin.register( 'CO2Node', CO2Node );

  return inherit( HorizontalMoleculeNode, CO2Node );
} );
