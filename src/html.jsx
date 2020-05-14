// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import InitializeMeta from '@bodhi-project/seo/lib/InitializeMeta'
import UpdateTitle from '@bodhi-project/seo/lib/UpdateTitle'
import WebsiteSchema from '@bodhi-project/seo/lib/WebsiteSchema'
import OrganisationSchema from '@bodhi-project/seo/lib/OrganisationSchema'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import indexImage from './images/banners/launch.jpg'

import data from './data/website.json'
// import './assets/third-party/gtag--UA-109854711-2'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
}

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: new Date(data.org.foundingDate).toISOString(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** HTML */
const HTML = props => {
  const { headComponents, body, postBodyComponents } = props

  return (
    <html lang="en" className="lk-loading normal" id="copy">
      <head>
        <meta name="fragment" content="!" />
        <meta
          name="google-site-verification"
          content={data.googleSiteVerification}
        />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${data.websiteName}`}</title>
        {headComponents}
      </head>
      <body>
        <InitializeMeta data={{ titleTemplate: `%s | ${data.websiteName}` }} />
        <UpdateTitle title={data.websiteAbstract} />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
        <link rel="stylesheet" href="/third-party/typekit.css" />
        <script async src="/third-party/ga.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (typeof window !== 'undefined') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${data.gaTrackingID}');
            }
            `,
          }}
        />
      </body>
    </html>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default HTML
