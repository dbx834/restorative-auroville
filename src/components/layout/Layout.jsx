// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'

import map from 'lodash/map'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { StaticQuery, graphql } from 'gatsby'
import { Grommet, Box, Button, DropButton, Layer } from 'grommet'
import Img from 'gatsby-image'
import MediaQuery from 'react-responsive'

import StandardHeaderNavigation from '@bodhi-project/components/lib/header-navigations/standard/gatsby'
import '@bodhi-project/components/lib/header-navigations/standard/style.less'
import '@bodhi-project/components/lib/header-navigations/primitives/mobile-layer/style.less'
import '@bodhi-project/components/lib/header-navigations/primitives/list-menu-renderer/style.less'
import '@bodhi-project/components/lib/header-navigations/primitives/button-menu-renderer/style.less'

import MinimalFooterNavigation from '@bodhi-project/components/lib/footer-navigations/minimal'
import '@bodhi-project/components/lib/footer-navigations/minimal/style.less'

import getRandomArbitraryInt from '@bodhi-project/components/lib/methods/getRandomArbitraryInt'
import defaultScroll from '@bodhi-project/components/lib/features/default-scroll'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../../bootstrap/type.less'
import '../../bootstrap/responsive.less'
import '../../bootstrap/containers.less'

import Link from '../Link'

import desktopMenu from '../../data/desktopMenu.json'
import mobileMenu from '../../data/mobileMenu.json'
import websiteMenu from '../../data/websiteMenu.json'
import quotes from '../../data/quotes.json'

import './style.less'
import '../../styles/index.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const exportImageFragments = graphql`
  fragment max90 on File {
    childImageSharp {
      fluid(maxWidth: 90, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max300 on File {
    childImageSharp {
      fluid(
        maxWidth: 300
        quality: 80
        srcSetBreakpoints: [100, 150, 200, 250, 300]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max900 on File {
    childImageSharp {
      fluid(maxWidth: 900, quality: 80, srcSetBreakpoints: [300, 600, 900]) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max1200 on File {
    childImageSharp {
      fluid(
        maxWidth: 1200
        quality: 80
        srcSetBreakpoints: [300, 600, 900, 1200]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max1500 on File {
    childImageSharp {
      fluid(
        maxWidth: 1500
        quality: 80
        srcSetBreakpoints: [300, 600, 900, 1200, 1500]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max3000 on File {
    childImageSharp {
      fluid(
        maxWidth: 3000
        quality: 80
        srcSetBreakpoints: [300, 600, 900, 1200, 1500, 2100, 2700, 3000]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
export const query = graphql`
  query {
    mobileLogo: file(relativePath: { eq: "logos/mobile-logo.png" }) {
      ...max900
    }
    logo: file(relativePath: { eq: "logos/logo.png" }) {
      ...max900
    }
    wavesTop: file(relativePath: { eq: "dividers/wavesTop.png" }) {
      ...max900
    }
    wavesBottom: file(relativePath: { eq: "dividers/wavesBottom.png" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const theme = {
  global: {
    colors: { brand: '#00006F', control: '#00006F' },
    edgeSize: {
      small: '8px',
    },
  },
  button: {
    color: 'brand',
    extend: { fontSize: 'inherit' },
    border: {
      radius: '8px',
    },
  },
  box: { extend: { overflow: 'hidden' } },
  layer: {
    zIndex: 1000,
    background: 'transparent',
  },
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** [description] */
const Layout = props => {
  const { children, className = '' } = props
  const random = getRandomArbitraryInt(0, quotes.length - 1)
  const quoteObj = quotes[random]
  let quote = ''
  let author = ''
  if (!isUndefined(quoteObj)) {
    ;({ quote, author } = quoteObj)
  }

  return (
    <StaticQuery
      query={query}
      render={data => {
        const { mobileLogo, logo } = data

        return (
          <Grommet theme={theme} className="golden-major-container" id="layout">
            <header>
              <Link to="/" className="title">
                <Img
                  fluid={data.logo.childImageSharp.fluid}
                  alt="Restorative Auroville"
                />
                <h1 className="mask-h2">Restorative Circles in Auroville</h1>
              </Link>
              <StandardHeaderNavigation
                desktopMenu={desktopMenu}
                mobileMenu={mobileMenu}
                Link={Link}
                Img={Img}
                Box={Box}
                Button={Button}
                Layer={Layer}
                MediaQuery={MediaQuery}
                DropButton={DropButton}
                mobileLogo={mobileLogo.childImageSharp.fluid}
              />
              <Img fluid={data.wavesTop.childImageSharp.fluid} />
            </header>
            <main role="main" className={`main ${className}`}>
              {children}
            </main>
            <footer>
              <Img fluid={data.wavesBottom.childImageSharp.fluid} />
              <MinimalFooterNavigation
                data={websiteMenu}
                Link={Link}
                FootNote={
                  <Fragment>
                    <p className="text">
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
                    <p className="year">
                      Copyright © 2015-2020{' '}
                      <Link to="/">Restorative Auroville</Link>
                      &nbsp;&&nbsp;
                      <Link to="https://www.joylivinglearning.org/">
                        Joy Living Learning
                      </Link>
                    </p>
                  </Fragment>
                }
              />
            </footer>
          </Grommet>
        )
      }}
    />
  )
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Propcheck
// ----------------------------------------------------------------------------
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Compose
// ----------------------------------------------------------------------------
/** Compose ala FP style */
const ComposedComponent = compose(defaultScroll)(Layout)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default ComposedComponent
