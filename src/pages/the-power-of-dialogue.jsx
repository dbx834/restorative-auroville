// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'
import Images from '@bodhi-project/components/lib/Images'

import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'
import DisqusComments from '../components/DisqusComments'
import VideoCover from '../components/VideoCover'

import seoHelper from '../methods/seoHelper'

import p1ComingSoon from '../assets/coming-soon-yellow.jpg'
import p2ComingSoon from '../assets/coming-soon-blue.jpg'
import p3ComingSoon from '../assets/coming-soon-red.jpg'
import p4ComingSoon from '../assets/coming-soon-green.jpg'

import p21 from '../assets/genies-precircle-with-janet.jpg'
import p31 from '../assets/engaging-with-restorative-circles-in-auroville.jpg'
import p32 from '../assets/designing-our-justice-system-consciously.jpg'
import p41 from '../assets/surya-on-restorative-circles.jpg'

import yellowBorder from '../assets/yellowBorder.jpg'
import greenBorder from '../assets/greenBorder.jpg'
import redBorder from '../assets/redBorder.jpg'
import blueBorder from '../assets/blueBorder.jpg'

import grungeBox from '../assets/grungeBg.jpg'
import camera from '../assets/camera.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
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
/** Theme */
const Theme = props => {
  const { border, title, files, tag, text, photos, columns } = props
  return (
    <div style={{ paddingLeft: 12, borderLeft: `8px solid ${border}` }}>
      <h2 className="mask-h4">
        <span>{title}</span>
        <Link to="/archives">
          <Tag color="geekblue">...from our Archives</Tag>
        </Link>
      </h2>
      <p>{text}</p>
      {!isUndefined(photos) && (
        <div className="mask-p">
          <Images
            photos={photos}
            loader="gradient"
            columns={{ min: 2, max: columns }}
          />
        </div>
      )}
      {!isUndefined(files) && (
        <Fragment>
          {map(files, file => {
            return (
              <p>
                <OutLink to={file.link}>
                  <Icon
                    type={isUndefined(file.icon) ? 'file-pdf' : file.icon}
                    theme="outlined"
                  />
                  &nbsp;
                  {file.title}
                </OutLink>
              </p>
            )
          })}
        </Fragment>
      )}
    </div>
  )
}

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
            <Link to="/projects/filming-a-live-restorative-circle">
              Our big dream is to one day film an entire live Restorative Circle
            </Link>
            . It’s an intimate and delicate space, and so we’re crossing our
            fingers that sooner or later a group will be comfortable with the
            idea of being filmed… Would you like this Circle to be yours?
          </p>
        </div>
      </Col>
    </Row>
    <Image
      src={yellowBorder}
      style={{
        height: 4,
        width: '100%',
        border: 0,
        background: 'transparent',
        marginBottom: 0,
      }}
      alt="Restorative Auroville - The Craft"
    />
    <h2 className="mask-h3" id="the-craft" style={{ marginBottom: 2 }}>
      1. The Craft
    </h2>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>a learning resource</strong>
        &nbsp;to highlight the RC process in its different steps and stages
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={8}>
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
    <Image
      src={blueBorder}
      style={{
        height: 4,
        width: '100%',
        border: 0,
        background: 'transparent',
        marginBottom: 0,
      }}
      alt="Restorative Auroville - In Action"
    />
    <h2 className="mask-h3" id="in-action" style={{ marginBottom: 2 }}>
      2. In Action
    </h2>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>touching “live” moments</strong>
        &nbsp;from different stages of real Circles that have been called in the
        community
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={8}>
        <VideoCover
          to="/the-power-of-dialogue/genies-pre-circle-with-janet"
          cover={p21}
          text="Before entering a Restorative Circle, Facilitators meet amongst themselves to work through any challenging thoughts or feelings that might interfere with their capacity to hold space during the Circle. Eugénie Dumont (Genie), in her role as filmmaker, is also given an opportunity to be heard for her connection to the Circle."
        />
      </Col>
      <Col md={8}>
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
    <Image
      src={redBorder}
      style={{
        height: 4,
        width: '100%',
        border: 0,
        background: 'transparent',
        marginBottom: 0,
      }}
      alt="Restorative Auroville - The Restorative System"
    />
    <h2
      className="mask-h3"
      id="the-restorative-system"
      style={{ marginBottom: 2 }}
    >
      3. The Restorative System
    </h2>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>engaging with RC as a System</strong>
        &nbsp;and highlighting the need to talk about the meaning of justice and
        conflict in our community
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={8}>
        <VideoCover
          to="/the-power-of-dialogue/engaging-with-restorative-circles-in-auroville"
          cover={p31}
          text="L'aura shares about her experience of engaging with Restorative Circles in Auroville and how it's received by the community."
        />
      </Col>
      <Col md={8}>
        <VideoCover
          to="/the-power-of-dialogue/designing-our-justice-system-consciously"
          cover={p32}
          text="L'aura shares about her experience of engaging with Restorative Circles in Auroville and the importance of designing a justice system consciously, otherwise we'll just inherit the old ways."
        />
      </Col>
      <Col md={8}>
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
    </Row>
    <Image
      src={greenBorder}
      style={{
        height: 4,
        width: '100%',
        border: 0,
        background: 'transparent',
        marginBottom: 0,
      }}
      alt="Restorative Auroville - Experiences"
    />
    <h2 className="mask-h3" id="experiences" style={{ marginBottom: 2 }}>
      4. Experiences
    </h2>
    <div className="margin-p">
      <p className="mask-h5">
        ↪&nbsp;
        <strong>community members talk about their experience</strong>
        &nbsp;being in live Circles
      </p>
    </div>
    <Row gutter={{ md: 24 }}>
      <Col md={8}>
        <VideoCover
          to="/the-power-of-dialogue/surya-on-restorative-circles"
          cover={p41}
          text="Surya shares about her experiences with Restoratives Circles."
        />
      </Col>
      <Col md={8}>
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
      <Col md={8}>&nbsp;</Col>
    </Row>
    <Theme
      border="#4A01AA"
      title="Our RC-channel on YouTube (2011‒present)  "
      tag="...from our Archives"
      text="With somewhat regular updates…"
      files={[
        {
          title: 'See videos',
          icon: 'youtube',
          link:
            'https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
        },
      ]}
    />
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
