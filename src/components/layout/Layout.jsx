// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Type } from '@bodhi-project/typography'
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from '@bodhi-project/seo'
import { StickyContainer, Sticky } from 'react-sticky'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import ResponsiveToggle from '@bodhi-project/components/lib/ResponsiveToggle'
import Container from '@bodhi-project/components/lib/Container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../../styles/index.less'
import indexImage from '../../assets/launch.jpg'
import data from '../../data/website.json'

import WebsiteTitle from '../sandbox/WebsiteTitle'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
}

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: moment(data.org.foundingDate).format(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  // background: "#0053a5",
  padding: 0,

  '& #appWrapper': {
    // background: "#f2f2f2",
  },

  '& #contentWrapper': {
    paddingTop: '24px',

    '& #content': {
      paddingBottom: '4em',
      minHeight: '100vh',
    },
  },

  '& #menuWrapper': {
    zIndex: 1000,
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** after mount */
  componentDidMount() {
    if (!isUndefined(document)) {
      const htmlElement = document.documentElement
      if (htmlElement.classList.contains('lk-loading')) {
        htmlElement.classList.toggle('lk-loading')
      }
      if (!htmlElement.classList.contains('lk-active')) {
        htmlElement.classList.toggle('lk-active')
      }
    }
  }

  /** on mount */
  componentDidUpdate() {
    if (!isUndefined(window)) {
      const element = document.getElementById('contentWrapper')
      element.scrollTop = 0
    }
  }

  /** standard renderer */
  render() {
    const { children } = this.props

    return (
      <Type kit="dkc2ilk" style={{ minHeight: '100vh' }} className={pageStyles}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta
          data={{ titleTemplate: '%s | Restorative Auroville' }}
        />
        <UpdateTitle title="Loading..." />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <ResponsiveToggle id="appWrapper">
          {/* Mobile view */}
          <div id="mobile-app">
            <MobileNav {...this.props} />
            <div id="contentWrapper">
              <Container
                noFade
                bleed
                block
                id="content"
                style={{ paddingLeft: 6, paddingRight: 6 }}
              >
                {children}
                <MobileFooter />
              </Container>
            </div>
          </div>

          {/* Desktop view */}
          <div id="desktop-app">
            <StickyContainer>
              <header>
                <Container goldenMajor block noFade>
                  <WebsiteTitle />
                </Container>
                <Sticky topOffset={100}>
                  {({ style, isSticky }) => (
                    <div id="menuWrapper" style={style}>
                      <DesktopNav isSticky={isSticky} {...this.props} />
                    </div>
                  )}
                </Sticky>
              </header>
              <div id="contentWrapper">
                <Container noFade goldenMajor block id="content">
                  {children}
                </Container>
                <Container noFade goldenMajor block>
                  <DesktopFooter />
                </Container>
              </div>
            </StickyContainer>
          </div>
        </ResponsiveToggle>
      </Type>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
