// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import PDFReader from '@bodhi-project/components/lib/PDFReader'

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
  pageTitle: 'Exploring Justice and RC with the Auroville Council',
  nakedPageSlug:
    'system-building-initiatives/exploring-justice-and-rc-with-the-auroville-council',
  pageAbstract:
    'In early 2018, we invited the Auroville Council to explore RC and justice with us, so that we could improve our collaboration and better contribute to the community.',
}

const seoData = seoHelper(pageData)

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
          <Link to="/system-building-initiatives">
            System-Building Initiatives
          </Link>
        </BItem>
        <BItem>Exploring Justice & RC with the Auroville Council</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        Exploring Justice & RC with the Auroville Council
      </h1>
      <Image
        src="/sbi-assets/avc/avCouncil.jpg"
        rawWidth={1440}
        rawHeight={900}
        style={{
          height: 'auto',
          maxWidth: '600px',
          border: 0,
          background: 'transparent',
          display: 'block',
          marginLeft: 0,
        }}
        alt="Exploring Justice and RC with the Auroville Council"
        className="margin-p"
      />
      <p>
        In early 2018, we invited the Auroville Council to explore RC and
        justice with us, so that we could improve our collaboration and better
        contribute to the community.
      </p>
      <p>Our topics included:</p>
      <ul className="mask-p">
        <li>
          An inquiry into what "justice" means to us, individually and
          collectively
        </li>
        <li>Comparing different justice systems: punitive vs restorative</li>
        <li>
          An inquiry into (ii) what works in AV as a response to conflict, loss
          of trust, misunderstanding; (ii) what doesn't work quite so well,
          (iii) and how we dream it could be
        </li>
        <li>
          Exploring principles of shared power and shared responsibility as it
          relates to our collective life, and decision-making and governance
        </li>
        <li>
          Clarifying what RC as a process is and isn't, and digging deeper into
          the systemic wisdom it offers
        </li>
        <li>
          Reconsidering and challenging some of our assumptions and conditioning
          around: power and control; the power and efficacy of dialogue; our
          role as individuals within the collective, and more
        </li>
        <li>
          Exploring the need for a larger, consciously designed systemic
          context, without which our conflict resolution processes cannot reach
          their full potential
        </li>
      </ul>
      <div className="margin-p">
        <PDFReader url="https://www.restorativeauroville.org/sbi-assets/avc/avc.pdf" />
        &nbsp;
      </div>
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
