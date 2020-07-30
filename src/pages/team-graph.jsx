// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

import map from 'lodash/map'
import shuffle from 'lodash/shuffle'

import * as d3 from 'd3'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Popover, Button, Modal, Tabs } from 'antd'
import withSizes from 'react-sizes'

import smallKey from '@bodhi-project/components/lib/methods/smallKey'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import circle from '../assets/circle.png'

import Laura from '../components/people/Laura'
import Melodie from '../components/people/Melodie'
import Kati from '../components/people/Kati'

import lauraSquare from '../assets/lauraSquare.jpg'
import katiSquare from '../assets/katiSquare.jpg'
import melodieSquare from '../assets/melodieSquare.jpg'

import Janet from '../components/people/Janet'
import Henrike from '../components/people/Henrike'
import Nils from '../components/people/Nils'
import Suma from '../components/people/Suma'
import Stefan from '../components/people/Stefan'
import Celia from '../components/people/Celia'
import Michelle from '../components/people/Michelle'
import Emma from '../components/people/Emma'
import Aditi from '../components/people/Aditi'
import Sunmi from '../components/people/Sunmi'
import Helene from '../components/people/Helene'
import Shanti from '../components/people/Shanti'
import Anne from '../components/people/Anne'
import Pranjal from '../components/people/Pranjal'

import janetSquare from '../assets/janetSquare.jpg'
import henrikeSquare from '../assets/henrikeSquare.jpg'
import nilsSquare from '../assets/nilsSquare.jpg'
import sumaSquare from '../assets/sumaSquare.jpg'
import stefanSquare from '../assets/stefanSquare.jpg'
import celiaSquare from '../assets/celiaSquare.jpg'
import michelleSquare from '../assets/michelleSquare.jpg'
import emmaSquare from '../assets/emmaSquare.jpg'
import aditiSquare from '../assets/aditiSquare.jpg'
import sunmiSquare from '../assets/sunmiSquare.jpg'
import heleneSquare from '../assets/heleneSquare.jpg'
import shantiSquare from '../assets/shantiSquare.jpg'
import anneSquare from '../assets/anneSquare.jpg'
import pranjalSquare from '../assets/pranjalSquare.jpg'

import StandardPage from '../components/wrappers/StandardPage'
import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { TabPane } = Tabs
const { Fragment } = React

const pageData = {
  pageTitle: 'Our Team',
  nakedPageSlug: 'our-team',
  pageAbstract:
    'Who Are We? A small group of people passionate about human connection and committed to walking towards increased community resilience. We lead the larger Restorative Auroville project, we facilitate Circles, some of us teach, some of us run our different initiatives, and more... And we’re wanting to expand our team and our reach in the community.',
}

const seoData = seoHelper(pageData)

/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180)

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}

const coreTeamPersons = shuffle([
  { name: "L'aura", photo: lauraSquare, about: <Laura /> },
  { name: 'Melodie', photo: melodieSquare, about: <Melodie /> },
  { name: 'Kati', photo: katiSquare, about: <Kati /> },
])

const coreTeamPersonsShuffled = shuffle(coreTeamPersons)

const teamPersons = [
  { name: 'Janet', photo: janetSquare, about: <Janet /> },
  { name: 'Henrike', photo: henrikeSquare, about: <Henrike /> },
  { name: 'Nils', photo: nilsSquare, about: <Nils /> },
  { name: 'Suma', photo: sumaSquare, about: <Suma /> },
  { name: 'Stefan', photo: stefanSquare, about: <Stefan /> },
  { name: 'Celia', photo: celiaSquare, about: <Celia /> },
  { name: 'Michelle', photo: michelleSquare, about: <Michelle /> },
  { name: 'Emma', photo: emmaSquare, about: <Emma /> },
  { name: 'Aditi', photo: aditiSquare, about: <Aditi /> },
  { name: 'Sunmi', photo: sunmiSquare, about: <Sunmi /> },
  { name: 'Helene', photo: heleneSquare, about: <Helene /> },
  { name: 'Shanti', photo: shantiSquare, about: <Shanti /> },
  { name: 'Anne', photo: anneSquare, about: <Anne /> },
  { name: 'Pranjal', photo: pranjalSquare, about: <Pranjal /> },
]

