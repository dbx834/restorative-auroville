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
  pageTitle: 'Writings',
  nakedPageSlug: 'writings',
  pageAbstract:
    'Our mission is to live and share the principles of Nonviolence, not only in terms of an individual practice and way of life, but also in its application to social structures, such as in our families, schools, and organizations.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    canWeTalkAboutDiscriminationInAuroville: file(
      relativePath: {
        eq: "writings/can-we-talk-about-discrimination-in-auroville.jpg"
      }
    ) {
      ...defaultImage
    }
    dealingWithConflictInRestorativeCircles: file(
      relativePath: {
        eq: "writings/dealing-with-conflict-in-restorative-circles.jpg"
      }
    ) {
      ...defaultImage
    }
    justiceAndPunishment: file(
      relativePath: { eq: "writings/justice-and-punishment.jpg" }
    ) {
      ...defaultImage
    }
    justiceInAuroville: file(
      relativePath: { eq: "writings/justice-in-auroville.jpg" }
    ) {
      ...defaultImage
    }
    laResponsabiliteDeTous: file(
      relativePath: { eq: "writings/la-responsabilite-de-tous.jpg" }
    ) {
      ...defaultImage
    }
    listening: file(relativePath: { eq: "writings/listening.jpg" }) {
      ...defaultImage
    }
    ourJusticeSystem: file(
      relativePath: { eq: "writings/our-justice-system.jpg" }
    ) {
      ...defaultImage
    }
    restoringConnection: file(
      relativePath: { eq: "writings/restoring-connection.jpg" }
    ) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  marginBottom: 60,

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
      title: 'Listening',
      cover: props.data.listening.childImageSharp.fluid,
      route: 'writings/listening',
      formattedDate: 'Fri, April 12, 2019',
      abstract:
        'A poem inspired by a 2-day Restorative Circles workshop and my regular engaging with RC for 18 months during which I learned to facilitate Circles. The poem attempts to capture my understanding of the RC process and its key component – reflective listening. ~ by Pranjal',
      filter: 'Pranjal',
    },
    {
      title: 'Can we talk about discrimination in Auroville?',
      cover:
        props.data.canWeTalkAboutDiscriminationInAuroville.childImageSharp
          .fluid,
      route: 'writings/can-we-talk-about-discrimination-in-auroville',
      formattedDate: 'Fri, May 25, 2018',
      abstract:
        'Although I can connect with the discomfort that many Aurovilians felt with regards to the recent claim of discrimination being published on Auronet, I’m actually celebrating the courage and clarity that it took to name it, and to do so this publicly.',
      filter: "L'aura Joy",
    },
    {
      title: 'Restoring Connection',
      cover: props.data.restoringConnection.childImageSharp.fluid,
      route: 'writings/restoring-connection',
      formattedDate: 'Thu, December 1, 2016',
      abstract:
        "In October, there was a film festival in Cinema Paradiso and dialogue sessions on the theme of 'Restoring Connection' as related to the restorative justice movement.",
      filter: "L'aura Joy",
    },
    {
      title: 'La responsabilité de tous',
      cover: props.data.laResponsabiliteDeTous.childImageSharp.fluid,
      route: 'writings/la-responsabilite-de-tous',
      formattedDate: 'Sun, May 1, 2016',
      abstract:
        'J’ai été profondément émue par ce travail et par Dominic Barter, le père des Cercles restauratifs. J’ai vraiment senti que c’était la CNV appliquée aux conflits dans le cadre d’une communauté.',
      filter: 'La Revue d’Auroville',
    },
    {
      title: 'Justice & Punishment',
      cover: props.data.justiceAndPunishment.childImageSharp.fluid,
      route: 'writings/justice-and-punishment',
      formattedDate: 'Sun, November 1, 2015',
      abstract:
        'I think the main difference here between punitive and restorative justice is the approach.',
      filter: "L'aura Joy",
    },
    {
      title: 'Justice in Auroville',
      cover: props.data.justiceInAuroville.childImageSharp.fluid,
      route: 'writings/justice-in-auroville',
      formattedDate: 'Fri, October 23, 2015',
      abstract:
        'In dealing with the criminal, the most advanced societies are no longer altogether satisfied with regarding him as a law-breaker to be punished [...].',
      filter: "L'aura Joy",
    },
    {
      title: 'Our Justice System',
      cover: props.data.ourJusticeSystem.childImageSharp.fluid,
      route: 'writings/our-justice-system',
      formattedDate: 'Wed, June 25, 2014',
      abstract:
        'For me, all the talk about the feedback relating to the proposed WC/AVC members is connected to a much larger issue – our Justice System.',
      filter: "L'aura Joy",
    },
    {
      title: 'Dealing with conflict in Restorative Circles',
      cover:
        props.data.dealingWithConflictInRestorativeCircles.childImageSharp
          .fluid,
      route: 'writings/dealing-with-conflict-in-restorative-circles',
      formattedDate: 'Mon, August 1, 2011',
      abstract:
        'On July 13th at the Town Hall a presentation on the principles and practice of Restorative Circles was offered by L’aura and Jason, followed by a question and answer session.',
      filter: 'Auroville Today',
    },
  ]

  return (
    <StandardPage className={style} seoData={seoData} {...props}>
      <h1 className="mask-h3" style={{ marginBottom: 10 }}>
        Articles
      </h1>
      <div className="margin-p">
        <Grid
          data={data}
          Img={Img}
          Link={Link}
          keepOrder
          filter
          filterOrder={[1, 3, 0, 2]}
        />
      </div>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
