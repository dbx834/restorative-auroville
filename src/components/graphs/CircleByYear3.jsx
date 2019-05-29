// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

import map from 'lodash/map'
import findIndex from 'lodash/findIndex'
import isUndefined from 'lodash/isUndefined'
import times from 'lodash/times'
import has from 'lodash/has'
import head from 'lodash/head'
import last from 'lodash/last'
import reverse from 'lodash/reverse'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { Type } from '@bodhi-project/typography'
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  ReferenceArea,
  Cell,
  LabelList,
} from 'recharts'

import ContainerDimensions from 'react-container-dimensions'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Card from 'antd/lib/card'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

import Select from 'antd/lib/select'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/select/style/css'

import Popover from 'antd/lib/popover'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/popover/style/css'

import Image from '@bodhi-project/components/lib/Image'
import Division from '@bodhi-project/components/lib/Division'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import inArray from '../../methods/inArray'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { Option } = Select

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const yellowTheme = ['#ffac80', '#ffeb80', '#ff8080']
const blueTheme = ['#80ffec', '#80d3ff', '#8094ff']
const purpleTheme = ['#a54aff', '#ca96ff', '#ff96ff']
const greenTheme = ['#008000', '#639500', '#2CB32C']
// const redTheme = ['#ff80c0', '#ff8080', '#ffc080']
const colors = {
  2015: blueTheme,
  2016: blueTheme,
  2017: yellowTheme,
  2018: purpleTheme,
  2019: greenTheme,
}

const styles = css({
  '& g.yAxis': {
    '& text.recharts-label': {},
  },
  '& .scatter-point': {
    // stroke: 'rgb(0, 157, 249)',
    // strokeWidth: '1px',
    // fillOpacity: '0.25',
  },
  '& .recharts-cartesian-grid-vertical': {
    '& line:last-child, line:nth-last-child(2)': {
      opacity: 0,
    },
  },
  '& .recharts-label-list': {
    '& text': {
      opacity: '0.5 !important',
      stroke: 'unset !important',
      fill: '#00006F !important',
      strokeDasharray: 'unset !important',
      strokeWidth: 'unset !important',
      background: '#FFF !important',
      fontWeight: 700,
      fontFamily: `"Comic Sans MS", cursive, sans-serif`,

      '&:not(:first-child)': {
        display: 'none !important',
      },
    },
  },

  '&.years': {
    '& .recharts-label-list': {
      '& tspan': {
        fontSize: '90%',
      },
    },
  },

  '&.months': {
    '& .recharts-label-list': {
      '& tspan': {
        fontSize: '120%',
      },
    },
  },

  '& .ant-select-selection': {
    borderColor: '#2c2c2c',
  },
}).toString()

const legendClass = css({
  '& .ant-popover-inner-content': {
    padding: 0,
  },

  '& .ant-popover-arrow': {
    background: '#FAFAFA',
  },
}).toString()

/**
 * [between description]
 * @param  {[type]} a         [description]
 * @param  {[type]} b         [description]
 * @param  {[type]} inclusive [description]
 * @return {[type]}           [description]
 */
const between = (a, b, inclusive, number) => {
  return inclusive ? number >= a && number <= b : number > a && number < b
}

/**
 * [description]
 * @param  {[type]} unixTime [description]
 * @return {[type]}          [description]
 */
const generateTickFormat = (unixTime, resolution, left) => {
  let format = moment(unixTime).format("MMM'YY")

  // Tick format for month resolution
  if (resolution === 'months') {
    const leftYear = moment(left).format('YYYY')
    const tickYear = moment(unixTime).format('YYYY')
    if (leftYear === tickYear) {
      format = moment(unixTime).format('MMM')
    } else {
      format = moment(unixTime).format("MMM'YY")
    }
  }

  // Tick format for year resolution
  if (resolution === 'years') {
    format = moment(unixTime).format('YYYY')
  }
  return format
}

/**
 * [generateTicks description]
 * @return {[type]} [description]
 */
const generateTicks = (left, right, resolution) => {
  const ticks = []
  const diff = moment.duration(right - left, 'milliseconds')
  const lM = moment(left)
  // const rM = moment(right)
  if (resolution === 'years') {
    const diffYears = Math.round(diff.asYears())
    const leftYear = lM.format('YYYY')
    ticks.push(left)
    times(diffYears, x => {
      const that = +moment(`${parseInt(leftYear, 10) + (x + 1)}`, 'YYYY')
      ticks.push(that)
    })
  }
  if (resolution === 'months') {
    const months = Math.round(diff.asMonths())
    // const lastMonth = +moment(lM.subtract(1, 'month').format())
    // const nextMonth = +moment(rM.add(1, 'month').format())
    // ticks.push(lastMonth)
    times(months + 1, m => {
      const that = +moment(lM.clone().add(m, 'months'))
      ticks.push(that)
    })
    // ticks.push(nextMonth)
  }
  return ticks
}

