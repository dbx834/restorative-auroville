// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Modal from 'antd/lib/modal'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/modal/style/css'

import { graphql } from 'gatsby'
import ContainerDimensions from 'react-container-dimensions'
// import Img from 'gatsby-image'
import Iframe from 'react-iframe'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../styles/pages/contact-us.less'

import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle: 'Board',
  nakedPageSlug: 'board',
  pageAbstract: 'Board test',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    art: file(relativePath: { eq: "contact-us/art.jpg" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

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

  // /** componentDidMount */
  // componentDidMount() {
  //   const { loaded } = this.state
  //   if (loaded === false) {
  //     if (isUndefined(window) === false) {
  //       this.reflow()
  //     }
  //   }
  // }

  // /** reflow */
  // reflow() {
  //   const { loaded } = this.state
  //   if (loaded === false) {
  //     if (isUndefined(window) === false) {
  //       if (isUndefined(window.TrelloBoards) === false) {
  //         // Mock some delay
  //         setTimeout(() => {
  //           console.log(window.TrelloBoards)
  //           this.reflow()
  //         }, 1500)
  //       } else {
  //         // Mock some delay
  //         setTimeout(() => {
  //           this.reflow()
  //         }, 1500)
  //       }
  //     }
  //   }
  // }

  /** [description] */
  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  /** [description] */
  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  /** [description] */
  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  /** standard renderer */
  render() {
    return (
      <StandardPage className="" seoData={seoData} {...this.props}>
        <h1 className="mask-h3">Board test</h1>
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
        <Button type="primary" onClick={this.showModal}>
          Big
        </Button>
        <Modal
          title={false}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="100vw"
          bodyStyle={{ padding: 0 }}
          style={{ top: 0 }}
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
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
