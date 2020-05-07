// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Timeline from 'antd/lib/timeline'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/timeline/style/css'

import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'

import OutLink from '@bodhi-project/components/lib/outlink'
import Video from '@bodhi-project/components/lib/video'

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

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    sbi1: file(
      relativePath: { eq: "system-building-initiatives/aikiyam/aikiyam1.jpeg" }
    ) {
      ...max900
    }
    sbi2: file(
      relativePath: { eq: "system-building-initiatives/aikiyam/aikiyam2.jpeg" }
    ) {
      ...max900
    }
    sbi3: file(
      relativePath: { eq: "system-building-initiatives/aikiyam/aikiyam3.jpeg" }
    ) {
      ...max900
    }
    sbi4: file(
      relativePath: { eq: "system-building-initiatives/aikiyam/aikiyam4.jpeg" }
    ) {
      ...max900
    }
    sbi5: file(
      relativePath: { eq: "system-building-initiatives/aikiyam/aikiyam5.jpeg" }
    ) {
      ...max900
    }
    sbi6: file(
      relativePath: { eq: "system-building-initiatives/aikiyam/aikiyam6.jpeg" }
    ) {
      ...max900
    }
  }
`

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
      'https://www.restorativeauroville.org/pdfs2/system-building-initiatives-restorative-circles-in-aikiyam-school-conflict-resolution.pdf',
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
      <h1 className="mask-h3">Restorative Circles in Aikiyam School</h1>
      <p>Coming soon.</p>
      <div className="margin-p">
        <Timeline>
          <Timeline.Item color="#ffd700">
            <p>
              <strong>Taking RC to Aikiyam School (2017-2019)</strong>
            </p>
            <p>
              We are sharing RC in{' '}
              <OutLink to="https://www.aikiyamschool.org/">
                Aikiyam School
              </OutLink>
              , one of Auroville’s outreach schools for children from
              Kindergarten to 8th Grade. After discussions with the
              administration and teachers of the school, a group of ten teachers
              have committed to learn about the RC process, so that in the
              future they can respond better to conflict within their teams. It
              has been met with enthusiasm and curiosity. The school has a
              majority of teachers who are originally from the bioregion, so we
              are looking forward to seeing how they might adapt RC to their
              cultural context.
            </p>
            <div style={{ maxWidth: 600 }} className="margin-p">
              <Video url="https://www.youtube.com/watch?v=6Ma-dnG53LU" />
            </div>
            <div className="margin-p">
              <GalleryX
                data={props.data}
                lookup="sbi"
                columns={{ min: 3, max: 3 }}
                Img={Img}
                Gallery={Gallery}
                MediaQuery={MediaQuery}
              />
            </div>
          </Timeline.Item>
          <Timeline.Item color="#ff5700">
            <p>
              <strong>Exploring RC together (early 2018)</strong>
            </p>
            <p>
              In late 2019, a Circle was called regarding some structural
              challenges within the school, where several teachers and support
              group members were uneasy about how some teachers and
              administrative personnel were punishing children. Although the
              Circle took place, it revealed many areas of tension regarding
              lack of shared power and transparency, and unfortunately several
              key players chose not to attend the process. As a team, we made
              several attempts to restore connection with the school and revive
              our RC project, however we haven’t yet received a positive reply.
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
