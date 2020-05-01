// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Video from '@bodhi-project/components/lib/video'
import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

import Division from '@bodhi-project/components/lib/division'
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
  pageTitle: 'Restorative Dialogue across Cultures',
  nakedPageSlug: 'community-events/restorative-dialogue-across-cultures',
  pageAbstract:
    'We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?',
}

const prev = undefined

const next = {
  nakedPageSlug: 'community-events/filmfest-restoring-connection',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    img00001: file(
      relativePath: {
        eq: "community-events/restorative-dialogue-across-cultures/img00001.jpeg"
      }
    ) {
      ...max900
    }
    img00002: file(
      relativePath: {
        eq: "community-events/restorative-dialogue-across-cultures/img00002.jpeg"
      }
    ) {
      ...max900
    }
    img00003: file(
      relativePath: {
        eq: "community-events/restorative-dialogue-across-cultures/img00003.jpeg"
      }
    ) {
      ...max900
    }
    img00004: file(
      relativePath: {
        eq: "community-events/restorative-dialogue-across-cultures/img00004.jpeg"
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
        <ul
          className="mask-p"
          style={{ marginBottom: 0, padding: 0, listStyle: 'none' }}
        >
          {map(files, file => {
            return (
              <li>
                <Link
                  to={file.link}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 6,
                  }}
                >
                  <FileTextIcon />
                  &nbsp;
                  {file.title}
                </Link>
              </li>
            )
          })}
        </ul>
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
      {...props}
    >
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/community-events">Community Events</Link>
        </BItem>
        <BItem>Restorative Dialogue across Cultures</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Restorative Dialogue across Cultures</h1>
      <p>
        We want to explore and understand this question: Are we divided in
        Auroville, as local Tamil Aurovilians and non-local Aurovilians?
      </p>
      <p>
        We have been given a unique opportunity in Auroville to live “unity in
        diversity,” and in many ways our internal community affairs are quite
        harmonious and functional, especially so given our rich mix of cultural
        and socio-economic backgrounds.
      </p>
      <p>
        And it is also true that we still come across misunderstandings and
        different ideas of what it means to live in Auroville, and although
        there are probably many reasons why we lose connection and trust in each
        other, one of the recurring inquiries is whether our cultural
        differences and history keep us apart, and if so, how do we bridge the
        gap and walk towards a truer embodiment of Auroville’s ideal to live in
        harmony with one another.
      </p>
      <p>
        There is so much richness and complexity in our 48 years of shared
        history, and beyond, so we are by no means trying to simplify our story.
        And yet, it is our interest to explore further this particular angle –
        our relationship as local to non-local Aurovilians and non- local to
        local Aurovilians. Over the years, we have had many situations where
        local Tamil Aurovilians express that they do not feel like they are
        treated as equals, and that they do not have the same access to
        resources and opportunities as non-local Aurovilians do. And in response
        to this, there are just as many explanations about why this is so,
        indicating that in fact our present cross-cultural reality is much more
        complex than an exclusive cultural targeting, in one direction or the
        other.
      </p>
      <Division golden className="margin-p">
        <Fragment>
          <Video
            url="https://vimeo.com/242213125"
            style={{ marginBottom: 0 }}
          />
        </Fragment>
        <Fragment>
          <Theme
            border="#FB9001"
            title="Restorative Dialogue across Cultures (2016)"
            tag="Projects & Reports"
            files={[
              {
                title: 'Project Proposal',
                link:
                  'https://www.restorativeauroville.org/pdfs2/cross-cultural-restorative-dialogue-project-proposal.pdf',
              },
              {
                title: 'Report',
                link:
                  'https://www.restorativeauroville.org/pdfs2/cross-cultural-dialogue-report.pdf',
              },
              {
                title: 'Report Annexe',
                link:
                  'https://www.restorativeauroville.org/pdfs2/cross-cultural-dialogue-report-annexe.pdf',
              },
            ]}
          />
        </Fragment>
      </Division>
      <div className="mask-p">
        <Gallery
          data={props.data}
          lookup="img"
          columns={{ min: 2, max: 2 }}
          Img={Img}
        />
      </div>
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
