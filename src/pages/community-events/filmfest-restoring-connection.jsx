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
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import FileTextIcon from 'react-feather/dist/icons/file-text'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import CommunityEventWrapper from '../../components/wrappers/CommunityEventWrapper'

import Link from '../../components/Link'

import seoHelper from '../../methods/seoHelper'

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

const next = {
  nakedPageSlug: 'community-events/world-cafes-on-peace-and-justice',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const notes = [
  {
    url: 'https://www.restorativeauroville.org/pdfs2/filmfest.pdf',
    title: 'See FilmFest Program',
    width: '40%',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    nvcX43: file(
      relativePath: {
        eq: "community-events/filmfest-restoring-connection/nvcX43.jpg"
      }
    ) {
      ...max900
    }
    nvcX44: file(
      relativePath: {
        eq: "community-events/filmfest-restoring-connection/nvcX44.jpg"
      }
    ) {
      ...max900
    }
    nvcX37: file(
      relativePath: {
        eq: "community-events/filmfest-restoring-connection/nvcX37.jpg"
      }
    ) {
      ...max900
    }
    nvcX42: file(
      relativePath: {
        eq: "community-events/filmfest-restoring-connection/nvcX42.jpg"
      }
    ) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
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
        <p>
          {map(files, file => {
            return (
              <Fragment>
                <Link
                  to={file.link}
                  style={{ display: 'flex', marginBottom: 12 }}
                >
                  <FileTextIcon />
                  &nbsp;
                  {file.title}
                </Link>
              </Fragment>
            )
          })}
        </p>
      )}
    </div>
  )
}

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
      {...props}
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
        <Gallery
          data={props.data}
          lookup="nvcX"
          columns={{ min: 2, max: 2 }}
          Img={Img}
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
      <Division golden>
        <Fragment>
          <p>
            People expressed a longing that as a community we would really learn
            to love, to forgive, to share, and to overcome our conditioned ideas
            of superiority versus inferiority.
          </p>
        </Fragment>
        <Fragment>
          <Theme
            border="#FB9001"
            title='FilmFest: "Restoring Connection" (2016)'
            tag="Projects & Reports"
            files={[
              {
                title: 'Project Proposal',
                link:
                  'https://www.restorativeauroville.org/pdfs2/restoring-connection-film-fest-project-proposal.pdf',
              },
              {
                title: 'Report',
                link:
                  'https://www.restorativeauroville.org/pdfs2/filmfest-report.pdf',
              },
              {
                title: 'See "Auroville Today" article',
                icon: 'copy',
                link: '/writings/restoring-connection',
              },
            ]}
          />
        </Fragment>
      </Division>
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
