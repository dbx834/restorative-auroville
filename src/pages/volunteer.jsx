// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Modal from 'antd/lib/modal'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/modal/style/css'

import Image from '@bodhi-project/components/lib/image/Image'
import Video from '@bodhi-project/components/lib/video'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import ContainerDimensions from 'react-container-dimensions'
import Iframe from 'react-iframe'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'
import VolunteerForm from '../components/VolunteerForm'

import seoHelper from '../methods/seoHelper'
import tick from '../assets/tick.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Volunteer',
  nakedPageSlug: 'volunteer',
  pageAbstract:
    'In order for this work to develop fully in Auroville, we need more ambassadors who are willing to do the research, the teaching and the experimenting.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    flowerBoardDesktop: file(relativePath: { eq: "flower-board-desktop.png" }) {
      ...max900
    }
    blueBorder: file(relativePath: { eq: "blueBorder.jpg" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
  '& li': {
    display: 'flex',
    '& div:first-child': {
      marginRight: 4,
    },
  },
})
const pageStyle = pageStyles.toString()

/** list item */
const Li = props => (
  <li>
    <div>
      <Image
        src={tick}
        style={{
          background: 'transparent',
          border: 'unset',
          height: 20,
          width: 20,
          display: 'inline-block',
        }}
        rawWidth={900}
        rawHeight={900}
      />
    </div>
    <div>{props.text}</div>
  </li>
)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class Page extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }

    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  /** [description] */
  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  /** [description] */
  handleOk = e => {
    this.setState({
      visible: false,
    })
  }

  /** [description] */
  handleCancel = e => {
    this.setState({
      visible: false,
    })
  }

  /** standard renderer */
  render() {
    return (
      <StandardPage className={pageStyle} seoData={seoData} {...this.props}>
        <h1 className="mask-h3">Collaborate, Volunteer & Apprentice</h1>
        <p>
          In order for this work to develop fully in Auroville (and beyond), we
          need more ambassadors who are willing to play with us: to do the
          research, the teaching, the experimenting, and so much more…
        </p>
        <p>
          Whether you are close by in Auroville, or far away in another city or
          country, there are plenty of ways in which you could support our
          project, such as:
        </p>
        <ul
          className="mask-p"
          style={{ listStyle: 'none', padding: 0, marginBottom: 0 }}
        >
          <Li text="Become an Apprentice with Restorative Auroville's Team of Facilitators and support us with facilitating Pre-Circles (and eventually Circles)." />
          <Li text="Translate some of our RC material into other languages." />
          <Li text="Support in making a feature film of a live Circle." />
          <Li text="Support in fundraising, and more..." />
        </ul>
        <br />
        <Img
          fluid={this.props.data.blueBorder.childImageSharp.fluid}
          style={{
            height: 4,
            width: '100%',
            border: 0,
            background: 'transparent',
            marginBottom: 0,
          }}
        />
        <br />
        <p>
          Here's our Trello board with our current projects needing support and
          collaboration. Scroll through and let us know if you're inspired to
          take something on!
        </p>
        <div className="margin-p" style={{ marginBottom: 0 }}>
          <ContainerDimensions>
            {({ width }) => {
              return (
                <Iframe
                  url="https://trello.com/b/2vJGRevK.html"
                  height={width * 0.68}
                  width={width}
                  display="initial"
                  position="relative"
                />
              )
            }}
          </ContainerDimensions>
          <Modal
            title={false}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width="100vw"
            bodyStyle={{ padding: 0, margin: 0 }}
            style={{ top: 0, padding: 0 }}
            footer={false}
          >
            <ContainerDimensions>
              {({ width }) => {
                return (
                  <Iframe
                    url="https://trello.com/b/2vJGRevK.html"
                    height={width * 0.68}
                    width={width}
                    display="initial"
                    position="relative"
                  />
                )
              }}
            </ContainerDimensions>
          </Modal>
        </div>
        <br />
        <Img
          fluid={this.props.data.blueBorder.childImageSharp.fluid}
          style={{
            height: 4,
            width: '100%',
            border: 0,
            background: 'transparent',
            marginBottom: 0,
          }}
        />
        <br />
        <p>
          Or… do you have any other great skills and/or simple willingness to
          offer…? If so, let us know! You can fill out our form below.
        </p>
        <Division golden className="margin-p">
          <Fragment>
            <h2 className="mask-h3">Write to us</h2>
            <VolunteerForm />
          </Fragment>
          <Fragment>
            <h2 className="mask-h3" style={{ lineHeight: 1.1 }}>
              Our work, inside-out...
            </h2>
            <div className="mask-p">
              <Img
                fluid={this.props.data.flowerBoardDesktop.childImageSharp.fluid}
                style={{ maxWidth: 360 }}
              />
            </div>
            <h2 className="mask-h3" style={{ lineHeight: 1.1 }}>
              Henrike on her apprenticeship journey...
            </h2>
            <Video url="https://www.youtube.com/watch?v=bXrm9tUW4fU" />
          </Fragment>
        </Division>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
