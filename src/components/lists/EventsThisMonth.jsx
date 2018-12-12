// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'
import color from 'color'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'
import join from 'lodash/join'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link, { withPrefix } from 'gatsby-link'
import withSizes from 'react-sizes'
import 'moment/locale/en-gb'

import Image from '@bodhi-project/components/lib/Image'
import AnimateOnChange from 'react-animate-on-change'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Month from './Month'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const baseColor = color('rgba(0, 0, 111, 0.68)')
const pageStyle = css({
  '& .ant-tabs': {
    overflow: 'visible',

    '& .ant-tabs-bar': {
      marginLeft: -72,
      border: 'unset !important',
    },

    '& .ant-tabs-tab': {
      fontFamily: 'futura-pt, sans-serif !important',
      height: '50px !important',
      width: '50px !important',
      display: 'flex !important',
      justifyContent: 'center !important',
      alignItems: 'center !important',
      color: `${baseColor} !important`,
      border: `unset !important`,
      transition: 'all 200ms ease-in !important',
      borderRadius: '50% !important',
      marginBottom: '18px !important',
    },

    '& .ant-tabs-tab.ant-tabs-tab-active': {
      fontFamily: 'futura-pt, sans-serif !important',
      height: '50px !important',
      width: '50px !important',
      display: 'flex !important',
      justifyContent: 'center !important',
      alignItems: 'center !important',
      backgroundColor: `${baseColor} !important`,
      color: `#ffffff !important`,
      border: `unset !important`,
      transition: 'all 200ms ease-in !important',
      borderRadius: '50% !important',
      marginBottom: '18px !important',
    },

    '& .ant-tabs-content': {
      border: 'unset !important',
      padding: 'unset !important',
    },
  },

  '& .ant-tabs-nav-scroll': {
    textAlign: 'unset !important',
  },

  '& .month': {
    marginTop: 18,
    marginBottom: 18,
    position: 'relative',
    display: 'flex',

    '&:nth-child(1)': {
      marginTop: 0,
    },

    '& .month-title': {
      flexGrow: 15,
      flexBasis: 0,
      borderTopLeftRadius: 24,
      borderBottomLeftRadius: 24,
      marginRight: 24,
      alignContent: 'flex-center',
      position: 'relative',
      height: 50,

      '& h2': {
        margin: 0,
        position: 'absolute',
        left: 24,
        lineHeight: '50px',
        height: 50,
        fontWeight: 700,
      },
    },

    '& .event-list': {
      flexGrow: 85,
      flexBasis: 0,
      display: 'flex',

      '& .event': {
        minWidth: 50,
        paddingLeft: 8,
        paddingRight: 8,
        marginRight: 5,
        marginLeft: 5,
        height: 50,
        position: 'relative',
        transition: 'all 300ms ease-in',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        '&.not-practice-group': {
          borderRadius: 6,
          backgroundColor: '#FF7D00',
          color: '#2c2c2c',

          '&.next-active': {
            color: '#FFF',
            backgroundColor: '#DE4E2A',
          },
        },

        '&.practice-group': {
          borderRadius: '50%',
          backgroundColor: '#ffcb9a',
          color: '#2c2c2c',

          '&.next-active': {
            color: '#FFF',
            backgroundColor: '#DE4E2A',
          },
        },

        '&.is-active': {
          backgroundColor: `${baseColor} !important`,
          color: '#FFF',
        },

        '&:hover': {
          backgroundColor: `${baseColor} !important`,
          color: '#FFF',
        },

        '& p': {
          fontFamily: 'futura-pt, sans-serif !important',
          display: 'inline-block',
          margin: 0,
          letterSpacing: '-0.2ex',
        },
      },
    },
  },

  '& .old-events': {
    '& .not-practice-group': {
      backgroundColor: '#e5e5e5 !important',
      color: '#2c2c2c !important',
    },

    '& .practice-group': {
      backgroundColor: '#cccccc !important',
      color: '#2c2c2c !important',
    },
  },
})
const pageStyles = pageStyle.toString()

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

