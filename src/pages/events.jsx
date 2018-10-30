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
import map from 'lodash/map'
import filter from 'lodash/filter'
import reverse from 'lodash/reverse'
import values from 'lodash/values'
import isUndefined from 'lodash/isUndefined'
import join from 'lodash/join'
import isNull from 'lodash/isNull'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link, withPrefix } from 'gatsby'
import withSizes from 'react-sizes'
import 'moment/locale/en-gb'

import Image from '@bodhi-project/components/lib/Image'
import AnimateOnChange from 'react-animate-on-change'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import Tabs from 'antd/lib/tabs'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tabs/style/css'

import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Switch from 'antd/lib/switch'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/switch/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/drawer/style/css'

import { Type } from '@bodhi-project/typography'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from '../methods/seoHelper'
import StandardPage from '../components/StandardPage'

import Month from '../components/Month'
import EventRegisterationForm from '../components/EventRegisterationForm'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { TabPane } = Tabs

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Events',
  nakedPageSlug: 'calendar',
  pageAbstract:
    'We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.',
}

const seoData = seoHelper(pageData)

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
      border: `1px solid ${baseColor} !important`,
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
      border: `1px solid ${baseColor} !important`,
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
        right: 25,
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
        },

        '&.practice-group': {
          borderRadius: '50%',
          backgroundColor: '#ffcb9a',
          color: '#2c2c2c',
        },

        '&.is-active': {
          backgroundColor: baseColor,
          color: '#FFF',
        },

        '&:hover': {
          backgroundColor: baseColor,
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

const todayInt = parseInt(moment().format('YYYYMMDD'), 10)

/** registerLink */
const registerLink = (extraData, registerForEvent) => {
  const begins = moment(
    !isNull(extraData.node.frontmatter.startDate)
      ? extraData.node.frontmatter.startDate
      : extraData.node.frontmatter.date
  )
  const beginDateInt = parseInt(begins.format('YYYYMMDD'), 10)
  let eventStatus = null
  if (todayInt > beginDateInt) {
    eventStatus = 'past'
  } else if (todayInt < beginDateInt) {
    eventStatus = 'future'
  } else {
    eventStatus = 'present'
  }

  let frag = <Fragment />
  if (eventStatus === 'past' || eventStatus === 'present') {
    frag = 'Registration for this event is now closed.'
  } else {
    frag = (
      <a
        href="#"
        title="Register now"
        onClick={e => registerForEvent(e, extraData.edgeIndex)}
      >
        Register now.
      </a>
    )
  }

  return frag
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Events */
class Events extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      indexForForm: undefined,
      showArchive: false,
      animate: true,
      extraData: undefined,
      active: undefined,
    }

    this.onClose = this.onClose.bind(this)
    this.openSet = this.openSet.bind(this)
    this.updateExtraData = this.updateExtraData.bind(this)
    this.registerForEvent = this.registerForEvent.bind(this)
    this.toggleArchive = this.toggleArchive.bind(this)
    this.doneAnimating = this.doneAnimating.bind(this)
    this.setActive = this.setActive.bind(this)
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

  /** onClose */
  onClose() {
    this.setState({
      visible: false,
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

  /** openSet */
  openSet(e, index) {
    e.preventDefault()
    this.setState({
      visible: true,
      index,
    })
  }

  /** registerForEvent */
  registerForEvent(e, index) {
    e.preventDefault()
    this.setState({
      visible: true,
      indexForForm: index,
    })
  }

  /** toggleArchive */
  toggleArchive(checked) {
    this.setState({
      showArchive: checked,
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
    const {
      animate,
      indexForForm,
      visible,
      extraData,
      showArchive,
    } = this.state
    const today = moment()
    const thisYear = today.year().toString()
    const thisMonth = today.month()
    const years = ['2018', '2019']
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
    const monthsArray = values(months)
    const previousMonths = reverse(filter(months, (m, key) => key < thisMonth))
    const thisAndFutureMonths = filter(months, (m, key) => key >= thisMonth)
    const { active } = this.state

    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
          <Col sm={24} md={15}>
            <div style={{ position: 'relative' }}>
              <h1 className="mask-h3">Workshops & Events</h1>
              <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <h2
                  className="mask-h6"
                  style={{
                    display: 'inline-block',
                    margin: 0,
                    lineHeight: '22px',
                    marginTop: 9,
                  }}
                >
                  Past Events
                </h2>
                &nbsp;
                <Switch
                  style={{ display: 'inline-block', margin: 0, marginTop: -2 }}
                  defaultChecked={false}
                  onChange={this.toggleArchive}
                />
              </div>
            </div>
            <Tabs type="card" tabPosition="left">
              {map(years, (year, yearKey) => {
                const key = `${year}-${yearKey}`
                return (
                  <TabPane tab={year} key={key}>
                    <Fragment>
                      {year === thisYear && (
                        <Fragment>
                          {showArchive === false ? (
                            <Fragment>
                              {map(thisAndFutureMonths, (month, monthKey) => {
                                return (
                                  <Month
                                    year={year}
                                    month={month}
                                    monthKey={monthKey}
                                    postEdges={postEdges}
                                    openSet={this.openSet}
                                    registerForEvent={this.registerForEvent}
                                    updateExtraData={this.updateExtraData}
                                    past={false}
                                    key={`${month}-${monthKey}`}
                                    setActive={this.setActive}
                                    active={active}
                                  />
                                )
                              })}
                            </Fragment>
                          ) : (
                            <Fragment>
                              {map(previousMonths, (month, monthKey) => {
                                return (
                                  <Month
                                    year={year}
                                    month={month}
                                    monthKey={monthKey}
                                    postEdges={postEdges}
                                    openSet={this.openSet}
                                    registerForEvent={this.registerForEvent}
                                    updateExtraData={this.updateExtraData}
                                    past={true}
                                    key={`${month}-${monthKey}`}
                                    setActive={this.setActive}
                                    active={active}
                                  />
                                )
                              })}
                            </Fragment>
                          )}
                        </Fragment>
                      )}
                      {showArchive === false && (
                        <Fragment>
                          {year !== thisYear &&
                            year > thisYear && (
                              <Fragment>
                                {map(monthsArray, (month, monthKey) => {
                                  return (
                                    <Month
                                      year={year}
                                      month={month}
                                      monthKey={monthKey}
                                      postEdges={postEdges}
                                      openSet={this.openSet}
                                      registerForEvent={this.registerForEvent}
                                      updateExtraData={this.updateExtraData}
                                      past={false}
                                      key={`${month}-${monthKey}`}
                                      setActive={this.setActive}
                                      active={active}
                                    />
                                  )
                                })}
                              </Fragment>
                            )}
                        </Fragment>
                      )}
                    </Fragment>
                  </TabPane>
                )
              })}
            </Tabs>
          </Col>
          <Col span={9} className="hidden-sm">
            {!isUndefined(extraData) && (
              <div>
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
                    marginBottom: 11,
                  }}
                  className="mask-p"
                />
                <h3 className="mask-h4">{extraData.node.frontmatter.title}</h3>
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
                <p>{extraData.node.frontmatter.abstract}</p>
                <p>{registerLink(extraData, this.registerForEvent)}</p>
                <p>
                  <Link to={extraData.node.fields.route}>More details.</Link>
                </p>
              </div>
            )}
          </Col>
        </Row>
        <Drawer
          title={false}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          width="38vw"
          placement="left"
        >
          <Type kit="dkc2ilk">
            <EventRegisterationForm event={postEdges[indexForForm]} />
          </Type>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              left: 0,
              background: '#f2f2f2',
              textAlign: 'right',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Close
            </Button>
          </div>
        </Drawer>
      </StandardPage>
    )
  }
}

Events.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query UpcomingEventsQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
            beginDateInt
            diff
            year
            month
            monthN
            dayOfMonth
            displayDate
            formattedDate
          }
          frontmatter {
            abstract
            title
            subTitle
            cover
            date
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
            cost
          }
        }
      }
    }
  }
`
/* eslint-enable no-undef */

/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withSizes(mapSizesToProps)(Events)
