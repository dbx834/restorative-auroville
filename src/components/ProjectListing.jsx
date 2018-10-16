// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link } from 'gatsby'
import StackGrid from 'react-stack-grid'
import { Header, Article } from '@bodhi-project/semantic-webflow'

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Card from 'antd/lib/card'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

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
    }

    this.applyFilter = this.applyFilter.bind(this)
  }

  /** applyFilter */
  applyFilter(f) {
    this.setState({ filter: f })
  }

  /** standard renderer */
  render() {
    const { data, isMobile } = this.props

    return (
      <div className={blockStyleClass}>
        <StackGrid
          columnWidth={isMobile ? '100%' : '49%'}
          duration={360}
          gutterWidth={20}
          gutterHeight={42}
          monitorImagesLoaded={true}
        >
          {map(data, (card, index) => {
            const {
              pageTitle,
              nakedPageSlug,
              pageAbstract,
              cover,
              beginTimestamp,
              endTimestamp,
              // category,
              // author,
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
                          {moment.unix(beginTimestamp).format('YYYY')}
                          {!isUndefined(endTimestamp) &&
                            ` – ${moment.unix(endTimestamp).format('YYYY')}`}
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
