// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from '@bodhi-project/components/lib/Image'
import Images from '@bodhi-project/components/lib/Images'
import OutLink from '@bodhi-project/components/lib/OutLink'
import PDFReader from '@bodhi-project/components/lib/PDFReader'
import Video from '@bodhi-project/components/lib/Video'

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
  pageTitle: 'Restorative Circles in Aikiyam School',
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-aikiyam-school',
  pageAbstract:
    'We are sharing RC in Aikiyam School, one of Auroville’s outreach schools for children from Kindergarten to 8th Grade. After discussions with the administration and teachers of the school, a group of ten teachers has committed to learn about this process. It has been met with enthusiasm and curiosity, and we look forward to seeing how we can co-create an RC System for the school. The school has an overwhelming majority of teachers who are originally from the bioregion, and we are looking forward to seeing how they can adapt it to their cultural context.',
}

const seoData = seoHelper(pageData)

const photos = [
  { src: '/sbi-assets/aikiyam/aikiyam1.jpeg', width: 1280, height: 960 },
  { src: '/sbi-assets/aikiyam/aikiyam2.jpeg', width: 1280, height: 960 },
  { src: '/sbi-assets/aikiyam/aikiyam3.jpeg', width: 1032, height: 774 },
  { src: '/sbi-assets/aikiyam/aikiyam4.jpeg', width: 1032, height: 774 },
  { src: '/sbi-assets/aikiyam/aikiyam6.jpeg', width: 1280, height: 960 },
  { src: '/sbi-assets/aikiyam/aikiyam5.jpeg', width: 1280, height: 960 },
]

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
          <Link to="/system-building-initiatives">
            System-Building Initiatives
          </Link>
        </BItem>
        <BItem>Restorative Circles in Aikiyam School</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Restorative Circles in Aikiyam School</h1>
      <p>
        We are sharing RC in&nbsp;
        <OutLink to="https://www.aikiyamschool.org/">Aikiyam School</OutLink>,
        one of Auroville’s outreach schools for children from Kindergarten to
        8th Grade. After discussions with the administration and teachers of the
        school, a group of ten teachers has committed to learn about this
        process. It has been met with enthusiasm and curiosity, and we look
        forward to seeing how we can co-create an RC System for the school. The
        school has an overwhelming majority of teachers who are originally from
        the bioregion, and we are looking forward to seeing how they can adapt
        it to their cultural context.
      </p>
      <div style={{ maxWidth: 600 }} className="margin-p">
        <Video url="https://www.youtube.com/watch?v=6Ma-dnG53LU" />
      </div>
      <div className="margin-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 2, max: 3 }}
        />
      </div>
      <PDFReader url="https://www.restorativeauroville.org/sbi-assets/aikiyam/conflict-resolution.pdf" />
      &nbsp;
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
