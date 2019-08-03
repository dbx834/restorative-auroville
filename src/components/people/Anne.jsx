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
      Anne Terlouw
      <Fragment>{show === true && ' – Apprentice'}</Fragment>
    </h1>
    <p>
      <i>
        Holland has been my home where I was born and raised. I’m naturally
        drawn towards supporting others by creating a space where they can
        connect back with their inner self. I’m there to make them more aware of
        themselves, whether this is through movement, meditation or a
        conversation. When I arrived in Auroville beginning 2019 I discovered a
        new dimension: our way of listening. Focusing on this so we can connect
        on a deeper level behind the words, through our heart.
      </i>
    </p>
    <p>
      <i>
        My need for a deeper connection with my own feelings brought me to
        L’aura and the Restorative Auroville team. Through applying Restorative
        Circles in our community we can create a space where we support each
        other back to our inner being. From there we can’t only hear our own
        needs, but also hear the needs of the other side more clearly. I believe
        that when we listen to the deeper meaning behind the words we can find
        the Unity that is already within all of us. With experiencing this Unity
        we can find the beauty in our conflicts, they’re only there to make us
        more aware.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        I feel blessed to have the opportunity to contribute and learn through
        this process towards a justice system for Auroville where connection is
        more important than punishment.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
