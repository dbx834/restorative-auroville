// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
// import classNames from "classnames";

import map from 'lodash/map'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { FacebookProvider, Page as FBPage } from 'react-facebook'
import { Footer as SemanticFooter } from '@bodhi-project/semantic-webflow'

import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import quotes from '../../data/quotes.json'
import wavesBottom from '../../assets/wavesBottom.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import vimeo from '../../assets/vimeo.png'
import paypal from '../../assets/paypal.png'
import payu from '../../assets/payu.png'
import soundcloud from '../../assets/soundcloud.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

// import nvcX62 from '../../assets/gallery/nvcX62.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
/** returns a random number between min (inclusive) and max (exclusive) */
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}

/** returns a random int between min (inclusive) and max (exclusive) */
const getRandomArbitraryInt = (min, max) => {
  return Math.round(getRandomArbitrary(min, max))
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer
const footerStyle = css({
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 12,
  marginBottom: 0,
  background: '#f2f2f2',

  '& .apply-filter': {
    transition: 'all 200ms ease-in',

    '&:hover': {
      filter:
        'invert(100%) sepia(100%) saturate(1000%) hue-rotate(-60deg) saturate(500%)',
    },
  },

  '& li': {
    marginBottom: '0px !important',
  },

  '& .stuff-and-social-media': {
    display: 'flex',
    paddingTop: 9,
    paddingBottom: 9,

    '& .project-highlight': {
      flexGrow: 1,
      paddingRight: 12,
    },

    '& .social-media': {
      maxWidth: 340,
      minWidth: 340,
    },
  },
})

const footerStyles = footerStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Footer */
const Footer = props => {
  const random = getRandomArbitraryInt(0, quotes.length - 1)
  const quoteObj = quotes[random]
  let quote = ''
  let author = ''
  if (!isUndefined(quoteObj)) {
    ;({ quote, author } = quoteObj)
  }

  return (
    <div className="desktop-only">
      <Image
        src={wavesBottom}
        style={{
          height: 30,
          width: '100%',
          border: 0,
          background: 'transparent',
          marginBottom: 0,
          marginTop: 36,
        }}
        alt="Restorative Auroville"
      />
      <SemanticFooter className={footerStyles}>
        <div
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 9,
            paddingBottom: 9,
          }}
        >
          <p
            style={{
              textAlign: 'center',
              marginBottom: 0,
            }}
          >
            {isString(quote) && (
              <Fragment>
                "<i>{quote}</i>"
              </Fragment>
            )}
            {isArray(quote) && (
              <Fragment>
                "
                <i>
                  {map(quote, (quotelet, index) => (
                    <Fragment key={index}>
                      {index !== 0 && <br />}
                      {quotelet}
                    </Fragment>
                  ))}
                </i>
                "
              </Fragment>
            )}
            <br />~ {author}
          </p>
        </div>
        <div
          style={{
            paddingTop: 9,
          }}
        >
          <p
            style={{
              textAlign: 'center',
              marginBottom: 0,
            }}
          >
            <small style={{ fontSize: '90%' }}>
              Copyright © 2015 - 2018 Restorative Auroville &{' '}
              <OutLink to="https://www.joylivinglearning.org/">
                Joy Living Learning
              </OutLink>
            </small>
          </p>
          <p
            style={{
              textAlign: 'center',
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <small style={{ fontSize: '90%' }}>
              Made with&nbsp;
              <Icon
                type="heart"
                theme="filled"
                style={{ fontSize: '80%', color: '#e67100' }}
              />
              &nbsp;by&nbsp;
              <OutLink to="https://www.bodhiproject.org/">
                Bodhi Project
              </OutLink>
            </small>
          </p>
        </div>
      </SemanticFooter>
    </div>
  )
}

Footer.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default Footer
