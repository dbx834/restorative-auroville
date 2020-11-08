// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

import Img from 'gatsby-image'
import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'
import shuffle from 'lodash/shuffle'

import * as d3 from 'd3'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Popover from 'antd/lib/popover'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/popover/style/css'

import Modal from 'antd/lib/modal'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/modal/style/css'

import Tabs from 'antd/lib/tabs'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tabs/style/css'

import withSizes from 'react-sizes'

import Image from '@bodhi-project/components/lib/image/Image'
import smallKey from '@bodhi-project/components/lib/methods/smallKey'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import circle from '../assets/team-graph-bg.png'

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
import Pranav from '../components/people/Pranav'
import Rita from '../components/people/Rita'

// import janetSquare from '../assets/janetSquare.jpg'
import janetSquareGray from '../assets/janetSquareGray.jpg'
import henrikeSquare from '../assets/henrikeSquare.jpg'
import nilsSquare from '../assets/nilsSquare.jpg'
// import nilsSquareGray from '../assets/nilsSquareGray.jpg'
// import sumaSquare from '../assets/sumaSquare.jpg'
import sumaSquareGray from '../assets/sumaSquareGray.jpg'
import stefanSquare from '../assets/stefanSquare.jpg'
import celiaSquare from '../assets/celiaSquare.jpg'
import michelleSquare from '../assets/michelleSquare.jpg'
import emmaSquare from '../assets/emmaSquare.jpg'
import aditiSquare from '../assets/aditiSquare.jpg'
import sunmiSquare from '../assets/sunmiSquare.jpg'
// import heleneSquare from '../assets/heleneSquare.jpg'
import heleneSquareGray from '../assets/heleneSquareGray.jpg'
// import shantiSquare from '../assets/shantiSquare.jpg'
import shantiSquareGray from '../assets/shantiSquareGray.jpg'
// import anneSquare from '../assets/anneSquare.jpg'
import anneSquareGray from '../assets/anneSquareGray.jpg'
import pranjalSquare from '../assets/pranjalSquare.jpg'
import pranavSquare from '../assets/pranavSquare.jpg'
import ritaFlower from '../assets/ritaFlowerGray.jpg'
// import blueSquare from '../assets/blueSquare.jpg'

import StandardPage from '../components/wrappers/StandardPage'
import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { TabPane } = Tabs
const { Fragment } = React
// const { Panel } = Collapse

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

const coreTeamPersons = [
  { name: "L'aura", photo: lauraSquare, about: <Laura /> },
  { name: 'Mélodie', photo: melodieSquare, about: <Melodie /> },
  { name: 'Kati', photo: katiSquare, about: <Kati /> },
]

// const coreTeamPersonsShuffled = shuffle(coreTeamPersons)

const teamPersons = [
  {
    name: 'Pranav',
    f: 93,
    photo: pranavSquare,
    about: <Pranav />,
    stroke: '#00006F',
  },
  {
    name: 'Celia',
    f: 85,
    photo: celiaSquare,
    about: <Celia />,
    stroke: '#00006F',
  },
  {
    name: 'Henrike',
    f: 92,
    photo: henrikeSquare,
    about: <Henrike />,
    stroke: '#00006F',
  },
  {
    name: 'Nils',
    f: 100,
    photo: nilsSquare,
    // photoClass: 'gray',
    about: <Nils />,
    stroke: '#00006F',
  },
  {
    name: 'Stefan',
    f: 95,
    photo: stefanSquare,
    about: <Stefan />,
    stroke: '#00006F',
  },
  {
    name: 'Michelle',
    f: 87,
    photo: michelleSquare,
    about: <Michelle />,
    stroke: '#00006F',
  },
  {
    name: 'Emma',
    f: 98,
    photo: emmaSquare,
    about: <Emma />,
    stroke: '#00006F',
  },
  {
    name: 'Aditi',
    f: 100,
    photo: aditiSquare,
    about: <Aditi />,
    stroke: '#00006F',
  },
  {
    name: 'Sun-Mi',
    f: 97,
    photo: sunmiSquare,
    about: <Sunmi />,
    stroke: '#00006F',
  },
  {
    name: 'Pranjal',
    f: 83,
    photo: pranjalSquare,
    about: <Pranjal />,
    stroke: '#00006F',
  },
]

const pastPersons = [
  {
    name: 'Janet',
    f: 86,
    a1: -8,
    a2: -8,
    photo: janetSquareGray,
    about: <Janet />,
    stroke: '#808080',
  },
  {
    name: 'Suma',
    f: 102,
    a1: -3,
    a2: -3,
    photo: sumaSquareGray,
    about: <Suma />,
    stroke: '#808080',
  },
  {
    name: 'Hélène',
    f: 80,
    a1: -5,
    a2: 15,
    photo: heleneSquareGray,
    about: <Helene />,
    stroke: '#808080',
  },
  {
    name: 'Shanti',
    f: 90,
    a1: -5,
    a2: -5,
    photo: shantiSquareGray,
    about: <Shanti />,
    stroke: '#808080',
  },
  {
    name: 'Anne',
    f: 90,
    a1: 25,
    a2: -15,
    photo: anneSquareGray,
    about: <Anne />,
    stroke: '#808080',
  },
  {
    name: 'Rita',
    f: 84,
    photo: ritaFlower,
    about: <Rita />,
    stroke: '#808080',
  },
]

