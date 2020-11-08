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
      Anand Shanti
    </h1>
    <p>
      <strong>Co-Founder & Past Core Team Member</strong>
      <br />
      <strong>2010 - 2018</strong>
      <br />
      <i style={{ display: 'block', marginTop: 10 }}>
        I was one of the core group of people who started learning about
        Restorative Circles in 2010 when L'aura returned from a training with
        Dominic Barter, the man who created this work. I felt immediately in
        tune with it and saw its great potential for Auroville.{' '}
      </i>
    </p>
    <p>
      <i>
        I value that the structure of Restorative Circles includes people from
        all sides of a conflict in one room so that everyone has the opportunity
        to speak, to be heard, and to gain new understanding, often being
        touched by others in the circle in unexpected ways.{' '}
      </i>
    </p>
    <p>
      <i>
        It reminded me of what I have read about indigenous peoples' way of
        dealing with conflict by sitting in a circle and sharing, human to
        human. Listening to each other, and reflecting what we hear the other
        person say can change us.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        My background in psychotherapy plus family constellation facilitation
        contributed to my understanding of the ways that this work is systemic.
        It challenges our understanding of each of us as separate persons and it
        challenges the institutions we have built based on separateness. If we
        let it, it can shift our way of being together; it can take us from
        separateness to wholeness.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
