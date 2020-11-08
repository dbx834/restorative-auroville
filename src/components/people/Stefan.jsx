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
      Stefan Gebert
    </h1>
    <p>
      <strong>Apprentice</strong>
      <br />
      <strong>2018 - Present</strong>
      <br />
      <i style={{ display: 'block', marginTop: 10 }}>
        With a background in sociology and psychology (in Germany), I found my
        passion and profession in the field of group facilitation and leadership
        coaching. Being keen to permanently live in community, my family and I
        moved to Auroville in the summer of 2016.
      </i>
    </p>
    <p>
      <i>
        I experience the Restorative Circle process like an invisible hand that
        can hold all of us, whatever state of anger, shame, longing for
        resolution or even punishment we might find ourselves in. Its structure
        plainly guides us into a space that is beyond blame and guilt, into a
        space in which we start trusting in everyone’s humanity. How refreshing!
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        It seems true to me that staying skillfully in conflict is one of our
        most untapped potentials for transformation as humans. I am learning to
        facilitate Restorative Circles, because I find this process
        incorruptible and also surprisingly simple - this is what allows deep
        and honest conversations to actually happen. And I am hopeful that each
        Circle creates a high possibility for us to walk out with more inner
        acceptance, fresh ideas and energy for the way forward.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
