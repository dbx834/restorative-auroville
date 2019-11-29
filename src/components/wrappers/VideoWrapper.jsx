// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { FacebookProvider, Like as FBLike } from 'react-facebook'
import { Article, Header } from '@bodhi-project/semantic-webflow'

import PrevNext from '@bodhi-project/components/lib/PrevNext'

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
  prev = {},
  next = {},
  children,
  ...props
}) => (
  <StandardPage className={className} seoData={seoData} {...props}>
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
      <div style={{ position: 'relative', marginBottom: 0 }} className="mask-p">
        <div style={{ maxWidth: 114, overflow: 'hidden' }}>
          <FacebookProvider appId="218604115574634">
            <FBLike
              href={withUrl(pageData.nakedPageSlug, data)}
              colorScheme="dark"
              share
            />
          </FacebookProvider>
        </div>
      </div>

      {children}

      <div style={{ borderTop: '1px dotted #00006F' }}>
        <h2 className="mask-h4">More in this series</h2>
        <PrevNext next={next} prev={prev} Link={Link} />
      </div>
    </Article>
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