const todayStatic = moment()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventsGrid */
class EventsGrid extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      animate: true,
      extraData: undefined,
      active: undefined,
      nextActive: undefined,
    }

    this.updateExtraData = this.updateExtraData.bind(this)
    this.doneAnimating = this.doneAnimating.bind(this)
    this.setActive = this.setActive.bind(this)
    this.nextActive = this.nextActive.bind(this)
  }

  /** componentDidMount */
  componentDidMount() {
    const { active } = this.state
    if (isUndefined(active)) {
      const { data } = this.props
      const postEdges = data.allMarkdownRemark.edges
      let hit = false
      let edgeIndex = undefined

      postEdges.every(({ node: { fields: { formattedDate } } }, index) => {
        let runLoop = true
        if (hit === false) {
          const momentDate = moment(formattedDate)
          const sameOrAfter = momentDate.isSameOrAfter(todayStatic)
          if (sameOrAfter === true) {
            edgeIndex = index
            hit = true
            runLoop = false
          }
        } else {
          runLoop = false
        }
        return runLoop
      })
      this.updateExtraData(postEdges[edgeIndex].node, edgeIndex)
      this.setActive(edgeIndex)
      this.nextActive(edgeIndex)
    }
  }

  /** componentDidUpdate */
  componentDidUpdate(prevProps, prevState) {
    const { extraData: oldExtraData } = prevState
    const { extraData: newExtraData } = this.state

    if (!isUndefined(oldExtraData) && !isUndefined(newExtraData)) {
      const { edgeIndex: oldEdgeIndex } = oldExtraData
      const { edgeIndex: newEdgeIndex } = newExtraData

      if (oldEdgeIndex !== newEdgeIndex) {
        this.setState({ animate: true })
      }
    }
  }

  /** setActive */
  setActive(edgeIndex) {
    this.setState({
      active: edgeIndex,
    })
  }

  /** nextActive */
  nextActive(edgeIndex) {
    this.setState({
      nextActive: edgeIndex,
    })
  }

  /** updateExtraData */
  updateExtraData(node, edgeIndex) {
    this.setState({
      extraData: {
        node,
        edgeIndex,
      },
    })
  }

  /** doneAnimating */
  doneAnimating() {
    this.setState({
      animate: false,
    })
  }

  /** standard renderer */
  render() {
    const { data } = this.props
    const postEdges = data.allMarkdownRemark.edges
    const { animate, extraData } = this.state
    const today = moment()
    const thisYear = today.year().toString()
    const thisMonth = today.month()
    const months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec',
    }
    const monthKey = thisMonth
    const monthValue = months[thisMonth]
    const { active, nextActive } = this.state

    return (
      <div className={`${pageStyles} desktop-only`}>
        <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
          <Col sm={24} md={24} xl={15}>
            <h1 className="mask-h3">Workshops & Events</h1>
            <p>
              We offer regular learning opportunities through workshops and
              practice groups, in person and online. And from time to time, we
              also organize cool community-based events! Join us!&nbsp;
              <Link to="/events">See all events here ⇝</Link>
            </p>
            <div className="margin-p">
              <Month
                year={thisYear}
                month={monthValue}
                monthKey={monthKey}
                postEdges={postEdges}
                openSet={this.openSet}
                registerForEvent={this.registerForEvent}
                updateExtraData={this.updateExtraData}
                past={false}
                key={`${monthValue}-${monthKey}`}
                setActive={this.setActive}
                active={active}
                nextActive={nextActive}
              />
              <br />
            </div>
          </Col>
          <Col sm={24} md={24} xl={9}>
            {!isUndefined(extraData) && (
              <div
                style={{
                  background: '#f2f2f2',
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <Image
                  src={getBanner(
                    extraData.node.frontmatter.cover,
                    extraData.node.frontmatter.tags
                  )}
                  rawWidth={1440}
                  rawHeight={900}
                  style={{
                    border: '1px solid #00006F',
                    height: 'auto',
                    width: '100%',
                    marginBottom: 5,
                  }}
                  className="mask-p"
                />
                <div style={{ padding: '0px 9px 9px' }}>
                  <Link to={extraData.node.fields.route}>
                    <h3 className="mask-h4">
                      {extraData.node.frontmatter.title} ⇝
                    </h3>
                  </Link>
                  <p>
                    <AnimateOnChange
                      baseClassName="animated"
                      animationClassName="flash"
                      animate={animate}
                      onAnimationEnd={() => this.doneAnimating()}
                    >
                      <i>
                        {extraData.node.fields.formattedDate}
                        <br />
                        {extraData.node.frontmatter.fromTime} -{' '}
                        {extraData.node.frontmatter.toTime}
                      </i>
                    </AnimateOnChange>
                  </p>
                  <p style={{ marginBottom: 0 }}>
                    {extraData.node.frontmatter.abstract}
                  </p>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    )
  }
}

EventsGrid.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
// /** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(EventsGrid)
