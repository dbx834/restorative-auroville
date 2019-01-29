// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { axisBottom, axisTop } from 'd3-axis'
import { range } from 'd3-array'
import { timeFormat } from 'd3-time-format'
import { timeHour } from 'd3-time'
import {
  scaleOrdinal,
  scaleTime,
  scaleLinear,
  schemeCategory20,
} from 'd3-scale'
import { event, mouse, namespace, namespaces, select } from 'd3-selection'
import { zoom as d3z } from 'd3-zoom'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import { data } from './data/circles'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/* eslint-disable no-return-assign */
/**
 * [timelines description]
 * @return {[type]} [description]
 */
const init = () =>
  (d3.timeline = () => {
    const DISPLAY_TYPES = ['circle', 'rect']

    /**
     * hover
     * @return {[type]} [description]
     */
    let hover = () => noop()

    /**
     * mouseover
     * @return {[type]} [description]
     */
    let mouseover = () => noop()

    /**
     * mouseout
     * @return {[type]} [description]
     */
    let mouseout = () => noop()

    /**
     * click
     * @return {[type]} [description]
     */
    let click = () => noop()

    /**
     * scroll
     * @return {[type]} [description]
     */
    let scroll = () => noop()

    /**
     * labelFunction
     * @return {[type]} [description]
     */
    let labelFunction = label => label

    let labelFloat = 0 // floats up this many pixels

    /**
     * navigateLeft
     * @return {[type]} [description]
     */
    let navigateLeft = () => noop()

    /**
     * navigateRight
     * @return {[type]} [description]
     */
    let navigateRight = () => noop()

    let thisRef = null
    let orient = 'bottom'
    let width = null
    let height = null
    let rowSeparatorsColor = null
    let backgroundColor = null
    let tickFormat = {
      format: timeFormat('%I %p'),
      tickTime: timeHour,
      tickInterval: 1,
      tickSize: 6,
      tickValues: null,
    }
    let allowZoom = true
    let axisBgColor = 'white'
    let chartData = {}
    let colorCycle = scaleOrdinal(schemeCategory20)
    let colorPropertyName = null
    let display = 'rect'
    let beginning = 0
    let labelMargin = 0
    let ending = 0
    let margin = { left: 30, right: 30, top: 30, bottom: 30 }
    let maxZoom = 5
    let stacked = false
    let rotateTicks = false
    let timeIsRelative = false
    let timeIsLinear = false
    let fullLengthBackgrounds = false
    let itemHeight = 20
    let itemMargin = 5
    let navMargin = 60
    let showTimeAxis = true
    let showAxisTop = false
    let showTodayLine = false
    let timeAxisTick = false
    let timeAxisTickFormat = { stroke: 'stroke-dasharray', spacing: '4 10' }
    let showTodayFormat = {
      marginTop: 25,
      marginBottom: 0,
      width: 1,
      color: colorCycle,
    }
    let showBorderLine = false
    let showBorderFormat = {
      marginTop: 25,
      marginBottom: 0,
      width: 1,
      color: colorCycle,
    }
    let showBorderLineClass = 'timeline-border-line'
    let showAxisHeaderBackground = false
    let showAxisNav = false
    let showAxisCalendarYear = false
    let xAxisClass = 'timeline-xAxis'
    let xScale = null
    let xAxis = null

    /**
     * [appendAxisHeaderBackground description]
     * @param  {[type]} g     [description]
     * @param  {[type]} xAxis [description]
     * @param  {[type]} yAxis [description]
     * @return {[type]}       [description]
     */
    const appendAxisHeaderBackground = (g, xAxis, yAxis) => {
      g.insert('rect')
        .attr('class', 'row-green-bar')
        .attr('x', xAxis)
        .attr('width', width)
        .attr('y', yAxis)
        .attr('height', itemHeight)
        .attr('fill', axisBgColor)
    }

    /**
     * [description]
     * @param  {[type]} nav [description]
     * @return {[type]}     [description]
     */
    const appendTimeAxisCalendarYear = nav => {
      let calendarLabel = beginning.getFullYear()

      if (beginning.getFullYear() !== ending.getFullYear()) {
        calendarLabel = `${beginning.getFullYear()}-${ending.getFullYear()}`
      }

      nav
        .append('text')
        .attr('transform', `translate(${20}, 0)`)
        .attr('x', 0)
        .attr('y', 14)
        .attr('class', 'calendarYear')
        .text(calendarLabel)
    }

    /**
     * [appendTimeAxisNav description]
     * @param  {[type]} g [description]
     * @return {[type]}   [description]
     */
    const appendTimeAxisNav = g => {
      const timelineBlocks = 6
      const leftNavMargin = margin.left - navMargin
      const incrementValue = (width - margin.left) / timelineBlocks
      const rightNavMargin = width - margin.right - incrementValue + navMargin

      const nav = g
        .append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0, 20)')

      if (showAxisCalendarYear) {
        appendTimeAxisCalendarYear(nav)
      }

      nav
        .append('text')
        .attr('transform', `translate(${leftNavMargin}, 0`)
        .attr('x', 0)
        .attr('y', 14)
        .attr('class', 'chevron')
        .text('<')
        .on('click', () => navigateLeft(beginning, chartData))

      nav
        .append('text')
        .attr('transform', `translate(${rightNavMargin}, 0`)
        .attr('x', 0)
        .attr('y', 14)
        .attr('class', 'chevron')
        .text('>')
        .on('click', () => navigateRight(ending, chartData))
    }

    /**
     * [appendTimeAxisTick description]
     * @param  {[type]} g        [description]
     * @param  {[type]} xAxis    [description]
     * @param  {[type]} maxStack [description]
     * @return {[type]}          [description]
     */
    const appendTimeAxisTick = (g, xAxis, maxStack) => {
      g.append('g')
        .attr('class', 'axis')
        .attr(
          'transform',
          `translate(0, ${margin.top + (itemHeight + itemMargin) * maxStack})`
        )
        .attr(timeAxisTickFormat.stroke, timeAxisTickFormat.spacing)
        .call(
          xAxis
            .tickFormat('')
            .tickSize(
              -(margin.top + (itemHeight + itemMargin) * (maxStack - 1) + 3),
              0,
              0
            )
        )
    }

    /**
     * appendTimeAxis
     * @return {[type]} [description]
     */
    const appendTimeAxis = (g, xAxis, yPosition) => {
      if (showAxisHeaderBackground) {
        appendAxisHeaderBackground(g, 0, 0)
      }

      if (showAxisNav) {
        appendTimeAxisNav(g)
      }

      const axis = g
        .append('g')
        .attr('class', xAxisClass)
        .attr('transform', `translate(0, ${yPosition})`)
        .call(xAxis)

      return axis
    }

    /**
     * [appendBackgroundBar description]
     * @param  {[type]} yAxisMapping [description]
     * @param  {[type]} index        [description]
     * @param  {[type]} g            [description]
     * @param  {[type]} data         [description]
     * @param  {[type]} datum        [description]
     * @return {[type]}              [description]
     */
    const appendBackgroundBar = (yAxisMapping, index, g, data, datum) => {
      const greenbarYAxis =
        (itemHeight + itemMargin) * yAxisMapping[index] + margin.top
      g.selectAll('svg')
        .data(data)
        .enter()
        .insert('rect', ':first-child')
        .attr('class', 'row-green-bar')
        .attr('x', fullLengthBackgrounds ? 0 : margin.left)
        .attr(
          'width',
          fullLengthBackgrounds ? width : width - margin.right - margin.left
        )
        .attr('y', greenbarYAxis)
        .attr('height', itemHeight)
        .attr(
          'fill',
          backgroundColor instanceof Function
            ? backgroundColor(datum, index)
            : backgroundColor
        )
    }

    /**
     * [appendLabel description]
     * @param  {[type]}  gParent      [description]
     * @param  {[type]}  yAxisMapping [description]
     * @param  {[type]}  index        [description]
     * @param  {Boolean} hasLabel     [description]
     * @param  {[type]}  datum        [description]
     * @return {[type]}               [description]
     */
    const appendLabel = (gParent, yAxisMapping, index, hasLabel, datum) => {
      const fullItemHeight = itemHeight + itemMargin
      const rowsDown =
        margin.top +
        fullItemHeight / 2 +
        fullItemHeight * (yAxisMapping[index] || 1)

      gParent
        .append('text')
        .attr('class', 'timeline-label')
        .attr('transform', `translate(${labelMargin}, ${rowsDown})`)
        .text(hasLabel ? labelFunction(datum.label) : datum.id)
        .on('click', (d, i) => {
          const point = mouse(this)
          gParent
            .append('rect')
            .attr('id', 'clickpoint')
            .attr('x', point[0])
            .attr('width', 10)
            .attr('height', itemHeight)

          click(d, index, datum, point, xScale.invert(point[0]))
        })
    }

    /*
      ###########################
      ####  START timelines   ###
      ###########################
    */

    /**
     * [description]
     * @param  {[type]} gParent [description]
     * @return {[type]}         [description]
     */
    const timelines = gParent => {
      const gParentSize = gParent.node().getBoundingClientRect() // the svg size
      const gParentItem = select(gParent.node()) // the svg
      const g = gParent.append('g').attr('class', 'container')

      const yAxisMapping = {}
      let maxStack = 1
      let minTime = 0
      let maxTime = 0

      /**
       * [description]
       * @return {[type]} [description]
       */
      const setWidth = () => {
        width = 1200
        if (!width && !gParentSize.width) {
          try {
            width = gParentItem.node().attr('width')
            if (!width) {
              throw new Error(
                'width of the timeline is not set. As of Firefox 27, timeline().with(x) needs to be explicitly set in order to render'
              )
            }
          } catch (err) {
            console.log(err)
          }
        } else if (!width && gParentSize.width) {
          try {
            ;({ width } = gParentSize)
          } catch (err) {
            console.log(err)
          }
        }
        // if both are set, do nothing
      }

      setWidth()

      // check if the user wants relative time
      // if so, substract the first timestamp from each subsequent timestamps
      if (timeIsRelative) {
        g.each((d, i) => {
          let originTime = 0

          d.forEach((datum, index) => {
            datum.times.forEach((time, j) => {
              if (index === 0 && j === 0) {
                originTime = time.starting_time //Store the timestamp that will serve as origin
                time.starting_time = 0 //Set tahe origin
                time.ending_time = time.ending_time - originTime //Store the relative time (millis)
              } else {
                time.starting_time = time.starting_time - originTime
                time.ending_time = time.ending_time - originTime
              }
            })
          })
        })
      }

      // check how many stacks we're gonna need
      // do this here so that we can draw the axis before the graph
      if (stacked || ending === 0 || beginning === 0) {
        g.each((d, i) => {
          d.forEach((datum, index) => {
            // create y mapping for stacked graph
            if (stacked && Object.keys(yAxisMapping).indexOf(index) == -1) {
              yAxisMapping[index] = maxStack
              maxStack++
            }

            // figure out beginning and ending times if they are unspecified
            datum.times.forEach((time, i) => {
              if (beginning === 0)
                if (
                  time.starting_time < minTime ||
                  (minTime === 0 && timeIsRelative === false)
                )
                  minTime = time.starting_time
              if (ending === 0)
                if (time.ending_time > maxTime) maxTime = time.ending_time
            })
          })
        })

        if (ending === 0) {
          ending = maxTime
        }
        if (beginning === 0) {
          beginning = minTime
        }
      }

      const scaleFactor =
        (1 / (ending - beginning)) * (width - margin.left - margin.right)
      // console.log(scaleFactor)

      /**
       * [description]
       * @param  {[type]} d [description]
       * @return {[type]}   [description]
       */
      const formatDays = d => {
        const days = Math.floor(d / 86400)
        const hours = Math.floor((d - days * 86400) / 3600)
        const minutes = Math.floor((d - days * 86400 - hours * 3600) / 60)
        const seconds = d - days * 86400 - hours * 3600 - minutes * 60
        let output = ''

        if (seconds) {
          output = seconds + 's'
        }
        if (minutes) {
          output = minutes + 'm ' + output
        }
        if (hours) {
          output = hours + 'h ' + output
        }
        if (days) {
          output = days + 'd ' + output
        }
        console.log(output)
        return output
      }

      /**
       * [getXPos description]
       * @param  {[type]} d [description]
       * @param  {[type]} i [description]
       * @return {[type]}   [description]
       */
      const getXPos = (d, i) => {
        return margin.left + (d.starting_time - beginning) * scaleFactor
      }

      /**
       * [description]
       * @param  {[type]} d     [description]
       * @param  {[type]} i     [description]
       * @param  {[type]} text  [description]
       * @param  {[type]} style [description]
       * @return {[type]}       [description]
       */
      const getXTextPos = (d, i, text, style) => {
        var width = 0
        if (d.ending_time) {
          width = ((d.ending_time - d.starting_time) / 2) * scaleFactor
        }
        if (text && style) {
          // get the style data for the class selector pass in
          var textl = getComputedStyle(document.querySelector(style))
          // create a fontsize fontfamily string - 12pt Graphik
          var fontInfo = textl.fontSize + ' ' + textl.fontFamily
          // calculate the width of the text in that fontsize
          var tl = getTextWidth(text, fontInfo)
          // subtract half of the text length from the xPosition to keep the text centered
          var textLength = tl / 2
          var xPosition =
            margin.left +
            (d.starting_time - beginning) * scaleFactor +
            width -
            textLength
          return xPosition
        } else {
          return margin.left + (d.starting_time - beginning) * scaleFactor + 5
        }
      }

      if (orient === 'bottom') {
        xAxis = axisBottom()
      } else if (orient === 'top') {
        xAxis = axisTop()
      }

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Ticks
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (timeIsLinear) {
        xScale = scaleLinear()
          .domain([beginning, ending])
          .range([margin.left, width - margin.right])

        xAxis
          .scale(xScale)
          .tickFormat(formatDays)
          .tickValues(range(0, ending, 86400))
      } else {
        xScale = scaleTime()
          .domain([beginning, ending])
          .range([margin.left, width - margin.right])

        // xAxis
        //   .scale(xScale)
        //   .tickFormat(tickFormat.format)
        //   .tickSize(tickFormat.tickSize)

        // xAxis
        //   .scale(xScale)
        //   .ticks(5, timeFormat('%Y-%b'))
        //   .tickSize(60)

        xAxis
          .scale(xScale)
          .tickFormat(timeFormat('%Y-%b'))
          // .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
          .tickSize(60)
        console.log('xScale')
      }
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      // // console.log(tickFormat.tickValues)
      // if (!isUndefined(tickFormat.tickValues)) {
      //   xAxis.tickValues(tickFormat.tickValues)
      // } else {
      //   xAxis.tickArguments([10, 's'])
      // }

      // append a view for zoom/pan support
      const view = g.append('g').attr('class', 'view')

      // draw the chart
      g.each((d, i) => {
        chartData = d
        d.forEach((datum, index) => {
          const data = datum.times
          data.forEach(d => {
            d.name = datum.name
          })

          const hasLabel = typeof datum.label !== 'undefined'

          /**
           * [getStackPosition description]
           * @param  {[type]} d [description]
           * @param  {[type]} i [description]
           * @return {[type]}   [description]
           */
          const getStackPosition = (d, i) => {
            if (stacked) {
              return (
                margin.top + (itemHeight + itemMargin) * yAxisMapping[index]
              )
            }
            return margin.top
          }

          /**
           * [description]
           * @param  {[type]} d [description]
           * @param  {[type]} i [description]
           * @return {[type]}   [description]
           */
          const getStackTextPosition = (d, i) => {
            if (stacked) {
              return (
                margin.top +
                (itemHeight + itemMargin) * yAxisMapping[index] +
                itemHeight * 0.75
              )
            }
            return margin.top + itemHeight * 0.75
          }

          // issue warning about using id per data set. Ids should be individual to data elements
          if (typeof datum.id !== 'undefined') {
            console.warn(
              "d3Timeline Warning: Ids per dataset is deprecated in favor of a 'class' key. Ids are now per data element."
            )
          }

          if (backgroundColor) {
            appendBackgroundBar(yAxisMapping, index, g, data, datum)
          }

          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Data Points
          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          view
            .selectAll('svg')
            .data(data)
            .enter()
            .append((d, i) => {
              return document.createElementNS(
                namespaces.svg,
                'display' in d ? d.display : display
              )
            })
            .attr('x', getXPos)
            .attr('y', getStackPosition)
            .attr(
              'width',
              (d, i) => (d.ending_time - d.starting_time) * scaleFactor
            )
            .attr('cy', (d, i) => getStackPosition(d, i) + itemHeight / 2)
            .attr('cx', getXPos)
            .attr('r', itemHeight / 2)
            .attr('height', itemHeight)
            .style('fill', (d, i) => {
              let dColorPropName = ''
              if (d.color) return d.color
              if (colorPropertyName) {
                dColorPropName = d[colorPropertyName]
                let returnObj = null
                if (dColorPropName) {
                  returnObj = colorCycle(dColorPropName)
                } else {
                  returnObj = colorCycle(datum[colorPropertyName])
                }
                return returnObj
              }
              return colorCycle(index)
            })
            .on('mousemove', (d, i) => hover(d, index, datum, i))
            .on('mouseover', (d, i) => mouseover(d, i, datum, i))
            .on('mouseout', (d, i) => mouseout(d, i, datum, i))
            .on('click', (d, i) => {
              click(d, index, datum, i)
              // console.log(mouse(thisRef))
              // const point = mouse(this)
              // const selectedRect = select(this).node()
              // const selectorLabel = `text#${selectedRect.id}.textnumbers`
              // const selectedLabel = select(selectorLabel).node()
              // click(
              //   d,
              //   index,
              //   datum,
              //   selectedLabel,
              //   selectedRect,
              //   xScale.invert(point[0])
              // )
            })
            .attr('class', (d, i) =>
              datum.class
                ? `'timelineSeries_'${datum.class}`
                : `'timelineSeries_'${index}`
            )
            .attr('id', (d, i) => {
              // use deprecated id field
              if (datum.id && !d.id) {
                return `timelineItem_${datum.id}`
              }
              return d.id ? d.id : `timelineItem_${index}_${i}`
            })
          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

          // appends the labels to the boxes - DAY/HOUR LABEL
          view
            .selectAll('svg')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'textlabels')
            .attr('id', d => d.id)
            .attr('x', (d, i) => getXTextPos(d, i, d.label, '.textlabels'))
            .attr('y', getStackTextPosition() - labelFloat)
            .text(d => d.label)
            .on('click', (d, i) => {
              // when clicking on the label, call the click for the rectangle with the same id
              console.log(mouse)
              console.log(this)
              const point = mouse(this)
              const { id } = this
              const labelSelector = `text#${id}.textnumbers`
              const selectedLabel = select(labelSelector).node()
              const selector = `rect#${id}`
              const selectedRect = select(selector).node()
              click(
                d,
                index,
                datum,
                selectedLabel,
                selectedRect,
                xScale.invert(point[0])
              )
            })

          // appends the NUMBER LABEL
          view
            .selectAll('svg')
            .data(data)
            .enter()
            .filter(d => d.labelNumber !== undefined)
            .append('text')
            .attr('class', 'textnumbers')
            .attr('id', d => d.id)
            .attr('x', (d, i) =>
              getXTextPos(d, i, d.labelNumber, '.textnumbers')
            )
            .attr('y', getStackTextPosition)
            .text(d => d.labelNumber)
            .on('click', (d, i) => {
              // when clicking on the label, call the click for the rectangle with the same id
              console.log(mouse)
              console.log(this)
              const point = mouse(this)
              const { id } = this
              const selectedLabel = select(this).node()
              const selector = `rect#${id}`
              const selectedRect = select(selector).node()
              click(
                d,
                index,
                datum,
                selectedLabel,
                selectedRect,
                xScale.invert(point[0])
              )
            })

          if (rowSeparatorsColor) {
            var lineYAxis =
              itemHeight +
              itemMargin / 2 +
              margin.top +
              (itemHeight + itemMargin) * yAxisMapping[index]
            gParent
              .append('svg:line')
              .attr('class', 'row-separator')
              .attr('x1', 0 + margin.left)
              .attr('x2', width - margin.right)
              .attr('y1', lineYAxis)
              .attr('y2', lineYAxis)
              .attr('stroke-width', 1)
              .attr('stroke', rowSeparatorsColor)
          }

          // add the label
          if (hasLabel) {
            appendLabel(gParent, yAxisMapping, index, hasLabel, datum)
          }

          if (typeof datum.icon !== 'undefined') {
            gParent
              .append('image')
              .attr('class', 'timeline-label')
              .attr(
                'transform',
                'translate(' +
                  0 +
                  ',' +
                  (margin.top +
                    (itemHeight + itemMargin) * yAxisMapping[index]) +
                  ')'
              )
              .attr('xlink:href', datum.icon)
              .attr('width', margin.left)
              .attr('height', itemHeight)
          }
        })
      })

      var belowLastItem = margin.top + (itemHeight + itemMargin) * maxStack
      var aboveFirstItem = margin.top
      var timeAxisYPosition = showAxisTop ? aboveFirstItem : belowLastItem
      var gX
      if (showTimeAxis) {
        gX = appendTimeAxis(g, xAxis, timeAxisYPosition)
      }
      if (timeAxisTick) {
        appendTimeAxisTick(g, xAxis, maxStack)
      }

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Scroll & Zoom
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      let move = () => noop
      if (width > gParentSize.width) {
        console.log('can scroll')
        // only if the scrolling should be allowed
        /**
         * [description]
         * @return {[type]} [description]
         */
        move = () => {
          // g.select('.view').attr(
          //   'transform',
          //   'translate(' +
          //     event.transform.x +
          //     ',0)' +
          //     'scale(' +
          //     event.transform.k +
          //     ' 1)'
          // )
          g.select('.view').attr(
            'transform',
            `translate(${event.transform.x}, 0)`
          )

          g.selectAll('.timeline-xAxis').attr('transform', d => {
            // return (
            //   'translate(' +
            //   event.transform.x +
            //   ', ' +
            //   timeAxisYPosition +
            //   ')' +
            //   'scale(' +
            //   event.transform.k +
            //   ' 1)'
            // )
            return `translate(${event.transform.x}, timeAxisYPosition)`
          })

          const new_xScale = event.transform.rescaleX(xScale)

          g.selectAll('.timeline-xAxis').call(d => {
            xAxis.scale(new_xScale)
          })

          const xpos = -event.transform.x
          scroll(xpos, xScale)
        }
      }
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      if (!allowZoom) {
        const zoom = d3z()
          .scaleExtent([0, maxZoom]) // max zoom defaults to 5
          .translateExtent([[0, 0], [width, 0]]) // [x0, y0], [x1, y1] don't allow translating y-axis
          .on('zoom', move)

        gParent.classed('scrollable', true).call(zoom)

        g.on('wheel', () => {
          event.preventDefault()
          event.stopImmediatePropagation()
        })
        g.on('dblclick.zoom', () => {
          event.preventDefault()
          event.stopImmediatePropagation()
        })
      }

      if (rotateTicks) {
        g.selectAll('.tick text').attr('transform', function(d) {
          return (
            'rotate(' +
            rotateTicks +
            ')translate(' +
            (this.getBBox().width / 2 + 10) +
            ',' + // TODO: change this 10
            this.getBBox().height / 2 +
            ')'
          )
        })
      }

      /**
       * [description]
       * @return {[type]} [description]
       */
      const setHeight = () => {
        if (!height && !gParentSize.height) {
          if (itemHeight) {
            // set height based off of item height
            height = gSize.height + gSize.top - gParentSize.top
            // set bounding rectangle height
            select(gParent)
              .node()
              .attr('height', height)
            //select(view).node().attr("height", height);
          } else {
            throw 'height of the timeline is not set'
          }
        } else {
          if (!height) {
            height = gParentSize.height
          } else {
            gParentItem.node().attr('height', height)
            //view.node().attr("height", height);
          }
        }
      }

      // use the size of the elements added to the timeline to set the height
      //var gSize = g._groups[0][0].getBoundingClientRect();
      var gSize = g.node().getBoundingClientRect()
      setHeight()

      /**
       * [appendLine description]
       * @param  {[type]} lineScale  [description]
       * @param  {[type]} lineFormat [description]
       * @param  {[type]} lineClass  [description]
       * @return {[type]}            [description]
       */
      const appendLine = (lineScale, lineFormat, lineClass) => {
        lineClass = lineClass || 'timeline-line'
        view
          .append('svg:line')
          .attr('x1', lineScale)
          .attr('y1', lineFormat.marginTop)
          .attr('x2', lineScale)
          .attr('y2', height - lineFormat.marginBottom)
          .attr('class', lineClass)
          .style('stroke', lineFormat.color) //"rgb(6,120,155)"
          .style('stroke-width', lineFormat.width)
      }

      if (showBorderLine) {
        g.each(function(d, i) {
          d.forEach(function(datum) {
            var times = datum.times
            times.forEach(function(time) {
              appendLine(
                xScale(time.starting_time),
                showBorderFormat,
                showBorderLineClass
              )
              appendLine(
                xScale(time.ending_time),
                showBorderFormat,
                showBorderLineClass
              )
            })
          })
        })
      }

      if (showTodayLine) {
        var todayLine = xScale(new Date())
        appendLine(todayLine, showTodayFormat)
      }

      /**
       * [getTextWidth description]
       * @param  {[type]} text [description]
       * @param  {[type]} font [description]
       * @return {[type]}      [description]
       */
      const getTextWidth = (text, font) => {
        // re-use canvas object for better performance
        var canvas =
          getTextWidth.canvas ||
          (getTextWidth.canvas = document.createElement('canvas'))
        var context = canvas.getContext('2d')
        context.font = font
        var metrics = context.measureText(text)
        return metrics.width
      }
    }

    // SETTINGS
    /**
     * [description]
     * @param  {[type]} p [description]
     * @return {[type]}   [description]
     */
    timelines.margin = p => {
      if (!arguments.length) return margin
      margin = p
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} orientation [description]
     * @return {[type]}             [description]
     */
    timelines.orient = orientation => {
      if (!arguments.length) return orient
      orient = orientation
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} h [description]
     * @return {[type]}   [description]
     */
    timelines.itemHeight = h => {
      if (!arguments.length) return itemHeight
      itemHeight = h
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} h [description]
     * @return {[type]}   [description]
     */
    timelines.itemMargin = h => {
      if (!arguments.length) return itemMargin
      itemMargin = h
      return timelines
    }

    /**
     * [navMargin description]
     * @param  {[type]} h [description]
     * @return {[type]}   [description]
     */
    timelines.navMargin = h => {
      if (!arguments.length) return navMargin
      navMargin = h
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} h [description]
     * @return {[type]}   [description]
     */
    timelines.height = h => {
      if (!arguments.length) return height
      height = h
      return timelines
    }

    /**
     * [width description]
     * @param  {[type]} w [description]
     * @return {[type]}   [description]
     */
    timelines.width = w => {
      if (!arguments.length) return width
      width = w
      return timelines
    }

    /**
     * [display description]
     * @param  {[type]} displayType [description]
     * @return {[type]}             [description]
     */
    timelines.display = displayType => {
      if (!arguments.length || DISPLAY_TYPES.indexOf(displayType) == -1)
        return display
      display = displayType
      return timelines
    }

    /**
     * [labelFormat description]
     * @param  {[type]} f [description]
     * @return {[type]}   [description]
     */
    timelines.labelFormat = f => {
      if (!arguments.length) return labelFunction
      labelFunction = f
      return timelines
    }

    /**
     * [tickFormat description]
     * @param  {[type]} format [description]
     * @return {[type]}        [description]
     */
    timelines.tickFormat = format => {
      if (!arguments.length) return tickFormat
      tickFormat = format
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} zoomSetting [description]
     * @return {[type]}             [description]
     */
    timelines.allowZoom = zoomSetting => {
      if (!arguments.length) return allowZoom
      allowZoom = zoomSetting
      return timelines
    }

    /**
     * [maxZoom description]
     * @param  {[type]} max [description]
     * @return {[type]}     [description]
     */
    timelines.maxZoom = max => {
      if (!arguments.length) return maxZoom
      maxZoom = max
      return timelines
    }

    /**
     * [hover description]
     * @param  {[type]} hoverFunc [description]
     * @return {[type]}           [description]
     */
    timelines.hover = hoverFunc => {
      if (!arguments.length) return hover
      hover = hoverFunc
      return timelines
    }

    /**
     * [mouseover description]
     * @param  {[type]} mouseoverFunc [description]
     * @return {[type]}               [description]
     */
    timelines.mouseover = mouseoverFunc => {
      if (!arguments.length) return mouseover
      mouseover = mouseoverFunc
      return timelines
    }

    /**
     * [mouseout description]
     * @param  {[type]} mouseoutFunc [description]
     * @return {[type]}              [description]
     */
    timelines.mouseout = mouseoutFunc => {
      if (!arguments.length) return mouseout
      mouseout = mouseoutFunc
      return timelines
    }

    /**
     * [click description]
     * @param  {[type]} clickFunc [description]
     * @return {[type]}           [description]
     */
    timelines.click = clickFunc => {
      if (!arguments.length) return click
      click = clickFunc
      return timelines
    }

    /**
     * [scroll description]
     * @param  {[type]} scrollFunc [description]
     * @return {[type]}            [description]
     */
    timelines.scroll = scrollFunc => {
      if (!arguments.length) return scroll
      scroll = scrollFunc
      return timelines
    }

    /**
     * [colors description]
     * @param  {[type]} colorFormat [description]
     * @return {[type]}             [description]
     */
    timelines.colors = colorFormat => {
      if (!arguments.length) return colorCycle
      colorCycle = colorFormat
      return timelines
    }

    /**
     * [beginning description]
     * @param  {[type]} b [description]
     * @return {[type]}   [description]
     */
    timelines.beginning = b => {
      if (!arguments.length) return beginning
      beginning = b
      return timelines
    }

    /**
     * [ending description]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    timelines.ending = e => {
      if (!arguments.length) return ending
      ending = e
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} m [description]
     * @return {[type]}   [description]
     */
    timelines.labelMargin = m => {
      if (!arguments.length) return labelMargin
      labelMargin = m
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} f [description]
     * @return {[type]}   [description]
     */
    timelines.labelFloat = f => {
      if (!arguments.length) return labelFloat
      labelFloat = f
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} degrees [description]
     * @return {[type]}         [description]
     */
    timelines.rotateTicks = degrees => {
      if (!arguments.length) return rotateTicks
      rotateTicks = degrees
      return timelines
    }

    /**
     * [stack description]
     * @return {[type]} [description]
     */
    timelines.stack = () => {
      stacked = !stacked
      return timelines
    }

    /**
     * [relativeTime description]
     * @return {[type]} [description]
     */
    timelines.relativeTime = () => {
      timeIsRelative = !timeIsRelative
      return timelines
    }

    /**
     * [linearTime description]
     * @return {[type]} [description]
     */
    timelines.linearTime = () => {
      timeIsLinear = !timeIsLinear
      return timelines
    }

    /**
     * [showBorderLine description]
     * @return {[type]} [description]
     */
    timelines.showBorderLine = () => {
      showBorderLine = !showBorderLine
      return timelines
    }

    /**
     * [showBorderFormat description]
     * @param  {[type]} borderFormat [description]
     * @return {[type]}              [description]
     */
    timelines.showBorderFormat = borderFormat => {
      if (!arguments.length) return showBorderFormat
      showBorderFormat = borderFormat
      return timelines
    }

    /**
     * CSS class for the lines added by showBorder
     * @param  {[type]} borderClass [description]
     * @return {[type]}             [description]
     */
    timelines.showBorderLineClass = borderClass => {
      if (!arguments.length) return showBorderLineClass
      showBorderLineClass = borderClass
      return timelines
    }

    /**
     * [showToday description]
     * @return {[type]} [description]
     */
    timelines.showToday = () => {
      showTodayLine = !showTodayLine
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} todayFormat [description]
     * @return {[type]}             [description]
     */
    timelines.showTodayFormat = todayFormat => {
      if (!arguments.length) return showTodayFormat
      showTodayFormat = todayFormat
      return timelines
    }

    /**
     * [colorProperty description]
     * @param  {[type]} colorProp [description]
     * @return {[type]}           [description]
     */
    timelines.colorProperty = colorProp => {
      if (!arguments.length) return colorPropertyName
      colorPropertyName = colorProp
      return timelines
    }

    /**
     * [rowSeparators description]
     * @param  {[type]} color [description]
     * @return {[type]}       [description]
     */
    timelines.rowSeparators = color => {
      if (!arguments.length) return rowSeparatorsColor
      rowSeparatorsColor = color
      return timelines
    }

    /**
     * [background description]
     * @param  {[type]} color [description]
     * @return {[type]}       [description]
     */
    timelines.background = color => {
      if (!arguments.length) return backgroundColor
      backgroundColor = color
      return timelines
    }

    /**
     * [showTimeAxis description]
     * @return {[type]} [description]
     */
    timelines.showTimeAxis = () => {
      showTimeAxis = !showTimeAxis
      return timelines
    }

    /**
     * [showAxisTop description]
     * @return {[type]} [description]
     */
    timelines.showAxisTop = () => {
      showAxisTop = !showAxisTop
      return timelines
    }

    /**
     * [description]
     * @return {[type]} [description]
     */
    timelines.showAxisCalendarYear = () => {
      showAxisCalendarYear = !showAxisCalendarYear
      return timelines
    }

    /**
     * [description]
     * @return {[type]} [description]
     */
    timelines.showTimeAxisTick = () => {
      timeAxisTick = !timeAxisTick
      return timelines
    }

    /**
     * [description]
     * @return {[type]} [description]
     */
    timelines.fullLengthBackgrounds = () => {
      fullLengthBackgrounds = !fullLengthBackgrounds
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} format [description]
     * @return {[type]}        [description]
     */
    timelines.showTimeAxisTickFormat = format => {
      if (!arguments.length) return timeAxisTickFormat
      timeAxisTickFormat = format
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} bgColor [description]
     * @return {[type]}         [description]
     */
    timelines.showAxisHeaderBackground = bgColor => {
      showAxisHeaderBackground = !showAxisHeaderBackground
      if (bgColor) {
        axisBgColor = bgColor
      }
      return timelines
    }

    /**
     * CSS class for the x-axis
     * @param  {[type]} axisClass [description]
     * @return {[type]}           [description]
     */
    timelines.xAxisClass = axisClass => {
      if (!arguments.length) return xAxisClass
      xAxisClass = axisClass
      return timelines
    }

    /**
     * [description]
     * @param  {[type]} navigateBackwards [description]
     * @param  {[type]} navigateForwards  [description]
     * @return {[type]}                   [description]
     */
    timelines.navigate = (navigateBackwards, navigateForwards) => {
      if (!arguments.length) return [navigateLeft, navigateRight]
      navigateLeft = navigateBackwards
      navigateRight = navigateForwards
      showAxisNav = !showAxisNav
      return timelines
    }

    /**
     * [description]
     * @return {[type]} [description]
     */
    timelines.version = () => '1.0.0'

    /**
     * [description]
     * @return {[type]} [description]
     */
    timelines.thisRef = ref => {
      thisRef = ref
      return timelines
    }

    return timelines
  })

