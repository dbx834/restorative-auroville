// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Article, Header } from '@bodhi-project/semantic-webflow'

import PrevNext from '@bodhi-project/components/lib/prev-next'

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
}) => {
  const { nakedPageSlug: route } = pageData

  return (
    <StandardPage className={className} seoData={seoData} {...props}>
      <Article>
        <Breadcrumb
          className="mask-p power-of-dialogue-breadcrumb"
          separator="»"
        >
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
        {children}
        <div style={{ borderTop: '1px dotted #00006F' }}>
          <h2 className="mask-h4">More in this series</h2>
          <PrevNext next={next} prev={prev} Link={Link} />
        </div>
      </Article>
      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
