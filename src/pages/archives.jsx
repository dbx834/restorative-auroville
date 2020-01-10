// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

import List from '@bodhi-project/components/lib/list/gatsby'
import '@bodhi-project/components/lib/list/style.less'
import '@bodhi-project/components/lib/list/left-right.less'
import '@bodhi-project/components/lib/standard-renderers/article/vertical.less'
import '@bodhi-project/components/lib/standard-renderers/standard-content/bits/embed.less'
import '@bodhi-project/components/lib/features/loading-detection/style.less'
import '@bodhi-project/components/lib/features/tag-filter/style.less'
import '@bodhi-project/components/lib/features/category-filter/style.less'
import '@bodhi-project/components/lib/features/chronology-sort/style.less'
import '@bodhi-project/components/lib/features/year-filter/style.less'

import { Box, Button } from 'grommet'

import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/collapse/style/css'

import timestamp from '@bodhi-project/components/lib/methods/timestamp'
import smallKey from '@bodhi-project/components/lib/methods/smallKey'
import { tags } from '@bodhi-project/components/lib/methods/mockTag'

import FileTextIcon from 'react-feather/dist/icons/file-text'
import YoutubeIcon from 'react-feather/dist/icons/youtube'
import HeadphonesIcon from 'react-feather/dist/icons/headphones'
import CopyIcon from 'react-feather/dist/icons/copy'
import ImageIcon from 'react-feather/dist/icons/copy'
import BarChartIcon from 'react-feather/dist/icons/bar-chart'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../styles/pages/archives.less'

import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'
import CATFeedbackResults from '../components/graphs/CATFeedbackResults'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Panel } = Collapse
const { Fragment } = React
const pageData = {
  pageTitle: 'Archives',
  nakedPageSlug: 'archives',
  pageAbstract:
    'Here’s a compilation of some additional project proposals, reports, public presentations, teaching material, and more.',
}

const seoData = seoHelper(pageData)

const categories = [
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Flashmob',
    categoryShortCode: 'flashmob',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Public Presentation',
    categoryShortCode: 'publicPresentation',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Projects & Reports',
    categoryShortCode: 'projectsAndReports',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Interview',
    categoryShortCode: 'interview',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Video',
    categoryShortCode: 'video',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Document',
    categoryShortCode: 'document',
    __typename: 'Category',
  },
]

