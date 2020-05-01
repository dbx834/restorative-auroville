// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

import reverse from 'lodash/reverse'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { RadialBarChart, RadialBar } from 'recharts'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import { data as data1 } from './data/radialData1'
import { data as data2 } from './data/radialData2'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const rData1 = reverse(data1)
const rData2 = reverse(data2)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** RadialGraph */
class RadialGraph extends React.Component {
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
      <div>
        <Division bigGolden>
          <div>
            {view === 1 && (
              <RadialBarChart
                width={640}
                height={400}
                outerRadius="80%"
                innerRadius="10%"
                barSize={200}
                data={rData1}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: 'insideStart', fill: '#fff' }}
                  background
                  clockWise={false}
                  dataKey="value"
                />
              </RadialBarChart>
            )}
            {view === 2 && (
              <RadialBarChart
                width={640}
                height={400}
                outerRadius="80%"
                innerRadius="10%"
                barSize={200}
                data={rData2}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: 'insideStart', fill: '#fff' }}
                  background
                  clockWise={false}
                  dataKey="value"
                />
              </RadialBarChart>
            )}
          </div>
          <div>
            <Button onClick={e => this.changeView(e)}>Change</Button>
            <p>Numbers…</p>
            <p>AV Pop - 3006</p>
            <p>Total - 220</p>
            <p>2016 - 103</p>
            <p>2017 - 57</p>
            <p>2018 - 104</p>
          </div>
        </Division>
      </div>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default RadialGraph
