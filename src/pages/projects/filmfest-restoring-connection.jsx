// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import PDFReader from '../../components/PDFReader'
import seoHelper from '../../methods/seoHelper'

import nvcX42 from '../../assets/gallery/nvcX42.jpg'
import nvcX43 from '../../assets/gallery/nvcX43.jpg'
import nvcX44 from '../../assets/gallery/nvcX44.jpg'
import nvcX37 from '../../assets/gallery/nvcX37.jpg'

const photos = [
  { src: nvcX43, width: 600, height: 399 },
  { src: nvcX44, width: 600, height: 399 },
  { src: nvcX37, width: 600, height: 400 },
  { src: nvcX42, width: 600, height: 399 },
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'FilmFest: Restoring Connection',
  nakedPageSlug: 'projects/filmfest-restoring-connection',
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
          <Link to="/projects/past">Past Projects</Link>
        </BItem>
        <BItem>"Restoring Connection" FilmFest</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">"Restoring Connection" FilmFest</h1>
      <p>
        Restorative Auroville hosted a 6-day Film Festival on the theme of
        “Restoring Connection” in October 2016 as part of our larger Restorative
        Circles project in Auroville, where we are working to raise awareness
        about Restorative Justice and hopefully contribute to building a justice
        system that is in alignment with our Auroville values. With the
        FilmFest, we wanted to offer yet another approach and medium through
        which to explore the subject, as not everybody will choose to come to
        our workshops or attend a live Restorative Circle.
      </p>
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
        It was special for us as a team to receive support from friends in
        hosting these dialogue spaces. For example, Bridget (who is Irish)
        facilitated the dialogue after the Irish movie “Five Minutes of Heaven,”
        Niva (who is Israeli) the Israeli movie “One Day After Peace,” and Neill
        (who is South African) the South African movie “On the Path to
        Forgiveness.”
      </p>
      <div className="mask-p">
        <Images photos={photos} loader="gradient" columns={2} />
      </div>
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
      <p>
        People expressed a longing that as a community we would really learn to
        love, to forgive, to share, and to overcome our conditioned ideas of
        superiority versus inferiority.
      </p>
      <PDFReader title="Flow" url="/project-assets/filmfest/filmfest.pdf" />
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
