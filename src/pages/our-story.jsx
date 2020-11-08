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
import Image from '@bodhi-project/components/lib/image/Image'
import OutLink from '@bodhi-project/components/lib/outlink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import ourStory1 from '../assets/our-story1.jpeg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Our Story',
  nakedPageSlug: 'our-story',
  pageAbstract:
    "Given her background in Nonviolent Communication and having grown up and lived most of her life in community in Auroville, L'aura was inspired to learn more about Restorative Circles and its application in developing community-based justice systems.",
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className="" seoData={seoData} {...props}>
    <h1 className="mask-h3">How Restorative Auroville came to be…</h1>
    <p>
      Somewhere in 2008-09, L'aura heard about&nbsp;
      <OutLink to="https://www.restorativecircles.org">
        Dominic Barter's work
      </OutLink>
      &nbsp;from a traveling friend.
    </p>
    <p style={{ marginBottom: 15 }}>
      Given her background in Nonviolent Communication and having grown up and
      lived most of her life in community in Auroville, she was inspired to
      learn more about Restorative Circles and its application in developing
      community-based justice systems. Along with then-Aurovilian Jason Stewart,
      L'aura traveled to USA to attend an intensive training with Dominic Barter
      in October 2010, and they both came back on fire, convinced that Auroville
      would be an ideal place to experiment with this work.
    </p>
    <div>
      <Image
        src={ourStory1}
        rawWidth={1146}
        rawHeight={663}
        containerStyle={{
          height: 'auto',
          minWidth: 300,
          width: '45%',
          maxWidth: 600,
          border: 0,
          background: 'transparent',
          marginBottom: 10,
          display: 'block',
          float: 'left',
          marginRight: 20,
        }}
        imgStyle={{
          height: 'auto',
          width: '100%',
        }}
        alt="How Restorative Auroville came to be…"
      />
      <p>
        Immediately after their return, L'aura and Jason started offering weekly
        gatherings, and together with other Aurovilians, they explored what
        Restorative Circles could look like in Auroville, both as a practice and
        as a larger approach to engaging with systemic change.
      </p>
      <p>
        This exploration continued, on and off, for almost 5 years, and as a
        group they also experimented with a few small live Circles amongst
        themselves and their networks. And at several instances, the question
        emerged about how to expand their reach and to engage with the larger
        Auroville community. However, at the time, for some reason or the other,
        no brave enough steps were made towards a sustained engagement at the
        collective level.
      </p>
    </div>
    <h2 className="mask-h4">The Birthing…</h2>
    <p>
      In September 2015, after a several-month lull in their RC exploration,
      L’aura happened to be reading the Auroville News & Notes when she chanced
      upon an announcement from the Project Coordination Group (PCG) for grant
      proposal submissions, to be funded by&nbsp;
      <OutLink to="https://www.stichtingdezaaier.nl/?pagina=Auroville">
        Stichting de Zaaier (SDZ)
      </OutLink>
      . L’aura somehow knew that it was time to take the leap. She met with
      Janet and Shanti and suggested that they start up their RC work again, but
      only this time with a bang and to go all out. They entered into an intense
      and creative process over the next few days, dreaming up what this project
      could look like in its furthest reaches.
    </p>
    <p>
      What followed was a beautiful birthing process, where the project took on
      a life of its own and revealed more and more of itself day after day and
      draft after draft. And L’aura, Janet and Shanti were so excited that they
      decided to launch the project whether or not they’d receive funding –
      which, of course, they did receive!
      <sup>*</sup>
    </p>
    <div
      style={{
        maxWidth: '600px',
        border: '1px solid #00006F',
        padding: 24,
        marginLeft: 'auto',
        borderRadius: 8,
      }}
      className="margin-p"
    >
      <p style={{ marginBottom: 0 }}>
        <sup style={{ marginLeft: -10 }}>*</sup> This funding was for L’aura’s
        “Auroville Maintenance” (honorary volunteer stipend), Rs.15,000/month
        for 1 year (2016). Janet and Shanti, along with others who joined the
        team and supported the project along the way, have offered all their
        time and love for free. Beyond that financial support in 2016, this
        project has been running without a budget, amazingly. What Grace!
        <br />
        <br />
        <Link to="/donate">
          If you’d like to support our work and make a financial contribution to
          keep it going, please donate here ⇝
        </Link>
      </p>
    </div>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
