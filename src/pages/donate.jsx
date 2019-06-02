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
  pageTitle: 'Donate',
  nakedPageSlug: 'donate',
  pageAbstract:
    'If you’d like to make a donation towards Restorative Auroville, you may do so here. A link directly to the Auroville Foundation payment gateway page, and you will be able to receive a tax exemption.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    filming: file(relativePath: { eq: "donate/filming/cover.jpg" }) {
      ...defaultImage
    }
    magazine: file(relativePath: { eq: "donate/magazine/cover.jpg" }) {
      ...defaultImage
    }
    yurt: file(relativePath: { eq: "donate/yurt/cover.jpg" }) {
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
      title: 'Building an RC Yurt',
      cover: props.data.yurt.childImageSharp.fluid,
      route: 'donate/building-an-rc-yurt',
      formattedDate: 'Ongoing',
      abstract:
        'With our work growing, it’s high-time that we build a physical structure for our RC gatherings. We’re hoping to raise Rs.5 lakhs, in order to set up a dismountable yurt.',
    },
    {
      title: 'Filming a Live Restorative Circle',
      cover: props.data.filming.childImageSharp.fluid,
      route: 'donate/filming-a-live-restorative-circle',
      formattedDate: 'Ongoing',
      abstract:
        'We have a big, big, big dream to one day film a live Circle, so that we can document the entire process and share this beautiful work with the rest of the world.',
    },
    {
      title: 'Tamil Aurovilian Journeys (Publication)',
      cover: props.data.magazine.childImageSharp.fluid,
      route: 'donate/tamil-aurovilian-journeys',
      formattedDate: 'Ongoing',
      abstract:
        'We are creating a one-time magazine focusing on the experiences of Tamil Aurovilians, their journeys into Auroville, and their feelings of belonging and exclusion.',
    },
  ]

  return (
    <StandardPage className={pageStyles} seoData={seoData} {...props}>
      <h1 className="mask-h3">Donate to Support Our Work!</h1>
      <p>
        If you’re inspired by our project and would like to help, we welcome
        your contributions. Please know that any amount is greatly appreciated.
      </p>
      <p>
        This will link directly to the Auroville Foundation payment gateway
        page, and you will be able to receive a tax exemption.
      </p>
      <div className="mask-p">
        <Link
          to="https://www.auroville.com/donations/"
          style={{ marginTop: 10, marginBottom: 10 }}
          className="ant-btn ant-btn-primary"
        >
          Donate Here
        </Link>
      </div>
      <ul className="mask-p" style={{ paddingLeft: 20 }}>
        <li>
          Please select “Other” in the Project selection, and specify
          “Restorative Auroville, Joy Living Learning” as the Project name.
        </li>
        <li>
          Please notify us by email (
          <Link to="mailto:restorative@auroville.org.in">
            restorative@auroville.org.in
          </Link>
          ) that you’ve made a transfer, so that we can track your contribution.
        </li>
      </ul>
      <br />
      <h2 className="mask-h4" style={{ marginTop: -20 }}>
        We need support for these projects:
      </h2>
      <div className="margin-p">
        <Grid data={data} Img={Img} Link={Link} />
      </div>
      <br />
      <p style={{ marginTop: -20 }}>
        Restorative Auroville is an initiative of{' '}
        <Link to="https://www.joylivinglearning.org/">Joy Living Learning</Link>
        , a Unit under the{' '}
        <Link to="https://www.auroville.org/">Auroville Foundation</Link>, a
        Charitable Trust under the Ministry of Human Resources (Indian
        Government). Your donation will support Restorative Auroville in its
        mission to bring Restorative Circles to above and beyond.
      </p>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Page
