// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Images from '@bodhi-project/components/lib/Images'
import OutLink from '@bodhi-project/components/lib/OutLink'
import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import SystemBuildingInitiativeWrapper from '../../components/wrappers/SystemBuildingInitiativeWrapper'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Restorative Circles in Aikiyam School',
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-aikiyam-school',
  pageAbstract:
    'We are sharing RC in Aikiyam School, one of Auroville’s outreach schools for children from Kindergarten to 8th Grade. After discussions with the administration and teachers of the school, a group of ten teachers has committed to learn about RC.',
}

const seoData = seoHelper(pageData)

const photos = [
  { src: '/sbi-assets/aikiyam/aikiyam1.jpeg', width: 1280, height: 960 },
  { src: '/sbi-assets/aikiyam/aikiyam2.jpeg', width: 1280, height: 960 },
  { src: '/sbi-assets/aikiyam/aikiyam3.jpeg', width: 1032, height: 774 },
  { src: '/sbi-assets/aikiyam/aikiyam4.jpeg', width: 1032, height: 774 },
  { src: '/sbi-assets/aikiyam/aikiyam6.jpeg', width: 1280, height: 960 },
  { src: '/sbi-assets/aikiyam/aikiyam5.jpeg', width: 1280, height: 960 },
]

const next = {
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-the-learning-community-school',
}

const prev = {
  nakedPageSlug:
    'system-building-initiatives/exploring-justice-and-rc-with-the-auroville-council',
}

const notes = [
  {
    url:
      'https://www.restorativeauroville.org/sbi-assets/aikiyam/conflict-resolution.pdf',
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
    >
      <h1 className="mask-h3">Restorative Circles in Aikiyam School</h1>
      <p>
        We are sharing RC in{' '}
        <OutLink to="https://www.aikiyamschool.org/">Aikiyam School</OutLink>,
        one of Auroville’s outreach schools for children from Kindergarten to
        8th Grade. After discussions with the administration and teachers of the
        school, a group of ten teachers have committed to learn about the RC
        process, so that in the future they can respond better to conflict
        within their teams. It has been met with enthusiasm and curiosity, and
        we look forward to seeing how we canare in the middle of co-creatinge an
        RC System for the school. The school has an overwhelming majority of
        teachers who are originally from the bioregionTamil Nadu, and we are
        looking forward to seeing how they can adapt RC to their cultural
        context.
      </p>
      <div style={{ maxWidth: 600 }} className="margin-p">
        <Video url="https://www.youtube.com/watch?v=6Ma-dnG53LU" />
      </div>
      <div className="margin-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 3, max: 3 }}
        />
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
