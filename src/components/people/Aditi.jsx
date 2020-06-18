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
      Aditi Partha
    </h1>
    <p>
      <i>
        Born in Pondicherry, I studied at the Sri Aurobindo International Centre
        of Education and graduated in 2019 in Political Science, History, and
        International Relations. In an environment which focused on integral
        education, I came out brimming with questions and seeking answers about
        human unity and humanity at large.
      </i>
    </p>
    <p>
      <i>
        A self-dubbed extroverted introvert, I was introduced to Restorative
        Auroville and their approach to conflict and was instantly drawn to it.
        Conflict has been something I tend to avoid because of the “baggage” it
        comes with. But here is a platform whose approach to conflict is
        organic, and that tries to understand it holistically and ultimately,
        through the power of dialogue, transform the person/group/community that
        is faced with it.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        By volunteering with Restorative Auroville, I have the fortune of
        observing as well as participating in workshops and have witnessed and
        been impacted by the transformative power of NVC and RCs. It continues
        to enrich me enormously in understanding conflict resolution. Everyday
        brings in something new, and if there is one thing I am learning, it is
        that learning here never stops!
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
