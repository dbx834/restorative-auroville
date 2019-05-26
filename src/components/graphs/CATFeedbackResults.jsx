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
    value: 100,
    fill: '#228b22',
  },
  {
    name: 'No',
    value: 0,
    fill: '#d80000',
  },
]

const graph2 = [
  {
    name: 'Yes',
    value: 78.95,
    fill: '#228b22',
  },
  {
    name: 'No',
    value: 21.05,
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

  '& .swap': {
    '@media(min-width: 992px)': {
      display: 'flex',
    },

    '@media(max-width: 992px)': {
      display: 'block',
    },
  },

  '& .pad-left-mobile': {
    '@media(max-width: 992px)': {
      paddingLeft: 12,
      paddingBottom: 12,
    },
  },

  '& .pad-top-mobile': {
    '@media(max-width: 992px)': {
      paddingTop: 12,
      // paddingBottom: 12,
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
  if (value === 100) {
    dx = x + 20
    dy = y - 50
  }

  if (value === 0) {
    dx = x - 13
    dy = y
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
  if (value === 78.95) {
    dx = x + 4
    dy = y
  }

  if (value === 21.05) {
    dx = x - 10
    dy = y - 5
  }

  return (
    <text x={dx} y={dy} fill={fill} textAnchor="middle">
      <tspan style={{ fontSize: '80%' }}>{value}%</tspan>
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
        <div
          style={{
            width: '80%',
            background: 'rgb(0,0,111,0.22)',
            backgroundOpacity: 0.1,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <div className="swap">
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
              className="pad-left-mobile"
            >
              <p style={{ marginBottom: 0 }}>
                <strong>Question 1.</strong>
                <br />
                Did you find today’s CAT on RC meaningful and/or informative?
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
          <div className="swap">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
              }}
              className="pad-top-mobile"
            >
              <p style={{ marginBottom: 0 }}>
                <strong>Question 2.</strong>
                <br />
                Would you like to learn more about RC, and/or potentially become
                an available RC Facilitator?
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
          <div className="swap">
            <div
              style={{
                padding: 20,
              }}
              className="pad-top-mobile"
            >
              <p>
                <strong>Question 3.</strong>
                <br />
                Do you have suggestions for how we could respond better to the
                needs of Auroville (in this field of justice and conflict
                resolution)? What would you concretely suggest we do?
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Some responses…</strong>
                <br />
                <i>
                  Persevere... Be informed of alternatives in order to make a
                  "complete whole."
                </i>
                <br />
                <br />
                <i>
                  Better communication and connection with all. Beautiful work,
                  please keep going.
                </i>
                <br />
                <br />
                <i>"Knowing ourselves better in order to avoid projection.</i>
                <br />
                <br />
                <i>
                  A more systemic approach, a wider way to embrace complex
                  situations. Don't rely only on one way to find solutions, be
                  creative."
                </i>
                <br />
                <br />
                <i>
                  Addressing Restidents' Assembly ratification when there's
                  injustice in a conflict.
                </i>
                <br />
                <br />
                <i>Trust each other... Keep it up!</i>
                <br />
                <br />
                <i>
                  Having a page on Auronet to communicate about RC and processes
                  that are going on in order to involve the full community to
                  take responsibility if needed.
                </i>
                <br />
                <br />
                <i>
                  Just keep going on. Emphasize the need for deeper
                  understanding of self and others, and clearing the collective
                  air...
                </i>
                <br />
                <br />
                <i>
                  Start the RC with a ritual to call for the higher Guidance of
                  all participants.
                </i>
                <br />
                <br />
                <i>
                  Not to incarnate "institutional" justice for Auroville. Keep
                  free. Keep distance.
                </i>
                <br />
                <br />
                <i>Set up conflict preventention processes. Define justice.</i>
                <br />
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
