// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'
import { BlogPostSchema } from '@bodhi-project/seo'
import { Article, Header, Footer } from '@bodhi-project/semantic-webflow'
import { FacebookProvider, Like as FBLike } from 'react-facebook'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from './StandardPage'

import seoHelper from '../methods/seoHelper'
import withUrl from '../methods/withUrl'

import data from '../data/website.json'

const { Item: BItem } = Breadcrumb

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
    // category,
    author,
    pageAbstract: abstract,
    cover,
    prev,
    next,
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
      <Article>
        <Breadcrumb
          className="mask-p"
          separator="»"
          style={{ marginBottom: 30 }}
        >
          <BItem>
            <Link to="/">Home</Link>
          </BItem>
          <BItem>
            <Link to="/writings">Articles</Link>
          </BItem>
          <BItem>{title}</BItem>
        </Breadcrumb>
        <Header>
          <div style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
              <h1 className="mask-h3">{title}</h1>
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
            style={{
              marginBottom: 11,
              maxWidth: 450,
              height: 'auto',
              border: 'unset',
            }}
            className="mask-p"
          />
        </Header>
        {children}
        <Footer style={{ borderTop: '1px dotted #00006F' }}>
          <h1 className="mask-h4">More articles</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            className="mask-p"
          >
            <div>
              {!isUndefined(prev) ? (
                <Link to={`/${prev.nakedPageSlug}`}>⇜ Previous</Link>
              ) : (
                <span style={{ color: '#8a8a8a', cursor: 'not-allowed' }}>
                  ⇜ Previous
                </span>
              )}
            </div>
            <div>
              {!isUndefined(next) ? (
                <Link to={`/${next.nakedPageSlug}`}>Next ⇝</Link>
              ) : (
                <span style={{ color: '#8a8a8a', cursor: 'not-allowed' }}>
                  Next ⇝
                </span>
              )}
            </div>
          </div>
        </Footer>
      </Article>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