const teamPersonsShuffled = shuffle(teamPersons)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class Page extends React.PureComponent {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      currentActive: 'Laura',
    }

    this.drawCircle = this.drawCircle.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  /** [description] */
  showModal = (e, currentActive) => {
    e.preventDefault()

    this.setState({
      visible: true,
      currentActive,
    })
  }

  /** [description] */
  handleOk = e => {
    this.setState({
      visible: false,
    })
  }

  /** [description] */
  handleCancel = e => {
    this.setState({
      visible: false,
    })
  }

  /** [drawCircle description] */
  drawCircle() {
    const boundX = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, 900])
    const boundY = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, 600])
    const line = d3
      .line()
      .x(d => boundX(d.x))
      .y(d => boundY(d.y))

    const circles = [
      {
        cx: boundX(50),
        cy: boundY(50),
        r: boundY(12.5),
        color: '#d1d1ff',
        className: 'base',
        type: 'base',
        key: smallKey(),
        photo: circle,
      },
    ]
    const lines = []

    const coreTeamStrength = coreTeamPersonsShuffled.length
    const parentCircleHalfWidth = boundY(12.5)
    const hyp = parentCircleHalfWidth
    const angle = Math.round(360 / coreTeamStrength)
    /** [description] */
    const addCoreTeam = () => {
      map(coreTeamPersonsShuffled, (person, i) => {
        const currentAngle = i * angle
        // calculate the positioning of the child circle around the parent circle
        const cx =
          boundX(50) + Math.round(Math.sin(toDegrees(currentAngle)) * hyp)
        const cy =
          boundY(50) + Math.round(Math.cos(toDegrees(currentAngle)) * hyp)
        circles.push({
          cx,
          cy,
          r: boundY(12.5 * 0.67),
          color: '#ffd1d1',
          className: 'team-person core-team-person',
          type: 'core-team-person',
          key: smallKey(),
          strokeWidth: 6,
          ...person,
        })
        const x = (cx / 900) * 100
        const y = (cy / 600) * 100
        const lineData = [{ x: 50, y: 50 }, { x, y }]
        lines.push({
          line: line(lineData),
          strokeWidth: 4,
          className: 'person-line core-team-person-line',
        })
      })
    }
    addCoreTeam()

    const teamStrength = teamPersonsShuffled.length
    const circleHalfWidth = boundY(35)
    const hyp2 = circleHalfWidth
    const angle2 = Math.round(360 / teamStrength)
    const topGap = boundY(0) + boundY(12.5)
    const botGap = boundY(100) - boundY(12.5)

    /** [description] */
    const addTeam = () => {
      map(teamPersonsShuffled, (person, i) => {
        const currentAngle = i * angle2
        // calculate the positioning of the child circle around the parent circle
        const randomF = getRandomArbitrary(100, 120)
        const cx =
          boundX(50) +
          Math.round(
            (Math.sin(toDegrees(currentAngle)) * (hyp2 * randomF)) / 100
          )
        const cy =
          boundY(50) +
          Math.round(
            (Math.cos(toDegrees(currentAngle)) * (hyp2 * randomF)) / 100
          )

        if (cy > topGap && cy < botGap) {
          circles.push({
            cx,
            cy,
            r: boundY(12.5 * 0.67 * 0.75),
            color: '#d1ffff',
            className: 'team-person',
            type: 'team-person',
            key: smallKey(),
            strokeWidth: 3,
            ...person,
          })
          const x = (cx / 900) * 100
          const y = (cy / 600) * 100
          const lineData = [{ x: 50, y: 50 }, { x, y }]
          lines.push({
            line: line(lineData),
            strokeWidth: 1,
            className: 'person-line team-person-line',
          })
        }
      })
    }
    addTeam()

    return (
      <Fragment>
        {map(lines, ({ line, strokeWidth, className }) => {
          return (
            <Fragment key={smallKey()}>
              <path
                style={{
                  fill: 'none',
                  strokeWidth,
                  stroke: 'blue',
                }}
                d={line}
                className={className}
              />
            </Fragment>
          )
        })}
        {map(
          circles,
          ({
            cx,
            cy,
            r,
            color,
            className,
            type,
            key,
            name,
            photo,
            strokeWidth,
            about = <Fragment />,
          }) => (
            <Fragment key={smallKey()}>
              {type === 'base' && (
                <Fragment>
                  <defs>
                    <pattern
                      id={key}
                      x="0%"
                      y="0%"
                      height="100%"
                      width="100%"
                      viewBox="0 0 500 500"
                    >
                      <image
                        x="0%"
                        y="0%"
                        width="500"
                        height="500"
                        xlinkHref={photo}
                      />
                    </pattern>
                  </defs>
                  <circle
                    id={`circle-${key}`}
                    className={className}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={`url(#${key})`}
                  />
                </Fragment>
              )}
              {type !== 'base' && (
                <Fragment>
                  <defs>
                    <pattern
                      id={key}
                      x="0%"
                      y="0%"
                      height="100%"
                      width="100%"
                      viewBox="0 0 500 500"
                    >
                      <image
                        x="0%"
                        y="0%"
                        width="500"
                        height="500"
                        xlinkHref={photo}
                      />
                    </pattern>
                  </defs>
                  <Popover
                    content={
                      <Fragment>
                        {about}
                        <p>
                          <a href="#" onClick={e => this.showModal(e, 'laura')}>
                            Read more...
                          </a>
                        </p>
                      </Fragment>
                    }
                    title={false}
                    overlayClassName="about-team-person"
                    placement="top"
                  >
                    <circle
                      id={`circle-${key}`}
                      className={className}
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={`url(#${key})`}
                      stroke={color}
                      strokeWidth={strokeWidth}
                    />
                  </Popover>
                </Fragment>
              )}
            </Fragment>
          )
        )}
      </Fragment>
    )
  }

  /** standard renderer */
  render() {
    return (
      <StandardPage className="" seoData={seoData} {...this.props}>
        <h1 className="mask-h3">Team Graph</h1>
        <div style={{ border: '1px solid #eee' }}>
          <svg className="graph" width={900} height={600}>
            {this.drawCircle()}
          </svg>
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Tabs defaultActiveKey="1" onChange={() => true}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Modal>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 992,
})

export default withSizes(mapSizesToProps)(Page)
