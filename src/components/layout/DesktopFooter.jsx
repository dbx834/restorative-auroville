// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
// import classNames from "classnames";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { FacebookProvider, Page as FBPage } from 'react-facebook'
import { Footer as SemanticFooter } from '@bodhi-project/semantic-webflow'

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
  paddingBottom: 12,
  marginBottom: 24,
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
    <div>
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
        <div className="stuff-and-social-media">
          <div className="project-highlight">
            <h1 className="mask-h3">More Information</h1>
            <Row gutter={{ xs: 12, sm: 12, md: 12 }}>
              <Col span={8}>
                <h3 className="mask-h6">About</h3>
                <ul
                  className="mask-p"
                  style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                    marginBottom: 0,
                  }}
                >
                  <li>
                    <Link to="/about-restorative-auroville">
                      Restorative Auroville
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/our-restorative-system-in-auroville">
                      Our RC System
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col span={8}>
                <h3 className="mask-h6">Our Work</h3>
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
              </Col>
              <Col span={8}>
                <h3 className="mask-h6">External Links</h3>
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
              </Col>
            </Row>
            <Row
              gutter={{ xs: 12, sm: 12, md: 12 }}
              style={{
                marginTop: 9,
                paddingTop: 9,
                borderTop: '1px dotted rgba(0, 0, 111, 0.5)',
              }}
            >
              <Col span={16}>
                <div>
                  <h3 className="mask-h6">Connect With Us</h3>
                  <div
                    style={{
                      display: 'flex',
                      marginBottom: 20,
                    }}
                  >
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
                          height: 36,
                          width: 36,
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
                          height: 36,
                          width: 36,
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
                          height: 33,
                          width: 33,
                        }}
                        className="apply-filter"
                        alt="See more videos on Vimeo - https://vimeo.com/laurajoyful"
                      />
                    </OutLink>
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
                          height: 33,
                          width: 33,
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
                          height: 33,
                          width: 33,
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
                          height: 33,
                          width: 33,
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
              </Col>
              <Col span={8}>
                <h3 className="mask-h6">Get Involved</h3>
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
              </Col>
            </Row>
            <div
              style={{
                marginTop: 9,
                marginBottom: 9,
                paddingTop: 9,
                paddingBottom: 9,
                borderTop: '1px dotted rgba(0, 0, 111, 0.5)',
                borderBottom: '1px dotted rgba(0, 0, 111, 0.5)',
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
                  marginBottom: 4,
                }}
              >
                Restorative Auroville is an initiative of{' '}
                <OutLink to="https://www.joylivinglearning.org/">
                  Joy Living Learning
                </OutLink>
                , a Unit of the&nbsp;
                <OutLink to="https://www.auroville.org/">
                  Auroville Foundation
                </OutLink>
                .
              </p>
              <p
                style={{
                  textAlign: 'center',
                  marginBottom: 4,
                  marginTop: 0,
                }}
              >
                ∞
              </p>
              <p
                style={{
                  textAlign: 'center',
                  marginBottom: 4,
                  marginTop: 0,
                }}
              >
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
              </p>
              <p
                style={{
                  textAlign: 'center',
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                Copyright © 2018 Restorative Auroville &{' '}
                <OutLink to="https://www.joylivinglearning.org/">
                  Joy Living Learning
                </OutLink>
              </p>
            </div>
          </div>
          <div className="social-media">
            <h2 className="mask-h6">Find Us On Facebook</h2>
            <div style={{ maxHeight: 700, overflow: 'hidden' }}>
              <FacebookProvider appId="218604115574634">
                <FBPage
                  href="https://www.facebook.com/RestorativeAuroville/"
                  tabs="timeline,events,messages"
                />
              </FacebookProvider>
            </div>
          </div>
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
