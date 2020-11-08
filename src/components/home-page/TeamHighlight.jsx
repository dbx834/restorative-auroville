// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from 'react-sizes'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import PersonCircle from '../PersonCircle'
import Link from '../Link'

import lauraSquare from '../../assets/lauraSquare.jpg'
import melodieSquare from '../../assets/melodieSquare.jpg'
import katiSquare from '../../assets/katiSquare.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

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
    content: `"Kati"`,
  },
  '& .child-circle-highlight:nth-child(3)::after': {
    content: `"Mélodie"`,
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
      <Division golden>
        <Fragment>
          <h2 className="mask-h3">Who Are We?</h2>
          <p>
            We're a small group of people passionate about human connection and
            committed to walking towards increased community resilience. We lead
            the larger Restorative Auroville project, we facilitate Circles,
            some of us teach, some of us run our different initiatives, and
            more. And we’re wanting to expand our team and our reach within the
            community.
            <br />
            <Link to="/our-team">Read more about us ⇝</Link>
          </p>
        </Fragment>
        <Fragment>
          <h2 className="mask-h3">&nbsp;</h2>
          <div className={`${circleStyles} margin-p`}>
            <PersonCircle
              image={lauraSquare}
              className="child-circle-highlight"
              role={<Fragment>Founder</Fragment>}
            />
            <PersonCircle
              image={katiSquare}
              className="child-circle-highlight"
              role={
                <Fragment>
                  Core Team
                  <br />
                  &nbsp;&nbsp;Member
                </Fragment>
              }
            />
            <PersonCircle
              image={melodieSquare}
              className="child-circle-highlight"
              role={
                <Fragment>
                  Core Team
                  <br />
                  &nbsp;&nbsp;Member
                </Fragment>
              }
            />
          </div>
        </Fragment>
      </Division>
    </section>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 992,
})

export default withSizes(mapSizesToProps)(Page)
