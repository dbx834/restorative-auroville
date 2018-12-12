// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Women for Justice',
  nakedPageSlug: 'projects/women-for-justice',
  pageAbstract:
    "In collaboration with Auroville Village Action Group and Nimisha Desai, founder of the NGO 'Olakh' (Gujarat), we will present a documentary about Nimisha’s work with women’s justice. The film will be translated live into Tamil, and followed by a Q&A session with Nimisha. Additional workshops will also be organized, geared especially towards women and youth from the bioregion.",
}

const seoData = seoHelper(pageData)

const photos = [
  { src: '/project-assets/women/english.jpg', width: 598, height: 677 },
  { src: '/project-assets/women/tamil.jpeg', width: 1012, height: 1280 },
]

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/projects/ongoing">Projects</Link>
        </BItem>
        <BItem>Women for Justice</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Women for Justice</h1>
      <p>
        <strong>To be scheduled in 2019…</strong>
        <br />
        In collaboration with Auroville Village Action Group and Nimisha Desai,
        founder of the NGO "Olakh" (Gujarat), we will present a documentary
        about Nimisha’s work with women’s justice. The film will be translated
        live into Tamil, and followed by a Q&A session with Nimisha. Additional
        workshops will also be organized, geared especially towards women and
        youth from the bioregion.
      </p>
      <div className="margin-p">
        <Images photos={photos} loader="gradient" columns={2} />
        &nbsp;
      </div>
      <p>
        <strong>A Story About The Power of Solidarity (53 minutes)</strong>
        <br />
        <i>[with live Tamil translation and English subtitles]</i>
      </p>
      <p>
        Synopsis: Violence against women is omnipresent and nearly all women,
        independent of class, caste and religion are affected. Because police
        and justice hardly give any protection or aid, women have organized to
        fight against this violence and injustice. In Gujarat, they founded the
        “Women for Justice” and the “Nari Adalat” women’s courts. Every week
        they gather on the roof terrace of the local government or under a tree
        and dispense justice themselves. With quick-wittedness and creativity
        they put beating husbands and quarrelsome mother-in-laws in their place.
        And – if necessary – they go in as a “heavy squad” to help a poor widow,
        who was thrown out of the house with her little daughter after the death
        of her husband, to regain her belongings.
      </p>
      <p>All are welcome, women and men, girls and boys!</p>
      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