/**
 * [description]
 * @param  {[type]} left  [description]
 * @param  {[type]} right [description]
 * @return {[type]}       [description]
 */
const filterData = (data, left, right) => {
  const filteredData = []
  map(data, d => {
    let exists = false
    map(d.times, timeObject => {
      if (exists === false) {
        if (between(left, right, true, timeObject.time) === true) {
          exists = true
        }
      }
    })
    if (exists === true) {
      filteredData.push(d)
    }
  })

  filteredData[0].times.push({
    value: filteredData[0].times[0].value,
    time: filteredData[0].times[0].time,
    size: 100,
    type: 10,
  })
  filteredData[0].times.push({
    value: filteredData[0].times[0].value,
    time: filteredData[0].times[0].time,
    size: 10000,
    type: 10,
  })
  return filteredData
}

/**
 * [generateTicksAndDomain]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
const generateTicksAndDomainAndRange = data => {
  let low = undefined
  let max = undefined
  let lowSize = undefined
  let maxSize = undefined
  const ticks = []
  map(data, d => {
    map(d.times, timeObject => {
      if (isUndefined(low)) {
        low = timeObject.value
      } else if (timeObject.value < low) {
        low = timeObject.value
      }
      if (isUndefined(lowSize)) {
        lowSize = timeObject.size
      } else if (timeObject.size < lowSize) {
        lowSize = timeObject.size
      }
      if (isUndefined(max)) {
        max = timeObject.value
      } else if (timeObject.value > max) {
        max = timeObject.value
      }
      if (isUndefined(maxSize)) {
        maxSize = timeObject.size
      } else if (timeObject.size > maxSize) {
        maxSize = timeObject.size
      }
      if (inArray(ticks, timeObject.value) === false) {
        ticks.push(timeObject.value)
      }
    })
  })
  const domain = [low - 2, max + 2]
  const range = [lowSize, maxSize]

  return { ticks, domain, range }
}

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const XTooltip = props => {
  const { payload, data } = props
  let circleId = undefined
  let index = undefined
  let circleDetails = undefined
  let thisCircleIndex = undefined
  let thisCircleTime = undefined
  let thisCircleDetails = undefined

  if (payload.length > 0) {
    thisCircleTime = moment(payload[0].value).format('ddd, MMM D, YYYY')
    circleId = payload[1].value
    index = findIndex(data, ['id', circleId])
    circleDetails = data[index]
    thisCircleIndex = findIndex(circleDetails.times, ['time', payload[0].value])
    thisCircleDetails = circleDetails.times[thisCircleIndex]
  }

  return (
    <div>
      {!isUndefined(circleDetails) && (
        <Card
          title={false}
          style={{
            width: 300,
            border: 0,
            background: 'transparent',
          }}
          bodyStyle={{ padding: 0 }}
        >
          {!isUndefined(circleDetails.wordCloud) && (
            <Fragment>
              <Img
                fluid={circleDetails.wordCloud}
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  borderTop: '1px solid #00006F',
                  borderLeft: '1px solid #00006F',
                  borderRight: '1px solid #00006F',
                  borderBottom: '0px solid #00006F',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  background: '#FFF',
                  marginBottom: 0,
                  padding: 6,
                  display: 'block',
                }}
                className="margin-p"
              />
            </Fragment>
          )}
          <p
            style={{
              marginBottom: 0,
              color: '#FFF',
              background: '#1a51ff',
              padding: 8,
              marginTop: 0,
            }}
          >
            <small>
              <strong>
                {thisCircleDetails.type === 0 && '1st Pre-Circle'}
                {thisCircleDetails.type === 1 && '1st Pre-Circle'}
                {thisCircleDetails.type === 2 && 'Circle'}
                {thisCircleDetails.type === 3 && 'Post-Circle'}
                &nbsp;(Circle #{circleDetails.id})
              </strong>
              {
                <Fragment>
                  {thisCircleDetails.type === 0 && (
                    <Fragment>
                      <br />
                      <i>with the Initiator of the Circle</i>
                    </Fragment>
                  )}
                  {thisCircleDetails.type === 1 && (
                    <Fragment>
                      <br />
                      <i>with the Initiator of the Circle</i>
                    </Fragment>
                  )}
                </Fragment>
              }
              <br />
              {thisCircleTime}
            </small>
          </p>
          <p
            style={{
              marginBottom: 0,
              color: '#222222',
              background: '#ffd44d',
              padding: 8,
              marginTop: 0,
              borderBottom: '1px solid #00006F',
              borderLeft: '1px solid #00006F',
              borderRight: '1px solid #00006F',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <small>
              <strong>Named:</strong> {circleDetails.named} people
              <br />
              <strong>Attended:</strong> {circleDetails.attended} people
            </small>
          </p>
        </Card>
      )}
    </div>
  )
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Sample3 */
class Sample3 extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      refAreaLeft: undefined,
      refAreaRight: undefined,
      left: +moment('2016-01-01', 'YYYY-MM-DD'),
      right: +moment('2020-01-01', 'YYYY-MM-DD'),
      resolution: 'years',
      allowedRange: [2016, 2017, 2018, 2019, 2020],
      activeRangeLeft: 2019,
      activeRangeRigth: 2020,
    }

    this.updateRefAreaLeft = this.updateRefAreaLeft.bind(this)
    this.updateRefAreaRight = this.updateRefAreaRight.bind(this)
    this.zoom = this.zoom.bind(this)
    this.reset = this.reset.bind(this)
    this.yearSelected = this.yearSelected.bind(this)
    this.changeActiveRange = this.changeActiveRange.bind(this)
  }

  /**
   * [updateRefAreaLeft description]
   * @return {[type]} [description]
   */
  updateRefAreaLeft(e) {
    this.setState({ refAreaLeft: +moment(e.xValue) })
  }

  /**
   * [updateRefAreaRight description]
   * @return {[type]} [description]
   */
  updateRefAreaRight(e) {
    const { refAreaLeft } = this.state
    if (!isUndefined(refAreaLeft)) {
      this.setState({ refAreaRight: +moment(e.xValue) })
    }
  }

  /**
   * [zoom description]
   * @return {[type]} [description]
   */
  zoom(e) {
    let { refAreaLeft, refAreaRight } = this.state

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState({ refAreaLeft: undefined, refAreaRight: undefined })
    } else {
      this.setState({
        refAreaLeft: undefined,
        refAreaRight: undefined,
        left: refAreaLeft,
        right: refAreaRight,
      })
    }
  }

  /**
   * [reset description]
   * @return {[type]} [description]
   */
  reset(e) {
    this.setState({
      refAreaLeft: undefined,
      refAreaRight: undefined,
      left: +moment('2016-01-01', 'YYYY-MM-DD'),
      right: +moment('2020-01-01', 'YYYY-MM-DD'),
      resolution: 'years',
    })
  }

  /**
   * [changeActiveRange description]
   * @return {[type]} [description]
   */
  changeActiveRange(e, activeRangeLeft, activeRangeRigth, move) {
    if (move === 'back') {
      this.setState({
        refAreaLeft: undefined,
        refAreaRight: undefined,
        left: +moment([activeRangeLeft - 1]),
        right: +moment([activeRangeRigth - 1]),
        activeRangeLeft: activeRangeLeft - 1,
        activeRangeRigth: activeRangeRigth - 1,
        resolution: 'months',
      })
    }
    if (move === 'next') {
      this.setState({
        refAreaLeft: undefined,
        refAreaRight: undefined,
        left: +moment([activeRangeLeft + 1]),
        right: +moment([activeRangeRigth + 1]),
        activeRangeLeft: activeRangeLeft + 1,
        activeRangeRigth: activeRangeRigth + 1,
        resolution: 'months',
      })
    }
  }

  /**
   * [yearSelected description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  yearSelected(value) {
    this.setState({
      refAreaLeft: undefined,
      refAreaRight: undefined,
      left: +moment(`${value}-01-01`, 'YYYY-MM-DD'),
      right: +moment(`${value + 1}-01-01`, 'YYYY-MM-DD'),
      activeRangeLeft: value,
      activeRangeRigth: value + 1,
      resolution: 'months',
    })
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const {
      refAreaLeft,
      refAreaRight,
      left,
      right,
      resolution,
      allowedRange,
      activeRangeLeft,
      activeRangeRigth,
    } = this.state

    const { data } = this.props

    const leftYearTemp = moment(left).format('YYYY')
    const ticks = generateTicks(left, right, resolution)
    const years = {}
    let filteredData = filterData(data, left, right)
    filteredData = reverse(filteredData)
    const { ticks: yTicks, domain, range } = generateTicksAndDomainAndRange(
      filteredData
    )

    // console.log(range)

    return (
      <div className={`${styles} ${resolution}`}>
        <p>
          Below you'll find an interactive database of the live Circles that
          we've facilitated so far (from 2016 onwards). You can view all years
          at a glance, or zoom in for detailed information by year. The
          information provided remains relatively rudimentary, in order to care
          for the intimacy of each Circle. A more detailed legend is provided in
          the information section.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Select
            value={leftYearTemp}
            defaultValue={leftYearTemp}
            style={{ width: 90, marginRight: 10 }}
            onChange={this.yearSelected}
          >
            <Option value={2019}>2019</Option>
            <Option value={2018}>2018</Option>
            <Option value={2017}>2017</Option>
            <Option value={2016}>2016</Option>
          </Select>
          <Button
            onClick={e => this.reset(e)}
            style={{
              boxShadow: 'unset',
              height: 32,
              marginRight: 10,
              borderColor: '#2c2c2c',
            }}
            shape="circle"
          >
            <Icon
              type="fullscreen"
              style={{
                height: 14,
                display: 'flex',
                justifyContent: 'center',
                verticalAlign: 'unset',
              }}
            />
          </Button>
        </div>
        <ContainerDimensions>
          {({ width }) => {
            const widthR = Math.round(width)
            return (
              <div>
                <ResponsiveContainer width={widthR} height={650}>
                  <ScatterChart
                    margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
                    // onMouseDown={e => this.updateRefAreaLeft(e)}
                    // onMouseMove={e => this.updateRefAreaRight(e)}
                    // onMouseUp={e => this.zoom(e)}
                  >
                    <CartesianGrid
                      strokeDasharray="1 3"
                      horizontal={false}
                      vertical
                    />
                    <XAxis
                      axisLine
                      allowDataOverflow
                      dataKey="time"
                      domain={[
                        left -
                          (leftYearTemp === '2016'
                            ? 262974300 * 16
                            : 262974300 * 6),
                        right + 262974300 * 6,
                      ]}
                      name="Time"
                      tickFormatter={unixTime =>
                        generateTickFormat(unixTime, resolution, left)
                      }
                      ticks={ticks}
                      interval={0}
                      type="number"
                      scale="time"
                      dy={0}
                      dx={0}
                    />
                    <YAxis
                      dataKey="value"
                      name="Value"
                      domain={domain}
                      ticks={yTicks}
                      axisLine={false}
                      tickLine={false}
                      tick={false}
                      width={0}
                    />
                    <ZAxis dataKey="size" range={[100, 10000]} />
                    <Tooltip content={<XTooltip data={data} />} />

                    {map(filteredData, (d, i) => {
                      const year = moment(d.times[0].time).format('YYYY')
                      if (!has(years, year)) {
                        years[year] = 0
                      }
                      years[year] += 1
                      const index = years[year]
                      const color = colors[year][index % 3]

                      return (
                        <Scatter
                          data={d.times}
                          strokeDasharray="5,5"
                          line={{ stroke: color, opacity: '0.625' }}
                          lineJointType="monotoneX"
                          lineType="joint"
                          key={i}
                          className="scatter-point"
                        >
                          <LabelList
                            dataKey="value"
                            position="left"
                            offset={10}
                          />
                          {map(d.times, (timeObject, k) => {
                            return (
                              <Cell
                                style={{
                                  opacity: timeObject.type === 10 ? 0 : 1,
                                }}
                                strokeDasharray={
                                  timeObject.type === 0
                                    ? '2,16'
                                    : timeObject.type === 1
                                    ? '5,8'
                                    : 0
                                }
                                strokeWidth={timeObject.type === 2 ? 6 : 2}
                                stroke={
                                  timeObject.type === 3 || timeObject.type === 2
                                    ? color
                                    : color
                                }
                                fill={
                                  timeObject.type === 3
                                    ? color
                                    : timeObject.type === 0
                                    ? '#fafafa'
                                    : '#ffffff'
                                }
                              />
                            )
                          })}
                        </Scatter>
                      )
                    })}

                    {refAreaLeft && refAreaRight ? (
                      <ReferenceArea
                        x1={refAreaLeft}
                        x2={refAreaRight}
                        strokeOpacity={0.3}
                      />
                    ) : null}
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            )
          }}
        </ContainerDimensions>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flexGrow: 1, flexBasis: 0, textAlign: 'left' }}>
            <Button
              onClick={e =>
                this.changeActiveRange(
                  e,
                  activeRangeLeft,
                  activeRangeRigth,
                  'back'
                )
              }
              disabled={head(allowedRange) === activeRangeLeft}
            >
              ◀
            </Button>
          </div>
          <div style={{ flexGrow: 1, flexBasis: 0, textAlign: 'center' }}>
            <p style={{ marginBottom: 0 }}>
              <strong>
                {resolution === 'years' ? (
                  <Fragment>2016 - 2019</Fragment>
                ) : (
                  <Fragment>{activeRangeLeft}</Fragment>
                )}
              </strong>
            </p>
          </div>
          <div style={{ flexGrow: 1, flexBasis: 0, textAlign: 'right' }}>
            <Button
              onClick={e =>
                this.changeActiveRange(
                  e,
                  activeRangeLeft,
                  activeRangeRigth,
                  'next'
                )
              }
              disabled={last(allowedRange) === activeRangeRigth}
            >
              ▶
            </Button>
          </div>
        </div>
        <br />
        <div style={{ background: '#FAFAFA', padding: 9 }}>
          <h3 className="mask-h5" style={{ marginBottom: 8 }}>
            Legend
          </h3>
          <Division>
            <div>
              <h4 className="mask-h5">
                <small>The Complete Circle</small>
              </h4>
              <Image
                src="https://ucarecdn.com/2380d479-20eb-4f55-bfdf-93c435c6f2af/graph1_legend1.webp"
                rawWidth={2000}
                rawHeight={400}
                style={{
                  height: 'auto',
                  width: '100%',
                  display: 'block',
                  marginBottom: 7,
                  border: 'unset',
                }}
              />
              <p style={{ marginBottom: 11 }}>
                <small>
                  An example of a Circle's complete process over time, from
                  Pre-Circle to Post-Circle.
                </small>
              </p>
            </div>
            <div>
              <h4 className="mask-h5">
                <small>The Circle Process</small>
              </h4>
              <Popover
                title={false}
                content={
                  <div style={{ width: 450 }}>
                    <Image
                      src="https://ucarecdn.com/2c2ee637-3701-46a3-8d7e-023f1ca29057/rcprocess.webp"
                      rawWidth={1324}
                      rawHeight={890}
                      style={{
                        height: 'auto',
                        width: '100%',
                        maxWidth: 450,
                        display: 'block',
                        marginBottom: 0,
                        border: 'unset',
                      }}
                    />
                  </div>
                }
                style={{ padding: 0 }}
              >
                <div style={{ cursor: 'pointer' }}>
                  <Image
                    src="https://ucarecdn.com/c16ee457-d489-4b7a-96c7-21d1a2ba92c8/graph1_legend0.webp"
                    rawWidth={2000}
                    rawHeight={400}
                    style={{
                      height: 'auto',
                      width: '100%',
                      display: 'block',
                      marginBottom: 7,
                      border: 'unset',
                    }}
                  />
                </div>
              </Popover>
              <p style={{ marginBottom: 11 }}>
                <small>
                  A Restorative Circle (RC) is a community process designed to
                  hold space for those in conflict.
                </small>
              </p>
            </div>
          </Division>

          <Division className="desktop-only">
            <div>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    flexGrow: 20,
                    flexBasis: 0,
                    marginRight: 7,
                  }}
                >
                  <Image
                    src="https://ucarecdn.com/379f8800-bf20-4816-acbb-27461850a1fc/graph1_legend2.webp"
                    rawWidth={900}
                    rawHeight={500}
                    style={{
                      height: 'auto',
                      width: '80%',
                      display: 'block',
                      border: 'unset',
                      background: 'unset',
                      margin: 'auto',
                    }}
                    className="margin-p"
                  />
                </div>
                <div
                  style={{
                    flexGrow: 80,
                    flexBasis: 0,
                  }}
                >
                  <h4
                    className="mask-h5"
                    style={{ marginTop: -11, marginBottom: 0 }}
                  >
                    <small>Circle Number</small>
                  </h4>
                  <p style={{ marginBottom: 11 }}>
                    <small>
                      Our Circles are recorded chronologically, so the number
                      indicates this order over time. The highest number also
                      indicates our total number of completed Circles (from 2016
                      onwards).
                    </small>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    flexGrow: 20,
                    flexBasis: 0,
                    marginRight: 7,
                  }}
                >
                  <Image
                    src="https://ucarecdn.com/25f11b47-e27e-4158-889b-b984bd71d405/graph1_legend3.webp"
                    rawWidth={900}
                    rawHeight={900}
                    style={{
                      height: 'auto',
                      width: '80%',
                      display: 'block',
                      border: 'unset',
                      background: 'unset',
                      margin: 'auto',
                    }}
                    className="margin-p"
                  />
                </div>
                <div
                  style={{
                    flexGrow: 80,
                    flexBasis: 0,
                  }}
                >
                  <h4
                    className="mask-h5"
                    style={{ marginTop: -11, marginBottom: 0 }}
                  >
                    <small>Pre-Circle(s)</small>
                  </h4>
                  <p>
                    <small>
                      Indicates when the 1st Pre-Circle took place with the
                      Circle Initiator, the person calling the Circle. (For
                      simplicity, the dates of the consecutive Pre-Circles with
                      the remaining Circle members are not indicated.)
                    </small>
                  </p>
                  <p style={{ marginBottom: 11 }}>
                    <small>
                      The size of the outer bounds indicates the number of
                      people who were named (to be invited to the Circle),
                      whereas the inner bounds indicates the actual number of
                      people who attended the Circle process.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    flexGrow: 12,
                    flexBasis: 0,
                    marginRight: 7,
                  }}
                >
                  <Image
                    src="https://ucarecdn.com/2ed84125-02b1-482d-ac49-a5a04103f23b/graph1_legend4.webp"
                    rawWidth={900}
                    rawHeight={900}
                    style={{
                      height: 'auto',
                      width: '80%',
                      display: 'block',
                      border: 'unset',
                      background: 'unset',
                      margin: 'auto',
                    }}
                    className="margin-p"
                  />
                </div>
                <div
                  style={{
                    flexGrow: 88,
                    flexBasis: 0,
                  }}
                >
                  <h4
                    className="mask-h5"
                    style={{ marginTop: -11, marginBottom: 0 }}
                  >
                    <small>Circle</small>
                  </h4>
                  <p style={{ marginBottom: 11 }}>
                    <small>
                      Indicates when the Circle took place (sometimes in
                      multiple meetings) and its size (number of people who
                      attended the Circle process).
                    </small>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    flexGrow: 12,
                    flexBasis: 0,
                    marginRight: 7,
                  }}
                >
                  <Image
                    src="https://ucarecdn.com/9ebd2b9d-8f2a-466a-9694-37c09bcebdb0/graph1_legend5.webp"
                    rawWidth={900}
                    rawHeight={900}
                    style={{
                      height: 'auto',
                      width: '80%',
                      display: 'block',
                      border: 'unset',
                      background: 'unset',
                      margin: 'auto',
                    }}
                    className="margin-p"
                  />
                </div>
                <div
                  style={{
                    flexGrow: 88,
                    flexBasis: 0,
                  }}
                >
                  <h4
                    className="mask-h5"
                    style={{ marginTop: -11, marginBottom: 0 }}
                  >
                    <small>Post-Circle(s)</small>
                  </h4>
                  <p style={{ marginBottom: 11 }}>
                    <small>
                      Indicates when the Post-Circle(s) took place and its size
                      (number of people who attended the Circle process).
                    </small>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    flexGrow: 12,
                    flexBasis: 0,
                    marginRight: 7,
                  }}
                >
                  <Image
                    src="https://ucarecdn.com/e15f7f54-2516-4ef3-997c-177034da9f9f/graph1_legend6.webp"
                    rawWidth={1423}
                    rawHeight={900}
                    style={{
                      height: 'auto',
                      width: '100%',
                      display: 'block',
                      border: 'unset',
                      background: 'unset',
                    }}
                    className="margin-p"
                  />
                </div>
                <div
                  style={{
                    flexGrow: 88,
                    flexBasis: 0,
                  }}
                >
                  <h4
                    className="mask-h6"
                    style={{ marginTop: -11, marginBottom: 0 }}
                  >
                    <small>Pop-Up</small>
                  </h4>
                  <p style={{ marginBottom: 11 }}>
                    <small>
                      When you hover over the graphics, a pop-up appears with
                      additional information about each Circle: a word-cloud
                      with key words from the Circle’s Act and Action
                      Agreements, the dates for when the Circle(s) took place,
                      as well as how many people were named and how many
                      attended the Circle process).
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </Division>
        </div>
      </div>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Sample3
