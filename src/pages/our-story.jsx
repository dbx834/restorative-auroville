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
// import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'

import seoHelper from '../methods/seoHelper'

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
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">How Restorative Auroville came to be…</h1>
    <p>
      Somewhere in 2008-09, L'aura heard about&nbsp;
      <OutLink to="https://www.restorativecircles.org">
        Dominic Barter's work
      </OutLink>
      &nbsp;from a traveling friend.
    </p>
    <p>
      Given her background in Nonviolent Communication and having grown up and
      lived most of her life in community in Auroville, she was inspired to
      learn more about Restorative Circles and its application in developing
      community-based justice systems. Along with then-Aurovilian Jason Stewart,
      L'aura traveled to USA to attend an intensive training with Dominic Barter
      in October 2010, and they both came back on fire, convinced that Auroville
      would be an ideal place to experiment with this work.
    </p>
    <p>
      Immediately after their return, L'aura and Jason started offering weekly
      gatherings, and together with other Aurovilians, they explored what
      Restorative Circles could look like in Auroville, both as a practice and
      as a larger approach to engaging with systemic change.
    </p>
    <p>
      This exploration continued, on and off, for almost 5 years, and as a group
      they even experimented with a few small live Circles amongst themselves
      and their networks. And at several instances, the question emerged about
      how to expand their reach and to engage with the larger Auroville
      community. However, at that time, for some reason or the other, no brave
      enough steps were made towards a sustained engagement at the collective
      level.
    </p>
    <h2 className="mask-h4">Today…</h2>
    <p>
      Since its inception in late 2015, Restorative Auroville has facilitated
      over 30 live Circles…
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
