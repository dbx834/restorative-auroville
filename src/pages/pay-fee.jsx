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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tooltip from 'antd/lib/tooltip'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tooltip/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import birdsTop from '../assets/birdsTop.png'
import domestic from '../assets/domestic.png'
import international from '../assets/international.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Pay Fee',
  nakedPageSlug: 'pay-fee',
  pageAbstract:
    'You may pay your fees here, or directly on the event page you’re registering for. Select the Domestic option for Indian bank/credit cards, or the International option for foreign bank/credit cards.',
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
      <Col sm={24} md={15}>
        <div>
          <h1 className="mask-h3">Fee Payment</h1>
          <p>
            You may pay your fees here, or directly on the event page you’re
            registering for.
          </p>
          <p>
            Select the Domestic option for Indian bank/credit cards, or the
            International option for foreign bank/credit cards. You will be
            directed to Joy Living Learning's payment gateways, (the parent
            entity for Restorative Auroville).
          </p>
          <div className="mask-p">
            <OutLink
              to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
              style={{ marginRight: 17 }}
            >
              <Tooltip title="Indian Card">
                <div style={{ display: 'inline-block' }}>
                  <Image
                    src={domestic}
                    rawHeight={450}
                    rawWidth={450}
                    className="icon"
                    style={{
                      height: 65,
                      width: 65,
                      display: 'inline-block',
                      background: 'transparent',
                      border: 'unset',
                    }}
                  />
                </div>
              </Tooltip>
            </OutLink>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              style={{ display: 'inline-block' }}
              className="hover"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFXM5RNDGBXL4"
              />
              <Tooltip title="International Card">
                <input
                  type="image"
                  src={international}
                  border="0"
                  name="submit"
                  alt="PayPal – The safer, easier way to pay online!"
                  style={{
                    height: 65,
                    width: 65,
                  }}
                />
              </Tooltip>
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>
      </Col>
      <Col sm={24} md={9}>
        <h2
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
        </h2>
        <p>
          Restorative Auroville is an initative of&nbsp;
          <OutLink to="https://www.joylivinglearning.org/">
            Joy Living Learning
          </OutLink>
          , a unit of the&nbsp;
          <OutLink to="https://www.auroville.org/">
            Auroville Foundation
          </OutLink>
          , India.
        </p>
        <p>
          <OutLink to="mailto:restorative@auroville.org.in?Subject=Hello">
            <Icon type="mail" theme="outlined" />
            &nbsp; restorative@auroville.org.in
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
