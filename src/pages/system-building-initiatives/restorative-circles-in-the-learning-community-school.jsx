// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'

import Division from '@bodhi-project/components/lib/division'
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
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    img1: file(
      relativePath: { eq: "system-building-initiatives/tlc/img1.jpg" }
    ) {
      ...max900
    }
    img2: file(
      relativePath: { eq: "system-building-initiatives/tlc/img2.jpg" }
    ) {
      ...max900
    }
    img3: file(
      relativePath: { eq: "system-building-initiatives/tlc/img3.jpg" }
    ) {
      ...max900
    }
    img4: file(
      relativePath: { eq: "system-building-initiatives/tlc/img4.jpg" }
    ) {
      ...max900
    }
    img5: file(
      relativePath: { eq: "system-building-initiatives/tlc/img5.jpg" }
    ) {
      ...max900
    }
    img6: file(
      relativePath: { eq: "system-building-initiatives/tlc/img6.jpg" }
    ) {
      ...max900
    }
    img7: file(
      relativePath: { eq: "system-building-initiatives/tlc/img7.jpg" }
    ) {
      ...max900
    }
    img8: file(
      relativePath: { eq: "system-building-initiatives/tlc/img8.jpg" }
    ) {
      ...max900
    }
    img9: file(
      relativePath: { eq: "system-building-initiatives/tlc/img9.jpg" }
    ) {
      ...max900
    }
    img10: file(
      relativePath: { eq: "system-building-initiatives/tlc/img10.jpg" }
    ) {
      ...max900
    }
    img11: file(
      relativePath: { eq: "system-building-initiatives/tlc/img11.jpg" }
    ) {
      ...max900
    }
    img12: file(
      relativePath: { eq: "system-building-initiatives/tlc/img12.jpg" }
    ) {
      ...max900
    }
    img13: file(
      relativePath: { eq: "system-building-initiatives/tlc/img13.jpg" }
    ) {
      ...max900
    }
    img14: file(
      relativePath: { eq: "system-building-initiatives/tlc/img14.jpg" }
    ) {
      ...max900
    }
    img15: file(
      relativePath: { eq: "system-building-initiatives/tlc/img15T.jpg" }
    ) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  console.log(props)
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
        <GalleryX
          data={props.data}
          lookup="img"
          columns={{ min: 3, max: 3 }}
          Img={Img}
          Gallery={Gallery}
          MediaQuery={MediaQuery}
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
