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
import {
  event,
  mouse,
  namespace,
  namespaces,
  select,
  clientPoint,
} from 'd3-selection'
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
/**
 *
 */
class CircleByYear extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
    const colorCycle = scaleOrdinal(schemeCategory20)
    this.state = {
      DISPLAY_TYPES: ['circle', 'rect'],
      hover: () => noop(),
      mouseover: () => noop(),
      mouseout: () => noop(),
      click: () => noop(),
      scroll: () => noop(),
      navigateLeft: () => noop(),
      navigateRight: () => noop(),
      labelFunction: label => label,
      labelFloat: 0,
      orient: 'bottom',
      width: 1200,
      height: 900,
      rowSeparatorsColor: null,
      backgroundColor: null,
      tickFormat: {
        format: timeFormat('%I %p'),
        tickTime: timeHour,
        tickInterval: 1,
        tickSize: 6,
        tickValues: null,
      },
      allowZoom: true,
      axisBgColor: 'white',
      chartData: {},
      colorCycle,
      colorPropertyName: null,
      display: 'rect',
      beginning: 0,
      labelMargin: 0,
      ending: 0,
      margin: { left: 30, right: 30, top: 30, bottom: 30 },
      maxZoom: 5,
      stacked: true,
      rotateTicks: false,
      timeIsRelative: false,
      timeIsLinear: false,
      fullLengthBackgrounds: false,
      itemHeight: 20,
      itemMargin: 5,
      navMargin: 60,
      showTimeAxis: true,
      showAxisTop: false,
      showTodayLine: false,
      timeAxisTick: false,
      timeAxisTickFormat: { stroke: 'stroke-dasharray', spacing: '4 10' },
      showTodayFormat: {
        marginTop: 25,
        marginBottom: 0,
        width: 1,
        color: colorCycle,
      },
      showBorderLine: false,
      showBorderFormat: {
        marginTop: 25,
        marginBottom: 0,
        width: 1,
        color: colorCycle,
      },
      showBorderLineClass: 'timeline-border-line',
      showAxisHeaderBackground: false,
      showAxisNav: false,
      showAxisCalendarYear: false,
      xAxisClass: 'timeline-xAxis',
      xScale: null,
      xAxis: null,
    }

    this.appendAxisHeaderBackground = this.appendAxisHeaderBackground.bind(this)
    this.appendTimeAxisCalendarYear = this.appendTimeAxisCalendarYear.bind(this)
    this.appendTimeAxisNav = this.appendTimeAxisNav.bind(this)
    this.appendTimeAxisTick = this.appendTimeAxisTick.bind(this)
    this.appendTimeAxis = this.appendTimeAxis.bind(this)
    this.appendBackgroundBar = this.appendBackgroundBar.bind(this)
    this.appendLabel = this.appendLabel.bind(this)
    this.drawChart = this.drawChart.bind(this)
    this.configure = this.configure.bind(this)
  }

  /**
   * [appendAxisHeaderBackground description]
   * @param  {[type]} g     [description]
   * @param  {[type]} xAxis [description]
   * @param  {[type]} yAxis [description]
   * @return {[type]}       [description]
   */
  appendAxisHeaderBackground(g, xAxis, yAxis) {
    const { width, itemHeight, axisBgColor } = this.state
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
  appendTimeAxisCalendarYear(nav) {
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
  appendTimeAxisNav(g) {
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
  appendTimeAxisTick(g, xAxis, maxStack) {
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
  appendTimeAxis(g, xAxis, yPosition) {
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
  appendBackgroundBar(yAxisMapping, index, g, data, datum) {
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
  appendLabel(gParent, yAxisMapping, index, hasLabel, datum) {
    const fullItemHeight = this.state.itemHeight + this.state.itemMargin
    const rowsDown =
      this.state.margin.top +
      fullItemHeight / 2 +
      fullItemHeight * (yAxisMapping[index] || 1)

    gParent
      .append('text')
      .attr('class', 'timeline-label')
      .attr('transform', `translate(${this.state.labelMargin}, ${rowsDown})`)
      .text(hasLabel ? this.state.labelFunction(datum.label) : datum.id)
      .on('click', (d, i) => {
        const point = mouse(this)
        gParent
          .append('rect')
          .attr('id', 'clickpoint')
          .attr('x', point[0])
          .attr('width', 10)
          .attr('height', this.state.itemHeight)

        this.state.click(
          d,
          index,
          datum,
          point,
          this.state.xScale.invert(point[0])
        )
      })
  }

  /**
   * [drawChart description]
   * @return {[type]} [description]
   */
  drawChart() {
    const gParent = d3.select(this.node).datum(data)
    const gParentSize = gParent.node().getBoundingClientRect() // the svg size
    const gParentItem = select(gParent.node()) // the svg
    const g = gParent.append('g').attr('class', 'container')
    const yAxisMapping = {}
    let maxStack = 1
    let minTime = 0
    let maxTime = 0
    const {
      stacked,
      margin,
      orient,
      itemHeight,
      itemMargin,
      backgroundColor,
      display,
      colorPropertyName,
      colorCycle,
      hover,
      mouseover,
      mouseout,
      click,
      timeIsRelative,
      timeIsLinear,
      labelFloat,
      allowZoom,
      maxZoom,
      scroll,
    } = this.state
    let {
      ending,
      beginning,
      xAxis,
      xScale,
      chartData,
      width,
      height,
    } = this.state

    /**
     * [description]
     * @return {[type]} [description]
     */
    const setWidth = () => {
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
      console.log('xScale 2')
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

    const gSize = g.node().getBoundingClientRect()
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
          select(view).attr('height', height)
        } else {
          throw 'height of the timeline is not set'
        }
      } else {
        if (!height) {
          height = gParentSize.height
        } else {
          select(gParent)
            .node()
            .attr('height', height)
          view.attr('height', height)
        }
      }
    }
    setHeight()

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
            return margin.top + (itemHeight + itemMargin) * yAxisMapping[index]
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
          this.appendBackgroundBar(yAxisMapping, index, g, data, datum)
        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Data Points
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Define the div for the tooltip
        const div = d3
          .select('body')
          .append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0)
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
          .on('mouseover', (d, i) => {
            mouseover(d, i, datum, i)
            console.log('123')
            // console.log(clientPoint(e.target, e))
            // div
            //   .transition()
            //   .duration(200)
            //   .style('opacity', 0.9)
            //   .html('hello world!')
            //   .style('left', event.pageX + 'px')
            //   .style('top', event.pageY - 28 + 'px')
          })
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
          .attr('x', (d, i) => getXTextPos(d, i, d.labelNumber, '.textnumbers'))
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

        // if (rowSeparatorsColor) {
        //   var lineYAxis =
        //     itemHeight +
        //     itemMargin / 2 +
        //     margin.top +
        //     (itemHeight + itemMargin) * yAxisMapping[index]
        //   gParent
        //     .append('svg:line')
        //     .attr('class', 'row-separator')
        //     .attr('x1', 0 + margin.left)
        //     .attr('x2', width - margin.right)
        //     .attr('y1', lineYAxis)
        //     .attr('y2', lineYAxis)
        //     .attr('stroke-width', 1)
        //     .attr('stroke', rowSeparatorsColor)
        // }

        // // add the label
        if (hasLabel) {
          this.appendLabel(gParent, yAxisMapping, index, hasLabel, datum)
        }

        // if (typeof datum.icon !== 'undefined') {
        //   gParent
        //     .append('image')
        //     .attr('class', 'timeline-label')
        //     .attr(
        //       'transform',
        //       'translate(' +
        //         0 +
        //         ',' +
        //         (margin.top + (itemHeight + itemMargin) * yAxisMapping[index]) +
        //         ')'
        //     )
        //     .attr('xlink:href', datum.icon)
        //     .attr('width', margin.left)
        //     .attr('height', itemHeight)
        // }
      })
    })

    // var belowLastItem = margin.top + (itemHeight + itemMargin) * maxStack
    // var aboveFirstItem = margin.top
    // var timeAxisYPosition = showAxisTop ? aboveFirstItem : belowLastItem
    // var gX
    // if (showTimeAxis) {
    //   gX = appendTimeAxis(g, xAxis, timeAxisYPosition)
    // }
    // if (timeAxisTick) {
    //   appendTimeAxisTick(g, xAxis, maxStack)
    // }

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

    if (allowZoom === true) {
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

    // if (rotateTicks) {
    //   g.selectAll('.tick text').attr('transform', function(d) {
    //     return (
    //       'rotate(' +
    //       rotateTicks +
    //       ')translate(' +
    //       (this.getBBox().width / 2 + 10) +
    //       ',' + // TODO: change this 10
    //       this.getBBox().height / 2 +
    //       ')'
    //     )
    //   })
    // }

    // /**
    //  * [appendLine description]
    //  * @param  {[type]} lineScale  [description]
    //  * @param  {[type]} lineFormat [description]
    //  * @param  {[type]} lineClass  [description]
    //  * @return {[type]}            [description]
    //  */
    // const appendLine = (lineScale, lineFormat, lineClass) => {
    //   lineClass = lineClass || 'timeline-line'
    //   view
    //     .append('svg:line')
    //     .attr('x1', lineScale)
    //     .attr('y1', lineFormat.marginTop)
    //     .attr('x2', lineScale)
    //     .attr('y2', height - lineFormat.marginBottom)
    //     .attr('class', lineClass)
    //     .style('stroke', lineFormat.color) //"rgb(6,120,155)"
    //     .style('stroke-width', lineFormat.width)
    // }

    // if (showBorderLine) {
    //   g.each(function(d, i) {
    //     d.forEach(function(datum) {
    //       var times = datum.times
    //       times.forEach(function(time) {
    //         appendLine(
    //           xScale(time.starting_time),
    //           showBorderFormat,
    //           showBorderLineClass
    //         )
    //         appendLine(
    //           xScale(time.ending_time),
    //           showBorderFormat,
    //           showBorderLineClass
    //         )
    //       })
    //     })
    //   })
    // }

    // if (showTodayLine) {
    //   var todayLine = xScale(new Date())
    //   appendLine(todayLine, showTodayFormat)
    // }

    // /**
    //  * [getTextWidth description]
    //  * @param  {[type]} text [description]
    //  * @param  {[type]} font [description]
    //  * @return {[type]}      [description]
    //  */
    // const getTextWidth = (text, font) => {
    //   // re-use canvas object for better performance
    //   var canvas =
    //     getTextWidth.canvas ||
    //     (getTextWidth.canvas = document.createElement('canvas'))
    //   var context = canvas.getContext('2d')
    //   context.font = font
    //   var metrics = context.measureText(text)
    //   return metrics.width
    // }
  }

  /**
   * [configure description]
   * @param  {[type]} settings [description]
   * @return {[type]}          [description]
   */
  configure(settings) {
    if (!isUndefined(settings.beginning)) {
      this.setState({
        beginning: settings.beginning,
      })
    }

    if (!isUndefined(settings.ending)) {
      this.setState({
        ending: settings.ending,
      })
    }

    if (!isUndefined(settings.stack)) {
      this.setState({
        stacked: settings.stack,
      })
    }

    if (!isUndefined(settings.allowZoom)) {
      this.setState({
        allowZoom: settings.allowZoom,
      })
    }

    if (!isUndefined(settings.tickFormat)) {
      this.setState({
        tickFormat: settings.tickFormat,
      })
    }

    if (!isUndefined(settings.margin)) {
      this.setState({
        margin: settings.margin,
      })
    }

    if (!isUndefined(settings.hover)) {
      this.setState({
        hover: settings.hover,
      })
    }

    if (!isUndefined(settings.scroll)) {
      this.setState({
        scroll: settings.scroll,
      })
    }

    if (!isUndefined(settings.click)) {
      this.setState({
        click: settings.click,
      })
    }

    if (!isUndefined(settings.display)) {
      this.setState({
        display: settings.display,
      })
    }

    if (!isUndefined(settings.hover)) {
      this.setState({
        hover: settings.hover,
      })
    }

    if (!isUndefined(settings.scale)) {
      this.setState({
        scale: settings.scale,
      })
    }

    if (!isUndefined(settings.click)) {
      this.setState({
        click: settings.click,
      })
    }
  }

  /**
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount() {
    this.configure({
      stack: true,
      beginning: 1448928000000,
      ending: 1546300800000,
      allowZoom: true,
      margin: { left: 70, right: 30, top: 0, bottom: 0 },
      tickFormat: {
        format: timeFormat('%I %p'),
        tickTime: timeHour,
        tickInterval: 1,
        tickSize: 30,
      },
      hover: (d, i, datum, index) => {
        // console.log(d, i, datum, index)
      },
      scale: (x, scale) => {
        // $("#scrolled_date").text(scale.invert(x) + " to " + scale.invert(x+width));
        console.log(x, scale)
      },
      click: (d, index, datum, i) => {
        console.log('d', d)
        console.log('index', index)
        console.log('datum', datum)
        console.log('i', i)
      },
      display: 'circle',
    })
  }

  /**
   * [componentDidUpdate description]
   * @return {[type]} [description]
   */
  componentDidUpdate() {
    this.drawChart()
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
