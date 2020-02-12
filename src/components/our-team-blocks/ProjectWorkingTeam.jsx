// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// import sample from "lodash/sample";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from "gatsby-link";

// import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import lauraSquare from '../../assets/lauraSquare.jpg'
import janetSquare from '../../assets/janetSquare.jpg'
import katiSquare from '../../assets/katiSquare.jpg'
import henrikeSquare from '../../assets/henrikeSquare.jpg'
// import pranjalSquare from '../../assets/pranjalSquare.jpg'
import nilsSquare from '../../assets/nilsSquare.jpg'
import blueSquare from '../../assets/blueSquare.jpg'
import sumaSquare from '../../assets/sumaSquare.jpg'

import Henrike from '../people/Henrike'
import Janet from '../people/Janet'
import Kati from '../people/Kati'
import Laura from '../people/Laura'
// import Pranjal from '../people/Pranjal'
import Nils from '../people/Nils'
import Suma from '../people/Suma'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180)

/** renderSwitch */
const renderSwitch = person => {
  switch (person) {
    case 'henrike':
      return <Henrike />
    case 'janet':
      return <Janet />
    case 'kati':
      return <Kati />
    case 'laura':
      return <Laura />
    case 'suma':
      return <Suma />
    case 'nils':
      return <Nils />
    default:
      return <br />
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  paddingLeft: 12,
  borderLeft: `8px solid #FABB00`,
  marginBottom: 48,

  '& .child-circle.circle-active::after': {
    fontWeight: 700,
    textDecoration: 'underline',
    fontSize: '15px',
    color: '#e67100',
  },
  '& .child-circle:nth-child(1)::after': {
    content: `"Kati"`,
  },
  '& .child-circle:nth-child(2)::after': {
    content: `"Janet"`,
  },
  '& .child-circle:nth-child(3)::after': {
    content: `"L'aura"`,
  },
  '& .child-circle:nth-child(4)::after': {
    content: `"Henrike"`,
  },
  '& .child-circle:nth-child(5)::after': {
    content: `"Suma"`,
  },
  '& .child-circle:nth-child(6)::after': {
    content: `"Nils"`,
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** ProjectWorkingTeam */
class ProjectWorkingTeam extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      person: 'laura',
    }

    this.showPerson = this.showPerson.bind(this)
  }

  /** standard constructor */
  componentDidMount() {
    // //Number of services
    const noOfServices = 6
    //   //Half width of parent
    const parentCircleHalfWidth = 180
    //   //Add some padding from parent circle
    const Hyp = parentCircleHalfWidth - 50
    //   //360 degrees / the number of services
    const angle = Math.round(360 / noOfServices)

    for (let i = 1; i <= noOfServices; i++) {
      const currentAngle = i * angle
      // calculate the positioning of the child circle around the parent circle
      const circlePosXOpp = Math.round(Math.sin(toDegrees(currentAngle)) * Hyp)
      const circlePosYAdj = Math.round(Math.cos(toDegrees(currentAngle)) * Hyp)
      const currentChild = this.refs[`child${i}`]
      currentChild.style.transform = `translate(${circlePosXOpp}px, ${circlePosYAdj}px)`
    }
  }

  /** showPerson */
  showPerson(person) {
    this.setState({ person })
  }

  /** standard renderer */
  render() {
    const { isMobile } = this.props
    const { person } = this.state

    return (
      <div className={style}>
        <h1 className="mask-h3">Project Working Team</h1>
        <p>
          <strong style={{ position: 'relative' }}>
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
          </strong>
        </p>
        <br className="mobile-only" />
        <div style={{ display: isMobile ? 'block' : 'flex' }}>
          <div className="parent-circle" ref="parent">
            <div
              className={`${person === 'kati' &&
                'circle-active'} child-circle s`}
              ref="child1"
              style={{
                backgroundImage: `url(${katiSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('kati')}
            >
              <p>
                <strong>
                  Core Team
                  <br />
                  &nbsp;&nbsp;Member
                </strong>
              </p>
            </div>
            <div
              className={`${person === 'janet' &&
                'circle-active'} child-circle s`}
              ref="child2"
              style={{
                backgroundImage: `url(${janetSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('janet')}
            >
              <p>
                <strong>Founder</strong>
              </p>
            </div>
            <div
              className={`${person === 'laura' &&
                'circle-active'} child-circle s`}
              ref="child3"
              style={{
                backgroundImage: `url(${lauraSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('laura')}
            >
              <p>
                <strong>Founder</strong>
              </p>
            </div>
            <div
              className={`${person === 'henrike' &&
                'circle-active'} child-circle s`}
              ref="child4"
              style={{
                backgroundImage: `url(${henrikeSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('henrike')}
            >
              <p>
                <strong>
                  Core Team
                  <br />
                  &nbsp;&nbsp;Member
                </strong>
              </p>
            </div>
            <div
              className={`${person === 'suma' &&
                'circle-active'} child-circle s`}
              ref="child5"
              style={{
                backgroundImage: `url(${sumaSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('suma')}
            >
              <p>
                <strong>
                  Core Team
                  <br />
                  &nbsp;&nbsp;Member
                </strong>
              </p>
            </div>
            <div
              className={`${person === 'nils' &&
                'circle-active'} child-circle s`}
              ref="child6"
              style={{
                backgroundImage: `url(${nilsSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('nils')}
            >
              <p>
                <strong>
                  Core Team
                  <br />
                  &nbsp;&nbsp;Member
                </strong>
              </p>
            </div>
          </div>

          <div style={{ flexBasis: '0', flexGrow: 1 }}>
            {renderSwitch(person)}
          </div>
        </div>
      </div>
    )
  }
}

ProjectWorkingTeam.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default ProjectWorkingTeam
