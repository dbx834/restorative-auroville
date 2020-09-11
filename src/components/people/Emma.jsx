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
    <h1 className="mask-h4" style={{ fontWeight: 700 }}>
      Emma Palmer
    </h1>
    <p>
      <strong>Facilitator</strong>
      <br />
      <strong>2019 - Present</strong>
      <br />
      <br />
      <i>
        "Restore connection, as broken connection is the reason why we did
        something painful from the start." When I heard this sentence at my
        first Restorative Circle workshop, it immediately resonated with me and
        I realised that it symbolises what has become a central point in my
        life.
      </i>
    </p>
    <p>
      <i>
        I’m Emma and I feel deeply about reconnecting myself with where we come
        from, our interconnectedness with nature, and restoring connection
        between people and in community.
      </i>
    </p>
    <p>
      <i>
        That is beauty for me. The willingness to go beyond words and actions
        and get in touch with and touched by the humanity in all of us.
      </i>
    </p>
    <p>
      <i>
        I was born in Sweden in 1983. Following my longing to contribute to and
        be part of a multicultural environment, I left Sweden for a masters
        degree at Hawaii Pacific University. I continued my journey by
        co-founding a company working with quality and social compliance in
        textile factories in China, India and East Europe. I arrived in
        Auroville for the first time in 2014 and have since then called this
        home. Auroville constantly reminds me of where we come from, where we
        are at in the present moment, and what we are aspiring and moving
        towards.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        On top of that, I love acroyoga as a playful way of creating connection
        between people while moving, releasing and getting energy.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
