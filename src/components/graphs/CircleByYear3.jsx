// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import findIndex from 'lodash/findIndex'
import isUndefined from 'lodash/isUndefined'
import times from 'lodash/times'
import has from 'lodash/has'
import head from 'lodash/head'
import last from 'lodash/last'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
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

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Card from 'antd/lib/card'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import { data } from './data/rechartsData2'
import inArray from '../../methods/inArray'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const yellowTheme = ['#ffac80', '#ffeb80', '#ff8080']
const blueTheme = ['#80ffec', '#80d3ff', '#8094ff']
const purpleTheme = ['#9697ff', '#ca96ff', '#ff96ff']
const redTheme = ['#ff80c0', '#ff8080', '#ffc080']
const colors = {
  2015: purpleTheme,
  2016: blueTheme,
  2017: yellowTheme,
  2018: purpleTheme,
  2019: purpleTheme,
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

      '& tspan': {
        fontSize: '130%',
      },
    },
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
      left: +moment('2018-01-01', 'YYYY-MM-DD'),
      right: +moment('2019-01-01', 'YYYY-MM-DD'),
      resolution: 'months',
      allowedRange: [2016, 2017, 2018, 2019],
      activeRangeLeft: 2018,
      activeRangeRigth: 2019,
    }

    this.updateRefAreaLeft = this.updateRefAreaLeft.bind(this)
    this.updateRefAreaRight = this.updateRefAreaRight.bind(this)
    this.zoom = this.zoom.bind(this)
    this.reset = this.reset.bind(this)
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
      right: +moment('2019-01-01', 'YYYY-MM-DD'),
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
    const leftYearTemp = moment(left).format('YYYY')

    /**
     * [generateTicks description]
     * @return {[type]} [description]
     */
    const generateTicks = (left, right, resolution) => {
      const ticks = []
      const diff = moment.duration(right - left, 'milliseconds')
      const lM = moment(left)
      const rM = moment(right)
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
     * @param  {[type]} unixTime [description]
     * @return {[type]}          [description]
     */
    const generateTickFormat = unixTime => {
      let format = moment(unixTime).format("MMM'YY")
      if (resolution === 'years') {
        format = moment(unixTime).format('YYYY')
      }
      // console.log(
      //   'tick',
      //   moment(unixTime).format('dddd, MMMM Do YYYY, h:mm:ss a')
      // )
      return format
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
    const generateTicksAndDomain = data => {
      let low = undefined
      let max = undefined
      const ticks = []
      map(data, d => {
        map(d.times, timeObject => {
          if (isUndefined(low)) {
            low = timeObject.value
          } else if (timeObject.value < low) {
            low = timeObject.value
          }
          if (isUndefined(max)) {
            max = timeObject.value
          } else if (timeObject.value > max) {
            max = timeObject.value
          }
          if (inArray(ticks, timeObject.value) === false) {
            ticks.push(timeObject.value)
          }
        })
      })
      const domain = [low - 0.62, max + 0.62]

      return { ticks, domain }
    }

    /**
     * [description]
     * @param  {[type]} props [description]
     * @return {[type]}       [description]
     */
    const XTooltip = props => {
      const { payload } = props
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
        thisCircleIndex = findIndex(circleDetails.times, [
          'time',
          payload[0].value,
        ])
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
                <Image
                  src={circleDetails.wordCloud}
                  rawWidth={900}
                  rawHeight={900}
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
                    display: 'block',
                  }}
                  className="margin-p"
                />
              )}
              <p
                style={{
                  marginBottom: 0,
                  color: '#FFF',
                  background: '#00006F',
                  padding: 15,
                  marginTop: 0,
                }}
              >
                <strong>
                  {thisCircleDetails.type === 0 && 'Pre-Circle'}
                  {thisCircleDetails.type === 1 && 'Pre-Circle'}
                  {thisCircleDetails.type === 2 && 'Circle'}
                  {thisCircleDetails.type === 3 && 'Post-Circle'}
                  &nbsp;(Circle #{circleDetails.id})
                </strong>
                <br />
                {thisCircleTime}
              </p>
              <p
                style={{
                  marginBottom: 0,
                  color: '#222222',
                  background: '#ffe34d',
                  padding: 15,
                  marginTop: 0,
                  borderBottom: '1px solid #00006F',
                  borderLeft: '1px solid #00006F',
                  borderRight: '1px solid #00006F',
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}
              >
                <strong>Named:</strong> {circleDetails.named} people
                <br />
                <strong>Attended:</strong> {circleDetails.attended} people
              </p>
            </Card>
          )}
        </div>
      )
    }

    const ticks = generateTicks(left, right, resolution)
    // console.log('left', moment(left).format('dddd, MMMM Do YYYY, h:mm:ss a'))
    // console.log('right', moment(right).format('dddd, MMMM Do YYYY, h:mm:ss a'))
    // console.log('ticks', ticks)
    const years = {}
    const filteredData = filterData(data, left, right)
    const { ticks: yTicks, domain } = generateTicksAndDomain(filteredData)

    return (
      <div className={styles}>
        <ResponsiveContainer width="100%" height={1000}>
          <ScatterChart
            margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
            // onMouseDown={e => this.updateRefAreaLeft(e)}
            // onMouseMove={e => this.updateRefAreaRight(e)}
            // onMouseUp={e => this.zoom(e)}
          >
            <CartesianGrid strokeDasharray="1 3" horizontal={false} vertical />
            <XAxis
              axisLine
              allowDataOverflow
              dataKey="time"
              domain={[
                left -
                  (leftYearTemp === '2016' ? 262974300 * 12 : 262974300 * 2),
                right + 262974300 * 2,
              ]}
              name="Time"
              tickFormatter={unixTime => generateTickFormat(unixTime)}
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
            <Tooltip content={<XTooltip />} cursor={false} />

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
                  <LabelList dataKey="value" position="left" offset={10} />
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
            <p>
              <strong>
                {activeRangeLeft} – {activeRangeRigth}
              </strong>
            </p>
            <p>
              <a
                href="javascript: void(0);"
                className="btn update"
                onClick={e => this.reset(e)}
                style={{ marginRight: 20 }}
              >
                Zoom Out
              </a>
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
      </div>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Sample3