init()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 *
 */
class CircleByYear extends React.Component {
  /**
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount() {
    const node = this.node
    // const faux = this.props.connectFauxDOM('div', 'chart')
    const chart = d3
      .timeline()
      .stack()
      .beginning(1448928000000)
      .ending(1546300800000)
      .allowZoom()
      .margin({ left: 70, right: 30, top: 0, bottom: 0 })
      .tickFormat({
        format: timeFormat('%I %p'),
        tickTime: timeHour,
        tickInterval: 1,
        tickSize: 30,
      })
      .hover((d, i, datum) => {
        // console.log(d, i, datum)
      })
      .scroll((x, scale) => {
        // $("#scrolled_date").text(scale.invert(x) + " to " + scale.invert(x+width));
        console.log(x, scale)
      })
      .click((d, index, datum, i) => {
        console.log('d', d)
        console.log('index', index)
        console.log('datum', datum)
        console.log('i', i)
      })
      .display('circle')
      // .showBorderLine()
      // .rowSeparators('red')
      .thisRef(node)

    const svg = d3
      .select(node)
      .datum(data)
      .call(chart)
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <div>
        <svg ref={node => (this.node = node)} width={1200} height={900} />
      </div>
    )
  }
}

CircleByYear.propTypes = {
  to: PropTypes.string,
}

CircleByYear.defaultProps = {
  chart: 'loading',
}

// --------------------------------------------------------------------- Export
export default CircleByYear
