// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isNull from 'lodash/isNull'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { FacebookProvider, Like as FBLike } from 'react-facebook'
import { Article, Header, Footer } from '@bodhi-project/semantic-webflow'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import StandardPage from './StandardPage'
import DisqusComments from '../DisqusComments'

import withUrl from '../../methods/withUrl'
import data from '../../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = ({
  className,
  pageData,
  seoData,
  prev = null,
  next = null,
  children,
}) => (
  <StandardPage className={className} seoData={seoData}>
    <Article>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/the-power-of-dialogue">The Power of Dialogue</Link>
        </BItem>
        <BItem>{seoData.pageTitle}</BItem>
      </Breadcrumb>
      <Header>
        <h1 className="mask-h3">{seoData.pageTitle}</h1>
      </Header>
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
        <div style={{ maxWidth: 96 }} id="fb" className="margin-p">
          <FacebookProvider appId="218604115574634">
            <FBLike
              href={withUrl(
                'the-power-of-dialogue/designing-our-justice-system-consciously',
                data
              )}
              colorScheme="dark"
              showFaces
              share
            />
          </FacebookProvider>
        </div>
      </div>

      {children}

      <Footer style={{ borderTop: '1px dotted #00006F' }}>
        <h1 className="mask-h4">More videos</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          className="mask-p"
        >
          <div>
            {!isNull(prev) ? (
              <Link to={`/${prev.nakedPageSlug}`}>⇜ Previous</Link>
            ) : (
              <span style={{ color: '#8a8a8a', cursor: 'not-allowed' }}>
                ⇜ Previous
              </span>
            )}
          </div>
          <div>
            {!isNull(next) ? (
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
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
