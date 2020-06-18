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
      Pranjal Tiwari
    </h1>
    <p>
      <i>
        I grew up in Pondicherry and studied at the Sri Aurobindo International
        Center of Education. In this environment of an integral education, I
        graduated in Political Science and International Relations, studying Sri
        Aurobindo’s social and political thought. In 2015, after having studied
        Peace and Conflict with a focus on Jammu and Kashmir, I volunteered in
        the Indo-Pak border area, to better understand the ground realities of
        conflict. My time there gave me an understanding of the socio-political
        complexity of a conflict but also made me feel frustrated as I longed to
        contribute to conflict resolution and dialogue in the region.
      </i>
    </p>
    <p style={{ marginBottom: 0 }}>
      <i>
        In my search for meaningful engagements with conflicts I came to
        Auroville, hoping to learn new ways to manage conflicts at the ‘City of
        Dawn.’ When I attended a workshop in Restorative Circles I was
        intuitively drawn to its attitude towards conflict, as a natural
        phenomenon that needs understanding. I have been an apprentice at
        Restorative Auroville since October 2017, and have had the opportunity
        to assist live Circles and facilitate Pre-Circles and Semi-simulated
        Circles. I have been able to integrate the qualities of presence and
        hearing and reflecting meaning during difficult conversations. As a
        volunteer, I helped organize events like the Walk of Hope and
        Cross-Cultural Dialogue and assist in raising awareness within the
        community. I’m convinced that the principles of restorative justice are
        the way forward to greater understanding and lasting harmony.
      </i>
    </p>
  </div>
)

Person.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Person
