// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import { Link } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Restorative Circles',
  nakedPageSlug: 'restorative-circles',
  pageAbstract:
    'A Restorative Circle (RC) is a community process designed to hold space for those in conflict. It brings together the three parties in a conflict – those who acted, those directly impacted, and the wider community – within an intentional systemic context, to dialogue as equals. Participants invite each other and attend voluntarily. The dialogue process used is shared openly with all participants, and facilitated by a community member. The process ends when actions have been found that bring mutual benefit and nurture the inherent integrity of all those involved in the conflict.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Restorative Circles</h1>
    <p>
      A Restorative Circle (RC) is a community process designed to hold space
      for those in conflict. It brings together the three parties in a conflict
      – those who acted, those directly impacted, and the wider community –
      within an intentional systemic context, to dialogue as equals.
      Participants invite each other and attend voluntarily. The dialogue
      process used is shared openly with all participants, and facilitated by a
      community member. The process ends when actions have been found that bring
      mutual benefit and nurture the inherent integrity of all those involved in
      the conflict.
    </p>
    <p>
      Restorative Circles are facilitated in 3 stages, and are designed to
      identify the key factors in the conflict, reach agreements on next steps,
      and evaluate the results. As Circles form, they invite shared power,
      mutual understanding, self-responsibility and effective action within the
      community.
    </p>
    <div className="mask-p">
      <Image
        src="https://www.joylivinglearning.org/content-assets/restorative-circles/rc_800X561.png"
        style={{
          height: 'auto',
          width: '75%',
          border: 0,
          background: 'transparent',
          display: 'block',
        }}
        alt="Restorative Auroville"
      />
    </div>
    <p>
      Restorative Circles offer a form of conflict resolution, but the practice
      also offers a consciousness – and a large part of integrating this work
      into our community involves a cultural shift around how we perceive
      conflict and how we can find co-creative, empowered ways of restoring
      harmony and trust amongst us.
    </p>
    <p>
      Restorative Circles are a specific restorative practice whose development
      began with the work of Dominic Barker in the favelas in Rio de Janeiro in
      the mid 1990s and continues with a growing community both in Brazil and
      internationally. [Source: Dominic Barter and Restorative Circles]
    </p>

    <h1 className="mask-h3">Call a Circle</h1>
    <p>
      Send an email to restorative@auroville.org.in, or speak in person to any
      of the following: L’aura, Janet, Kati or Pranjal. A Facilitator will
      follow up with you, hear your concerns, explain the RC process, and
      confirm whether you’d like to go ahead with a Circle or not.
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
