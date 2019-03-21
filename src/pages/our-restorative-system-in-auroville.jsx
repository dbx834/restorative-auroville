// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import OutLink from '@bodhi-project/components/lib/OutLink'
import PDFReader from '@bodhi-project/components/lib/PDFReader'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'
import EqualHalves from '../components/EqualHalves'
import Video from '../components/Video'
import DisqusComments from '../components/DisqusComments'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Our Restorative System in Auroville',
  nakedPageSlug: 'our-restorative-system-in-auroville',
  pageAbstract:
    'Conflict is a natural, inevitable part of living together, and Auroville is no exception. Koodam, Auroville’s conflict resolution platform, has already done so much to bring about a shift in conflict resolution, and yet we believe we still a long way to go before we are really able, as a community, to deal with our conflicts in ways that are healthy, effective, sustainable and life-serving.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
  position: 'relative',
  display: 'block',
}).toString()

const pdfStyles = css({
  maxHeight: '600px !important',
  height: '600px !important',

  '& > div': {
    height: '600px !important',
    maxHeight: '600px !important',

    '& > iframe': {
      height: '600px !important',
      maxHeight: '600px !important',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className={pageStyles} seoData={seoData}>
    <h1 className="mask-h3">Our Restorative System in Auroville</h1>
    <p>
      Conflict is a natural, inevitable part of living together, and Auroville
      is no exception.{' '}
      <OutLink to="https://www.auroville.org/contents/4360">Koodam</OutLink>,
      Auroville’s conflict resolution platform, has already done so much to
      bring about a shift in conflict resolution, and yet we believe we still
      have a long way to go before we are really able, as a community, to deal
      with our conflicts in ways that are healthy, effective, sustainable and
      life-serving.
    </p>
    <p>
      For Restorative Circles to be fully effective on a community-level, we
      need to explore it in more depth and to understand our resistance (both as
      human beings in general, but also as Aurovilians aspiring to build a city
      of human unity) to using processes such as these.
    </p>
    <p>
      We need to start questioning our very system and re-evaluate how we want
      to respond to justice as a larger community. The next step needed is to
      take a deeper and wider look at our present situation in Auroville, which
      is complex and doesn’t always allow for an easy resolution to our
      challenges. Restorative Circles, in its design and nature, is a process
      that works on several levels, and it aims at bringing about a shift on a
      systemic level. It invites us to re-evaluate how we think about conflict,
      how we can invite people to take responsibility for their actions, and how
      we can support healing and rebuilding trust in our communities. It’s a
      process that includes all layers of the community, and it invites us to
      co-create a justice system that works for us.
    </p>
    <p>
      On a practical level, Restorative Circles also offers large-scale
      training, additional skills for conflict transformation, a large pool of
      available Facilitators, willingness amongst community members to
      participate in Circles if called upon, and increased awareness about the
      importance of consciously choosing a justice system for the growth and
      development of a community.
    </p>
    <div style={{ background: '#d1d1d1' }}>
      <div style={{ width: '45%', margin: 'auto' }}>
        <PDFReader
          url="https://www.restorativeauroville.org/pdfsv1/av-rc-system.pdf"
          className={pdfStyles}
        />
      </div>
    </div>
    <br />
    <h2 className="mask-h4" style={{ marginBottom: 0 }}>
      "Create Auroville Together: Restorative Circles"
    </h2>
    <p style={{ marginBottom: 30 }}>
      <i>Public presentation at Unity Pavilion, Auroville (2017)</i>
    </p>
    <EqualHalves>
      <div>
        <Video url="https://www.youtube.com/watch?v=n1Uf1IYQ2_Y&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF&index=9" />
        <p className="mask-h5">
          <strong>Part 1</strong>
        </p>
      </div>
      <div>
        <Video url="https://www.youtube.com/watch?v=ngOhj-NhKJo&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF&index=8" />
        <p className="mask-h5">
          <strong>Part 2</strong>
        </p>
      </div>
    </EqualHalves>
    <br />
    <br />
    <br />
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
