// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Images from '@bodhi-project/components/lib/Images'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import SystemBuildingInitiativeWrapper from '../../components/wrappers/SystemBuildingInitiativeWrapper'

import GrungeBox from '../../components/GrungeBox'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Restorative Circles in TLC (The Learning Community School)',
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-the-learning-community-school',
  pageAbstract:
    'In late 2015, we were invited to share RC with the teachers at TLC (The Learning Community School). They developed a System and facilitated a couple of Circles among the children, while we facilitated a couple of Circles among the facilitators and parents.',
}

const seoData = seoHelper(pageData)

const photos = [
  { src: '/sbi-assets/tlc/img1.jpg', width: 600, height: 979 },
  { src: '/sbi-assets/tlc/img2.jpg', width: 600, height: 338 },
  { src: '/sbi-assets/tlc/img3.jpg', width: 600, height: 338 },
  { src: '/sbi-assets/tlc/img4.jpg', width: 600, height: 435 },
  { src: '/sbi-assets/tlc/img5.jpg', width: 600, height: 430 },
  { src: '/sbi-assets/tlc/img6.jpg', width: 600, height: 800 },
  { src: '/sbi-assets/tlc/img7.jpg', width: 600, height: 800 },
  { src: '/sbi-assets/tlc/img8.jpg', width: 600, height: 800 },
  { src: '/sbi-assets/tlc/img9.jpg', width: 600, height: 361 },
  { src: '/sbi-assets/tlc/img10.jpg', width: 600, height: 1444 },
  { src: '/sbi-assets/tlc/img11.jpg', width: 600, height: 828 },
  { src: '/sbi-assets/tlc/img12.jpg', width: 600, height: 327 },
  { src: '/sbi-assets/tlc/img15.jpeg', width: 1280, height: 720 },
  { src: '/sbi-assets/tlc/img13.jpg', width: 600, height: 739 },
  { src: '/sbi-assets/tlc/img14.jpg', width: 600, height: 1067 },
]

const prev = {
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-aikiyam-school',
}

const next = undefined

const notes = []

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  display: 'flex !important',
}).toString()

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
      <Division golden className={style}>
        <div>
          <h1 className="mask-h3">
            Restorative Circles in TLC (The Learning Community School)
          </h1>
          <h2 className="mask-h4">
            Phase 2 – Exploring a Peer Mediation System
          </h2>
          <p>
            Starting in July 2019, we’ll be exploring with setting up a Peer
            Mediation System in TLC School, so that the children can have a
            space to be heard and to work through their challenges with one
            another. Although the School found meaning and support in the RC
            process, they want to experiment with possibilities for a “quicker
            response,” without needing to name and Pre-Circle everyone
            beforehand...
          </p>
          <h2 className="mask-h4">Phase 1 – Restorative Circles</h2>
          <p>
            In late 2015, we were invited to share RC with the teachers at TLC
            (The Learning Community School). They developed a System and
            facilitated a couple of Circles among the children, while we
            facilitated a couple of Circles among the facilitators and parents.
          </p>
        </div>
        <div
          style={{ display: 'flex', height: '100%', alignItems: 'flex-end' }}
          className="desktop-only"
        >
          <div>
            <GrungeBox style={{ paddingTop: 16, paddingBottom: 16 }}>
              <p>
                <strong>Q</strong>: How do you know a Circle is over...?
                <br />
                <strong>A</strong>: When all the kids start climbing up the
                tree...!
              </p>
              <p style={{ marginBottom: 0 }}>
                <i>
                  "So, are you guys trying to say you just wanna have fun...?!"
                </i>
                <br />
                <i>"Is there anything more you’d like to say...?"</i>
              </p>
            </GrungeBox>
          </div>
        </div>
      </Division>
      <div className="mask-p">
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
