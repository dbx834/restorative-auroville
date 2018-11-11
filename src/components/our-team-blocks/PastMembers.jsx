// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import sample from "lodash/sample";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import blueSquare from '../../assets/blueSquare.jpg'
import heleneSquare from '../../assets/heleneSquare.jpg'
import shantiSquare from '../../assets/shantiSquare.jpg'

import Helene from '../people/Helene'
import Shanti from '../people/Shanti'
import Rita from '../people/Rita'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180)

/** renderSwitch */
const renderSwitch = person => {
  switch (person) {
    case 'helene':
      return <Helene />
    case 'shanti':
      return <Shanti />
    case 'rita':
      return <Rita />
    default:
      return <br />
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const circleStylesObject = css({
  '& .child-circle.circle-active::after': {
    fontWeight: 700,
    textDecoration: 'underline',
    fontSize: '15px',
    color: '#e67100',
  },
  '& .child-circle:nth-child(1)::after': {
    content: `"Shanti \\A 2015-2018"`,
    whiteSpace: 'pre',
  },
  '& .child-circle:nth-child(2)::after': {
    content: `"Hélène \\A 2016-2018"`,
    whiteSpace: 'pre',
  },
  '& .child-circle:nth-child(3)::after': {
    content: `"Rita \\A 2017-2018"`,
    whiteSpace: 'pre',
  },
})
const circleStyles = circleStylesObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** PastMembers */
class PastMembers extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      person: 'helene',
    }

    this.showPerson = this.showPerson.bind(this)
  }

  /** standard constructor */
  componentDidMount() {
    // //Number of services
    const noOfServices = 3
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
    const { person } = this.state
    const { isMobile } = this.props

    return (
      <div
        style={{
          paddingLeft: 12,
          borderLeft: `8px solid #1F1FFF`,
          marginBottom: 48,
        }}
      >
        <h1 className="mask-h3" style={{ marginBottom: 0 }}>
          Past Members
        </h1>
        <p>
          <strong>
            ↪ community members who have contributed to our project, and to whom
            we are immensely grateful…
          </strong>
        </p>
        <div style={{ display: isMobile ? 'block' : 'flex' }}>
          <div className={`parent-circle ${circleStyles}`} ref="parent">
            <div
              className={`${person === 'shanti' &&
                'circle-active'} child-circle`}
              ref="child1"
              style={{
                backgroundImage: `url(${shantiSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '125px 125px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('shanti')}
            >
              <p>
                <strong>Founder</strong>
              </p>
            </div>
            <div
              className={`${person === 'helene' &&
                'circle-active'} child-circle`}
              ref="child2"
              style={{
                backgroundImage: `url(${heleneSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '125px 125px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('helene')}
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
              className={`${person === 'rita' && 'circle-active'} child-circle`}
              ref="child3"
              style={{
                backgroundImage: `url(${blueSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '125px 125px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('rita')}
            >
              <p>
                <strong>Apprentice</strong>
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

PastMembers.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default PastMembers
