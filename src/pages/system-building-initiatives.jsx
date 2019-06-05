// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Grid from '@bodhi-project/components/lib/gatsby/Grid'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'

import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const pageData = {
  pageTitle: 'System-Building Initiatives',
  nakedPageSlug: 'system-building-initiatives',
  pageAbstract:
    'Our approach is to engage with the community at many levels and through different initiatives, with a real longing to grow and transform our systems together. Our initiatives include engagement with Working Groups, Units, Services, schools, residential communities, and more.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    aikiyam: file(
      relativePath: { eq: "system-building-initiatives/aikiyam/cover.jpg" }
    ) {
      ...defaultImage
    }
    avc: file(
      relativePath: { eq: "system-building-initiatives/avc/cover.jpg" }
    ) {
      ...defaultImage
    }
    tlc: file(
      relativePath: { eq: "system-building-initiatives/tlc/cover.jpg" }
    ) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
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
      title: 'Restorative Circles in Aikiyam School',
      cover: props.data.aikiyam.childImageSharp.fluid,
      route:
        'system-building-initiatives/restorative-circles-in-aikiyam-school',
      formattedDate: 'January 2017 - Ongoing',
      abstract:
        'We are sharing RC in Aikiyam School, one of Auroville’s outreach schools for children from Kindergarten to 8th Grade. After discussions with the administration and teachers of the school, a group of ten teachers has committed to learn about RC.',
    },
    {
      title: 'Restorative Circles in TLC (The Learning Community School)',
      cover: props.data.tlc.childImageSharp.fluid,
      route:
        'system-building-initiatives/restorative-circles-in-the-learning-community-school',
      formattedDate: 'November 2015 - Ongoing',
      abstract:
        'In late 2015, we were invited to share RC with the teachers at TLC (The Learning Community School).',
    },
    {
      title: 'Exploring Justice & RC with the Auroville Council',
      cover: props.data.avc.childImageSharp.fluid,
      route:
        'system-building-initiatives/exploring-justice-and-rc-with-the-auroville-council',
      formattedDate: 'January 2018',
      abstract:
        'In early 2018, we invited the Auroville Council to explore RC and justice with us, so that we could improve our collaboration and better contribute to the community.',
    },
  ]

  return (
    <StandardPage className={style} seoData={seoData} {...props}>
      <h1 className="mask-h3">System-Building Initiatives</h1>
      <p>
        Our approach is to engage with the community at many levels and through
        different initiatives, with a real longing to grow and transform our
        systems together. Our initiatives include engagement with Working
        Groups, commercial Units, Services, schools, residential communities,
        and more.
      </p>
      <div className="margin-p">
        <Grid data={data} Img={Img} Link={Link} />
      </div>
      <div className="box">
        <p>
          In our aim to bring about a cultural shift in Auroville and how we
          engage with conflict, we’re hoping to bring RC and its principles to
          different groups in the community.
        </p>
        <p>
          This initiative aims to inform and empower members of the community so
          that when conflict or misunderstanding arises, we are more aware of
          our options and hopefully better equipped to move through the
          challenge.
        </p>
        <p>
          Restorative Auroville’s wish is to offer RC as a safe space for
          holding difficult conversations through a process of reflective
          listening. It’s designed to share power in the community and can
          potentially be facilitated by anyone. When we’re better informed about
          the process, we can use it to its fullest.
        </p>
        <p style={{ marginBottom: 0 }}>
          We invite any Working Groups, commercial Units, Services, schools and
          residential communities that are interested in learning more to reach
          out, so that we can design a training series together and/or look at
          how to collaborate.
        </p>
      </div>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Ongoingprojects
