// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import startsWith from 'lodash/startsWith'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------- Function
// ----------------------------------------------------------------------------
/** withUrl */
const withUrl = (checkThis, data) => {
  const { websiteUrl, nakedWebsiteUrl } = data
  let returnString = ''

  if (!startsWith(checkThis, 'http')) {
    if (startsWith(checkThis, '/')) {
      returnString = `${nakedWebsiteUrl}${checkThis}`
    } else {
      returnString = `${websiteUrl}${checkThis}`
    }
  } else {
    returnString = checkThis
  }

  return returnString
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withUrl
