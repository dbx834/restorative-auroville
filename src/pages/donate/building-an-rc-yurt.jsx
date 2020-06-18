// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'
import Video from '@bodhi-project/components/lib/video'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Timeline from 'antd/lib/timeline'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/timeline/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import DonateProjectWrapper from '../../components/wrappers/DonateProjectWrapper'

import Link from '../../components/Link'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Building an RC Yurt',
  nakedPageSlug: 'donate/building-an-rc-yurt',
  pageAbstract:
    'With our work growing, it’s high-time that we build a physical structure for our RC gatherings. We’re hoping to raise Rs.5 lakhs, in order to set up a dismountable yurt in Centre Field.',
}

const seoData = seoHelper(pageData)

const next = {
  // nakedPageSlug: 'community-events/walk-of-hope-in-auroville-and-the-bioregion',
}

const prev = {
  nakedPageSlug: 'donate/filming-a-live-restorative-circle',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    costs: file(relativePath: { eq: "donate/yurt/costs.jpeg" }) {
      ...max900
    }
    yurt4: file(relativePath: { eq: "donate/yurt/yurt4.jpeg" }) {
      ...max900
    }
    yurt3: file(relativePath: { eq: "donate/yurt/yurt3.jpeg" }) {
      ...max900
    }
    yurt5: file(relativePath: { eq: "donate/yurt/yurt5.jpeg" }) {
      ...max900
    }
    work3: file(relativePath: { eq: "donate/yurt/work3.jpeg" }) {
      ...max900
    }
    work2: file(relativePath: { eq: "donate/yurt/work2.jpeg" }) {
      ...max900
    }
    work1: file(relativePath: { eq: "donate/yurt/work1.jpeg" }) {
      ...max900
    }
    work5: file(relativePath: { eq: "donate/yurt/yurt7.jpeg" }) {
      ...max900
    }
    naming2: file(relativePath: { eq: "donate/yurt/naming2.jpeg" }) {
      ...max900
    }
    naming1: file(relativePath: { eq: "donate/yurt/naming1.jpeg" }) {
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
    <DonateProjectWrapper
      className=""
      seoData={seoData}
      prev={prev}
      next={next}
      pageData={pageData}
      {...props}
    >
      <h1 className="mask-h3">Building an RC Yurt</h1>
      <Timeline>
        <Timeline.Item color="#ff5700">
          <p>
            <strong>The idea is birthed (January 2017)</strong>
          </p>
          <Division custom={[12, 7]} className="margin-p">
            <p style={{ marginBottom: 0 }}>
              From early on in our project, we fantasized about the idea of
              having our own RC-space. Hélène (a previous team member) had met
              with Jean-Marc and had the idea of building a yurt. We tried to
              fundraise, but were simply unable to raise the amount we needed.
            </p>
            <div
              style={{ maxWidth: '15rem', marginBottom: 0 }}
              className="margin-p"
            >
              <Video url="https://youtu.be/OlD_0LJqpHw" />
            </div>
          </Division>
        </Timeline.Item>
        <Timeline.Item color="#ffd700">
          <p>
            <strong>The resurrection (June 2019)</strong>
          </p>
          <p>
            With Henrike on the team, we came back to our yurt dream and
            formalized our application to the Town Development Council and set
            up a fundraising campaign, some of which you can see below:
          </p>
          <p>
            With our work growing, it’s high-time that we build a physical
            structure for our RC gatherings. We’re hoping to raise Rs.6 lakhs in
            order to set up a dismountable yurt.
          </p>
          <div className="mask-p">
            <Img
              fluid={props.data.costs.childImageSharp.fluid}
              style={{ maxWidth: 480 }}
            />
          </div>
          <p>
            In our first 3 years, we hosted almost 30 live Circles, and each
            time we were faced with the challenge of finding a suitable meeting
            space. As we don’t have a budget for this work, we tried our best to
            find spaces that were available for free, and oftentimes we’d end up
            sitting in L’aura’s living room – which is cozy, but not workable as
            a long-term professional space.
          </p>
          <p>
            We’d like to create a space that’s more neutral and designed to
            accommodate about 30-40 people sitting in a circle.
          </p>
          <div className="margin-p">
            <GalleryX
              data={props.data}
              lookup="yurt"
              columns={{ min: 3, max: 3 }}
              Img={Img}
              Gallery={Gallery}
              MediaQuery={MediaQuery}
            />
          </div>
          <p>
            In the context of today’s Auroville, we think a dismountable and
            moveable structure would be the best. We visited a yurt built by
            Aurovilian builder Jean-Marc, and we loved its circular design. We’d
            like to set up a similar yurt, possibly in Centre Field next to
            L’aura’s house.
          </p>
          <p>We look forward to providing a new space for community growth.</p>
          <p>
            If you’re inspired by our project and would like to help, we welcome
            your contributions. Please know that any amount is greatly
            appreciated.&nbsp;
            <Link to="/donate">You can donate here</Link>.
          </p>
        </Timeline.Item>
        <Timeline.Item color="#ff5700">
          <p>
            <strong>Donations received (July 2019 - February 2020)</strong>
          </p>
          <p>
            Wow, what incredible support we received! Within just a few months,
            we were gifted a total of Rs.6,00,000!
          </p>
        </Timeline.Item>
        <Timeline.Item color="#ffd700">
          <p>
            <strong>Work starts (February 2020)</strong>
          </p>
          <p>
            Along with our builder, Jean-Marc, our team members and apprentices
            start varnishing the wood... And later on the digging to lay the
            foundation...
          </p>
          <div className="margin-p">
            <GalleryX
              data={props.data}
              lookup="work"
              columns={{ min: 3, max: 3 }}
              Img={Img}
              Gallery={Gallery}
              MediaQuery={MediaQuery}
            />
          </div>
        </Timeline.Item>
        <Timeline.Item color="#ff5700">
          <p>
            <strong>Naming ceremony (March 2020)</strong>
          </p>
          <p>
            Over a spontaneous team lunch, we brainstormed on different names
            for the space, and came up with “Dialogue House.”
          </p>
          <div className="margin-p">
            <GalleryX
              data={props.data}
              lookup="naming"
              columns={{ min: 2, max: 2 }}
              Img={Img}
              Gallery={Gallery}
              MediaQuery={MediaQuery}
            />
          </div>
        </Timeline.Item>
      </Timeline>
    </DonateProjectWrapper>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
