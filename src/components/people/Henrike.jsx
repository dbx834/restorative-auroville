// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Person */
const Person = ({ show = true }) => (
  <div>
    <h1 className="mask-h4">
      Henrike Prudon
      <Fragment>{show === true && '– Core Team Member'}</Fragment>
    </h1>
    <p>
      I was born and raised in Holland, where I studied Anthropology and Law. In
      this time, I did some research into restorative justice models as they are
      found among native groups around the world. I was fascinated and convinced
      of the basic principles, but unsure whether these systems can still be
      relevant for communities that are bigger, less interdependent.
    </p>
    <p style={{ marginBottom: 0 }}>
      When I came to settle in Auroville in 2017, I realized that the work of
      Restorative Auroville would be my chance to see how a restorative justice
      system might emerge outside of traditional ethnic groups. Auroville is
      still a relatively small community, but there are very few ‘set’ ways of
      doing things together. This provides an amazing opportunity to try and
      move towards a sense of justice that supports the whole community
      well-being. I am happy to work and do my small part to make it happen!
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
