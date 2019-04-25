// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from 'react-sizes'

// import OutLink from '@bodhi-project/components/lib/OutLink'

import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import PersonCircle from '../PersonCircle'
import Link from '../Link'

import lauraSquare from '../../assets/lauraSquare.jpg'
import janetSquare from '../../assets/janetSquare.jpg'
import katiSquare from '../../assets/katiSquare.jpg'
import henrikeSquare from '../../assets/henrikeSquare.jpg'
import pranjalSquare from '../../assets/pranjalSquare.jpg'
import nilsSquare from '../../assets/nilsSquare.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment: Frag } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
  display: 'block',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 rgba(0, 0, 111, 1)',

    '&:hover': {
      boxShadow: '2px 4px 0 0 rgba(0, 0, 111, 1)',
    },
  },
})
const pageStyle = pageStyles.toString()

const circleStylesObject = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',

  '& .child-circle-highlight:nth-child(1)::after': {
    content: `"L'aura"`,
  },
  '& .child-circle-highlight:nth-child(2)::after': {
    content: `"Janet"`,
  },
  '& .child-circle-highlight:nth-child(3)::after': {
    content: `"Kati"`,
  },
  '& .child-circle-highlight:nth-child(4)::after': {
    content: `"Pranjal"`,
  },
  '& .child-circle-highlight:nth-child(5)::after': {
    content: `"Henrike"`,
  },
  '& .child-circle-highlight:nth-child(6)::after': {
    content: `"Nils"`,
  },
})
const circleStyles = circleStylesObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const { isMobile } = props

  return (
    <section className={pageStyle}>
      <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
        <Col sm={24} md={24} lg={24} xl={15}>
          <h2 className="mask-h3">Who Are We?</h2>
          <p>
            We're a small group of people passionate about human connection and
            committed to walking towards increased community resilience. We lead
            the larger Restorative Auroville project, we facilitate Circles,
            some of us teach, some of us run our different initiatives, and
            more. And we’re wanting to expand our team and our reach in the
            community.
            <br />
            <Link to="/our-team">Read more about us ⇝</Link>
          </p>
        </Col>
        <Col sm={24} md={24} lg={24} xl={9}>
          <div className={circleStyles}>
            <PersonCircle
              image={lauraSquare}
              className="child-circle-highlight"
              role={<Frag>Founder</Frag>}
            />
            <PersonCircle
              image={janetSquare}
              className="child-circle-highlight"
              role={<Frag>Founder</Frag>}
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
            />
            <PersonCircle
              image={pranjalSquare}
              className="child-circle-highlight"
              role={
                <Frag>
                  Core Team
                  <br />
                  &nbsp;&nbsp;Member
                </Frag>
              }
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
            />
            <PersonCircle
              image={nilsSquare}
              className="child-circle-highlight"
              role={<Frag>Apprentice</Frag>}
            />
          </div>
        </Col>
      </Row>
    </section>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Page)
