// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Person */
const Person = () => (
  <div>
    <h1 className="mask-h4" style={{ fontWeight: 700 }}>
      Kati Hötger
    </h1>
    <p>
      <strong>Core Team Member</strong>
      <br />
      <strong>2015 - Present</strong>
      <br />
      <br />
      <i>
        I was born, raised and educated in Germany. Based in the city of Köln
        (Cologne) for 44 years, I made my professional career as a director for
        documentaries and was active in building up a cooperative, independent
        film culture in Germany.
      </i>
    </p>
    <p>
      <i>
        After 25 years of filmmaking my personal change came about by attending
        a training in conflict resolution and civil peace service. I was very
        inspired by this intense learning over several months, and felt
        immediately how it met my longing to contribute to society and community
        on a deeper human level. Two long-term assignments in (post-)conflict
        countries (3 years in Sri Lanka and 18 months in Georgia/Central Asia)
        proved that I was on the right track.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        Learning and implementing Restorative Circles with L'aura and the
        Restorative Auroville team is another milestone in my never-ending
        learning process. I feel blessed that I can join our steps towards a
        justice system for Auroville, where connection is more important than
        punishment.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
