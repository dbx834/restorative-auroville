// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from "@bodhi-project/components/lib/Image";
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import Video from '../../components/Video'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

import nvcX33 from '../../assets/gallery/nvcX33.jpg'
import nvcX34 from '../../assets/gallery/nvcX34.jpg'
import wohMap from '../../assets/wohMap.jpg'
import wohFlyer from '../../assets/wohFlyer.jpg'

const photos = [
  { src: wohFlyer, width: 600, height: 424 },
  { src: wohMap, width: 600, height: 849 },
  { src: nvcX33, width: 600, height: 450 },
  { src: nvcX34, width: 600, height: 450 },
]

const pageData = {
  pageTitle: 'Walk of Hope in Auroville and the Bioregion',
  nakedPageSlug: 'projects/walk-of-hope-in-auroville-and-the-bioregion',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/projects/ongoing">Projects</Link>
        </BItem>
        <BItem>
          <Link to="/projects/past">Past Projects</Link>
        </BItem>
        <BItem>Walk of Hope in Auroville and the Bioregion</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Walk of Hope in Auroville and the Bioregion</h1>
      <div style={{ maxWidth: '600px' }}>
        <Video url="https://www.youtube.com/watch?v=I79YcKxzhYo" />
      </div>
      <p>- walking together for Peace and Human Unity</p>
      <p>on January 28th & 29th, 2018.</p>
      <p>
        - spreading the message of oneness, inclusion and respect and
        (re-)connect as Aurovilians, and with our neighbours in the surrounding
        villages.
      </p>
      <p>
        The Walk was led by Sri M, an eminent spiritual guide, educationist and
        social activist. Sri M became known for his Walk of Hope from
        Kanyakumari to Kashmir, over 7000 km through India in 2015-16.
      </p>
      <p>
        The aim of the Walk was truly captured by an Aurovilian who wrote why
        she gave a donation:
      </p>
      <p>
        "This will be an outstanding event. Small steps towards inner and outer
        unity. I believe as long as we are separated from our soul, we
        experience separation and will project this into our outer life. But we
        have to start at both ends, inside and in our environment!! So let's
        walk together and make a move (in both directions)".
      </p>
      <div className="mask-p">
        <Images photos={photos} loader="gradient" columns={2} />
      </div>
      <p>
        On Sunday Jan 28th, 800 people -from the villages, Aurovilians,
        Newcomers, volunteers and guests- joined the walk from Irumbai Temple
        through Kottakarai/Bharatipuram, Auroville/Tibetan Pavilion,
        Edayanchavadi, and Kuilapalayam, where we ended at Aikiyam School. Sri M
        gave a short talk in Tamil and English and plant a tree at each stop at
        village/outreach schools where we were hosted by the villagers, by women
        groups and youth.
      </p>
      <p>
        Simple meals, breakfast at Tibetan Pavilion and lunch at Aikiyam School,
        was offered to all. After lunch, a bus shuttle brought the participants
        back to their respective village.{' '}
      </p>
      <p>
        The participation was extending our expectations, it was overwhelming to
        joyfully share this WALK OF HOPE.
      </p>
      <p>
        On Monday Jan 29th, we walked from Auroville through Alankuppam, ending
        at the Mosque in Rayapettai. This time it was a more ‚intimate‘ event,
        with about 100 participants, among them many school kids. We were warmly
        received by the muslim community in the Rayapettai Mosque, where our
        beautiful interaction culminated in the Imam singing for us verses of
        the Quaran.
      </p>
      <p>
        The WALK OF HOPE is the co-creation of the hosting team, "Restorative
        Auroville" (L'aura, Kati, Helene, Shanti and Janet), with Prisma
        (Franz), AVAG - Auroville Village Action Group (Moris), Aikiyam School
        (Shankar, headmaster), many other Aurovilians and volunteers.
      </p>
      <p>
        The idea for a peace walk emerged from our projects like the FilmFest
        "restoring connection" and the Cross-Cultural Dialogue, where many
        shared a real longing to feel more unity among Aurovilians, and between
        Auroville and the bioregion. Several also expressed a real fear and
        concern that if we do not work on our relationship and collaboration
        with the neighbouring villages, we are risking our future. The spark for
        the WALK OF HOPE was inspired by the experiences of fellow Aurovilians
        who walked with Sri M to Kashmir.
      </p>
      <p>
        We are happy that so many people followed our invitation for this
        activity; it appealed to all backgrounds, and language was not a barrier
        - hence, walking instead of talking - together and towards each other!
      </p>
      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
