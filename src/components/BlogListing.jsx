// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import intersection from 'lodash/intersection'
import keys from 'lodash/keys'
import filter from 'lodash/filter'
import trim from 'lodash/trim'
import replace from 'lodash/replace'
import lowerCase from 'lodash/lowerCase'
import split from 'lodash/split'
import uniq from 'lodash/uniq'
import last from 'lodash/last'
import kebabCase from 'lodash/kebabCase'
import toLower from 'lodash/toLower'
import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import StackGrid from 'react-stack-grid'
import { Section, Header, Article } from '@bodhi-project/semantic-webflow'

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
const filterF = filter
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
    }

    this.applyFilter = this.applyFilter.bind(this)
  }

  /** applyFilter */
  applyFilter(f) {
    this.setState({ filter: f })
  }

  /** standard renderer */
  render() {
    const { data, fallback } = this.props

    const { cards, components, conf, categoryMap } = data
    const { tags } = !isUndefined(conf.tags) ? conf : fallback.conf
    const columnWidth = !isUndefined(conf.columnWidth)
      ? conf.columnWidth
      : fallback.conf.columnWidth

    let accessibleCategories = []
    let allCategories = []
    let filteredData = null
    const fx = this.state.filter

    filteredData = filterF(cards, card => {
      let displayThis = false
      const cat = replace(lowerCase(split(card.category, '.')[1]), ' ', '-')

      allCategories.push(card.category)

      if (fx === 'all') {
        displayThis = true
        accessibleCategories.push(card.category)
      } else if (fx === cat) {
        displayThis = true
        accessibleCategories.push(card.category)
      }

      return displayThis
    })

    accessibleCategories = uniq(accessibleCategories)

    allCategories = uniq(allCategories)
    const sortedCategories = allCategories.sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })

    return (
      <Section className={`${blockStyleClass} astrid`}>
        {tags === true && (
          <Fragment>
            {fx === 'all' ? (
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
            {map(sortedCategories, category => {
              let displayAs = trim(last(split(category, '.')))
              const tagKey = kebabCase(toLower(displayAs))
              const getIx = intersection(keys(categoryMap), [displayAs])[0]
              displayAs = !isUndefined(getIx) ? categoryMap[getIx] : displayAs

              return (
                <Fragment key={tagKey}>
                  {fx === tagKey ? (
                    <CheckableTag
                      checked
                      onClick={() => this.applyFilter(tagKey)}
                      style={{ marginBottom: 10 }}
                    >
                      {displayAs}
                    </CheckableTag>
                  ) : (
                    <Tag
                      onClick={() => this.applyFilter(tagKey)}
                      style={{ marginBottom: 10 }}
                    >
                      {displayAs}
                    </Tag>
                  )}
                </Fragment>
              )
            })}
          </Fragment>
        )}

        <StackGrid
          columnWidth={columnWidth}
          duration={360}
          gutterWidth={20}
          gutterHeight={42}
          monitorImagesLoaded={true}
        >
          {map(filteredData, (card, index) => {
            const {
              pageTitle,
              nakedPageSlug,
              pageAbstract,
              cover,
              publishedTimestamp,
              // category,
              // author,
            } = card

            return (
              <div className="card" key={nakedPageSlug}>
                <components.localLink to={`/${nakedPageSlug}`}>
                  <Card
                    cover={
                      <Image
                        src={cover}
                        rawWidth={conf.image.rawCoverWidth}
                        rawHeight={conf.image.rawCoverHeight}
                        style={{
                          height: 'auto',
                          width: '100%',
                          border: 0,
                          background: 'transparent',
                        }}
                        alt={pageTitle}
                      />
                    }
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
                </components.localLink>
              </div>
            )
          })}
        </StackGrid>
      </Section>
    )
  }
}

Block.propTypes = {}

Block.defaultProps = {
  fallback: {
    conf: {
      image: {
        rawCoverWidth: 1440,
        rawCoverHeight: 900,
      },
      columnWidth: '30%',
      cards: 'even',
      tags: true,
    },
  },
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Block
