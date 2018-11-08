// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'
import VolunteerForm from '../components/VolunteerForm'

import seoHelper from '../methods/seoHelper'

import nvcX80 from '../assets/gallery/nvcX80.jpg'
import tick from '../assets/tick.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Volunteer',
  nakedPageSlug: 'volunteer',
  pageAbstract:
    'In order for this work to develop fully in Auroville, we need more ambassadors who are willing to do the research, the teaching and the experimenting.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
  '& li': {
    display: 'flex',
    '& div:first-child': {
      marginRight: 4,
    },
  },
})
const pageStyle = pageStyles.toString()

/** list item */
const Li = props => (
  <li>
    <div>
      <Image
        src={tick}
        style={{
          background: 'transparent',
          border: 'unset',
          height: 20,
          width: 20,
          display: 'inline-block',
        }}
        rawWidth={900}
        rawHeight={900}
      />
    </div>
    <div>{props.text}</div>
  </li>
)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className={pageStyle} seoData={seoData}>
    <h1 className="mask-h3">Volunteer & Apprentice</h1>
    <p>
      In order for this work to develop fully in Auroville, we need more
      ambassadors who are willing to play with us: to do the research, the
      teaching, the experimenting, and so much more…
    </p>
    <p>Here are some ways in which you could support:</p>
    <ul className="mask-p" style={{ listStyle: 'none', padding: 0 }}>
      <Li
        text="Become an Apprentice with Restorative Auroville's Team of
          Facilitators."
      />
      <Li text="Support with facilitating Pre-Circles (and eventually Circles)." />
      <Li text="Translate some of our RC material into other languages." />
      <Li
        text="Support in growing our Tamil-language resources: printed material,
        raising awareness in the community, leveraging Tamil-speaking
        Facilitators, etc."
      />
      <Li
        text="&quot;Teach&quot; or share the RC craft with others (workshop setting, or
        practice group, or individual coaching, etc)."
      />
      <Li
        text="Design additional resources/material (training material, or
        community pamphlets, etc)."
      />
      <Li text="Support in making a feature film of a live Circle." />
      <Li
        text="Support in fundraising and building an RC-Yurt, so that Auroville
        can have a dedicated space for Circles."
      />
      <Li
        text="Support in organizing community-wide events that raise awareness
        about RC and justice in Auroville and the bioregion."
      />
    </ul>
    <p>
      Or… do you have any other great skills and/or simple willingness to
      offer…?
    </p>

    <Row gutter={{ xs: 24, sm: 24, md: 24 }}>
      <Col sm={24} md={15}>
        <h2 className="mask-h3">Volunteer Form</h2>
        <VolunteerForm />
      </Col>
      <Col sm={24} md={9}>
        <h2 className="mask-h3">Our Apprentice Pranjal Shares</h2>
        <Link to="writings/our-apprentice-pranjal-shares">
          <Image
            src={nvcX80}
            style={{
              background: 'transparent',
              border: 'unset',
              height: 'auto',
              width: '80%',
              marginLeft: 0,
              display: 'block',
            }}
            rawWidth={600}
            rawHeight={603}
          />
        </Link>
      </Col>
    </Row>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
