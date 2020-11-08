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
      Nils Johansson
    </h1>
    <p>
      <strong>Co-Facilitator & Past Core Team Member</strong>
      <br />
      <strong>2019 - Present</strong>
      <br />
      <i style={{ display: 'block', marginTop: 10 }}>
        Hello, I’m Nils and I’m excited writing this! The reason I'm a part of
        Restorative Auroville is my long quest for freedom.
      </i>
    </p>
    <p>
      <i>
        It all started with a YouTube channel that I created in 2011. I was
        filming and publicly sharing myself facing my own fears and
        insecurities. This lead me on a path to help others overcome their fears
        through coaching, workshops and inspirational lectures.
      </i>
    </p>
    <p>
      <i>
        In 2014, my search for freedom had deepened and turned into a spiritual
        journey. Divine Anarchy and Auroville resonated and I relocated from
        Sweden to Auroville with questions such as: “What support do we need to
        live freely in harmony with all life?”
      </i>
    </p>
    <p>
      <i>
        Through my experiences with coaching and practicing Nonviolent
        Communication, my belief is that the best support anyone can give is
        simply to gently accompanying someone on their journey back to
        themselves.
      </i>
    </p>
    <p>
      <i>
        This is the type of support I can see Restorative Circles offer the
        community. Rather than imposing solutions it seeks to hold space and
        gently accompany us back to the reason we decided to join a project of
        unity in the first place. When we have differences in opinion or find
        ourselves in conflict, Restorative Circles help us hear the other side.
        Then, if we truly see the deeper needs behind the other side, what
        initially looked like our difference is actually showing us our unity.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        To me, Restorative Circles supports and reminds us to look at conflict
        as a part of our yoga. I’m excited to grow with and contribute to this
        work!
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
