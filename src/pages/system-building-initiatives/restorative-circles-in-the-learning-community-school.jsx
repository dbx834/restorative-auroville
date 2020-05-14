// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'

import Timeline from 'antd/lib/timeline'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/timeline/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import SystemBuildingInitiativeWrapper from '../../components/wrappers/SystemBuildingInitiativeWrapper'
import PDFViewer from '../../components/PDFViewer'

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
    img8: file(
      relativePath: { eq: "system-building-initiatives/tlc/img8.jpg" }
    ) {
      ...max900
    }
    cover: file(
      relativePath: { eq: "system-building-initiatives/tlc/img9.jpg" }
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
    pic1: file(
      relativePath: { eq: "system-building-initiatives/tlc/pic1.jpeg" }
    ) {
      ...max900
    }
    pic2: file(
      relativePath: { eq: "system-building-initiatives/tlc/pic2.jpg" }
    ) {
      ...max900
    }
    pic3: file(
      relativePath: { eq: "system-building-initiatives/tlc/pic3.jpg" }
    ) {
      ...max900
    }
    pic4: file(
      relativePath: { eq: "system-building-initiatives/tlc/pic4.jpg" }
    ) {
      ...max900
    }
    pic5: file(
      relativePath: { eq: "system-building-initiatives/tlc/pic5.jpeg" }
    ) {
      ...max900
    }
    pic6: file(
      relativePath: { eq: "system-building-initiatives/tlc/pic6.jpeg" }
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
        Restorative Circles in TLC (The Learning Community School)
      </h1>
      <div style={{ maxWidth: 600, marginBottom: 30 }}>
        <Img fluid={props.data.cover.childImageSharp.fluid} />
      </div>
      <Timeline>
        <Timeline.Item color="#ff5700">
          <p>
            <strong>Restorative Circles at TLC (2015)</strong>
          </p>
          <p>
            In late 2015, we were invited to share RC with the teachers at TLC
            (The Learning Community School). They developed a System and
            facilitated a couple of Circles among the children, while we
            facilitated a couple of Circles among the facilitators and parents.
          </p>
          <div
            style={{ display: 'flex', height: '100%', alignItems: 'flex-end' }}
            className="mask-p desktop-only"
          >
            <GrungeBox
              style={{ paddingTop: 16, paddingBottom: 16, marginBottom: 0 }}
            >
              <p>
                <strong>Q</strong>: How do you know a Circle is over...?
                <br />
                <strong>A</strong>: When all the kids start climbing up the
                tree...!
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <p style={{ marginBottom: 0 }}>
                  <strong>Facilitator:</strong>&nbsp;
                </p>
                <p style={{ marginBottom: 0, marginTop: 0 }}>
                  <i>
                    "So, are you guys trying to say you just wanna have
                    fun...?!"
                  </i>
                  <br />
                  <i>"Is there anything more you’d like to say...?"</i>
                </p>
              </div>
            </GrungeBox>
          </div>
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
          <div className="mask-p">
            <PDFViewer
              url="https://www.restorativeauroville.org/pdfs2/tlc.pdf"
              title="See more notes"
              width="100%"
            />
          </div>
        </Timeline.Item>
        <Timeline.Item color="#ffd700">
          <p>
            <strong>
              Exploring a Peer Mediation System (July 2019 - April 2020)
            </strong>
          </p>
          <p>
            Starting in July 2019, we’ll be exploring with setting up a Peer
            Mediation System in TLC School, so that the children can have a
            space to be heard and to work through their challenges with one
            another. Although the School found meaning and support in the RC
            process, they want to experiment with possibilities for a “quicker
            response,” without needing to name and Pre-Circle everyone
            beforehand...
          </p>
          <div className="mask-p">
            <GalleryX
              data={props.data}
              lookup="pic"
              columns={{ min: 3, max: 3 }}
              Img={Img}
              Gallery={Gallery}
              MediaQuery={MediaQuery}
            />
          </div>
        </Timeline.Item>
        <Timeline.Item color="#ff5700">
          <p>
            <strong>Worldwide lockdown... (summer 2020 update)</strong>
          </p>
          <p>
            Over the year, our exploration changed direction a couple of times,
            from working with the entire school community (kids, facilitators,
            parents), to working just with the kids, to finally working just
            with the facilitators. It seems like our work has clearly made a
            contribution to how communication and conflict is held at TLC, but
            somehow we weren't able to ever finalize a working "conflict
            resolution system" together... And then life changed with the
            lockdown... until next time...!
          </p>
        </Timeline.Item>
      </Timeline>
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
