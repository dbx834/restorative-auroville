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
// import blueSquare from '../../assets/blueSquare.jpg'
// import henrikeSquare from '../../assets/henrikeSquare.jpg'
// import pranjalSquare from '../../assets/pranjalSquare.jpg'
import stefanSquare from '../../assets/stefanSquare.jpg'
import celiaSquare from '../../assets/celiaSquare.jpg'
import michelleSquare from '../../assets/michelleSquare.jpg'
// import nilsSquare from '../../assets/nilsSquare.jpg'
import emmaSquare from '../../assets/emmaSquare.jpg'
import melodieSquare from '../../assets/melodieSquare.jpg'

// import Henrike from '../people/Henrike'
// import Pranjal from '../people/Pranjal'
import Celia from '../people/Celia'
// import Hamsini from '../people/Hamsini'
import Michelle from '../people/Michelle'
import Stefan from '../people/Stefan'
// import Nils from '../people/Nils'
import Emma from '../people/Emma'
import Melodie from '../people/Melodie'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180)

/** renderSwitch */
const renderSwitch = person => {
  switch (person) {
    case 'stefan':
      return <Stefan />
    case 'michelle':
      return <Michelle />
    case 'celia':
      return <Celia />
    case 'emma':
      return <Emma show={false} />
    case 'melodie':
      return <Melodie show={false} />
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
    content: `"Stefan"`,
  },
  '& .child-circle:nth-child(2)::after': {
    content: `"Michelle"`,
  },
  '& .child-circle:nth-child(3)::after': {
    content: `"Celia"`,
  },
  '& .child-circle:nth-child(4)::after': {
    content: `"Mélodie"`,
  },
  '& .child-circle:nth-child(5)::after': {
    content: `"Emma"`,
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
      person: 'celia',
    }

    this.showPerson = this.showPerson.bind(this)
  }

  /** standard constructor */
  componentDidMount() {
    // //Number of services
    const noOfServices = 5
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
          borderLeft: `8px solid #8E3CFC`,
          marginBottom: 48,
        }}
      >
        <h1 className="mask-h3">Apprentices & Volunteers</h1>
        <p>
          <strong>
            community members who are journeying with us and integrating the RC
            process and principles…
          </strong>
        </p>
        <br className="mobile-only" />
        <div style={{ display: isMobile ? 'block' : 'flex' }}>
          <div className={`parent-circle ${circleStyles}`} ref="parent">
            <div
              className={`${person === 'stefan' &&
                'circle-active'} child-circle s`}
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
                <strong>
                  2018 -
                  <br />
                  present
                </strong>
              </p>
            </div>
            <div
              className={`${person === 'michelle' &&
                'circle-active'} child-circle s`}
              ref="child2"
              style={{
                backgroundImage: `url(${michelleSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('michelle')}
            >
              <p>
                <strong>
                  2018 -
                  <br />
                  present
                </strong>
              </p>
            </div>
            <div
              className={`${person === 'celia' &&
                'circle-active'} child-circle s`}
              ref="child3"
              style={{
                backgroundImage: `url(${celiaSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('celia')}
            >
              <p>
                <strong>
                  2018 -
                  <br />
                  present
                </strong>
              </p>
            </div>
            <div
              className={`${person === 'melodie' &&
                'circle-active'} child-circle s`}
              ref="child4"
              style={{
                backgroundImage: `url(${melodieSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('melodie')}
            >
              <p>
                <strong>
                  2019 -
                  <br />
                  present
                </strong>
              </p>
            </div>
            <div
              className={`${person === 'emma' &&
                'circle-active'} child-circle s`}
              ref="child5"
              style={{
                backgroundImage: `url(${emmaSquare})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105px 105px',
                border: '2px solid #FFBF00',
              }}
              onClick={() => this.showPerson('emma')}
            >
              <p>
                <strong>
                  2019 -
                  <br />
                  present
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

Apprentices.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Apprentices
