// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
// import reverse from 'lodash/reverse'
import findIndex from 'lodash/findIndex'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { PieChart, Pie, Tooltip } from 'recharts'
import Image from '@bodhi-project/components/lib/Image'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Card from 'antd/lib/card'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import orangePaintbrush from '../../assets/orangePaintbrush.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const RADIAN = Math.PI / 180
/**
 * [description]
 * @param  {[type]} options.cx          [description]
 * @param  {[type]} options.cy          [description]
 * @param  {[type]} options.midAngle    [description]
 * @param  {[type]} options.innerRadius [description]
 * @param  {[type]} options.outerRadius [description]
 * @param  {[type]} options.percent     [description]
 * @param  {[type]} options.index       [description]
 * @param  {[type]} options.            [description]
 * @return {[type]}                     [description]
 */
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const avData = [
  {
    name: 'AV Pop',
    value: 2761,
    fill: 'rgba(255,140,0,0)',
    fillBox: 'rgba(255,140,0,1)',
    textColor: '#2c2c2c',
    borderColor: '#00006F',
  },
  {
    name: 'Total',
    value: 257,
    fill: '#00006F',
    fillBox: '#00006F',
    textColor: '#FFF',
    borderColor: 'rgba(255,140,0,1)',
  },
]

const yearData = [
  {
    name: '2016',
    value: 103,
    fill: '#ffac80',
    opacity: '0.88',
    suffix: 'unique participants',
  },
  {
    name: '2019',
    value: 51,
    fill: '#ffeb80',
    opacity: '0.88',
    suffix: 'unique participants so far…',
  },
  {
    name: '2018',
    value: 105,
    fill: '#eb80ff',
    opacity: '0.88',
    suffix: 'unique participants',
  },
  {
    name: '2017',
    value: 57,
    fill: '#ac80ff',
    opacity: '0.88',
    suffix: 'unique participants',
  },
]

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const XTooltip = props => {
  const { payload } = props
  let index = undefined
  let yearDetails = undefined

  if (payload.length > 0) {
    index = findIndex(yearData, ['value', payload[0].value])
    yearDetails = yearData[index]
  }

  return (
    <div>
      {!isUndefined(yearDetails) && (
        <Card
          title={false}
          style={{
            maxWidth: 250,
            border: 0,
            borderTop: '1px solid #00006F',
            borderBottom: '1px solid #00006F',
            borderLeft: '1px solid #00006F',
            borderRight: '1px solid #00006F',
            borderRadius: 8,
            overflow: 'hidden',
          }}
          bodyStyle={{ padding: 0 }}
        >
          <p
            style={{
              color: '#222222',
              background: yearDetails.fill,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 6,
              paddingRight: 6,
              margin: 0,
            }}
          >
            {yearDetails.name}:&nbsp;<strong>{yearDetails.value}</strong>
            &nbsp;
            {yearDetails.suffix}
          </p>
        </Card>
      )}
    </div>
  )
}

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const YTooltip = props => {
  const { payload } = props
  let index = undefined
  let avDatum = undefined
  let text = ''

  if (payload.length > 0) {
    index = findIndex(avData, ['value', payload[0].value])
    avDatum = avData[index]
  }

  if (!isUndefined(avDatum)) {
    if (avDatum.value === 257) {
      text = '257 unique Aurovilians have participated in Circles so far.'
    }
    if (avDatum.value === 2761) {
      text =
        "Auroville's Population: 3006 (Aurovilians and children, 2018 Census)"
    }
  }

  return (
    <div>
      {!isUndefined(avDatum) && (
        <Card
          title={false}
          style={{
            maxWidth: 250,
            border: `1px solid ${avDatum.borderColor}`,
            borderRadius: 8,
            overflow: 'hidden',
          }}
          bodyStyle={{ padding: 0 }}
        >
          <p
            style={{
              color: avDatum.textColor,
              background: avDatum.fillBox,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 6,
              paddingRight: 6,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            {text}
          </p>
        </Card>
      )}
    </div>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styles = css({
  marginTop: 40,

  '& .recharts-pie-labels': {
    '& text': {
      fontWeight: 700,
      fontFamily: `"Comic Sans MS", cursive, sans-serif`,
    },
  },

  '& #hover': {
    '& .recharts-pie-sector': {
      '& path': {
        transition: 'all 300ms ease-out',
      },

      '&:hover': {
        '& path': {
          opacity: '1 !important',
          transform: 'scale(1.05, 1.05) translate(-10px, -10px)',
        },
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** PieGraph */
class PieGraph extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      view: 1,
    }

    this.changeView = this.changeView.bind(this)
  }

  /**
   * [changeView description]
   * @return {[type]} [description]
   */
  changeView(e) {
    const { view } = this.state
    if (view === 1) {
      this.setState({ view: 2 })
    } else {
      this.setState({ view: 1 })
    }
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const { view } = this.state

    return (
      <div className={styles}>
        <div className="small-only">
          <h2 className="mask-h4">Reality Check…</h2>
          <p>
            On one hand, it’s a real celebration how many Circles we’ve had in
            the past few years and how many Aurovilians have participated. And
            yet, in reality we’ve barely touched 10% of our population!
          </p>
          <p style={{ marginBottom: 0 }}>
            Here’s a count of our unique participants (how many individual
            Aurovilians have ever participated in a Circle), in total and per
            year. And we’ve of course had several Circles where participants had
            already attended previous Circles, and so therefore aren’t counted
            in these statistics.
          </p>
        </div>
        <div
          style={{
            marginTop: 30,
            paddingTop: 4,
            paddingBottom: 28,
            position: 'relative',
            paddingLeft: '6%',
            paddingRight: '14%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              zIndex: -2,
              overflow: 'hidden',
            }}
          >
            <Image
              src={orangePaintbrush}
              style={{
                background: 'transparent',
                border: 'unset',
                height: '100%',
                width: '100%',
                opacity: 1,
              }}
              rawWidth={1440}
              rawHeight={900}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <div style={{ width: 400, paddingTop: 0 }}>
                {view === 1 && (
                  <div
                    style={{ width: 400, height: 360, position: 'relative' }}
                  >
                    <div
                      style={{
                        width: 400,
                        height: 360,
                        position: 'absolute',
                        zIndex: 100,
                      }}
                    >
                      <PieChart
                        width={400}
                        height={360}
                        onClick={e => this.changeView(e)}
                      >
                        <Pie
                          dataKey="value"
                          data={avData}
                          label={{
                            offsetRadius: 5,
                          }}
                          labelLine={false}
                          stroke="none"
                        />
                        <Tooltip content={<YTooltip />} />
                      </PieChart>
                    </div>
                    <div
                      style={{
                        width: 400,
                        height: 360,
                        position: 'absolute',
                        zIndex: 10,
                      }}
                    >
                      <PieChart
                        width={400}
                        height={360}
                        onClick={e => this.changeView(e)}
                      >
                        <Pie
                          dataKey="value"
                          data={[
                            {
                              name: 'AV Pop',
                              value: 3006,
                              fill: 'rgba(255,140,0,1)',
                            },
                          ]}
                          label={{
                            offsetRadius: 5,
                          }}
                          labelLine={false}
                          innerRadius={10}
                          outerRadius={80}
                          stroke="none"
                        />
                      </PieChart>
                    </div>
                  </div>
                )}
                {view === 2 && (
                  <div
                    style={{ width: 400, height: 360, position: 'relative' }}
                  >
                    <div
                      style={{
                        width: 400,
                        height: 360,
                        position: 'absolute',
                        zIndex: 100,
                      }}
                      id="hover"
                    >
                      <PieChart
                        width={400}
                        height={360}
                        onClick={e => this.changeView(e)}
                      >
                        <Pie
                          dataKey="value"
                          data={yearData}
                          label={false}
                          labelLine={false}
                          paddingAngle={1}
                          stroke="none"
                        />
                        <Tooltip content={<XTooltip />} />
                      </PieChart>
                    </div>
                    <div
                      style={{
                        width: 400,
                        height: 360,
                        position: 'absolute',
                        zIndex: 10,
                      }}
                    >
                      <PieChart
                        width={400}
                        height={360}
                        onClick={e => this.changeView(e)}
                      >
                        <Pie
                          dataKey="value"
                          data={[
                            {
                              name: 'Total',
                              value: 257,
                              fill: '#00006F',
                            },
                          ]}
                          label={false}
                          labelLine={false}
                          innerRadius={10}
                          outerRadius={80}
                          stroke="none"
                        />
                      </PieChart>
                    </div>
                  </div>
                )}
                {view === 2 && (
                  <p
                    style={{
                      textAlign: 'center',
                      fontWeight: 700,
                      fontFamily: `"Comic Sans MS", cursive, sans-serif`,
                      color: '#00006F',
                      marginBottom: 0,
                      marginTop: -35,
                    }}
                  >
                    <small>Total Participants: 257 so far</small>
                  </p>
                )}
              </div>
            </div>
            <div className="large-only" style={{ paddingTop: 36 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  onClick={e => this.changeView(e)}
                  style={{
                    boxShadow: 'unset',
                    height: 32,
                    marginRight: 10,
                    borderColor: '#2c2c2c',
                  }}
                  shape="circle"
                  ghost
                >
                  <Icon
                    type={view === 1 ? 'fullscreen' : 'fullscreen-exit'}
                    style={{
                      height: 14,
                      display: 'flex',
                      justifyContent: 'center',
                      verticalAlign: 'unset',
                      color: '#2c2c2c',
                    }}
                  />
                </Button>
              </div>
              <div style={{ marginTop: -20 }}>
                <hr
                  style={{
                    borderTop: '6px solid #2c2c2c',
                    borderBottom: 0,
                    width: '12%',
                    marginLeft: 0,
                  }}
                />
                <p
                  className="mask-h4"
                  style={{
                    color: '#2c2c2c',
                    marginBottom: 10,
                    lineHeight: '30px',
                  }}
                >
                  Reality Check…
                </p>
                <p style={{ color: '#2c2c2c', marginTop: 0 }}>
                  On one hand, it’s a celebration how many Circles we’ve had in
                  the past few years and how many Aurovilians have participated.
                  And yet in reality we’ve barely touched 10% of our population!
                </p>
                <p style={{ color: '#2c2c2c' }}>
                  Here’s a count of our unique participants (how many individual
                  Aurovilians have ever participated in a Circle), in total and
                  per year. Several Aurovilians have participated in more than
                  one Circle, but in this case we've counted them only once.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default PieGraph
