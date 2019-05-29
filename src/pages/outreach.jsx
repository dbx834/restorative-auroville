// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import { graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import Grid from '@bodhi-project/components/lib/gatsby/Grid'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'

import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const pageData = {
  pageTitle: 'Outreach',
  nakedPageSlug: 'outreach',
  pageAbstract: 'Outreach initiatives…',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    isabs: file(relativePath: { eq: "outreach/rc-outreach-isabs.jpg" }) {
      ...defaultImage
    }
    enfold: file(relativePath: { eq: "outreach/rc-outreach-enfold.jpg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  display: 'block',
  position: 'relative',

  '& div.card': {
    boxShadow: '1px 2px 0 0 #FF7D00 !important',
    border: 'unset !important',
    transition: 'all 200ms ease-in',

    '&:hover': {
      boxShadow: '2px 3px 0 0 #FF7D00 !important',
    },
  },

  '& .box': {
    border: '2px solid #00006F',
    borderRadius: 8,
    marginTop: 30,

    '@media(min-width: 992px)': {
      padding: 24,
    },

    '@media(max-width: 992px)': {
      padding: 6,
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Ongoingprojects */
const Ongoingprojects = props => {
  const data = [
    {
      title: 'Restorative Circles in ISABS',
      cover: props.data.isabs.childImageSharp.fluid,
      route: 'outreach/restorative-circles-in-isabs',
      formattedDate: 'Feb 2018 - Ongoing',
      abstract: 'Restorative Circles in ISABS…',
    },
    {
      title: 'Restorative Circles with Enfold',
      cover: props.data.enfold.childImageSharp.fluid,
      route: 'outreach/restorative-circles-with-enfold',
      formattedDate: 'Nov 2018',
      abstract: 'Restorative Circles with Enfold…',
    },
  ]

  return (
    <StandardPage className={style} seoData={seoData} {...props}>
      <h1 className="mask-h3">Outreach</h1>
      <p>
        Our intention is to make this work as available as possible and to share
        it with communities and projects that are seeking to shift paradigms.
      </p>
      <div className="margin-p">
        <Grid data={data} Img={Img} Link={Link} />
      </div>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Ongoingprojects