const conf = {
  wrapper: 'left-right',
  articleType: 'article',
  layout: 'vertical',
  buttonsAsLinks: false,
  render: ['title', 'abstract', 'resources'],
  filterMethod: {
    categories: 'exclusive',
  },
  resourceConf: {
    render: ['resources'],
  },
  hydrate: {
    chronology: 'recent-first',
  },
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    gal1: file(relativePath: { eq: "archives/public2017/img1.jpg" }) {
      ...max900
    }
    gal2: file(relativePath: { eq: "archives/public2017/img2.jpg" }) {
      ...max900
    }
    gal3: file(relativePath: { eq: "archives/public2017/img3.jpg" }) {
      ...max900
    }
    img1: file(relativePath: { eq: "archives/signs/img00001.jpg" }) {
      ...max900
    }
    img2: file(relativePath: { eq: "archives/signs/img00002.jpg" }) {
      ...max900
    }
    img3: file(relativePath: { eq: "archives/signs/img00003.jpg" }) {
      ...max900
    }
    img4: file(relativePath: { eq: "archives/signs/img00004.jpg" }) {
      ...max900
    }
    img5: file(relativePath: { eq: "archives/signs/img00005.jpg" }) {
      ...max900
    }
    img6: file(relativePath: { eq: "archives/signs/img00006.jpg" }) {
      ...max900
    }
    phot1: file(relativePath: { eq: "archives/eye-gazing/img00001.jpg" }) {
      ...max900
    }
    phot2: file(relativePath: { eq: "archives/eye-gazing/img00002.jpg" }) {
      ...max900
    }
    phot3: file(relativePath: { eq: "archives/eye-gazing/img00003.jpg" }) {
      ...max900
    }
    phot4: file(relativePath: { eq: "archives/eye-gazing/img00004.jpg" }) {
      ...max900
    }
    phot5: file(relativePath: { eq: "archives/eye-gazing/img00005.jpg" }) {
      ...max900
    }
    phot6: file(relativePath: { eq: "archives/eye-gazing/img00006.jpg" }) {
      ...max900
    }
    phot7: file(relativePath: { eq: "archives/eye-gazing/img00007.jpg" }) {
      ...max900
    }
    phot8: file(relativePath: { eq: "archives/eye-gazing/img00008.jpg" }) {
      ...max900
    }
    phot9: file(relativePath: { eq: "archives/eye-gazing/img00009.jpg" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const data = [
    {
      key: smallKey(),
      title: 'RC Handbook – Sample Pages',
      cover: 'na',
      publishedAt: timestamp('03.01.2019'),
      route: '#1',
      abstract: undefined,
      hasTags: ['dummy2'],
      hasCategories: ['document'],
      resources: [
        {
          title: 'English sample page',
          link:
            'https://www.restorativeauroville.org/pdfs2/rc-poster-english-r.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'French sample page (coming soon)',
          disabled: true,
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'RC Poster',
      cover: 'na',
      publishedAt: timestamp('02.01.2019'),
      route: '#1',
      abstract: undefined,
      hasTags: ['dummy2'],
      hasCategories: ['document'],
      resources: [
        {
          title: 'English version',
          link:
            'https://www.restorativeauroville.org/pdfs2/rc-poster-english-r.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'Tamil version',
          link:
            'https://www.restorativeauroville.org/pdfs2/rc-poster-tamil-r.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'French version (coming soon)',
          disabled: true,
          icon: <FileTextIcon />,
        },
        {
          title: 'Spanish version',
          link:
            'https://www.restorativeauroville.org/pdfs2/rc-poster-spanish-r.pdf',
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Our RC-channel on YouTube (2011‒present)',
      cover: 'na',
      publishedAt: timestamp('01.01.2019'),
      route: '#1',
      abstract: 'With somewhat regular updates…',
      hasTags: ['dummy2'],
      hasCategories: ['video'],
      resources: [
        {
          title: 'Videos',
          link:
            'https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
          icon: <YoutubeIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title:
        '"Experiences with training and facilitating Restorative Circles and conflict resolution" (2018)',
      cover: 'na',
      publishedAt: timestamp('02.01.2018'),
      route: '#1',
      abstract: (
        <p>
          Edwin Rutsch, of "
          <Link
            to="http://cultureofempathy.com"
            style={{ display: 'inline-block' }}
          >
            Center for Building a Culture of Empathy
          </Link>
          ," interviewed L’aura on her RC work in Auroville.
        </p>
      ),
      hasTags: ['dummy2'],
      hasCategories: ['interview'],
      resources: [
        {
          title: 'Interview',
          link:
            'https://www.youtube.com/watch?time_continue=2570&v=jy9C8tyCxkg',
          icon: <YoutubeIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Walk of Hope in Auroville & the Bioregion (2018)',
      cover: 'na',
      publishedAt: timestamp('01.01.2018'),
      route: '#1',
      abstract: (
        <p>
          We invited{' '}
          <Link
            to="http://satsang-foundation.org/"
            style={{ display: 'inline-block' }}
          >
            Sri M to offer a "Walk of Hope"
          </Link>{' '}
          through Auroville and the bioregion, as a symbol of togetherness.
        </p>
      ),
      hasTags: ['dummy2'],
      hasCategories: ['projectsAndReports'],
      resources: [
        {
          title: 'Project Proposal',
          link:
            'https://www.restorativeauroville.org/pdfs2/walk-of-hope-project-proposal.pdf',
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Create Auroville Together: Restorative Circles" (2017)',
      cover: 'na',
      publishedAt: timestamp('02.01.2017'),
      route: '#1',
      abstract: 'A public presentation about RC at Unity Pavilion, Auroville.',
      hasTags: ['dummy2'],
      hasCategories: ['publicPresentation', 'video'],
      resources: [
        {
          title: 'Photos',
          icon: <ImageIcon />,
          embed: (
            <Fragment>
              <Gallery
                data={props.data}
                lookup="gal"
                columns={{ min: 3, max: 3 }}
                Img={Img}
              />
            </Fragment>
          ),
        },
        {
          title: 'Feedback results',
          icon: <BarChartIcon />,
          embed: <CATFeedbackResults />,
        },
        {
          title: 'Video Part 1',
          link:
            'https://www.youtube.com/watch?v=n1Uf1IYQ2_Y&t=10s&index=9&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
          icon: <YoutubeIcon />,
        },
        {
          title: 'Video Part 2',
          link:
            'https://www.youtube.com/watch?v=ngOhj-NhKJo&t=0s&index=8&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
          icon: <YoutubeIcon />,
        },
        {
          title: '"Auroville Radio" recording',
          link: 'https://www.aurovilleradio.org/cat-on-rc-in-auroville/',
          icon: <HeadphonesIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Justice Questionnaire (2017)',
      cover: 'na',
      publishedAt: timestamp('01.01.2017'),
      route: '#1',
      abstract:
        'We sent out a questionnaire to the entire Auroville community in an attempt to raise awareness about our very basic human need for justice, and to hear the community’s thoughts on this topic.',
      hasTags: ['dummy2'],
      hasCategories: ['projectsAndReports'],
      resources: [
        {
          title: "Justice in Auroville – What's Your Opinion?",
          link:
            'https://www.restorativeauroville.org/pdfs2/justice-in-auroville-what-is-your-opinion.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'Results',
          link:
            'https://www.restorativeauroville.org/pdfs2/justice-questionnaire-result.pdf',
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'FilmFest: "Restoring Connection" (2016)',
      cover: 'na',
      publishedAt: timestamp('03.01.2016'),
      route: '#1',
      abstract:
        'We screened documentaries and feature films about peace and reconciliation work from around the world, in an attempt to inspire a movement towards restorative justice in Auroville.',
      hasTags: ['dummy2'],
      hasCategories: ['projectsAndReports'],
      resources: [
        {
          title: 'Project Proposal',
          link:
            'https://www.restorativeauroville.org/pdfs2/restoring-connection-film-fest-project-proposal.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'Report',
          link:
            'https://www.restorativeauroville.org/pdfs2/filmfest-report.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: '"Auroville Today" article',
          link: '/writings/restoring-connection',
          icon: <CopyIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Restorative Dialogue across Cultures (2016)',
      cover: 'na',
      publishedAt: timestamp('02.01.2016'),
      route: '#1',
      abstract:
        'We invited Duke Duchscherer (USA, Canada) to co-host a Restorative Dialogue with us, in an attempt to bridge the gap between Aurovilians from the locality and Aurovilians from other places in the world.',
      hasTags: ['dummy2'],
      hasCategories: ['projectsAndReports'],
      resources: [
        {
          title: 'Project Proposal',
          link:
            'https://www.restorativeauroville.org/pdfs2/cross-cultural-restorative-dialogue-project-proposal.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'Report',
          link:
            'https://www.restorativeauroville.org/pdfs2/cross-cultural-dialogue-report.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'Report Annexe',
          link:
            'https://www.restorativeauroville.org/pdfs2/cross-cultural-dialogue-report-annexe.pdf',
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Flashmob: Spontaneous Happening (2016)',
      cover: 'na',
      publishedAt: timestamp('01.01.2016'),
      route: '#1',
      abstract:
        'We spontaneously painted wooden planks with conflict-transformation-related phrases and secretly (in the middle of the night) hung them up along Auroville’s roads, to inspire the unexpected. However, it wasn’t long until someone else (who?) decided that this was too outrageous and secretly took them down. How sad.',
      hasTags: ['dummy2'],
      hasCategories: ['flashmob'],
      resources: [
        {
          title: 'Photos',
          icon: <ImageIcon />,
          embed: (
            <Fragment>
              <Gallery
                data={props.data}
                lookup="img"
                columns={{ min: 3, max: 3 }}
                Img={Img}
              />
            </Fragment>
          ),
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Restorative Auroville Research Project (2015-17)',
      cover: 'na',
      publishedAt: timestamp('04.01.2015'),
      route: '#1',
      abstract:
        'In September 2015, we applied for a 1-year grant to support our Research Project to bring Restorative Circles to Auroville and to start exploring the possibilities of developing a Restorative Justice System here.',
      hasTags: ['dummy2'],
      hasCategories: ['projectsAndReports'],
      resources: [
        {
          title: 'Project Proposal',
          link:
            'https://www.restorativeauroville.org/pdfs2/applied-research-restorative-circles-in-auroville.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: '6-month Report',
          link:
            'https://www.restorativeauroville.org/pdfs2/restorative-auroville-6-month-report.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: '1-year Report',
          link:
            'https://www.restorativeauroville.org/pdfs2/restorative-auroville-year-end-report.pdf',
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Flashmob: Eye-Gazing (2015)',
      cover: 'na',
      publishedAt: timestamp('03.01.2015'),
      route: '#1',
      abstract:
        'We spontaneously joined the "World’s Biggest Eye Contact Experiment" and flash-mobbed Solar Kitchen and the Visitors’ Centre.',
      hasTags: ['dummy2'],
      hasCategories: ['flashmob'],
      resources: [
        {
          title: 'Photos',
          icon: <ImageIcon />,
          embed: (
            <Fragment>
              <Gallery
                data={props.data}
                lookup="phot"
                columns={{ min: 3, max: 3 }}
                Img={Img}
              />
            </Fragment>
          ),
        },
      ],
    },
    {
      key: smallKey(),
      title: 'Truth & Reconciliation Process (2015)',
      cover: 'na',
      publishedAt: timestamp('02.01.2015'),
      route: '#1',
      abstract:
        "A process we wanted to offer the community to support healing and reconciliation, especially in connection to governance and feedback. However, it wasn't implemented.",
      hasTags: ['dummy2'],
      hasCategories: ['document'],
      resources: [
        {
          title: 'Draft document',
          link:
            'https://www.restorativeauroville.org/pdfs2/truth-and-reconcilation-process.pdf',
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: "Auroville's Conflict Resolution Policy (2015)",
      cover: 'na',
      publishedAt: timestamp('01.01.2015'),
      route: '#1',
      abstract: 'A work in progress, to be updated soon…',
      hasTags: ['dummy2'],
      hasCategories: ['document'],
      resources: [
        {
          title: 'Document',
          link:
            'https://www.restorativeauroville.org/pdfs2/auroville-conflict-resolution-policy-2015.pdf',
          icon: <FileTextIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'How Do We Dream It Could Be? (2014)',
      cover: 'na',
      publishedAt: timestamp('02.01.2014'),
      route: '#1',
      abstract:
        'We offered a public presentation about RC at Unity Pavilion, and explored about the question: "How do we dream justice could be in Auroville?"',
      hasTags: ['dummy2'],
      hasCategories: ['publicPresentation', 'video', 'audio'],
      resources: [
        {
          title: 'Our dream',
          link: 'https://www.restorativeauroville.org/pdfs2/how-we-dream.pdf',
          icon: <FileTextIcon />,
        },
        {
          title: 'Video (short intro)',
          link: 'https://www.youtube.com/watch?v=34yV9adMWNY',
          icon: <YoutubeIcon />,
        },
        {
          title: '"Auroville Radio" recording (full session)',
          link: 'https://www.aurovilleradio.org/restorative-circles/',
          icon: <HeadphonesIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: "Auroville Radio interviews L'aura on Restorative Circles (2014)",
      cover: 'na',
      publishedAt: timestamp('01.01.2014'),
      route: '#1',
      abstract:
        "Exploring 'justice' in Auroville, and how we can respond to conflict and so-called unacceptable behaviour in ways that hold all sides of the story and support moving forward as an entire community.",
      hasTags: ['dummy2'],
      hasCategories: ['interview'],
      resources: [
        {
          title: '"Auroville Radio" interview',
          link: 'https://www.aurovilleradio.org/laura-the-restorative-circles/',
          icon: <HeadphonesIcon />,
        },
      ],
    },
    {
      key: smallKey(),
      title: 'First-Ever RC Presentation in Auroville! (2011)',
      cover: 'na',
      publishedAt: timestamp('01.01.2011'),
      route: '#1',
      abstract:
        'Soon after Jason and L’aura returned from a training with Dominic Barter in the USA, they presented RC at Town Hall, Auroville. (Please excuse the terrible video quality!)',
      hasTags: ['dummy2'],
      hasCategories: ['publicPresentation'],
      resources: [
        {
          title: 'Video',
          link:
            'https://www.youtube.com/watch?v=YIUFjSzXn1Y&t=0s&index=7&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
          icon: <HeadphonesIcon />,
        },
      ],
    },
  ]

  return (
    <StandardPage className="archives-page" seoData={seoData} {...props}>
      <h1 className="mask-h3">Archives</h1>
      <p>
        Here’s a compilation of some additional project proposals, reports,
        public presentations, teaching material, and more.
      </p>
      <List
        Img={Img}
        Link={Link}
        Box={Box}
        Button={Button}
        loading={false}
        data={data}
        allCategories={categories}
        allTags={tags}
        strictChronology
        conf={conf}
      />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
