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
      Anne Terlouw
    </h1>
    <p style={{ marginBottom: 0 }}>
      <i>
        I was born and raised in Holland, where life brought me to study
        Architectural Engineering. After a few years I felt this study wasn’t
        giving me the life energy and peace that it could give me. To become
        inspired again I felt the longing to travel. A yoga teacher training,
        Vipassana and exploring India and Nepal made me discover a new side of
        myself: a calm, loving and more aware one. I felt that I’m naturally
        drawn towards supporting others, and that to facilitate that space, I
        should start with taking good care of myself first. Back home I started
        working as a restaurant manager and barista, and next to that I could
        delve into different ways of practicing and teaching yoga and
        meditation. I got inspired by different forms of movement and
        meditation, photography, Shamanism and Qi Gong, and when I arrived in
        Auroville in the beginning of 2019 another dimension came up for me: a
        new way of listening. Exploring my way of listening through following
        the Integral Sound Healing Training at Svaram, I noticed a deeper
        longing for connection with my own feelings and needs. That’s why
        meeting L’aura and the Restorative Auroville team feels like a natural
        next step in this always evolving life. I feel blessed to combine this
        life experience with Nonviolent Communication so we can create a space
        where we support each other back to our inner being. Through applying
        Restorative Circles in our community we can hear our own and others'
        needs more clearly. By listening to the deeper meaning behind the words
        we can find the Unity that is already within us. With experiencing this
        Unity we can find the beauty in every conflict. I believe that conflict
        is only inviting us to become more aware of ourselves.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
