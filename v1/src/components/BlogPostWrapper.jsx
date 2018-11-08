// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import startsWith from 'lodash/startsWith'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from 'gatsby-link';
import { BlogPostSchema } from '@bodhi-project/seo'
import { Header } from '@bodhi-project/semantic-webflow'
import { FacebookProvider, Like as FBLike } from 'react-facebook'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from './StandardPage'

import seoHelper from '../methods/seoHelper'
import withUrl from '../methods/withUrl'

import data from '../data/website.json'

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const { children, pageData } = props
  const {
    // pageTitle,
    pageTitle: title,
    nakedPageSlug: route,
    publishedTimestamp,
    category,
    author,
    pageAbstract: abstract,
    cover,
  } = pageData

  const seoData = seoHelper(pageData)
  const blogPageSchemaData = {
    headline: title,
    image: cover,
    url: `${data.nakedWebsiteUrl}${route}`,
    datePublished: 'isoDate',
    description: abstract,
    publisher: data.org.name,
  }

  return (
    <StandardPage className="" seoData={seoData}>
      <BlogPostSchema data={blogPageSchemaData} />
      <Header>
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>
            <h1 className="mask-h3">{title}</h1>
          </div>
          <div style={{ flexGrow: 0, flexBasis: 0, paddingTop: 10 }}>
            <Tag color="geekblue" style={{ cursor: 'unset' }}>
              {category}
            </Tag>
          </div>
        </div>
        <p>
          {author}
          &nbsp;&nbsp;○&nbsp;&nbsp;
          {moment.unix(publishedTimestamp).format('ddd, MMMM D, YYYY')}
        </p>
        <p>
          <i>{abstract}</i>
        </p>
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
        <Image
          src={cover}
          rawWidth={1440}
          rawHeight={900}
          style={{ border: 0, height: 'auto !important', marginBottom: 11 }}
          className="mask-p"
        />
      </Header>
      {children}
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
