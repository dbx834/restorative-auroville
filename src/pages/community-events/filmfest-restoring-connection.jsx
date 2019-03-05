// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Images from '@bodhi-project/components/lib/Images'
import OutLink from '@bodhi-project/components/lib/OutLink'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import CommunityEventWrapper from '../../components/wrappers/CommunityEventWrapper'

import Link from '../../components/Link'

import seoHelper from '../../methods/seoHelper'

import GoldenMajorHalves from '../../components/GoldenMajorHalves'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'FilmFest: "Restoring Connection"',
  nakedPageSlug: 'community-events/filmfest-restoring-connection',
  pageAbstract:
    'We hosted a 6-day Film Festival, in hopes to raise awareness about Restorative Justice and hopefully contribute to building a justice system that is in alignment with our Auroville values.',
}

const prev = {
  nakedPageSlug: 'community-events/restorative-dialogue-across-cultures',
}

const next = undefined

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const photos = [
  {
    src: '/event-assets/filmfest-restoring-connection/nvcX43.jpg',
    width: 600,
    height: 399,
  },
  {
    src: '/event-assets/filmfest-restoring-connection/nvcX44.jpg',
    width: 600,
    height: 399,
  },
  {
    src: '/event-assets/filmfest-restoring-connection/nvcX37.jpg',
    width: 600,
    height: 400,
  },
  {
    src: '/event-assets/filmfest-restoring-connection/nvcX42.jpg',
    width: 600,
    height: 399,
  },
]

const notes = [
  {
    url:
      'https://www.restorativeauroville.org/event-assets/filmfest-restoring-connection/filmfest.pdf',
    title: 'See movie timetable',
    width: '40%',
  },
]

/** Theme */
const Theme = props => {
  const { border, title, files, tag, text } = props
  return (
    <div
      style={{
        paddingLeft: 12,
        borderLeft: `8px solid ${border}`,
      }}
    >
      <h2 className="mask-h4">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{title}</span>
          <Link to="/archives">
            <Tag color="geekblue">...from our Archives</Tag>
          </Link>
        </div>
      </h2>
      <p>{text}</p>
      {!isUndefined(files) && (
        <Fragment>
          {map(files, file => {
            return (
              <p>
                <OutLink to={file.link}>
                  <Icon
                    type={isUndefined(file.icon) ? 'file-pdf' : file.icon}
                    theme="outlined"
                  />
                  &nbsp;
                  {file.title}
                </OutLink>
              </p>
            )
          })}
        </Fragment>
      )}
    </div>
  )
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <CommunityEventWrapper
      className=""
      seoData={seoData}
      next={next}
      prev={prev}
      pageData={pageData}
      notes={notes}
    >
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/community-events">Community Events</Link>
        </BItem>
        <BItem>FilmFest: "Restoring Connection"</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">FilmFest: "Restoring Connection"</h1>
      <p>
        We hosted a 6-day Film Festival on the theme of "Restoring Connection"
        in October 2016 as part of our larger Restorative Circles project in
        Auroville, where we are working to raise awareness about Restorative
        Justice and hopefully contribute to building a justice system that is in
        alignment with our Auroville values. With the FilmFest, we wanted to
        offer yet another approach and medium through which to explore the
        subject, as not everybody will choose to come to our workshops or attend
        a live Restorative Circle.
      </p>
      <div className="mask-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 2, max: 2 }}
        />
      </div>
      <p>
        We selected 13 documentaries and feature films about Restorative Justice
        from around the world, mostly based on true stories of pain and loss of
        connection. The films showcased different examples of how people
        involved in or impacted by conflict choose to respond – in ways that
        honoured healing and reconciliation over hatred and punishment. After
        each film, we offered a facilitated dialogue space and welcomed our
        viewers to share about their movie experience and how they might connect
        elements from the movie to Auroville.
      </p>
      <p>
        The overall feedback and response to the FilmFest was positive. Our
        viewers said they appreciated the depth of the movies, the selections
        made, and the dialogue spaces, where they could process and digest their
        experience, as well as to connect and share with other Aurovilians. Some
        expressed how much they miss dialogue (and circles and connection and
        sharing) in Auroville.
      </p>
      <p>
        In addition to people’s personal sharings about conflict and healing,
        forgiveness and reconciliation, two common themes emerged over the week:
      </p>
      <ul className="mask-p">
        <li>
          how many long-standing and unresolved conflicts we have in Auroville
          and discouragement that we are not better equipped to handle these
          situations more constructively, both on an individual and a collective
          level, and
        </li>
        <li>
          our lack of connection and exchange with the surrounding villages and
          real concern about the impact this attitude could have on our shared
          future if we do not start to make more concrete steps in this
          direction.
        </li>
      </ul>
      <GoldenMajorHalves>
        <div>
          <p>
            People expressed a longing that as a community we would really learn
            to love, to forgive, to share, and to overcome our conditioned ideas
            of superiority versus inferiority.
          </p>
        </div>
        <div>
          <Theme
            border="#FB9001"
            title='FilmFest: "Restoring Connection" (2016)'
            tag="Projects & Reports"
            files={[
              {
                title: 'Project Proposal',
                link: '/restoring-connection-film-fest-project-proposal.pdf',
              },
              {
                title: 'Report',
                link: '/filmfest-report.pdf',
              },
              {
                title: 'See "Auroville Today" article',
                icon: 'copy',
                link: '/writings/restoring-connection',
              },
            ]}
          />
        </div>
      </GoldenMajorHalves>
    </CommunityEventWrapper>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
