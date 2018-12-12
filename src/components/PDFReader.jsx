// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import PDF from 'react-pdf-js'
// let PDF = () => true

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 *
 */
class PDFReader extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
    this.state = {
      check: false,
      canRender: false,
    }
    this.PDF = () => true

    this.onDocumentComplete = this.onDocumentComplete.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.renderPagination = this.renderPagination.bind(this)
  }

  /** componentDidMount */
  componentDidMount() {
    const { check, canRender } = this.state
    if (check === false) {
      if (!isUndefined(window)) {
        this.setState({ canRender: true })
        this.PDF = require('react-pdf-js')
      }
    }
  }

  /**
   * [onDocumentComplete description]
   * @param  {[type]} pages [description]
   * @return {[type]}       [description]
   */
  onDocumentComplete(pages) {
    this.setState({ page: 1, pages })
  }

  /**
   * [handlePrevious description]
   * @return {[type]} [description]
   */
  handlePrevious(e) {
    e.preventDefault()
    this.setState({ page: this.state.page - 1 })
  }

  /**
   * [handleNext description]
   * @return {[type]} [description]
   */
  handleNext(e) {
    e.preventDefault()
    this.setState({ page: this.state.page + 1 })
  }

  /**
   * [renderPagination description]
   * @param  {[type]} page  [description]
   * @param  {[type]} pages [description]
   * @return {[type]}       [description]
   */
  renderPagination(page, pages) {
    let previousButton = (
      <li style={{ marginBottom: 0 }}>
        <a href="#" onClick={e => this.handlePrevious(e)}>
          ⇜ Previous
        </a>
      </li>
    )
    if (page === 1) {
      previousButton = (
        <li style={{ marginBottom: 0 }}>
          <a href="#" disabled>
            ⇜ Previous
          </a>
        </li>
      )
    }
    let nextButton = (
      <li style={{ marginBottom: 0 }}>
        <a href="#" onClick={e => this.handleNext(e)}>
          Next ⇝
        </a>
      </li>
    )
    if (page === pages) {
      nextButton = (
        <li style={{ marginBottom: 0 }}>
          <a href="#" disabled>
            Next ⇝
          </a>
        </li>
      )
    }
    return (
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            marginBottom: 0,
          }}
          className="mask-p"
        >
          {previousButton}
          <li>
            {this.state.page}/{this.state.pages}
          </li>
          {nextButton}
        </ul>
      </nav>
    )
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    // console.log('hit')
    const { file } = this.props
    let pagination = null
    const { canRender } = this.state
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages)
    }
    const PDF = this.PDF

    return (
      <div
        className="margin-p"
        style={{
          border: '1px dotted #00006F',
          background: '#f2f2f2',
          minHeight: '62vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            minHeight: '62vh',
          }}
        >
          <div>
            {canRender === true ? (
              <Fragment>
                <PDF
                  file={file}
                  onDocumentComplete={this.onDocumentComplete}
                  page={this.state.page}
                />
                &nbsp;
                {pagination}
              </Fragment>
            ) : (
              <Fragment>SSR PDF</Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
}

PDFReader.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default PDFReader
