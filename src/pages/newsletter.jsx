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
import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import NewsletterForm from '../components/NewsletterForm'
import StandardPage from '../components/StandardPage'

import seoHelper from '../methods/seoHelper'

import birdsTop from '../assets/birdsTop.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Newsletter',
  nakedPageSlug: 'newsletter',
  pageAbstract: 'Page abstract.',
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
    <Row gutter={{ xs: 24, sm: 24, md: 24 }}>
      <Col span={15}>
        <h1 className="mask-h3">Newsletter</h1>
        <p>Signup for our occasional newsletter.</p>
        <NewsletterForm />
      </Col>
      <Col span={9}>
        <h1
          className="mask-h3"
          style={{ display: 'inline-block', position: 'relative' }}
        >
          Restorative Auroville
          <div
            style={{
              position: 'absolute',
              top: -20,
              right: -38,
              height: 50,
            }}
          >
            <Image
              src={birdsTop}
              style={{
                background: 'transparent',
                border: 'unset',
                height: 50,
                width: 50,
              }}
              rawWidth={900}
              rawHeight={900}
            />
          </div>
        </h1>
        <p>
          Restorative Auroville is a project of{' '}
          <OutLink to="https://www.joylivinglearning.org/">
            Joy Living Learning
          </OutLink>, a unit of the{' '}
          <OutLink to="https://www.auroville.org/">
            Auroville Foundation
          </OutLink>, India.
        </p>
        <p>
          <OutLink to="mailto:restorative@auroville.org.in?Subject=Hello">
            <Icon type="mail" theme="outlined" />&nbsp;
            restorative@auroville.org.in
          </OutLink>
        </p>
      </Col>
    </Row>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
