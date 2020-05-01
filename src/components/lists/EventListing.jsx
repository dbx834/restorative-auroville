// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
// import moment from 'moment'

import map from 'lodash/map'
import join from 'lodash/join'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link, { withPrefix } from 'gatsby-link'
import StackGrid from 'react-stack-grid'
import ContainerDimensions from 'react-container-dimensions'
import { Header, Article } from '@bodhi-project/semantic-webflow'

import Image from '@bodhi-project/components/lib/image/Image'

import Card from 'antd/lib/card'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const blockStyle = css({
  '& div.card': {
    background: '#FFFFFF',

    '& a': {
      display: 'block',
      border: 'unset !important',

      '&:hover': {
        border: 'unset !important',
      },

      '& .ant-card-body': {
        padding: '6px 9px',
      },

      '& header': {
        position: 'relative',

        '& .date': {
          background: '#FFFFFF',
          position: 'absolute',
          top: -38,
          left: -9,
          padding: '6px 9px',
        },
      },
    },
  },
})
const blockStyleClass = blockStyle.toString()

/** Cover */
const Cover = ({ image, pageTitle }) => (
  <div>
    <ContainerDimensions>
      {({ width }) => {
        const imageHeight = Math.round(width * 0.625)
        return (
          <div
            style={{
              height: imageHeight,
              width: '100%',
              display: 'block',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: imageHeight,
                width: '100%',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              &nbsp;
            </div>
            <Image
              src={image}
              rawWidth={1440}
              rawHeight={900}
              style={{
                height: 'auto',
                width: '100%',
                border: 0,
                background: 'transparent',
              }}
              alt={pageTitle}
            />
          </div>
        )
      }}
    </ContainerDimensions>
  </div>
)

/** getBanner */
const getBanner = (cover, tags) => {
  let eventBanner = null
  if (cover === 'fallback') {
    const coverHint = join(tags, '-')
    eventBanner = withPrefix(`/content-assets/event-fallbacks/${coverHint}.jpg`)
  } else {
    eventBanner = withPrefix(cover)
  }
  return eventBanner
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Block */
class Block extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      filter: 'all',
      alreadyRendered: false,
    }

    this.grid = undefined

    this.applyFilter = this.applyFilter.bind(this)
    this.reRender = this.reRender.bind(this)
  }

  /** applyFilter */
  applyFilter(f) {
    this.setState({ filter: f })
  }

  /** reRender */
  reRender() {
    const { alreadyRendered } = this.state
    if (alreadyRendered === false) {
      this.setState({ alreadyRendered: true })
      setTimeout(() => {
        this.grid.updateLayout()
        this.setState({ alreadyRendered: false })
      }, 50)
    }
  }

  /** standard renderer */
  render() {
    const { alreadyRendered } = this.state
    const { events, isMobile } = this.props

    return (
      <div className={`${blockStyleClass} mask-p`}>
        <StackGrid
          columnWidth={isMobile ? '100%' : '33%'}
          duration={360}
          gutterWidth={20}
          gutterHeight={42}
          monitorImagesLoaded={false}
          gridRef={grid => (this.grid = grid)}
          onLayout={alreadyRendered === false && this.reRender}
        >
          {map(events, (card, index) => {
            const { node } = card
            const { fields, frontmatter } = node
            const { route } = fields
            const { cover, tags, title, abstract } = frontmatter

            return (
              <div className="card" key={route}>
                <Link to={`/${route}`}>
                  <Card
                    cover={
                      <Cover image={getBanner(cover, tags)} pageTitle={title} />
                    }
                    bordered={false}
                  >
                    <Article>
                      <Header>
                        <span className="date">{fields.formattedDate}</span>
                        <h1 className="mask-h5">{title}</h1>
                        <p style={{ marginBottom: 0 }}>{abstract}</p>
                      </Header>
                    </Article>
                  </Card>
                </Link>
              </div>
            )
          })}
        </StackGrid>
      </div>
    )
  }
}

Block.propTypes = {
  data: PropTypes.array,
}

Block.defaultProps = {}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Block
