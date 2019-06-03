// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'
import color from 'color'

import map from 'lodash/map'
import filter from 'lodash/filter'
import reverse from 'lodash/reverse'
import values from 'lodash/values'
import isUndefined from 'lodash/isUndefined'
import join from 'lodash/join'
import isNull from 'lodash/isNull'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import MediaQuery from 'react-responsive'
import { withPrefix } from 'gatsby-link'
import 'moment/locale/en-gb'

import Image from '@bodhi-project/components/lib/Image'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import AnimateOnChange from 'react-animate-on-change'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import Tabs from 'antd/lib/tabs'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tabs/style/css'

import Switch from 'antd/lib/switch'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/switch/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/drawer/style/css'

import { Type } from '@bodhi-project/typography'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import Month from './Month'
import EventRegisterationForm from '../forms/EventRegisterationForm'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { TabPane } = Tabs

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
      paddingBottom: '0px !important',
      paddingRight: '16px !important',
      marginRight: '0px !important',
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
      paddingBottom: '0px !important',
      paddingRight: '16px !important',
      marginRight: '0px !important',
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

      '@media(max-width: 992px)': {
        height: 35,
        marginRight: 4,

        '& h2': {
          lineHeight: '35px',
          height: 35,
          left: 12,
        },
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

        '@media(max-width: 992px)': {
          minWidth: 35,
          paddingLeft: 5,
          paddingRight: 5,
          marginRight: 2,
          marginLeft: 2,
          height: 35,
        },

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
        className="ant-btn"
      >
        <span style={{ fontSize: '125%' }}>Quick register ⇝</span>
      </a>
    )
  }

  return frag
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
      visible: false,
      indexForForm: undefined,
      showArchive: false,
      animate: true,
      extraData: undefined,
      active: undefined,
      nextActive: undefined,
      client: false,
    }

    this.onClose = this.onClose.bind(this)
    this.openSet = this.openSet.bind(this)
    this.updateExtraData = this.updateExtraData.bind(this)
    this.registerForEvent = this.registerForEvent.bind(this)
    this.toggleArchive = this.toggleArchive.bind(this)
    this.doneAnimating = this.doneAnimating.bind(this)
    this.setActive = this.setActive.bind(this)
    this.nextActive = this.nextActive.bind(this)
  }

  /** componentDidMount */
  componentDidMount() {
    this.setState({ client: true })

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

  /** onClose */
  onClose() {
    this.setState({
      visible: false,
    })
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
      client,
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
    const { active, nextActive } = this.state

    return (
      <Fragment>
        {client === true && (
          <Fragment>
            <br style={{ display: 'none' }} />
            <MediaQuery minWidth={992}>
              {matches => (
                <div className={pageStyles}>
                  <Division golden>
                    <Fragment>
                      <div style={{ position: 'relative' }}>
                        <h1 className="mask-h3">Workshops & Practice Groups</h1>
                        <p>
                          Here you’ll find a listing of our upcoming RC
                          workshops and practice groups, plus other special
                          events we're hosting. Please register now if you’d
                          like to attend any of these events.
                        </p>
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
                            <small>Past</small>
                          </h2>
                          &nbsp;
                          <Switch
                            style={{
                              display: 'inline-block',
                              margin: 0,
                              marginTop: -2,
                            }}
                            defaultChecked={false}
                            onChange={this.toggleArchive}
                            size="small"
                          />
                        </div>
                      </div>
                      <Tabs
                        type="card"
                        tabPosition="left"
                        defaultActiveKey={thisYear}
                      >
                        {map(years, (year, yearKey) => {
                          const key = `${year}-${yearKey}`
                          return (
                            <TabPane tab={year} key={year} id={key}>
                              <Fragment>
                                {year === thisYear && (
                                  <Fragment>
                                    {showArchive === false ? (
                                      <Fragment>
                                        {map(
                                          thisAndFutureMonths,
                                          (month, monthKey) => {
                                            return (
                                              <Month
                                                year={year}
                                                month={month}
                                                monthKey={monthKey}
                                                postEdges={postEdges}
                                                openSet={this.openSet}
                                                registerForEvent={
                                                  this.registerForEvent
                                                }
                                                updateExtraData={
                                                  this.updateExtraData
                                                }
                                                past={false}
                                                key={`${month}-${monthKey}`}
                                                setActive={this.setActive}
                                                active={active}
                                                nextActive={nextActive}
                                              />
                                            )
                                          }
                                        )}
                                      </Fragment>
                                    ) : (
                                      <div className="old-events">
                                        {map(
                                          previousMonths,
                                          (month, monthKey) => {
                                            return (
                                              <Month
                                                year={year}
                                                month={month}
                                                monthKey={monthKey}
                                                postEdges={postEdges}
                                                openSet={this.openSet}
                                                registerForEvent={
                                                  this.registerForEvent
                                                }
                                                updateExtraData={
                                                  this.updateExtraData
                                                }
                                                past
                                                key={`${month}-${monthKey}`}
                                                setActive={this.setActive}
                                                active={active}
                                                nextActive={nextActive}
                                              />
                                            )
                                          }
                                        )}
                                      </div>
                                    )}
                                  </Fragment>
                                )}
                                <Fragment>
                                  {year !== thisYear && (
                                    <div
                                      className={
                                        year < thisYear
                                          ? 'old-events'
                                          : 'future-events'
                                      }
                                    >
                                      {map(monthsArray, (month, monthKey) => {
                                        return (
                                          <Month
                                            year={year}
                                            month={month}
                                            monthKey={monthKey}
                                            postEdges={postEdges}
                                            openSet={this.openSet}
                                            registerForEvent={
                                              this.registerForEvent
                                            }
                                            updateExtraData={
                                              this.updateExtraData
                                            }
                                            past={false}
                                            key={`${month}-${monthKey}`}
                                            setActive={this.setActive}
                                            active={active}
                                            nextActive={nextActive}
                                          />
                                        )
                                      })}
                                    </div>
                                  )}
                                </Fragment>
                              </Fragment>
                            </TabPane>
                          )
                        })}
                      </Tabs>
                    </Fragment>
                    <Fragment>
                      {!isUndefined(extraData) && (
                        <div>
                          <br className="mobile-only" />
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
                              maxWidth: 360,
                              marginBottom: 11,
                            }}
                            className="mask-p"
                          />
                          <h3 className="mask-h4">
                            {extraData.node.frontmatter.title}
                          </h3>
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
                          <div className="margin-p">
                            <Link
                              to={`/${extraData.node.fields.route}`}
                              className="ant-btn"
                            >
                              <span style={{ fontSize: '125%' }}>
                                More details ⇝
                              </span>
                            </Link>
                          </div>
                          <div className="margin-p">
                            {registerLink(extraData, this.registerForEvent)}
                          </div>
                        </div>
                      )}
                    </Fragment>
                  </Division>
                  <Drawer
                    title={false}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    width={matches ? '38vw' : '100vw'}
                    placement="left"
                  >
                    <Type
                      kit="jdd4npp"
                      style={{ minHeight: '100vh' }}
                      options={{
                        range: [12, 20], // Min and Max font-sizes
                        paragraphSpacingFactor: 1.2, // Greater for tighter paragraph-paragraph spacing
                        headingParagraphGapSpacingFactor: 0, // Greater for tighter header-paragraph spacing
                        indentParagraphs: false,
                      }}
                    >
                      <EventRegisterationForm
                        event={postEdges[indexForForm]}
                        formattedDate={
                          isUndefined(indexForForm)
                            ? ' '
                            : postEdges[indexForForm].node.fields.formattedDate
                        }
                      />
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
                </div>
              )}
            </MediaQuery>
            <br style={{ display: 'none' }} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}

EventsGrid.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default EventsGrid
