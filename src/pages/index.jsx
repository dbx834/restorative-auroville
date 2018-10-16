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
import { Link } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'

import seoHelper from '../methods/seoHelper'

import banner from '../assets/banner.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Restorative Circles in Auroville',
  nakedPageSlug: '',
  pageAbstract:
    'Restorative Auroville is an independent project that aims to bring the practice of Restorative Circles, a holistic, community-based form of conflict resolution, to Auroville, and to explore what a consciously designed justice system could look like here – one that reflects our ideals, but that is also effective and has the power to bring about constructive change, both on the individual and community levels.',
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
    <Image
      src={banner}
      style={{
        height: 'auto',
        width: '100%',
        border: 0,
        background: 'transparent',
        marginBottom: 10,
      }}
      alt="Restorative Auroville"
    />

    <h1 className="mask-h3">Restorative Auroville</h1>
    <p>
      Restorative Auroville is an independent project that aims to bring the
      practice of{' '}
      <Link to="www.restorativecircles.org">Restorative Circles</Link>, a
      holistic, community-based form of conflict resolution, to Auroville, and
      to explore what a consciously designed justice system could look like here
      – one that reflects our ideals, but that is also effective and has the
      power to bring about constructive change, both on the individual and
      community levels.
    </p>

    <h2 className="mask-h3" style={{ borderBottom: '1px dotted #00006F' }}>
      Current & Upcoming Events
    </h2>

    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1, flexBasis: 0, paddingRight: 10 }}>
        <Image
          src="https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80"
          style={{
            height: 'auto',
            width: '100%',
            border: 0,
            background: 'transparent',
            marginBottom: 10,
          }}
          alt="Restorative Auroville"
        />
        <h3>Event blah blah</h3>
        <p>
          <strong>Event blah blah</strong>
        </p>
      </div>
      <div style={{ flexGrow: 1, flexBasis: 0, paddingRight: 10 }}>
        <Image
          src="https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80"
          style={{
            height: 'auto',
            width: '100%',
            border: 0,
            background: 'transparent',
            marginBottom: 10,
          }}
          alt="Restorative Auroville"
        />
        <h3>Event blah bleh</h3>
        <p>
          <strong>Event blah bleh</strong>
        </p>
      </div>
      <div style={{ flexGrow: 1, flexBasis: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80"
          style={{
            height: 'auto',
            width: '100%',
            border: 0,
            background: 'transparent',
            marginBottom: 10,
          }}
          alt="Restorative Auroville"
        />
        <h3>Event bluh bleh</h3>
        <p>
          <strong>Event bluh bleh</strong>
        </p>
      </div>
    </div>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
