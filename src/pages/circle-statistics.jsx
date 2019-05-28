// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
import { graphql } from 'gatsby'

// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'
import CircleByYear3 from '../components/graphs/CircleByYear3'
// import RadialGraph from '../components/graphs/RadialGraph'
import PieGraph from '../components/graphs/PieGraph'
import FeedbackGraph from '../components/graphs/FeedbackGraph'

import DisqusComments from '../components/DisqusComments'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Circle Statistics',
  nakedPageSlug: 'circle-statistics',
  pageAbstract:
    'Our dream: that our collective processes and individual posture would include: Being rooted in oneness; feeling a lived aspiration for this oneness, Walking towards each other with an open heart...',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    c1: file(relativePath: { eq: "circle-stats/c1.png" }) {
      ...defaultImage
    }
    c2: file(relativePath: { eq: "circle-stats/c2.png" }) {
      ...defaultImage
    }
    c3: file(relativePath: { eq: "circle-stats/c3.png" }) {
      ...defaultImage
    }
    c4: file(relativePath: { eq: "circle-stats/c4.png" }) {
      ...defaultImage
    }
    c5: file(relativePath: { eq: "circle-stats/c5.png" }) {
      ...defaultImage
    }
    c6: file(relativePath: { eq: "circle-stats/c6.png" }) {
      ...defaultImage
    }
    c7: file(relativePath: { eq: "circle-stats/c7.png" }) {
      ...defaultImage
    }
    c8: file(relativePath: { eq: "circle-stats/c8.png" }) {
      ...defaultImage
    }
    c9: file(relativePath: { eq: "circle-stats/c9.png" }) {
      ...defaultImage
    }
    c10: file(relativePath: { eq: "circle-stats/c10.png" }) {
      ...defaultImage
    }
    c11: file(relativePath: { eq: "circle-stats/c11.png" }) {
      ...defaultImage
    }
    c12: file(relativePath: { eq: "circle-stats/c12.png" }) {
      ...defaultImage
    }
    c13: file(relativePath: { eq: "circle-stats/c13.png" }) {
      ...defaultImage
    }
    c14: file(relativePath: { eq: "circle-stats/c14.png" }) {
      ...defaultImage
    }
    c15: file(relativePath: { eq: "circle-stats/c15.png" }) {
      ...defaultImage
    }
    c16: file(relativePath: { eq: "circle-stats/c16.png" }) {
      ...defaultImage
    }
    c17: file(relativePath: { eq: "circle-stats/c17.png" }) {
      ...defaultImage
    }
    c18: file(relativePath: { eq: "circle-stats/c18.png" }) {
      ...defaultImage
    }
    c19: file(relativePath: { eq: "circle-stats/c19.png" }) {
      ...defaultImage
    }
    c20: file(relativePath: { eq: "circle-stats/c20.png" }) {
      ...defaultImage
    }
    c21: file(relativePath: { eq: "circle-stats/c21.png" }) {
      ...defaultImage
    }
    c22: file(relativePath: { eq: "circle-stats/c22.png" }) {
      ...defaultImage
    }
    c23: file(relativePath: { eq: "circle-stats/c23.png" }) {
      ...defaultImage
    }
    c24: file(relativePath: { eq: "circle-stats/c24.png" }) {
      ...defaultImage
    }
    c25: file(relativePath: { eq: "circle-stats/c25.png" }) {
      ...defaultImage
    }
    c26: file(relativePath: { eq: "circle-stats/c26.png" }) {
      ...defaultImage
    }
    inprogress: file(relativePath: { eq: "circle-stats/inprogress.png" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const { data: d } = props

  const data = [
    {
      id: 29,
      named: 17,
      attended: 12,
      wordCloud: d.inprogress.childImageSharp.fluid,
      times: [
        {
          value: 29,
          time: 1556091351000,
          size: 2000,
          type: 0,
        },
        {
          value: 29,
          time: 1556091351000,
          size: 1000,
          type: 1,
        },
        {
          value: 29,
          time: 1557128151000,
          size: 1000,
          type: 2,
        },
        {
          value: 29,
          time: 1561188951000,
          size: 1000,
          type: 3,
        },
      ],
    },
    {
      id: 28,
      named: 48,
      attended: 19,
      wordCloud: d.inprogress.childImageSharp.fluid,
      times: [
        {
          value: 28,
          time: 1554622551000,
          size: 5000,
          type: 0,
        },
        {
          value: 28,
          time: 1554622551000,
          size: 2000,
          type: 1,
        },
        {
          value: 28,
          time: 1556696151000,
          size: 2000,
          type: 2,
        },
        {
          value: 28,
          time: 1557560151000,
          size: 2000,
          type: 3,
        },
        {
          value: 28,
          time: 1560756951000,
          size: 2000,
          type: 3,
        },
      ],
    },
    {
      id: 27,
      named: 34,
      attended: 27,
      wordCloud: d.inprogress.childImageSharp.fluid,
      times: [
        {
          value: 27,
          time: 1554363351000,
          size: 4000,
          type: 0,
        },
        {
          value: 27,
          time: 1554363351000,
          size: 3000,
          type: 1,
        },
        {
          value: 27,
          time: 1556177751000,
          size: 3000,
          type: 2,
        },
        {
          value: 27,
          time: 1557560151000,
          size: 3000,
          type: 3,
        },
        {
          value: 27,
          time: 1559374551000,
          size: 3000,
          type: 3,
        },
      ],
    },
    {
      id: 26,
      named: 39,
      attended: 11,
      wordCloud: d.c26.childImageSharp.fluid,
      times: [
        {
          value: 26,
          time: 1543276800000,
          size: 4000,
          type: 0,
        },
        {
          value: 26,
          time: 1543276800000,
          size: 1000,
          type: 1,
        },
        {
          value: 26,
          time: 1544400000000,
          size: 1000,
          type: 2,
        },
        {
          value: 26,
          time: 1544427351000,
          size: 1000,
          type: 2,
        },
        {
          value: 26,
          time: 1552030551000,
          size: 1000,
          type: 3,
        },
      ],
    },
    {
      id: 25,
      named: 30,
      attended: 19,
      wordCloud: d.c25.childImageSharp.fluid,
      times: [
        {
          value: 25,
          time: 1542326400000,
          size: 3000,
          type: 0,
        },
        {
          value: 25,
          time: 1542326400000,
          size: 2000,
          type: 1,
        },
        {
          value: 25,
          time: 1544140800000,
          size: 2000,
          type: 2,
        },
      ],
    },
    {
      id: 24,
      named: 64,
      attended: 19,
      wordCloud: d.c24.childImageSharp.fluid,
      times: [
        {
          value: 24,
          time: 1541376000000,
          size: 7000,
          type: 0,
        },
        {
          value: 24,
          time: 1541376000000,
          size: 2000,
          type: 1,
        },
        {
          value: 24,
          time: 1544054400000,
          size: 2000,
          type: 2,
        },
        {
          value: 24,
          time: 1549713600000,
          size: 2000,
          type: 3,
        },
      ],
    },
    {
      id: 23,
      named: 25,
      attended: 12,
      wordCloud: d.c23.childImageSharp.fluid,
      times: [
        {
          value: 23,
          time: 1539820800000,
          size: 3000,
          type: 0,
        },
        {
          value: 23,
          time: 1539820800000,
          size: 1000,
          type: 1,
        },
        {
          value: 23,
          time: 1541635200000,
          size: 1000,
          type: 2,
        },
      ],
    },
    {
      id: 22,
      named: 12,
      attended: 10,
      wordCloud: d.c22.childImageSharp.fluid,
      times: [
        {
          value: 22,
          time: 1533513600000,
          size: 1200,
          type: 0,
        },
        {
          value: 22,
          time: 1533513600000,
          size: 1000,
          type: 1,
        },
        {
          value: 22,
          time: 1534118400000,
          size: 1000,
          type: 2,
        },
      ],
    },
    {
      id: 21,
      named: 10,
      attended: 6,
      wordCloud: d.c21.childImageSharp.fluid,
      times: [
        {
          value: 21,
          time: 1532131200000,
          size: 1000,
          type: 0,
        },
        {
          value: 21,
          time: 1532131200000,
          size: 600,
          type: 1,
        },
        {
          value: 21,
          time: 1532736000000,
          size: 600,
          type: 2,
        },
      ],
    },
    {
      id: 20,
      named: 9,
      attended: 7,
      wordCloud: d.c20.childImageSharp.fluid,
      times: [
        {
          value: 20,
          time: 1525392000000,
          size: 900,
          type: 0,
        },
        {
          value: 20,
          time: 1525392000000,
          size: 700,
          type: 1,
        },
        {
          value: 20,
          time: 1525651200000,
          size: 700,
          type: 2,
        },
      ],
    },
    {
      id: 19,
      named: 11,
      attended: 10,
      wordCloud: d.c19.childImageSharp.fluid,
      times: [
        {
          value: 19,
          time: 1519776000000,
          size: 1100,
          type: 0,
        },
        {
          value: 19,
          time: 1519776000000,
          size: 1000,
          type: 1,
        },
        {
          value: 19,
          time: 1521676800000,
          size: 1000,
          type: 2,
        },
        {
          value: 19,
          time: 1523059200000,
          size: 1000,
          type: 2,
        },
      ],
    },
    {
      id: 18,
      named: 7,
      attended: 5,
      wordCloud: d.c18.childImageSharp.fluid,
      times: [
        {
          value: 18,
          time: 1519776000000,
          size: 700,
          type: 0,
        },
        {
          value: 18,
          time: 1519776000000,
          size: 500,
          type: 1,
        },
        {
          value: 18,
          time: 1521331200000,
          size: 500,
          type: 2,
        },
        {
          value: 18,
          time: 1538352000000,
          size: 500,
          type: 3,
        },
      ],
    },
    {
      id: 17,
      named: 67,
      attended: 26,
      wordCloud: d.c17.childImageSharp.fluid,
      times: [
        {
          value: 17,
          time: 1518480000000,
          size: 7000,
          type: 0,
        },
        {
          value: 17,
          time: 1518480000000,
          size: 3000,
          type: 1,
        },
        {
          value: 17,
          time: 1520640000000,
          size: 3000,
          type: 2,
        },
        {
          value: 17,
          time: 1521158400000,
          size: 3000,
          type: 2,
        },
        {
          value: 17,
          time: 1521763200000,
          size: 3000,
          type: 2,
        },
        {
          value: 17,
          time: 1522368000000,
          size: 3000,
          type: 2,
        },
        {
          value: 17,
          time: 1539561600000,
          size: 3000,
          type: 3,
        },
      ],
    },
    {
      id: 16,
      named: 34,
      attended: 14,
      wordCloud: d.c16.childImageSharp.fluid,
      times: [
        {
          value: 16,
          time: 1508198400000,
          size: 3400,
          type: 0,
        },
        {
          value: 16,
          time: 1508198400000,
          size: 1400,
          type: 1,
        },
        {
          value: 16,
          time: 1510876800000,
          size: 1400,
          type: 2,
        },
        {
          value: 16,
          time: 1513900800000,
          size: 1400,
          type: 3,
        },
      ],
    },
    {
      id: 15,
      named: 7,
      attended: 7,
      wordCloud: d.c15.childImageSharp.fluid,
      times: [
        {
          value: 15,
          time: 1507593600000,
          size: 700,
          type: 0,
        },
        {
          value: 15,
          time: 1507593600000,
          size: 700,
          type: 1,
        },
        {
          value: 15,
          time: 1508198400000,
          size: 700,
          type: 2,
        },
        {
          value: 15,
          time: 1508803200000,
          size: 700,
          type: 2,
        },
        {
          value: 15,
          time: 1508803200000,
          size: 700,
          type: 2,
        },
      ],
    },
    {
      id: 14,
      named: 14,
      attended: 4,
      wordCloud: d.c14.childImageSharp.fluid,
      times: [
        {
          value: 14,
          time: 1498003200000,
          size: 1400,
          type: 0,
        },
        {
          value: 14,
          time: 1498003200000,
          size: 400,
          type: 1,
        },
        {
          value: 14,
          time: 1502064000000,
          size: 400,
          type: 2,
        },
        {
          value: 14,
          time: 1506297600000,
          size: 400,
          type: 3,
        },
      ],
    },
    {
      id: 13,
      named: 9,
      attended: 6,
      wordCloud: d.c13.childImageSharp.fluid,
      times: [
        {
          value: 13,
          time: 1491868800000,
          size: 900,
          type: 0,
        },
        {
          value: 13,
          time: 1491868800000,
          size: 600,
          type: 1,
        },
        {
          value: 13,
          time: 1494288000000,
          size: 600,
          type: 2,
        },
      ],
    },
    {
      id: 12,
      named: 16,
      attended: 6,
      wordCloud: d.c12.childImageSharp.fluid,
      times: [
        {
          value: 12,
          time: 1487116800000,
          size: 1600,
          type: 0,
        },
        {
          value: 12,
          time: 1487116800000,
          size: 600,
          type: 1,
        },
        {
          value: 12,
          time: 1489363200000,
          size: 600,
          type: 2,
        },
        {
          value: 12,
          time: 1492387200000,
          size: 600,
          type: 3,
        },
      ],
    },
    {
      id: 11,
      named: 84,
      attended: 26,
      wordCloud: d.c11.childImageSharp.fluid,
      times: [
        {
          value: 11,
          time: 1485388800000,
          size: 8500,
          type: 0,
        },
        {
          value: 11,
          time: 1485388800000,
          size: 2500,
          type: 1,
        },
        {
          value: 11,
          time: 1487462400000,
          size: 2500,
          type: 2,
        },
        {
          value: 11,
          time: 1487980800000,
          size: 2500,
          type: 2,
        },
        {
          value: 11,
          time: 1492214400000,
          size: 2500,
          type: 2,
        },
        {
          value: 11,
          time: 1492732800000,
          size: 2500,
          type: 2,
        },
      ],
    },
    {
      id: 10,
      named: 9,
      attended: 4,
      wordCloud: d.c10.childImageSharp.fluid,
      times: [
        {
          value: 10,
          time: 1481760000000,
          size: 900,
          type: 0,
        },
        {
          value: 10,
          time: 1481760000000,
          size: 400,
          type: 1,
        },
        {
          value: 10,
          time: 1485475200000,
          size: 400,
          type: 2,
        },
        {
          value: 10,
          time: 1492732800000,
          size: 400,
          type: 3,
        },
      ],
    },
    {
      id: 9,
      named: 16,
      attended: 12,
      wordCloud: d.c9.childImageSharp.fluid,
      times: [
        {
          value: 9,
          time: 1469577600000,
          size: 1600,
          type: 0,
        },
        {
          value: 9,
          time: 1469577600000,
          size: 1200,
          type: 1,
        },
        {
          value: 9,
          time: 1470960000000,
          size: 1200,
          type: 2,
        },
        {
          value: 9,
          time: 1472169600000,
          size: 1200,
          type: 2,
        },
      ],
    },
    {
      id: 8,
      named: 6,
      attended: 6,
      wordCloud: d.c8.childImageSharp.fluid,
      times: [
        {
          value: 8,
          time: 1467244800000,
          size: 600,
          type: 0,
        },
        {
          value: 8,
          time: 1467244800000,
          size: 600,
          type: 1,
        },
        {
          value: 8,
          time: 1468540800000,
          size: 600,
          type: 2,
        },
        {
          value: 8,
          time: 1469318400000,
          size: 600,
          type: 2,
        },
        {
          value: 8,
          time: 1483660800000,
          size: 600,
          type: 3,
        },
      ],
    },
    {
      id: 7,
      named: 36,
      attended: 16,
      wordCloud: d.c7.childImageSharp.fluid,
      times: [
        {
          value: 7,
          time: 1464825600000,
          size: 3600,
          type: 0,
        },
        {
          value: 7,
          time: 1464825600000,
          size: 1600,
          type: 1,
        },
        {
          value: 7,
          time: 1466121600000,
          size: 1600,
          type: 2,
        },
        {
          value: 7,
          time: 1467244800000,
          size: 1600,
          type: 2,
        },
        {
          value: 7,
          time: 1477612800000,
          size: 1600,
          type: 3,
        },
      ],
    },
    {
      id: 6,
      named: 23,
      attended: 9,
      wordCloud: d.c6.childImageSharp.fluid,
      times: [
        {
          value: 6,
          time: 1465603200000,
          size: 2300,
          type: 0,
        },
        {
          value: 6,
          time: 1465603200000,
          size: 900,
          type: 1,
        },
        {
          value: 6,
          time: 1466812800000,
          size: 900,
          type: 2,
        },
        {
          value: 6,
          time: 1471305600000,
          size: 900,
          type: 3,
        },
      ],
    },
    {
      id: 5,
      named: 18,
      attended: 15,
      wordCloud: d.c5.childImageSharp.fluid,
      times: [
        {
          value: 5,
          time: 1459296000000,
          size: 2000,
          type: 0,
        },
        {
          value: 5,
          time: 1459296000000,
          size: 1500,
          type: 1,
        },
        {
          value: 5,
          time: 1460332800000,
          size: 1500,
          type: 2,
        },
        {
          value: 5,
          time: 1478217600000,
          size: 1500,
          type: 3,
        },
      ],
    },
    {
      id: 4,
      named: 15,
      attended: 8,
      wordCloud: d.c4.childImageSharp.fluid,
      times: [
        {
          value: 4,
          time: 1455235200000,
          size: 1500,
          type: 0,
        },
        {
          value: 4,
          time: 1455235200000,
          size: 800,
          type: 1,
        },
        {
          value: 4,
          time: 1458432000000,
          size: 800,
          type: 2,
        },
        {
          value: 4,
          time: 1460851200000,
          size: 800,
          type: 3,
        },
      ],
    },
    {
      id: 3,
      named: 40,
      attended: 15,
      wordCloud: d.c3.childImageSharp.fluid,
      times: [
        {
          value: 3,
          time: 1457308800000,
          size: 4000,
          type: 0,
        },
        {
          value: 3,
          time: 1457308800000,
          size: 1500,
          type: 1,
        },
        {
          value: 3,
          time: 1458432000000,
          size: 1500,
          type: 2,
        },
        {
          value: 3,
          time: 1460851200000,
          size: 1500,
          type: 3,
        },
      ],
    },
    {
      id: 2,
      named: 45,
      attended: 26,
      wordCloud: d.c2.childImageSharp.fluid,
      times: [
        {
          value: 2,
          time: 1455580800000,
          size: 4500,
          type: 0,
        },
        {
          value: 2,
          time: 1455580800000,
          size: 2600,
          type: 1,
        },
        {
          value: 2,
          time: 1455926400000,
          size: 2600,
          type: 2,
        },
        {
          value: 2,
          time: 1458345600000,
          size: 2600,
          type: 3,
        },
      ],
    },
    {
      id: 1,
      named: 6,
      attended: 6,
      wordCloud: d.c1.childImageSharp.fluid,
      times: [
        {
          value: 1,
          time: 1450310400000,
          size: 600,
          type: 0,
        },
        {
          value: 1,
          time: 1450310400000,
          size: 600,
          type: 1,
        },
        {
          value: 1,
          time: 1451433600000,
          size: 600,
          type: 2,
        },
        {
          value: 1,
          time: 1461196800000,
          size: 600,
          type: 3,
        },
      ],
    },
  ]

  return (
    <StandardPage className="" seoData={seoData} {...props}>
      <h1 className="mask-h3">Circle Statistics</h1>
      <h2 className="mask-h4">Circles at a glance</h2>
      <CircleByYear3 data={data} />
      <PieGraph />
      <FeedbackGraph />
      <br />
      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
