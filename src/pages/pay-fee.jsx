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
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

import Tooltip from 'antd/lib/tooltip'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tooltip/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import domestic from '../assets/domestic.png'
import international from '../assets/international.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

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
const Page = props => (
  <StandardPage className="" seoData={seoData} {...props}>
    <Division golden>
      <Fragment>
        <h1 className="mask-h3">Fee Payment</h1>
        <p>
          You may pay your fees here, or directly on the event page you’re
          registering for.
        </p>
        <p>
          Select the Domestic option for Indian bank/credit cards, or the
          International option for foreign bank/credit cards. You will be
          directed to Joy Living Learning's (the parent entity for Restorative
          Auroville) payment gateway.
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
      </Fragment>
      <Fragment>&nbsp;</Fragment>
    </Division>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
