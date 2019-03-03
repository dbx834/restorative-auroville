// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import DisqusComments from '../components/DisqusComments'

import newRestorativeSystemFlyer from '../assets/newRestorativeSystemFlyer.jpg'

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
    &nbsp;
    <div
      style={{
        marginLeft: '6.25vw',
        marginRight: '6.25vw',
      }}
      className="margin-p"
    >
      <Image
        src={newRestorativeSystemFlyer}
        rawHeight={890}
        rawWidth={1324}
        style={{
          height: 'auto',
          width: '100%',
          border: 0,
          background: 'transparent',
          display: 'block',
        }}
        alt="Restorative Auroville"
      />
    </div>
    <Row gutter={{ xs: 24, sm: 24, md: 24 }}>
      <Col sm={24} md={15}>
        <div
          style={{
            border: '2px solid #00006F',
            padding: 7.44,
            borderRadius: 8,
          }}
        >
          <p style={{ marginBottom: 0 }}>
            Restorative Circles offer a form of conflict resolution, but the
            practice also offers a consciousness – and a large part of
            integrating this work into our community involves a cultural shift
            around how we perceive conflict and how we can find co-creative,
            empowered ways of restoring harmony and trust amongst us.
          </p>
        </div>
      </Col>
      <Col sm={24} md={9}>
        <div
          style={{
            border: '2px solid #00006F',
            padding: 7.44,
            borderRadius: 8,
          }}
        >
          <p style={{ marginBottom: 0 }}>
            Restorative Circles are a specific restorative practice whose
            development began with the work of Dominic Barter in the favelas in
            Rio de Janeiro in the mid 1990s and continues with a growing
            community both in Brazil and internationally.&nbsp;
            <OutLink to="https://www.restorativecircles.org/">
              See more about Dominic's work here
            </OutLink>
            .
          </p>
        </div>
      </Col>
    </Row>
    <div
      style={{
        border: '2px solid #FABB00',
        padding: 24,
        borderRadius: 8,
        marginTop: 30,
      }}
    >
      <h2 className="mask-h4">Participating in a Circle</h2>
      <p>
        The RC process is voluntary and open to all. It’s simply a tool that can
        support us in responding to conflict, for those who choose to use it.{' '}
      </p>

      <p>
        Anyone can initiate a Circle – whether you’re upset by an incident or
        issue, or you upset someone else, or you’re not directly involved but
        feel concerned, you can call a Circle.
      </p>

      <p>
        Anyone can be named to be invited to a Circle. And if someone isn’t
        named, but is moved to participate, he/she can contact the Facilitator
        and request to be included.
      </p>

      <p style={{ marginBottom: 0 }}>
        <strong>How to Call a Circle</strong>: Send an email to&nbsp;
        <OutLink to="mailto:restorative@auroville.org.in">
          restorative@auroville.org.in
        </OutLink>
        , or <Link to="/our-team">speak in person to a member of our team</Link>
        . A Facilitator will follow up with you, hear your concerns, explain the
        RC process, and confirm whether you’d like to go ahead with a Circle or
        not.
      </p>
    </div>
    <br />
    <br />
    <br />
    <h2 className="mask-h4">Learn more about Restorative Circles…</h2>
    <p>
      See our <Link to="/events">Upcoming Events</Link> and join a workshop or
      practice group (in person or online).
    </p>
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
