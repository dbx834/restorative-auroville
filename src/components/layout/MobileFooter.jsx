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
import { Link } from 'gatsby'
import { FacebookProvider, Page as FBPage } from 'react-facebook'
import { Footer as SemanticFooter } from '@bodhi-project/semantic-webflow'
import ContainerDimensions from 'react-container-dimensions'
import Disqus from 'disqus-react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
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
import nvcX62 from '../../assets/gallery/nvcX62.jpg'

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

  const disqusShortname = 'restorativeauroville'
  const disqusConfig = {
    url: 'http://localhost:8000/restorative-circles',
    identifier: 'http://localhost:8000/restorative-circles',
    title: 'Our Project: Restorative Auroville',
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
          marginTop: 64,
        }}
        alt="Restorative Auroville"
      />
      <SemanticFooter className={footerStyles}>
        <h1 className="mask-h3">More Information</h1>
        <div
          style={{
            borderBottom: '1px dotted #00006F',
            borderTop: '1px dotted #00006F',
            paddingBottom: 12,
            paddingTop: 12,
          }}
        >
          <h3 className="mask-h6">Connect With Us</h3>
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
          <h3 className="mask-h6">Project Highlight</h3>
          <div className="mask-p">
            <Image
              src={nvcX62}
              rawWidth={1440}
              rawHeight={900}
              style={{
                border: 0,
                background: 'transparent',
              }}
            />
          </div>
          <p>
            <strong>Cross-Cultural Dialogue</strong>
            <br />
            2018
            <br />
            We want to explore and understand this question: Are we divided in
            Auroville, as local Tamil Aurovilians and non-local Aurovilians?
          </p>
          <div className="mask-p" style={{ marginBottom: 0 }}>
            <Link to="/initiatives/cross-cultural-dialogue">Read more ⇝</Link>
          </div>
        </div>
        <div
          style={{
            borderBottom: '1px dotted #00006F',
            paddingBottom: 12,
            paddingTop: 12,
          }}
        >
          <h3 className="mask-h6">Leave a comment…</h3>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
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
                <h3 className="mask-h6">Find Us On Facebook</h3>
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
                "<i>{quote}</i>"
              </Fragment>
            )}
            {isArray(quote) && (
              <Fragment>
                "<i>
                  {map(quote, (quotelet, index) => (
                    <Fragment key={index}>
                      {index !== 0 && <br />}
                      {quotelet}
                    </Fragment>
                  ))}
                </i>"
              </Fragment>
            )}
            <br />
            ~ {author}
          </p>
          <p
            style={{
              textAlign: 'center',
            }}
          >
            Made with&nbsp;
            <Icon
              type="heart"
              style={{ fontSize: '80%', color: '#00006F' }}
            />&nbsp;by&nbsp;
            <OutLink to="https://www.bodhiproject.org/">Bodhi Project</OutLink>
          </p>
          <p
            style={{
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Copyright © 2018 Restorative Auroville & Joy Living Learning
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
