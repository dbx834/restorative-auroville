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
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import OutLink from '@bodhi-project/components/lib/OutLink'
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ContactForm from '../components/forms/ContactForm'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Contact Us',
  nakedPageSlug: 'contact-us',
  pageAbstract: 'Contact us at restorative@auroville.org.in',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    art: file(relativePath: { eq: "contact-us/art.jpg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className="" seoData={seoData} {...props}>
    <Division golden>
      <Fragment>
        <h1 className="mask-h3">Contact Us</h1>
        <ContactForm />
        <br />
        <p>
          You can also email us at:&nbsp;
          <OutLink to="mailto:restorative@auroville.org.in?Subject=Hello">
            restorative@auroville.org.in
          </OutLink>
        </p>
      </Fragment>
      <Fragment>
        <h2 className="mask-h3" style={{ color: '#FFF' }}>
          restorative@auroville.org.in
        </h2>
        <Img fluid={props.data.art.childImageSharp.fluid} />
      </Fragment>
    </Division>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