// const teamPersonsShuffled = shuffle(teamPersons)

const everybody = [...coreTeamPersons, ...teamPersons, ...pastPersons]

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**  */
class ToggleClass extends React.PureComponent {
  /** [constructor description] */
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  /** [toggleClass description] */
  toggleClass() {
    const { active } = this.state
    this.setState({ active: !active })
  }

  /** [render description] */
  render() {
    const { active } = this.state
    const { conf = {}, children } = this.props
    const { toggleClass = {} } = conf
    const {
      activeClass = 'active',
      passiveClass = 'passive',
      activeText = 'Make passive...',
      passiveText = 'Activate...',
    } = toggleClass

    return (
      <div
        className={active === true ? activeClass : passiveClass}
        onClick={this.toggleClass}
      >
        {children}
        <p>
          <a href="#" onClick={e => e.preventDefault()}>
            {active === true ? activeText : passiveText}
          </a>
        </p>
      </div>
    )
  }
}

/** Page */
class Page extends React.PureComponent {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      init: false,
      visible: false,
      currentActive: "L'aura",
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

    const coreTeamStrength = coreTeamPersons.length
    const parentCircleHalfWidth = boundY(12.5)
    const hyp = parentCircleHalfWidth
    const angle = Math.round(360 / coreTeamStrength)
    /** [description] */
    const addCoreTeam = () => {
      map(coreTeamPersons, (person, i) => {
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
          color: '#FABB00',
          className: 'team-person core-team-person',
          type: 'core-team-person',
          key: smallKey(),
          strokeWidth: 4,
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

    const teamStrength = teamPersons.length
    const circleHalfWidth = boundY(34)
    const hyp2 = circleHalfWidth
    const angle2 = Math.round(360 / teamStrength)
    const topGap = boundY(0) + boundY(12.5)
    const botGap = boundY(100) - boundY(12.5)

    /** [description] */
    const addTeam = () => {
      map(teamPersons, (person, i) => {
        const currentAngle = i * angle2
        // calculate the positioning of the child circle around the parent circle
        // const randomF = getRandomArbitrary(80, 100)
        // const randomF = 100
        const randomF = person.f
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
            r: boundY(12.5 * 0.67 * 0.67),
            color: person.stroke,
            className: 'team-person',
            type: 'team-person',
            key: smallKey(),
            strokeWidth: 2,
            ...person,
          })
          const x = (cx / 900) * 100
          const y = (cy / 600) * 100
          const lineData = [{ x: 50, y: 50 }, { x, y }]
          lines.push({
            stroke: person.stroke,
            line: line(lineData),
            className: 'person-line team-person-line',
          })
        }
      })
    }
    addTeam()

    const pastTeamStrength = pastPersons.length
    const circleHalfWidthPastTeam = boundY(50)
    const hyp2PastTeam = circleHalfWidthPastTeam
    const angle2PastTeam = Math.round(360 / pastTeamStrength)
    const topGapPastTeam = boundY(0) + boundY(2)
    const botGapPastTeam = boundY(100) - boundY(2)

    /** [description] */
    const addPastPersons = () => {
      map(pastPersons, (person, i) => {
        const currentAngle = i * angle2PastTeam
        // calculate the positioning of the child circle around the parent circle
        // const randomF = getRandomArbitrary(80, 100)
        // const randomF = 100
        const randomF = person.f
        const randomA1 = isUndefined(person.a1) === true ? 0 : person.a1
        const randomA2 = isUndefined(person.a2) === true ? 0 : person.a2
        const cx =
          boundX(50) +
          Math.round(
            (Math.sin(toDegrees(currentAngle - 13 + randomA1)) *
              (hyp2PastTeam * randomF)) /
              100
          )
        const cy =
          boundY(50) +
          Math.round(
            (Math.cos(toDegrees(currentAngle + randomA2)) *
              (hyp2PastTeam * randomF)) /
              100
          )

        if (cy > topGapPastTeam && cy < botGapPastTeam) {
          circles.push({
            cx,
            cy,
            r: boundY(12.5 * 0.67 * 0.58),
            color: person.stroke,
            className: 'team-person',
            type: 'team-person',
            key: smallKey(),
            strokeWidth: 2,
            ...person,
          })
          const x = (cx / 900) * 100
          const y = (cy / 600) * 100
          const lineData = [{ x: 50, y: 50 }, { x, y }]
          lines.push({
            stroke: person.stroke,
            line: line(lineData),
            className: 'person-line team-person-line',
            strokeDasharray: 4,
          })
        }
      })
    }
    addPastPersons()

    this.setState({
      init: true,
    })

