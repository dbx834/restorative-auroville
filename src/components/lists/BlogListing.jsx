// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import filter from 'lodash/filter'
import uniq from 'lodash/uniq'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'
import StackGrid from 'react-stack-grid'
import ContainerDimensions from 'react-container-dimensions'
import { Header, Article } from '@bodhi-project/semantic-webflow'

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import Card from 'antd/lib/card'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { CheckableTag } = Tag

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
                zIndex: -100,
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
    const { data, isMobile, showFilter } = this.props
    const { filter: filterByAuthor } = this.state
    const uniqueSortedAuthors = uniq(map(data, 'author')).sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })
    let filteredData = data
    if (filterByAuthor !== 'all') {
      filteredData = filter(data, ['author', filterByAuthor])
    }

    return (
      <div className={blockStyleClass}>
        {showFilter === true && (
          <Fragment>
            {filterByAuthor === 'all' ? (
              <CheckableTag
                checked
                onClick={() => this.applyFilter('all')}
                style={{ marginBottom: 10 }}
              >
                All Posts
              </CheckableTag>
            ) : (
              <Tag
                onClick={() => this.applyFilter('all')}
                style={{ marginBottom: 10 }}
              >
                All Posts
              </Tag>
            )}
            {map(uniqueSortedAuthors, author => (
              <Fragment key={author}>
                {filterByAuthor === author ? (
                  <CheckableTag
                    checked
                    onClick={() => this.applyFilter(author)}
                    style={{ marginBottom: 10 }}
                  >
                    {author}
                  </CheckableTag>
                ) : (
                  <Tag
                    onClick={() => this.applyFilter(author)}
                    style={{ marginBottom: 10 }}
                  >
                    {author}
                  </Tag>
                )}
              </Fragment>
            ))}
          </Fragment>
        )}

        <StackGrid
          columnWidth={isMobile ? '100%' : '33%'}
          duration={360}
          gutterWidth={20}
          gutterHeight={42}
          monitorImagesLoaded={false}
          gridRef={grid => (this.grid = grid)}
          onLayout={this.reRender}
        >
          {map(filteredData, (card, index) => {
            const {
              pageTitle,
              nakedPageSlug,
              pageAbstract,
              cover,
              publishedTimestamp,
            } = card

            return (
              <div className="card" key={nakedPageSlug}>
                <Link to={`/${nakedPageSlug}`}>
                  <Card
                    cover={<Cover image={cover} pageTitle={pageTitle} />}
                    bordered={false}
                  >
                    <Article>
                      <Header>
                        <span className="date">
                          {moment
                            .unix(publishedTimestamp)
                            .format('ddd, MMMM D, YYYY')}
                        </span>
                        <h1 className="mask-h5">{pageTitle}</h1>
                        <p style={{ marginBottom: 0 }}>{pageAbstract}</p>
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
