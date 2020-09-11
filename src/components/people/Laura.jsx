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
      L'aura Joy
    </h1>
    <p>
      <strong>Founder</strong>
      <br />
      <strong>2010 - Present</strong>
      <br />
      <br />
      <i>
        I was born and raised in Auroville, and life has lead me to work with
        nonviolence, peace and justice. I went to university to become a high
        school teacher and proceeded to teach for 6 years (3 in Canada, 3 in
        Auroville). But I somehow didn’t find this work as fulfilling as I had
        expected, so I quit, not knowing what was coming next. In 2007, I
        serendipitously ended up in a Nonviolent Communication workshop, and
        this was the beginning of a new passion and career.
      </i>
    </p>
    <p>
      <i>
        A little while later, a friend told me about Dominic Barter’s work and
        that “he was bringing Nonviolent Communication to prisons.” Although I
        had no formal connection to the world of crime and justice, I was
        immediately inspired and decided to attend a Restorative Circles
        training with Dominic in Atlanta, USA in October 2010. What I discovered
        was a whole new paradigm, and an absolutely transformative perspective
        into conflict and community.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        Given my NVC background and having grown up and lived most of my life in
        community, engaging with Restorative Circles felt like a natural next
        step – immersing myself and applying these principles into a dynamic,
        living system. I couldn’t have found a more meaningful way to give back
        to Auroville.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
