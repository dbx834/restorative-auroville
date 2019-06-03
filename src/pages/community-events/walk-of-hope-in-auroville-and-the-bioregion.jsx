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

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import CommunityEventWrapper from '../../components/wrappers/CommunityEventWrapper'

import Link from '../../components/Link'
import Video from '../../components/Video'

import GrungeBox from '../../components/GrungeBox'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Walk of Hope in Auroville & the Bioregion',
  nakedPageSlug: 'community-events/walk-of-hope-in-auroville-and-the-bioregion',
  pageAbstract:
    'Spreading the message of oneness, inclusion and respect and (re-)connect as Aurovilians, and with our neighbours in the surrounding villages.',
}

const prev = {
  nakedPageSlug: 'community-events/cross-cultural-dialogue',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const next = {
  nakedPageSlug: 'community-events/world-cafes-on-peace-and-justice',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    img00001: file(
      relativePath: {
        eq: "community-events/walk-of-hope-in-auroville-and-the-bioregion/wohFlyer.jpg"
      }
    ) {
      ...defaultImage
    }
    img00002: file(
      relativePath: {
        eq: "community-events/walk-of-hope-in-auroville-and-the-bioregion/wohMap.jpg"
      }
    ) {
      ...defaultImage
    }
    img00003: file(
      relativePath: {
        eq: "community-events/walk-of-hope-in-auroville-and-the-bioregion/nvcX33.jpg"
      }
    ) {
      ...defaultImage
    }
    img00004: file(
      relativePath: {
        eq: "community-events/walk-of-hope-in-auroville-and-the-bioregion/nvcX34.jpg"
      }
    ) {
      ...defaultImage
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
        <Fragment>
          {map(files, file => {
            return (
              <p>
                <Link to={file.link}>
                  <Icon
                    type={isUndefined(file.icon) ? 'file-pdf' : file.icon}
                    theme="outlined"
                  />
                  &nbsp;
                  {file.title}
                </Link>
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
        <BItem>Walk of Hope in Auroville & the Bioregion</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Walk of Hope in Auroville and the Bioregion</h1>
      <p>
        The idea of a peace walk emerged during our earlier events (FilmFest and
        Cross-Cultural Dialogue), where many Aurovilians shared a real longing
        to feel more unity among us, and between Auroville and the bioregion.
        Several also expressed a real fear and concern that if we don’t work on
        our relationship and collaboration with the neighbouring villages, we’re
        risking our future. We are happy that so many people followed our
        invitation for this activity; it appealed to all backgrounds, and
        language was not a barrier – hence, walking instead of talking, together
        and towards each other!
      </p>
      <p>
        The Walk was led by Sri M, an eminent spiritual guide, educationist and
        social activist. Sri M became known for his Walk of Hope from
        Kanyakumari to Kashmir, over 7000 km through India in 2015-16.
      </p>
      <Division golden>
        <Fragment>
          <div style={{ maxWidth: 600 }}>
            <Video url="https://www.youtube.com/watch?v=I79YcKxzhYo" />
          </div>
        </Fragment>
        <Fragment>
          <GrungeBox>
            <p
              style={{
                marginBottom: 0,
                fontWeight: 200,
                lineHeight: '1.625rem',
              }}
              className="mask-h3"
            >
              <small>
                <small>
                  <i>
                    " This will be an outstanding event. Small steps towards
                    inner and outer unity. I believe as long as we are separated
                    from our soul, we experience separation and will project
                    this into our outer life. But we have to start at both ends,
                    inside and in our environment! So let's walk together and
                    make a move (in both directions). "
                  </i>
                  <br /> – A donor & well-wisher from Auroville
                </small>
              </small>
            </p>
          </GrungeBox>
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
      <p>
        On Sunday January 28th, 800 people – from the villages, Aurovilians,
        Newcomers, volunteers and guests – joined the walk from Irumbai Temple
        through Kottakarai/Bharatipuram, Auroville/Tibetan Pavilion,
        Edayanchavadi, and Kuilapalayam, where we ended at Aikiyam School. Sri M
        gave a short talk in Tamil and English and planted a tree at each stop,
        where a village/outreach school hosted us, with the support of women
        groups and youth.
      </p>
      <p>
        On Monday January 29th, we walked from Auroville through Alankuppam,
        ending at the Mosque in Rayapettai. This time it was a more “intimate”
        event, with about 100 participants, among them many school children. We
        were warmly received by the Muslim community in the Rayapettai Mosque,
        where our beautiful interaction culminated with the Imam singing verses
        of the Quaran for us.
      </p>
      <Division golden>
        <Fragment>
          <p>
            With gratitude to our co-organizers: Restorative Auroville, Franz
            (Prisma), Moris (Auroville Village Action Group), Shankar (Aikiyam
            School), and many other Aurovilians and volunteers.
          </p>
        </Fragment>
        <Fragment>
          <Theme
            border="#FB9001"
            title="Walk of Hope in Auroville & the Bioregion (2018)"
            tag="Projects & Reports"
            files={[
              {
                title: 'Project Proposal',
                link:
                  'https://www.restorativeauroville.org/pdfs2/walk-of-hope-project-proposal.pdf',
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
