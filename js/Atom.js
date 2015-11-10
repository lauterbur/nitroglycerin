// Copyright 2013-2015, University of Colorado Boulder

/**
 * Object for actual element properties (symbol, radius, etc.)
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Element = require( 'NITROGLYCERIN/Element' );

  var idCounter = 1;

  var Atom = function( element ) {
    this.element = element;
    this.symbol = element.symbol;
    this.covalentRadius = element.covalentRadius;
    this.covalentDiameter = element.covalentRadius * 2;
    this.electronegativity = element.electronegativity;
    this.atomicWeight = element.atomicWeight;
    this.color = element.color;

    // IDs for uniqueness and fast lookups
    this.reference = (idCounter++).toString( 16 );
    this.id = this.symbol + '_' + this.reference;
  };

  return inherit( Object, Atom, {

    // @public
    hasSameElement: function( atom ) {
      return this.element.isSameElement( atom.element );
    },

    // @public
    isHydrogen: function() {
      return this.element.isHydrogen();
    },

    // @public
    isCarbon: function() {
      return this.element.isCarbon();
    },

    // @public
    isOxygen: function() {
      return this.element.isOxygen();
    },

    // @public
    toString: function() {
      return this.symbol;
    }
  }, {

    // @public @static
    createAtomFromSymbol: function( symbol ) {
      return new Atom( Element.getElementBySymbol( symbol ) );
    }
  } );
} );
