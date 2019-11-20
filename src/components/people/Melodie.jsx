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
      Mélodie Baptiste
      <Fragment>{show === true && ' – Apprentice'}</Fragment>
    </h1>
    <p>
      <i>
        I’ve been working as a light technician and light designer since I
        graduated from high school. But I’m now interested in action and
        manifestation, and sitting in a room and talking to people has been one
        of my biggest challenges. It seemed to me that nothing could be done by
        just sitting and talking, and that solutions would come only to people
        who would actually get up and do something with their hands.
      </i>
    </p>
    <p>
      <i>
        Communication, on any level, has been an issue in my family for as long
        as I can remember, and that’s probably why I ran away from meetings and
        discussions as often as I could.
      </i>
    </p>
    <p>
      <i>
        I came to Auroville for the first time in November 2017 and discovered
        Restorative Circles a few weeks later. I still struggle to explain what
        happened inside me at that time, but the first workshop opened a new
        door in my mind and raised a big question: How is it possible that not
        everybody knows and uses this tool? Why do we struggle so much when we
        can just all sit together and let the collective intelligence guide us?
        As I see it now, community is what makes us stronger. I realize that a
        strong community is one that can, among other things, face and address
        conflict as a collective.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        It took me a while to dare to think that I could be of any help in this
        work, but here I am now, trying my best.I’ve been working as a light
        technician and light designer since I graduated from high school. But
        I’m now interested in action and manifestation, and sitting in a room
        and talking to people has been one of my biggest challenges. It seemed
        to me that nothing could be done by just sitting and talking, and that
        solutions would come only to people who would actually get up and do
        something with their hands.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
