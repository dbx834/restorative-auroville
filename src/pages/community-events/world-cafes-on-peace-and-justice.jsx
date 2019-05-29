// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Images from '@bodhi-project/components/lib/Images'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import CommunityEventWrapper from '../../components/wrappers/CommunityEventWrapper'

import Link from '../../components/Link'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'World Cafés on Peace & Justice',
  nakedPageSlug: 'community-events/world-cafes-on-peace-and-justice',
  pageAbstract:
    'In the first months of 2016, we hosted a series of evening conversations in the co-creative World Café format. “What can we do as a community to openly share past pain and to restore connection and trust?”',
}

const next = {
  nakedPageSlug: 'community-events/restorative-dialogue-across-cultures',
}

const prev = {
  nakedPageSlug: 'community-events/walk-of-hope-in-auroville-and-the-bioregion',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const photos = [
  {
    src: '/event-assets/world-cafes-on-peace-and-justice/img1.jpg',
    width: 600,
    height: 542,
  },
  {
    src: '/event-assets/world-cafes-on-peace-and-justice/img2.jpg',
    width: 600,
    height: 424,
  },
  {
    src: '/event-assets/world-cafes-on-peace-and-justice/img3.jpg',
    width: 600,
    height: 753,
  },
  {
    src: '/event-assets/world-cafes-on-peace-and-justice/img4.jpg',
    width: 600,
    height: 402,
  },
  {
    src: '/event-assets/world-cafes-on-peace-and-justice/img5.jpg',
    width: 600,
    height: 482,
  },
  {
    src: '/event-assets/world-cafes-on-peace-and-justice/img6.jpg',
    width: 600,
    height: 543,
  },
]

const notes = [
  {
    url:
      'https://www.restorativeauroville.org/pdfs2/world-cafes-on-peace-and-justice-table-notes.pdf',
    title: 'See additional notes',
  },
]

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
      {...props}
    >
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/community-events">Community Events</Link>
        </BItem>
        <BItem>World Cafés on Peace & Justice</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">World Cafés on Peace & Justice</h1>

      <p>
        In the first months of 2016, we hosted a series of evening conversations
        in the co-creative World Café format.
      </p>
      <p>
        “What can we do as a community to openly share past pain and to restore
        connection and trust?” This was our starting point and central question
        for the 3 evenings.
      </p>
      <p>
        The first World Café, January 25th, was dedicated to the Truth &
        Reconciliation process, using South Africa as an example, because their
        Ubuntu philosophy ("I am because you are") is a strong base for
        community building. (You can find our short documentary-compilation of
        the Truth & Reconciliation Commission{' '}
        <Link to="https://www.youtube.com/watch?v=ULePHQT4Kso">here</Link>{' '}
        [14min]).
      </p>
      <p>
        Our second World Café, March 7th, was focused on Nepal’s attempt to
        rebuild community following the aftermath of their 10-year armed
        conflict. We showed excerpts from the documentary "Raamro Aakha Ma – In
        the Eyes of the Good.” (Watch full length [55min] documentary{' '}
        <Link to="https://www.youtube.com/watch?v=_tGu7BM-6Xw&index=7&list=PLFBWNVuESzSgxSaVatdvFeSApjj0L9OvS">
          here
        </Link>
        .)
      </p>
      <p>
        During our third Café, April 14th, we explored a culturally-based
        healing process of the Canadian First Nations. They still suffer from
        the devastating impact of having been forced into Residential Schools
        for more than hundred years. We showed excerpts from the documentary
        “Healing the Hurts.” (Watch full length [60min] documentary{' '}
        <Link to="https://vimeo.com/128567591">here</Link>.)
      </p>
      <p>
        After each film, we shared our thoughts and insights, and developed
        ideas of how we might use these processes to restore connection in
        Auroville among our different cultures.
      </p>
      <p>
        We thank David Nightingale and Kati for their beautiful hosting and
        facilitation!
      </p>
      <div className="mask-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 3, max: 3 }}
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