    return (
      <Fragment>
        {map(lines, ({ line, stroke, strokeDasharray, className }) => {
          return (
            <Fragment key={smallKey()}>
              <path
                style={{
                  fill: 'none',
                  strokeWidth: 1,
                  strokeOpacity: 0.8,
                  stroke,
                  strokeDasharray,
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
            photoClass,
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
                        <p style={{ marginTop: 10 }}>
                          <a href="#" onClick={e => this.showModal(e, name)}>
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
    const { currentActive } = this.state

    return (
      <StandardPage className="" seoData={seoData} {...this.props}>
        <h1 className="mask-h3">Our Team</h1>
        <p>
          Who Are We? A small group of people passionate about human connection
          and committed to walking towards increased community resilience. We
          lead the larger Restorative Auroville project, we facilitate Circles,
          some of us teach, some of us run our different initiatives, and
          more... And we’re wanting to expand our team and our reach within the
          community.
        </p>
        <div className="desktop-only">
          <svg className="graph" width={900} height={600}>
            {this.drawCircle()}
          </svg>
          <Modal
            title={false}
            closeIcon={false}
            width="58%"
            style={{ top: '6.25%' }}
            visible={this.state.visible}
            onOk={this.handleOk}
            okText="Close"
            onCancel={this.handleCancel}
            wrapClassName="team-modal"
          >
            <Tabs
              activeKey={currentActive}
              defaultActiveKey="L'aura"
              onChange={() => true}
            >
              {map(everybody, person => {
                return (
                  <TabPane
                    tab={
                      <a
                        className="ignore"
                        href="#"
                        onClick={e => this.showModal(e, person.name)}
                      >
                        <Image
                          style={{ width: 100, height: 100, border: 'unset' }}
                          src={person.photo}
                        />
                        <p style={{ marginBottom: 0 }}>{person.name}</p>
                      </a>
                    }
                    key={person.name}
                  >
                    {person.about}
                  </TabPane>
                )
              })}
            </Tabs>
          </Modal>
        </div>
        <div className="mobile-only team-graph">
          {map(everybody, person => {
            return (
              <div
                style={{ display: 'flex', width: '100%' }}
                className="mask-p"
              >
                <div style={{ width: 116, marginRight: 16, flexShrink: 0 }}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    src={person.photo}
                  />
                </div>
                <div style={{ flexGrow: 1, paddingRight: 16 }}>
                  <ToggleClass
                    conf={{
                      toggleClass: {
                        activeClass: 'unclamp',
                        passiveClass: 'clamp',
                        passiveText: 'Read more...',
                        activeText: 'Minimize...',
                      },
                    }}
                  >
                    {person.about}
                  </ToggleClass>
                </div>
              </div>
            )
          })}
        </div>
        <br />
        <div
          style={{
            paddingLeft: 12,
            borderLeft: `8px solid #FABB00`,
            marginBottom: 24,
          }}
        >
          <h1 className="mask-h4">Project Working Team (Core Team)</h1>
          <p>
            <span style={{ position: 'relative' }}>
              <span
                style={{
                  fontSize: '108%',
                  position: 'absolute',
                  transform: 'rotate(48deg)',
                  width: 20,
                  marginTop: -4,
                }}
              >
                ⤻
              </span>
              <span style={{ paddingLeft: 24 }}>
                run the larger project in all its aspects, from small to big…
              </span>
            </span>
          </p>
        </div>
        <div
          style={{
            paddingLeft: 12,
            borderLeft: `8px solid #00006F`,
            marginBottom: 24,
          }}
        >
          <h1 className="mask-h4">Facilitators Team</h1>
          <p>
            <span style={{ position: 'relative' }}>
              <span
                style={{
                  fontSize: '108%',
                  position: 'absolute',
                  transform: 'rotate(48deg)',
                  width: 20,
                  marginTop: -4,
                }}
              >
                ⤻
              </span>
              <span style={{ paddingLeft: 24 }}>
                available to the community as Circle Facilitators…
              </span>
            </span>
          </p>
        </div>
        <div
          style={{
            paddingLeft: 12,
            borderLeft: `8px solid #00006F`,
            marginBottom: 24,
          }}
        >
          <h1 className="mask-h4">Apprentices, Volunteers & Resource People</h1>
          <p>
            <span style={{ position: 'relative' }}>
              <span
                style={{
                  fontSize: '108%',
                  position: 'absolute',
                  transform: 'rotate(48deg)',
                  width: 20,
                  marginTop: -2,
                }}
              >
                ⤻
              </span>
              <span style={{ paddingLeft: 24 }}>
                community members who are supporting the project, journeying
                with us, and integrating the RC process and principles…
              </span>
            </span>
          </p>
        </div>
        <div
          style={{
            paddingLeft: 12,
            borderLeft: `8px solid #808080`,
            marginBottom: 24,
          }}
        >
          <h1 className="mask-h4">Past Members</h1>
          <p>
            <span style={{ position: 'relative' }}>
              <span
                style={{
                  fontSize: '108%',
                  position: 'absolute',
                  transform: 'rotate(48deg)',
                  width: 20,
                  marginTop: -4,
                }}
              >
                ⤻
              </span>
              <span style={{ paddingLeft: 24 }}>
                community members who have contributed to our project, and to
                whom we are immensely grateful…
              </span>
            </span>
          </p>
        </div>
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
