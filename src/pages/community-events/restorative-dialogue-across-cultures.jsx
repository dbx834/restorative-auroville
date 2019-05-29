// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import OutLink from '@bodhi-project/components/lib/OutLink'
// import Image from '@bodhi-project/components/lib/Image'
import Images from '@bodhi-project/components/lib/Images'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import CommunityEventWrapper from '../../components/wrappers/CommunityEventWrapper'

import Link from '../../components/Link'
import Video from '../../components/Video'
import GoldenMajorHalves from '../../components/GoldenMajorHalves'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Restorative Dialogue across Cultures',
  nakedPageSlug: 'community-events/restorative-dialogue-across-cultures',
  pageAbstract:
    'We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?',
}

const next = {
  nakedPageSlug: 'community-events/filmfest-restoring-connection',
}

const prev = {
  nakedPageSlug: 'community-events/world-cafes-on-peace-and-justice',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

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
      <div className="margin-p">
        <GoldenMajorHalves>
          <div>
            <Video
              url="https://vimeo.com/242213125"
              style={{ marginBottom: 0 }}
            />
          </div>
          <div>
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
          </div>
        </GoldenMajorHalves>
      </div>
      <div className="margin-p">
        <Images
          photos={[
            {
              src:
                '/event-assets/restorative-dialogue-across-cultures/img00001.jpeg',
              width: 600,
              height: 400,
            },
            {
              src:
                '/event-assets/restorative-dialogue-across-cultures/img00002.jpeg',
              width: 600,
              height: 400,
            },
            {
              src:
                '/event-assets/restorative-dialogue-across-cultures/img00003.jpeg',
              width: 600,
              height: 400,
            },
            {
              src:
                '/event-assets/restorative-dialogue-across-cultures/img00004.jpeg',
              width: 600,
              height: 400,
            },
          ]}
          loader="gradient"
          columns={{ min: 2, max: 2 }}
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
