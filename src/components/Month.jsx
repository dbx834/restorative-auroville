// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import color from 'color'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import noop from 'lodash/noop'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import HoverIntent from 'react-hoverintent'
import MotionFade from '@bodhi-project/components/lib/MotionFade'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import inArray from '../methods/inArray'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const baseColor = color('rgba(0, 0, 111, 0.68)')

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Month */
class Month extends React.Component {
  /** standard constructor. */
  constructor(props) {
    super(props)

    this.state = {
      // active: undefined,
    }
  }

  /** standard renderer */
  render() {
    const {
      year,
      month,
      monthKey,
      postEdges,
      openSet,
      registerForEvent,
      updateExtraData,
      past,
      setActive,
      active,
    } = this.props
    let counter = 0

    return (
      <div>
        <MotionFade key={`${month}-${monthKey}`}>
          <div className="month">
            <div
              className="month-title"
              style={{
                background: past === true ? '#d5d5d5' : baseColor,
              }}
            >
              <h2
                style={{
                  color: past === true ? '#ffffff' : '#ffffff',
                }}
                className="mask-h4"
              >
                {month}
              </h2>
            </div>
            <div className="event-list">
              {map(postEdges, ({ node }, edgeIndex) => {
                const { fields, frontmatter } = node
                const showThis = fields.year === year && fields.month === month
                const isPractice = inArray(frontmatter.tags, 'practice-group')
                let className = 'event'

                if (isPractice === true) {
                  className += ' practice-group'
                } else {
                  className += ' not-practice-group'
                }
                if (counter === 0) {
                  className += ' first'
                  counter += 1
                }
                if (active === edgeIndex) {
                  className += ' is-active'
                }

                if (showThis === true) {
                  return (
                    <HoverIntent
                      onMouseOver={() => {
                        updateExtraData(node, edgeIndex)
                        setActive(edgeIndex)
                      }}
                      onMouseOut={() => noop()}
                      sensitivity={10}
                      interval={300}
                      timeout={250}
                      key={edgeIndex}
                    >
                      <div className={className}>
                        <p className="mask-h6">{fields.displayDate}</p>
                      </div>
                    </HoverIntent>
                  )
                }
              })}
            </div>
          </div>
        </MotionFade>
      </div>
    )
  }
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Month
