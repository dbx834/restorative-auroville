// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
// import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isNull from 'lodash/isNull'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { EventSchema } from '@bodhi-project/seo'
import { Header, Footer } from '@bodhi-project/semantic-webflow'
import { FacebookProvider, Like as FBLike } from 'react-facebook'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import StandardPage from './StandardPage'

import seoHelper from '../../methods/seoHelper'
import withUrl from '../../methods/withUrl'

import data from '../../data/website.json'

import EventRegisterationForm from '../forms/EventRegisterationForm'

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const {
    children,
    pageData,
    frontmatter,
    humanDate,
    next,
    prev,
    formattedDate,
  } = props
  const {
    // pageTitle,
    pageTitle: title,
    nakedPageSlug: route,
    // publishedTimestamp,
    // author,
    pageAbstract: abstract,
    cover,
    begins,
    ends,
    cost,
  } = pageData

  const seoData = seoHelper(pageData)
  const eventSchemaData = {
    name: title,
    url: `${data.nakedWebsiteUrl}${route}`,
    description: abstract,
    startDate: begins,
    endDate: ends,
    locationName: data.orgLocation.locationName,
    locationUrl: data.orgLocation.locationUrl,
    streetAddress: data.orgLocation.streetAddress,
    addressLocality: data.orgLocation.addressLocality,
    addressRegion: data.orgLocation.addressRegion,
    postalCode: data.orgLocation.postalCode,
    addressCountry: data.orgLocation.addressCountry,
    image: `${data.websiteUrl}${cover}`,
    performer: {
      name: data.org.founders[0],
      image: `${data.websiteUrl}${cover}`,
      sameAs: data.orgSocialMediaProfiles,
    },
    offers: {
      price: cost,
      priceCurrency: 'INR',
      url: `${data.websiteUrl}${route}`,
    },
  }
  // const dateStr = moment(frontmatter.date).format('ddd, MMMM D, YYYY')

  return (
    <StandardPage className="" seoData={seoData}>
      <EventSchema data={eventSchemaData} />
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/events">Events</Link>
        </BItem>
        <BItem>{title}</BItem>
      </Breadcrumb>
      <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
        <Col sm={24} md={24} xl={15}>
          <Header>
            <Row gutter={{ xs: 24, sm: 24, md: 24 }}>
              <Col sm={24} md={9}>
                <Image
                  src={cover}
                  rawWidth={1440}
                  rawHeight={900}
                  style={{
                    border: '1px solid #00006F',
                    height: 'auto',
                    width: '100%',
                    marginBottom: 11,
                  }}
                  className="mask-p"
                />
              </Col>
              <Col sm={24} md={15}>
                <h1
                  className="mask-h3"
                  style={{ marginTop: -10, marginBottom: 5 }}
                >
                  {title}
                </h1>
                <p>{formattedDate}</p>
                <div style={{ position: 'relative' }} className="mask-p">
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 101,
                      backgroundColor: '#ffffff',
                      zIndex: 10,
                      height: 20,
                      width: 'calc(100% - 96px)',
                    }}
                  />
                  <div style={{ maxWidth: 96 }} id="fb">
                    <FacebookProvider appId="218604115574634">
                      <FBLike
                        href={withUrl(route, data)}
                        colorScheme="dark"
                        showFaces
                        share
                      />
                    </FacebookProvider>
                  </div>
                </div>
              </Col>
            </Row>
          </Header>
          {children}
          <Footer style={{ borderTop: '1px dotted #00006F' }}>
            <h1 className="mask-h4">More events</h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 0,
              }}
              className="mask-p"
            >
              <div>
                {!isNull(prev) && (
                  <Link to={`/${prev.fields.route}`}>⇜ Previous</Link>
                )}
              </div>
              <div>
                {!isNull(next) && (
                  <Link to={`/${next.fields.route}`}>Next ⇝</Link>
                )}
              </div>
            </div>
          </Footer>
        </Col>
        <Col sm={24} md={24} xl={9}>
          <EventRegisterationForm
            event={{ node: { frontmatter, fields: { route, humanDate } } }}
            formattedDate={formattedDate}
          />
        </Col>
      </Row>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
