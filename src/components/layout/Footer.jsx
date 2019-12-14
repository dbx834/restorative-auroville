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
import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'
import container from '@bodhi-project/components/lib/methods/container'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import quotes from '../../data/quotes.json'
import wavesBottom from '../../assets/wavesBottom.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

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
const style = css({
  '& .gray': {
    background: '#f2f2f2',
    padding: '1rem',
  },

  '& p': {
    textAlign: 'center',
    '&:last-child': {
      marginBottom: 0,
    },
  },
}).toString()

const goldenMajorBlock = container({ goldenMajor: true, block: true })
const bleedBlock = container({ bleed: true, block: true })

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
  const { isDesktop } = props

  return (
    <footer className={`${style} ${isDesktop ? goldenMajorBlock : bleedBlock}`}>
      <Image
        src={wavesBottom}
        style={{
          height: 30,
          width: '100%',
          border: 0,
          background: 'transparent',
          marginBottom: 0,
        }}
      />
      <div className="gray">
        <p>
          {isString(quote) && (
            <Fragment>
              <i>"{quote}"</i>
            </Fragment>
          )}
          {isArray(quote) && (
            <Fragment>
              <i>
                "
                {map(quote, (quotelet, index) => (
                  <Fragment key={index}>
                    {index !== 0 && <br />}
                    {quotelet}
                  </Fragment>
                ))}
                "
              </i>
            </Fragment>
          )}
          <br />~ {author}
        </p>
        <p>
          <small style={{ fontSize: '90%' }}>
            Copyright © 2015-2020 Restorative Auroville &{' '}
            <OutLink to="https://www.joylivinglearning.org/">
              Joy Living Learning
            </OutLink>
          </small>
          <br />
          <small style={{ fontSize: '90%' }}>
            Made with&nbsp;
            <Icon
              type="heart"
              theme="filled"
              style={{ fontSize: '80%', color: '#e67100' }}
            />
            &nbsp;by&nbsp;
            <OutLink to="https://www.bodhiproject.org/">Bodhi Project</OutLink>
          </small>
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default Footer
