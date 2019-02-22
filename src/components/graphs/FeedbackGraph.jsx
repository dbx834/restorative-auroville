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
// import Image from '@bodhi-project/components/lib/Image'

import Card from 'antd/lib/card'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/card/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const graph1 = [
  {
    name: 'Yes',
    value: 71.9,
    fill: '#228b22',
  },
  {
    name: 'No',
    value: 6.3,
    fill: '#d80000',
  },
  {
    name: "I don't know",
    value: 21.9,
    fill: '#ff8c00',
  },
]

const graph2 = [
  {
    name: 'Yes',
    value: 90.6,
    fill: '#228b22',
  },
  {
    name: "I don't know",
    value: 9.4,
    fill: '#ff8c00',
  },
]

const graph3 = [
  {
    name: 'Yes',
    value: 93.5,
    fill: '#228b22',
  },
  {
    name: "I don't know",
    value: 6.5,
    fill: '#ff8c00',
  },
]

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

  '&#hover': {
    '& .recharts-pie-sector': {
      '& path': {
        transform: 'scale(0.90, 0.90) translate(2px, 2px)',
        transition: 'all 300ms ease-out',
      },

      '&:hover': {
        '& path': {
          opacity: '1 !important',
          boxShadow: '3px 8px 0 0 rgba(0, 0, 111, 1)',
          transform: 'scale(0.95, 0.95) translate(-2px, -2px)',
        },
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const XTooltip1 = props => {
  const { payload } = props
  let index = undefined
  let datum = undefined

  if (payload.length > 0) {
    index = findIndex(graph1, ['value', payload[0].value])
    datum = graph1[index]
  }

  return (
    <div>
      {!isUndefined(datum) && (
        <Card
          title={false}
          style={{
            maxWidth: 120,
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
              color: datum.fill,
              background: '#FFF',
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 6,
              paddingRight: 6,
              margin: 0,
            }}
          >
            <small>
              {datum.name}: {datum.value}%
            </small>
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
const XTooltip2 = props => {
  const { payload } = props
  let index = undefined
  let datum = undefined

  if (payload.length > 0) {
    index = findIndex(graph2, ['value', payload[0].value])
    datum = graph2[index]
  }

  return (
    <div>
      {!isUndefined(datum) && (
        <Card
          title={false}
          style={{
            maxWidth: 120,
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
              color: datum.fill,
              background: '#FFF',
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 6,
              paddingRight: 6,
              margin: 0,
            }}
          >
            <small>
              {datum.name}: {datum.value}%
            </small>
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
const XTooltip3 = props => {
  const { payload } = props
  let index = undefined
  let datum = undefined

  if (payload.length > 0) {
    index = findIndex(graph3, ['value', payload[0].value])
    datum = graph3[index]
  }

  return (
    <div>
      {!isUndefined(datum) && (
        <Card
          title={false}
          style={{
            maxWidth: 120,
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
              color: datum.fill,
              background: '#FFF',
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 6,
              paddingRight: 6,
              margin: 0,
            }}
          >
            <small>
              {datum.name}: {datum.value}%
            </small>
          </p>
        </Card>
      )}
    </div>
  )
}

/**
 * [description]
 * @param  {[type]} options.x     [description]
 * @param  {[type]} options.y     [description]
 * @param  {[type]} options.fill  [description]
 * @param  {[type]} options.value [description]
 * @return {[type]}               [description]
 */
const CustomizedLabel1 = ({ x, y, fill, value }) => {
  let dx = x
  let dy = y
  if (value === 71.9) {
    dx = x - 7
    dy = y + 10
  }

  if (value === 6.3) {
    dx = x - 3
    dy = y - 10
  }

  if (value === 21.9) {
    dy = y - 7
  }

  return (
    <text x={dx} y={dy} fill={fill} textAnchor="middle">
      <tspan style={{ fontSize: '90%' }}>{value}%</tspan>
    </text>
  )
}

/**
 * [description]
 * @param  {[type]} options.x     [description]
 * @param  {[type]} options.y     [description]
 * @param  {[type]} options.fill  [description]
 * @param  {[type]} options.value [description]
 * @return {[type]}               [description]
 */
const CustomizedLabel2 = ({ x, y, fill, value }) => {
  let dx = x
  let dy = y
  if (value === 90.6) {
    dx = x + 27
    dy = y - 33
  }

  if (value === 9.4) {
    dy = y - 5
    dx = x - 12
  }

  return (
    <text x={dx} y={dy} fill={fill} textAnchor="middle">
      <tspan style={{ fontSize: '80%' }}>{value}%</tspan>
    </text>
  )
}

/**
 * [description]
 * @param  {[type]} options.x     [description]
 * @param  {[type]} options.y     [description]
 * @param  {[type]} options.fill  [description]
 * @param  {[type]} options.value [description]
 * @return {[type]}               [description]
 */
const CustomizedLabel3 = ({ x, y, fill, value }) => {
  let dx = x
  let dy = y
  if (value === 93.5) {
    dx = x + 27
    dy = y - 34
  }

  if (value === 6.5) {
    dx = x - 14
    dy = y - 4
  }

  return (
    <text x={dx} y={dy} fill={fill} textAnchor="middle">
      <tspan style={{ fontSize: '70%' }}>{value}%</tspan>
    </text>
  )
}

/** FeedbackGraph */
class FeedbackGraph extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <div className={styles} id="hover">
        <h2 className="mask-h4">Feedback from our Participants</h2>
        <p>
          We generally send out feedback forms to our participants after the
          Post-Circle is over. Here are some of their responses.
        </p>
        <div
          style={{
            width: '80%',
            background: 'rgb(0,0,111,0.22)',
            backgroundOpacity: 0.1,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ width: 220, paddingLeft: 20, paddingRight: 20 }}>
              <PieChart width={180} height={180}>
                <Pie
                  dataKey="value"
                  nameKey="name"
                  data={graph1}
                  label={<CustomizedLabel1 />}
                  labelLine={false}
                  stroke="none"
                  paddingAngle={1}
                />
                <Tooltip content={<XTooltip1 />} />
              </PieChart>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: 20,
              }}
            >
              <p style={{ marginBottom: 0 }}>
                <strong>Question 1.</strong>
                <br />
                Do you think the conflict or dispute moved forward? Has there
                been a shift in the relationships between people, or within your
                own stand and attitude?
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '80%',
            marginLeft: '10%',
            background: 'rgba(0,0,111,0.15)',
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <p style={{ marginBottom: 0 }}>
                <strong>Question 2.</strong>
                <br />
                Did you find the RC process (Pre-Circles, Circle, Post-Circle)
                meaningful?
              </p>
            </div>
            <div style={{ width: 200, paddingRight: 20 }}>
              <PieChart width={160} height={160}>
                <Pie
                  dataKey="value"
                  nameKey="name"
                  data={graph2}
                  label={<CustomizedLabel2 />}
                  labelLine={false}
                  stroke="none"
                  paddingAngle={1}
                />
                <Tooltip content={<XTooltip2 />} />
              </PieChart>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '80%',
            marginLeft: '20%',
            background: 'rgba(0,0,111,0.08)',
            backgroundOpacity: 0.1,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ width: 180, paddingLeft: 20, paddingRight: 20 }}>
              <PieChart width={140} height={140}>
                <Pie
                  dataKey="value"
                  nameKey="name"
                  data={graph3}
                  label={<CustomizedLabel3 />}
                  labelLine={false}
                  stroke="none"
                  paddingAngle={1}
                />
                <Tooltip content={<XTooltip3 />} />
              </PieChart>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: 20,
              }}
            >
              <p style={{ marginBottom: 0 }}>
                <strong>Question 3.</strong>
                <br />
                Would you like to see RC being used more frequently in
                Auroville?
              </p>
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
export default FeedbackGraph
