// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
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
const pageData = {
  pageTitle: 'Community Events',
  nakedPageSlug: 'community-events',
  pageAbstract:
    'Our approach is to engage with the community at many levels and through different initiatives. We’ve hosted several large-scale community events, with the hope to inspire and challenge us to take a leap forward!',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    crossCulturalDialogue: file(
      relativePath: {
        eq: "community-events/cross-cultural-dialogue/banner.jpg"
      }
    ) {
      ...defaultImage
    }
    filmfestRestoringConnection: file(
      relativePath: {
        eq: "community-events/filmfest-restoring-connection/banner.jpg"
      }
    ) {
      ...defaultImage
    }
    restorativeDialogueAcrossCultures: file(
      relativePath: {
        eq: "community-events/restorative-dialogue-across-cultures/banner.jpg"
      }
    ) {
      ...defaultImage
    }
    walkOfHopeInAurovilleAndTheBioregion: file(
      relativePath: {
        eq: "community-events/walk-of-hope-in-auroville-and-the-bioregion/banner.jpg"
      }
    ) {
      ...defaultImage
    }
    womenForJustice: file(
      relativePath: { eq: "community-events/women-for-justice/banner.jpg" }
    ) {
      ...defaultImage
    }
    worldCafesOnPeaceAndJustice: file(
      relativePath: {
        eq: "community-events/world-cafes-on-peace-and-justice/banner.jpg"
      }
    ) {
      ...defaultImage
    }
  }
`
// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
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
/** Page */
const Page = props => {
  const data = [
    {
      title: 'Women for Justice',
      cover: props.data.womenForJustice.childImageSharp.fluid,
      route: 'community-events/women-for-justice',
      formattedDate: 'To be announced',
      abstract:
        'In collaboration with Auroville Village Action Group and Nimisha Desai, founder of the NGO "Olakh" (Gujarat), we will present a documentary about Nimisha’s work with women’s justice.',
    },
    {
      title: 'Cross-Cultural Dialogue: Discrimination in Auroville',
      cover: props.data.crossCulturalDialogue.childImageSharp.fluid,
      route: 'community-events/cross-cultural-dialogue',
      formattedDate: 'April 2018',
      abstract:
        'In response to the recent claim of discrimination against some in the Tamil community in Auroville, we hosted a 2-day Cross-Cultural Dialogue.',
    },
    {
      title: 'Walk of Hope in Auroville & the Bioregion',
      cover:
        props.data.walkOfHopeInAurovilleAndTheBioregion.childImageSharp.fluid,
      route: 'community-events/walk-of-hope-in-auroville-and-the-bioregion',
      formattedDate: 'January 2018',
      abstract:
        'The Walk was led by Sri M, an eminent spiritual guide, educationist and social activist.',
    },
    {
      title: 'Restorative Dialogue across Cultures',
      cover: props.data.restorativeDialogueAcrossCultures.childImageSharp.fluid,
      route: 'community-events/restorative-dialogue-across-cultures',
      formattedDate: 'September 2016',
      abstract:
        'We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?',
    },
    {
      title: 'World Cafés on Peace & Justice',
      cover: props.data.worldCafesOnPeaceAndJustice.childImageSharp.fluid,
      route: 'community-events/world-cafes-on-peace-and-justice',
      formattedDate: 'January 2016 - April 2016',
      abstract:
        'In the first months of 2016, we hosted a series of evening conversations in the co-creative World Café format. “What can we do as a community to openly share past pain and to restore connection and trust?”',
    },
    {
      title: 'FilmFest: "Restoring Connection"',
      cover: props.data.filmfestRestoringConnection.childImageSharp.fluid,
      route: 'community-events/filmfest-restoring-connection',
      formattedDate: 'October 2016',
      abstract:
        'We hosted a 6-day Film Festival, in hopes to raise awareness about Restorative Justice and hopefully contribute to building a justice system that is in alignment with our Auroville values.',
    },
  ]

  return (
    <StandardPage className={pageStyles} seoData={seoData} {...props}>
      <h2 className="mask-h3">Community Events</h2>
      <p>
        Our approach is to engage with the community at many levels and through
        different initiatives. We’ve hosted several large-scale community
        events, with the hope to inspire and challenge us to take a leap
        forward!
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
export default Page
