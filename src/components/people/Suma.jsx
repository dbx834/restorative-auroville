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
      Suma Houldsworth
      <Fragment>{show === true && ' – Core Team Member'}</Fragment>
    </h1>
    <p>
      I am a lifelong dreamer, learner and explorer, asking questions even if
      I’m not voicing them. Lately, many of my questions are about nada yoga,
      connecting to self and community, and culture-creation. Born into a
      farming community near Coimbatore, I moved to America as a young child and
      had been working to make the Washington, DC metro area home for 20 years.
      My ever-present and ever-evolving questions eventually lead me to move to
      Auroville in 2019. Soon after my move L’aura’s work caught my attention:
      NVC immediately changed the way I approach difficult conversations in my
      personal life and I was in awe of RC’s transformative potential for a
      community.
    </p>
    <p style={{ marginBottom: 0 }}>
      I’m incredibly excited to be a part of something with the power and intent
      to strengthen the bonds of community and reshape the lens with which we
      view conflicts.
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
