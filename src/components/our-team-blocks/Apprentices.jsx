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
import henrikeSquare from '../../assets/henrikeSquare.jpg'
import pranjalSquare from '../../assets/pranjalSquare.jpg'
import stefanSquare from '../../assets/stefanSquare.jpg'

import Henrike from '../people/Henrike'
import Pranjal from '../people/Pranjal'
import Celia from '../people/Celia'
import Hamsini from '../people/Hamsini'
import Michelle from '../people/Michelle'
import Stefan from '../people/Stefan'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180)

/** renderSwitch */
const renderSwitch = person => {
  switch (person) {
    case 'henrike':
      return <Henrike />
    case 'pranjal':
      return <Pranjal />
    case 'stefan':
      return <Stefan />
    case 'michelle':
      return <Michelle />
    case 'hamsini':
      return <Hamsini />
    case 'celia':
      return <Celia />
    default:
      return <br />
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const circleStylesObject = css({
  '& .child-circle:nth-child(1)::after': {
    content: `"Stefan"`,
  },
  '& .child-circle:nth-child(2)::after': {
    content: `"Henrike"`,
  },
  '& .child-circle:nth-child(3)::after': {
    content: `"Pranjal"`,
  },
  '& .child-circle:nth-child(4)::after': {
    content: `"Michelle"`,
  },
  '& .child-circle:nth-child(5)::after': {
    content: `"Celia"`,
  },
  '& .child-circle:nth-child(6)::after': {
    content: `"Hamsini"`,
  },
})
const circleStyles = circleStylesObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Apprentices */
class Apprentices extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      person: 'pranjal',
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
    const { person } = this.state

    return (
      <div>
        <h1 className="mask-h3">Apprentices</h1>
        <p>
          But I somehow didn’t find this work as fulfilling as I had expected,
          so I quit, not knowing what was coming next. In 2007, I
          serendipitously ended up in a Nonviolent Communication workshop, and
          this was the beginning of a new passion and career…
        </p>
        <div style={{ display: 'flex' }}>
          <div className={`parent-circle ${circleStyles}`} ref="parent">
            <div
              className="child-circle s"
              ref="child1"
              style={{
                backgroundImage: `url(${stefanSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('stefan')}
            >
              <p>
                <strong>2018</strong>
              </p>
            </div>
            <div
              className="child-circle s"
              ref="child2"
              style={{
                backgroundImage: `url(${henrikeSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('henrike')}
            >
              <p>
                <strong>2018</strong>
              </p>
            </div>
            <div
              className="child-circle s"
              ref="child3"
              style={{
                backgroundImage: `url(${pranjalSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('pranjal')}
            >
              <p>
                <strong>
                  2017 -<br />present
                </strong>
              </p>
            </div>
            <div
              className="child-circle s"
              ref="child4"
              style={{
                backgroundImage: `url(${blueSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('michelle')}
            >
              <p>
                <strong>2018</strong>
              </p>
            </div>
            <div
              className="child-circle s"
              ref="child5"
              style={{
                backgroundImage: `url(${blueSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('celia')}
            >
              <p>
                <strong>2018</strong>
              </p>
            </div>
            <div
              className="child-circle s"
              ref="child6"
              style={{
                backgroundImage: `url(${blueSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('hamsini')}
            >
              <p>
                <strong>2018</strong>
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

Apprentices.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Apprentices
