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
import ContainerDimensions from 'react-container-dimensions'

import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

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
  paddingTop: 12,
  paddingBottom: 24,
  background: '#f2f2f2',

  '& .apply-filter': {
    transition: 'all 200ms ease-in',

    '&:hover': {
      filter:
        'invert(100%) sepia(100%) saturate(1000%) hue-rotate(-60deg) saturate(500%)',
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
    <div className="mobile-only">
      <aside>
        <Image
          src={wavesBottom}
          style={{
            height: 30,
            width: '100%',
            border: 0,
            background: 'transparent',
            marginBottom: 0,
            marginTop: 64,
          }}
          alt="Restorative Auroville"
        />
        <p className="mask-h3">More Information</p>
        <p className="mask-h6">About</p>
        <ul
          className="mask-p"
          style={{
            listStyle: 'none',
            paddingLeft: 0,
            marginBottom: 0,
          }}
        >
          <li>
            <Link to="/about-restorative-auroville">Restorative Auroville</Link>
          </li>
          <li>
            <Link to="/our-team">Our Team</Link>
          </li>
          <li>
            <Link to="/our-restorative-system-in-auroville">Our RC System</Link>
          </li>
        </ul>
        <p className="mask-h6">Our Work</p>
        <ul
          className="mask-p"
          style={{
            listStyle: 'none',
            paddingLeft: 0,
            marginBottom: 0,
          }}
        >
          <li>
            <Link to="/projects/ongoing">Projects</Link>
          </li>
          <li>
            <Link to="/archives">Archives</Link>
          </li>
          <li>
            <Link to="/writings">Articles</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        <p className="mask-h6">External Links</p>
        <ul
          className="mask-p"
          style={{
            listStyle: 'none',
            paddingLeft: 0,
            marginBottom: 0,
          }}
        >
          <li>
            <OutLink to="https://www.joylivinglearning.org/">
              Joy Living Learning
            </OutLink>
          </li>
          <li>
            <OutLink to="https://www.restorativecircles.org/">
              Dominic Barter & RC
            </OutLink>
          </li>
          <li>
            <OutLink to="https://www.indianvc.org/">NVC India</OutLink>
          </li>
          <li>
            <OutLink to="https://www.auroville.org/">Auroville</OutLink>
          </li>
        </ul>
        <p className="mask-h6">Get Involved</p>
        <ul
          className="mask-p"
          style={{
            listStyle: 'none',
            paddingLeft: 0,
            marginBottom: 0,
          }}
        >
          <li>
            <Link to="/volunteer">Volunteer & Apprentice</Link>
          </li>
          <li>
            <Link to="/newsletter">Newsletter</Link>
          </li>
        </ul>
        <div
          style={{
            borderBottom: '1px dotted #00006F',
            borderTop: '1px dotted #00006F',
            paddingBottom: 12,
            paddingTop: 12,
          }}
        >
          <p className="mask-h6">Connect With Us</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <OutLink
              to="https://www.facebook.com/RestorativeAuroville/"
              title="Facebook"
            >
              <Image
                src={facebook}
                rawWidth={450}
                rawHeight={450}
                style={{
                  display: 'inline-block',
                  border: 'none',
                  background: 'none',
                  height: 45,
                  width: 45,
                }}
                className="apply-filter"
                alt="Follow us on Facebook - https://www.facebook.com/RestorativeAuroville"
              />
            </OutLink>
            <OutLink
              to="https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF"
              style={{ marginLeft: 17 }}
            >
              <Image
                src={youtube}
                rawWidth={450}
                rawHeight={450}
                style={{
                  display: 'inline-block',
                  border: 'none',
                  background: 'none',
                  height: 45,
                  width: 45,
                }}
                className="apply-filter"
                alt="See more videos on YouTube - https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF"
              />
            </OutLink>
            <OutLink
              to="https://vimeo.com/laurajoyful"
              style={{ marginLeft: 17 }}
            >
              <Image
                src={vimeo}
                rawWidth={450}
                rawHeight={450}
                style={{
                  display: 'inline-block',
                  border: 'none',
                  background: 'none',
                  height: 42,
                  width: 42,
                }}
                className="apply-filter"
                alt="See more videos on Vimeo - https://vimeo.com/laurajoyful"
              />
            </OutLink>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <OutLink
              to="https://soundcloud.com/laura-joy-145472107"
              style={{ marginLeft: 17 }}
            >
              <Image
                src={soundcloud}
                rawWidth={450}
                rawHeight={450}
                style={{
                  display: 'inline-block',
                  border: 'none',
                  background: 'none',
                  height: 42,
                  width: 42,
                }}
                className="apply-filter"
                alt="Listen to our dialogues on Soundcloud - https://soundcloud.com/laura-joy-145472107"
              />
            </OutLink>
            <OutLink
              to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
              style={{ marginLeft: 17 }}
            >
              <Image
                src={payu}
                rawWidth={450}
                rawHeight={450}
                style={{
                  display: 'inline-block',
                  border: 'none',
                  background: 'none',
                  height: 42,
                  width: 42,
                }}
                className="apply-filter"
                alt="Donate or pay fees through PayU - https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
              />
            </OutLink>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              style={{ display: 'inline-block', marginLeft: 17 }}
              className="hover apply-filter"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFXM5RNDGBXL4"
              />
              <input
                type="image"
                src={paypal}
                border="0"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
                style={{
                  height: 42,
                  width: 42,
                }}
              />
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
        <div
          style={{
            borderBottom: '1px dotted #00006F',
            paddingBottom: 12,
            paddingTop: 12,
          }}
        >
          <ContainerDimensions>
            {({ width }) => (
              <div
                style={{
                  width,
                }}
              >
                <p className="mask-h6">Find Us On Facebook</p>
                <div style={{ maxHeight: 500, overflow: 'hidden' }}>
                  <FacebookProvider appId="218604115574634">
                    <FBPage
                      href="https://www.facebook.com/RestorativeAuroville"
                      tabs="timeline,events,messages"
                    />
                  </FacebookProvider>
                </div>
              </div>
            )}
          </ContainerDimensions>
        </div>
        <div
          style={{
            borderBottom: '1px dotted #00006F',
            paddingBottom: 12,
            paddingTop: 12,
          }}
        >
          <p
            style={{
              textAlign: 'center',
            }}
          >
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
          <p
            style={{
              textAlign: 'center',
            }}
          >
            Made with&nbsp;
            <Icon type="heart" style={{ fontSize: '80%', color: '#00006F' }} />
            &nbsp;by&nbsp;
            <OutLink to="https://www.bodhiproject.org/">Bodhi Project</OutLink>
          </p>
          <p
            style={{
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Copyright © 2015-2019 Restorative Auroville & Joy Living Learning
          </p>
        </div>
      </aside>
    </div>
  )
}

Footer.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default Footer
