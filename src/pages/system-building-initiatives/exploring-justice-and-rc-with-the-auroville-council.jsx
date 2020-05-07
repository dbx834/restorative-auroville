// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/image/Image'

import Timeline from 'antd/lib/timeline'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/timeline/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import SystemBuildingInitiativeWrapper from '../../components/wrappers/SystemBuildingInitiativeWrapper'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Exploring Justice and RC with the Auroville Council',
  nakedPageSlug:
    'system-building-initiatives/exploring-justice-and-rc-with-the-auroville-council',
  pageAbstract: 'Coming soon.',
}

const next = {
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-aikiyam-school',
}

const prev = undefined

const seoData = seoHelper(pageData)

const notes = [
  {
    url:
      'https://www.restorativeauroville.org/pdfs2/system-building-initiatives-exploring-justice-and-rc-with-the-auroville-council.pdf',
    title: 'See more notes',
  },
]

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <SystemBuildingInitiativeWrapper
      className=""
      seoData={seoData}
      prev={prev}
      next={next}
      pageData={pageData}
      notes={notes}
      {...props}
    >
      <h1 className="mask-h3">
        Exploring Justice & RC with the Auroville Council
      </h1>
      <p>Coming soon.</p>
      <Image
        src="/sbi-assets/avc/avCouncil.jpg"
        rawWidth={1440}
        rawHeight={900}
        style={{
          height: 'auto',
          maxWidth: '45rem',
          border: 0,
          background: 'transparent',
          display: 'block',
          marginLeft: 0,
        }}
        alt="Exploring Justice and RC with the Auroville Council"
        className="margin-p"
      />
      <div className="margin-p">
        <Timeline>
          <Timeline.Item color="#ff5700">
            <p>
              <strong>Exploring RC together (early 2018)</strong>
            </p>
            <p>
              In early 2018, we invited the Auroville Council to explore RC and
              justice with us, so that we could improve our collaboration and
              better contribute to the community.
            </p>
            <p>Our topics included:</p>
            <ul className="mask-p">
              <li>
                An inquiry into what "justice" means to us, individually and
                collectively
              </li>
              <li>
                Comparing different justice systems: punitive vs restorative
              </li>
              <li>
                An inquiry into (ii) what works in AV as a response to conflict,
                loss of trust, misunderstanding; (ii) what doesn't work quite so
                well, (iii) and how we dream it could be
              </li>
              <li>
                Exploring principles of shared power and shared responsibility
                as it relates to our collective life, and decision-making and
                governance
              </li>
              <li>
                Clarifying what RC as a process is and isn't, and digging deeper
                into the systemic wisdom it offers
              </li>
              <li>
                Reconsidering and challenging some of our assumptions and
                conditioning around: power and control; the power and efficacy
                of dialogue; our role as individuals within the collective, and
                more
              </li>
              <li>
                Exploring the need for a larger, consciously designed systemic
                context, without which our conflict resolution processes cannot
                reach their full potential
              </li>
            </ul>
          </Timeline.Item>
          <Timeline.Item color="#ffd700">
            <p>
              <strong>Auroville Council goes live…! (2020 update)</strong>
            </p>
            <p>
              Following our justice exploration with the Auroville Council, our
              collaboration naturally deepened. Over the past 2 years, members
              from the Auroville Council have initiated a handful of Circles,
              they have actively participated in Circles when they were named,
              and they have also recommended to community members that they
              themselves call Circles.
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    </SystemBuildingInitiativeWrapper>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
