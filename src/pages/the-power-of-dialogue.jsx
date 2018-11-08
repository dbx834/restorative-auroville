// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'

import seoHelper from '../methods/seoHelper'

import p1ComingSoon from '../assets/coming-soon-yellow.jpg'
import p2ComingSoon from '../assets/coming-soon-blue.jpg'
import p3ComingSoon from '../assets/coming-soon-red.jpg'
import p4ComingSoon from '../assets/coming-soon-green.jpg'

import p21 from '../assets/genies-precircle-with-janet.jpg'
import p31 from '../assets/engaging-with-restorative-circles-in-auroville.jpg'
import p32 from '../assets/designing-our-justice-system-consciously.jpg'
import p41 from '../assets/surya-on-restorative-circles.jpg'

import birdsTop from '../assets/birdsTop.png'
import grungeBox from '../assets/grungeBg.jpg'
import camera from '../assets/camera.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'The Power of Dialogue',
  nakedPageSlug: 'the-power-of-dialogue',
  pageAbstract:
    'We offer this video series as an opportunity for you to journey along with our journey. Restorative Circles is still very new to the world, and learning material and resources are somewhat limited. So here’s our attempt to celebrate this body of work and to offer back a few nuggets from our unfolding journey.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <Row gutter={{ xs: 24, sm: 24, md: 24 }}>
      <Col sm={24} md={15}>
        <h1 className="mask-h3">"The Power of Dialogue"</h1>
        <p>
          We offer this video series as an opportunity for you to journey along
          with our journey. Restorative Circles is still very new to the world,
          and learning material and resources are somewhat limited. So here’s
          our attempt to celebrate this body of work and to offer back a few
          nuggets from our unfolding journey.
        </p>
      </Col>
      <Col sm={24} md={9}>
        <div
          style={{
            padding: 18,
            paddingTop: 36,
            paddingBottom: 36,
            borderRadius: 4,
            position: 'relative',
          }}
          className="margin-p"
        >
          <div
            style={{
              position: 'absolute',
              top: 2,
              right: 5,
              height: 40,
              zIndex: -1,
            }}
          >
            <Image
              src={camera}
              style={{
                background: 'transparent',
                border: 'unset',
                height: 40,
                width: 40,
              }}
              rawWidth={900}
              rawHeight={900}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              zIndex: -2,
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={grungeBox}
              style={{
                background: 'transparent',
                border: 'unset',
                height: '100%',
                width: '100%',
              }}
              rawWidth={1440}
              rawHeight={900}
            />
          </div>
          <p style={{ marginBottom: 0 }}>
            <Link to="/projects/filimng-a-live-restorative-circle">
              Our big dream is to one day film an entire live Restorative Circle
            </Link>
            . It’s an intimate and delicate space, and so we’re crossing our
            fingers that sooner or later a group will be comfortable with the
            idea of being filmed…
          </p>
        </div>
      </Col>
    </Row>
    <h1
      className="mask-h3"
      id="the-craft"
      style={{ marginBottom: 2, borderTop: '4px solid #FFBF00' }}
    >
      1. The Craft
    </h1>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>a learning resource</strong>
        &nbsp;to highlight the RC process in its different steps and stages
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Image
          src={p1ComingSoon}
          style={{
            background: 'transparent',
            border: 'unset',
            height: 'auto',
            width: '100%',
            marginBottom: 10,
          }}
          loader="gradient"
          rawWidth={1440}
          rawHeight={900}
        />
        <p>Coming soon…</p>
      </Col>
      <Col md={12}>&nbsp;</Col>
    </Row>
    <h1
      className="mask-h3"
      id="in-action"
      style={{ marginBottom: 2, borderTop: '4px solid #4949FC' }}
    >
      2. In Action
    </h1>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>touching “live” moments</strong>
        &nbsp;from different stages of real Circles that have been called in the
        community
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Link to="the-power-of-dialogue/genies-pre-circle-with-janet">
          <Image
            src={p21}
            style={{
              background: 'transparent',
              border: 'unset',
              height: 'auto',
              width: '100%',
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>
          Before entering a Restorative Circle, Facilitators meet amongst
          themselves to work through any challenging thoughts or feelings that
          might interfere with their capacity to hold space during the Circle.
          Eugénie Dumont (Genie), in her role as filmmaker, is also given an
          opportunity to be heard for her connection to the Circle.
        </p>
      </Col>
      <Col md={12}>
        <Image
          src={p2ComingSoon}
          style={{
            background: 'transparent',
            border: 'unset',
            height: 'auto',
            width: '100%',
            marginBottom: 10,
          }}
          loader="gradient"
          rawWidth={1440}
          rawHeight={900}
        />
        <p>Coming soon…</p>
      </Col>
    </Row>
    <h1
      className="mask-h3"
      id="the-restorative-system"
      style={{ marginBottom: 2, borderTop: '4px solid #FF4D4D' }}
    >
      3. The Restorative System
    </h1>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>engaging with RC as a System</strong>
        &nbsp;and highlighting the need to talk about the meaning of justice and
        conflict in our community
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Link to="the-power-of-dialogue/engaging-with-restorative-circles-in-auroville">
          <Image
            src={p31}
            style={{
              background: 'transparent',
              border: 'unset',
              height: 'auto',
              width: '100%',
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>
          L'aura shares about her experience of engaging with Restorative
          Circles in Auroville and how it's received by the community.
        </p>
      </Col>
      <Col md={12}>
        <Link to="the-power-of-dialogue/designing-our-justice-system-consciously">
          <Image
            src={p32}
            style={{
              background: 'transparent',
              border: 'unset',
              height: 'auto',
              width: '100%',
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>
          L'aura shares about her experience of engaging with Restorative
          Circles in Auroville and the importance of designing a justice system
          consciously, otherwise we'll just inherit the old ways.
        </p>
      </Col>
    </Row>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Image
          src={p3ComingSoon}
          style={{
            background: 'transparent',
            border: 'unset',
            height: 'auto',
            width: '100%',
            marginBottom: 10,
          }}
          loader="gradient"
          rawWidth={1440}
          rawHeight={900}
        />
        <p>Coming soon…</p>
      </Col>
      <Col md={12}>&nbsp;</Col>
    </Row>
    <h1
      className="mask-h3"
      id="experiences"
      style={{ marginBottom: 2, borderTop: '4px solid #5FA15F' }}
    >
      4. Experiences
    </h1>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>community members talk about their experience</strong>
        &nbsp;being in live Circles
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Link to="the-power-of-dialogue/surya-on-restorative-circles">
          <Image
            src={p41}
            style={{
              background: 'transparent',
              border: 'unset',
              height: 'auto',
              width: '100%',
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>Surya shares about her experiences with Restoratives Circles.</p>
      </Col>
      <Col md={12}>
        <Image
          src={p4ComingSoon}
          style={{
            background: 'transparent',
            border: 'unset',
            height: 'auto',
            width: '100%',
            marginBottom: 10,
          }}
          loader="gradient"
          rawWidth={1440}
          rawHeight={900}
        />
        <p>Coming soon…</p>
      </Col>
    </Row>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
