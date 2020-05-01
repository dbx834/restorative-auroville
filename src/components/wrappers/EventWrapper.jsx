// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
// import moment from 'moment'

import isNull from 'lodash/isNull'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import EventSchema from '@bodhi-project/seo/lib/EventSchema'
import { Header, Footer } from '@bodhi-project/semantic-webflow'
import { FacebookProvider, Like as FBLike } from 'react-facebook'

import PrevNext from '@bodhi-project/components/lib/prev-next'
import Image from '@bodhi-project/components/lib/image/Image'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
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

const { Fragment } = React
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
    startDate,
    endDate,
    cost,
  } = pageData

  const seoData = seoHelper(pageData)
  const eventSchemaData = {
    name: title,
    url: `${data.websiteUrl}${route}`,
    description: abstract,
    startDate,
    endDate,
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

  return (
    <StandardPage className="" seoData={seoData} {...props}>
      <EventSchema data={eventSchemaData} />
      <Breadcrumb className="mask-p event-breadcrumb" separator="»">
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/events">Workshops & Practice Groups</Link>
        </BItem>
        <BItem>{title}</BItem>
      </Breadcrumb>
      <Division golden>
        <Fragment>
          <Header>
            <Division golden>
              <Fragment>
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
                  className="mask-p event-cover"
                />
              </Fragment>
              <Fragment>
                <h1 className="mask-h3" style={{ marginTop: -6 }}>
                  {title}
                </h1>
                <p>
                  <i>
                    {formattedDate}
                    <br />
                    {frontmatter.fromTime}&nbsp;-&nbsp;
                    {frontmatter.toTime}
                  </i>
                </p>
                <div
                  style={{ position: 'relative', marginBottom: 0 }}
                  className="mask-p"
                >
                  <FacebookProvider appId="218604115574634">
                    <FBLike
                      href={withUrl(route, data)}
                      colorScheme="dark"
                      share
                    />
                  </FacebookProvider>
                </div>
              </Fragment>
            </Division>
          </Header>
          {children}
          <Footer style={{ borderTop: '1px dotted #00006F' }}>
            <h1 className="mask-h4">More events</h1>
            <PrevNext
              prev={!isNull(prev) && { nakedPageSlug: prev.fields.route }}
              next={!isNull(next) && { nakedPageSlug: next.fields.route }}
              Link={Link}
            />
          </Footer>
        </Fragment>
        <Fragment>
          <EventRegisterationForm
            event={{ node: { frontmatter, fields: { route, humanDate } } }}
            formattedDate={formattedDate}
          />
        </Fragment>
      </Division>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
