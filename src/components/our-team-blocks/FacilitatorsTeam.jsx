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
import PersonCircle from '../PersonCircle'

import lauraSquare from '../../assets/lauraSquare.jpg'
import janetSquare from '../../assets/janetSquare.jpg'
import katiSquare from '../../assets/katiSquare.jpg'
import henrikeSquare from '../../assets/henrikeSquare.jpg'
import pranjalSquare from '../../assets/pranjalSquare.jpg'
import nilsSquare from '../../assets/nilsSquare.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
/** toDegrees */
// const toDegrees = angle => angle * (Math.PI / 180)

// /** renderSwitch */
// const renderSwitch = person => {
//   switch (person) {
//     case 'henrike':
//       return <Henrike />
//     case 'janet':
//       return <Janet />
//     case 'kati':
//       return <Kati />
//     case 'laura':
//       return <Laura />
//     case 'pranjal':
//       return <Pranjal />
//     default:
//       return <br />
//   }
// }

const { Fragment: Frag } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  paddingLeft: 12,
  borderLeft: `8px solid #4A01AA`,
  marginBottom: 48,

  '& .child-circle-highlight': {
    width: '12vw',
    height: '12vw',
    backgroundSize: '12vw 12vw',

    '&:after': {
      width: '12vw',
    },

    '& p': {
      width: '12vw',
      height: '12vw',
    },

    '@media(min-width: 992px)': {
      width: '6.25vw',
      height: '6.25vw',
      backgroundSize: '6.25vw 6.25vw',

      '&:after': {
        width: '6.25vw',
      },

      '& p': {
        width: '6.25vw',
        height: '6.25vw',
      },

      '& > div': {
        backgroundSize: '6.25vw 6.25vw',
      },
    },
  },
}).toString()

const circleStylesObject = css({
  display: 'flex',
  flexWrap: 'wrap',
  // justifyContent: 'flex-end',

  '& .child-circle.circle-active::after': {
    fontWeight: 700,
    textDecoration: 'underline',
    fontSize: '15px',
    color: '#e67100',
  },
  '& .child-circle-highlight:nth-child(3)::after': {
    content: `"Kati"`,
  },
  '& .child-circle-highlight:nth-child(2)::after': {
    content: `"Janet"`,
  },
  '& .child-circle-highlight:nth-child(1)::after': {
    content: `"L'aura"`,
  },
  '& .child-circle-highlight:nth-child(5)::after': {
    content: `"Henrike"`,
  },
  '& .child-circle-highlight:nth-child(4)::after': {
    content: `"Pranjal"`,
  },
  '& .child-circle-highlight:nth-child(6)::after': {
    content: `"Nils"`,
  },
})
const circleStyles = circleStylesObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** FacilitatorsTeam */
class FacilitatorsTeam extends React.Component {
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
    // // //Number of services
    // const noOfServices = 5;
    // //   //Half width of parent
    // const parentCircleHalfWidth = 180;
    // //   //Add some padding from parent circle
    // const Hyp = parentCircleHalfWidth - 50;
    // //   //360 degrees / the number of services
    // const angle = Math.round(360 / noOfServices);
    // for (let i = 1; i <= noOfServices; i++) {
    //   const currentAngle = i * angle;
    //   // calculate the positioning of the child circle around the parent circle
    //   const circlePosXOpp = Math.round(Math.sin(toDegrees(currentAngle)) * Hyp);
    //   const circlePosYAdj = Math.round(Math.cos(toDegrees(currentAngle)) * Hyp);
    //   const currentChild = this.refs[`child${i}`];
    //   currentChild.style.transform = `translate(${circlePosXOpp}px, ${circlePosYAdj}px)`;
    // }
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
      <div className={style}>
        <h1 className="mask-h3">Facilitators' Team</h1>
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
              available to the community as Circle Facilitators…
            </span>
          </strong>
        </p>
        <p>
          The Facilitator is a dynamic role, selected according to individual
          availability and willingness, and so therefore can change from Circle
          to Circle.
        </p>
        <p>
          As Facilitators, we are committed to serving the emergent wisdom of
          the Circle, offering questions sourced from the RC process. Our
          intention is to hold space for dialogue, to track meaning in what
          people say, and to write down any shared agreements.
        </p>
        <p>
          <strong>Co-Facilitation</strong>: We encourage partnership and
          learning among Facilitators and usually suggest that more than one
          Facilitator be present for each Circle. This also allows for new
          Facilitators to be partnered with more experienced Facilitators, and
          for ongoing opportunities for collaboration and accountability.
        </p>
        <div className={`${circleStyles} margin-p`}>
          <PersonCircle
            image={lauraSquare}
            className="child-circle-highlight"
            role={<Frag>Founder</Frag>}
            style={{ cursor: 'unset' }}
          />
          <PersonCircle
            image={janetSquare}
            className="child-circle-highlight"
            role={<Frag>Founder</Frag>}
            style={{ cursor: 'unset' }}
          />
          <PersonCircle
            image={katiSquare}
            className="child-circle-highlight"
            role={
              <Frag>
                Core Team
                <br />
                &nbsp;&nbsp;Member
              </Frag>
            }
            style={{ cursor: 'unset' }}
          />
          <PersonCircle
            image={pranjalSquare}
            className="child-circle-highlight"
            role={<Frag>Facilitator</Frag>}
            style={{ cursor: 'unset' }}
          />
          <PersonCircle
            image={henrikeSquare}
            className="child-circle-highlight"
            role={
              <Frag>
                Core Team
                <br />
                &nbsp;&nbsp;Member
              </Frag>
            }
            style={{ cursor: 'unset' }}
          />
          <PersonCircle
            image={nilsSquare}
            className="child-circle-highlight"
            role={
              <Frag>
                Core Team
                <br />
                &nbsp;&nbsp;Member
              </Frag>
            }
            style={{ cursor: 'unset' }}
          />
        </div>
      </div>
    )
  }
}

FacilitatorsTeam.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default FacilitatorsTeam
