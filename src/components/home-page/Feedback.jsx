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
import Video from '@bodhi-project/components/lib/video'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
  marginBottom: 40,
  display: 'block',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 rgba(0, 0, 111, 1)',

    '&:hover': {
      boxShadow: '2px 4px 0 0 rgba(0, 0, 111, 1)',
    },
  },
})
const pageStyle = pageStyles.toString()

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
          <h2 className="mask-h3">The Power of Dialogue - Video Series</h2>
          <Video url="https://www.youtube.com/watch?v=tuJrfIFd3IY" />
        </Fragment>
        <Fragment>
          <h2 className="mask-h3">Testimonial</h2>
          <p>
            <i>
              "I've done a lot of learning with L'aura, including a three day
              conference & a ten week webinar, on the topic of Restorative
              Circles. She is fantastic, is really insightful with first-hand
              experience creating an RC system in a cross-cultural community. I
              love her perspective and experience in NVC stuff as well. I sooo
              heartily encourage you to check out her webinar series if you have
              any interest (it's open to people outside of India too)."
            </i>
            <br />
            <br />~ Naomi Christine
          </p>
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
