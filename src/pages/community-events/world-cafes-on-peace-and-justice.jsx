// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'World Cafés on Peace & Justice',
  nakedPageSlug: 'community-events/world-cafes-on-peace-and-justice',
  pageAbstract: 'Coming soon.',
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
          <Link to="/community-events">Community Events</Link>
        </BItem>
        <BItem>World Cafés on Peace & Justice</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">World Cafés on Peace & Justice</h1>
      <p>
        In the first months of 2016, Restorative Auroville hosted a series of
        conversations in the co-creative World Café format. They took place on
        Monday evenings in the coffee shop “Le Zephyr” in Auroville.
      </p>
      <p>
        What can we do as a community to openly share past pain and to restore
        connection and trust? This was the starting point and central question
        for these 3 evenings.
      </p>
      <p>
        Community members, volunteers and guests, all were invited to join us in
        exploring different ways of healing relationships which have been
        developed in various parts of the world.
      </p>
      <p>
        The first World Café, January 25th, was dedicated to the truth &
        reconciliation process using the example of South Africa, where the
        philosophy of Ubuntu - "I am because you are" -
      </p>
      <p>is the strong basis for community building.</p>
      <p>
        It started with a short documentary on the Truth and Reconciliation
        Commission (TRC) of 1996-1998, set up by Nelson Mandela and chaired by
        Archbishop Desmond Tutu, who also appears in an interview. (1)
      </p>
      <p>
        How to create unity in community was the subject of the second evening
        on March 7th, using the example of Nepal.
      </p>
      <p>
        We showed excerpts from the documentary "Raamro Aakha Ma - In the Eyes
        of the Good", telling the story of former Maoist combatants, conflict
        victims, and government officials engaging in a restorative dialogue,
        following the aftermath of the 10-years armed conflict in Nepal.
      </p>
      <p>One of the dialogue participants highlights:</p>
      <p>
        "Without other human beings, we are like fish without water. In this
        peace process there is a need for unity among everybody. Until we are
        united, we will not get justice, we will not achieve peace in our
        society." (2)
      </p>
      <p>
        In the third Café on April 14th we explored a culturally-based healing
        process of Canadian First Nations. They still suffer from the
        devastating impacts of having been forced into Residential Schools for
        more than hundred years. This coercive assimilation practice of the
        Ministry of Indian Affairs dramatically shattered Aboriginal cultures,
        children, families and communities throughout North America.
      </p>
      <p>
        The evening began with excerpts from a documentary of the Choctaw Film
        Maker Phil Lucas, which had started the fire that ignited the Canadian
        Residential School Healing Movement.
      </p>
      <p>
        After the films, we shared our thoughts and insights inspired by what we
        had seen on the screen. At our coffee tables, we also developed ideas of
        how we might use this process to restore connection in Auroville among
        our different cultures.
      </p>
      <p>
        These programs of "Restorative Auroville" (L'aura, Janet, Shanti, Kati
        and Hélène) were facilitated by David Nightingale and Kati.
      </p>
      <h3>References</h3>
      <ol className="mask-p">
        <li>
          find our short documentary-compilation on the Truth and Reconciliation
          Commission (13’56”) (https://www.youtube.com/watch?v=ULePHQT4Kso)
        </li>
        <li>
          “Raamro Aakha Ma - In the Eyes of the Good” (55’18”/ full length) in 6
          different languages on youtube:
          https://www.youtube.com/watch?v=_tGu7BM-6Xw&index=7&list=PLFBWNVuESzSgxSaVatdvFeSApjj0L9OvS
        </li>
        <li>
          “Healing the Hurts”, full length documentary (59’40”) on vimeo:
          https://vimeo.com/128567591
        </li>
      </ol>
      <div className="mask-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 2, max: 3 }}
        />
      </div>
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
