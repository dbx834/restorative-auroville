// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
import isEmpty from 'lodash/isEmpty'
// import replace from 'lodash/replace'

import isEmail from 'validator/lib/isEmail'
// import isAlpha from 'validator/lib/isAlphanumeric'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** Check if a field has an error */
export const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field])

/** Check email is valid */
export const validateEmail = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback('Please fill in your email.')
  } else {
    if (!isEmail(value)) {
      callback('Please enter a valid email address.')
    } else {
      callback()
    }
  }
}

/** Check email is valid */
export const validateMobile = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

/** Check email is valid */
export const validateCountry = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("We'd like to know where you're from!")
  // } else {
  //   callback()
  // }
}

/** Check email is valid */
export const validateCurrentLocation = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("We'd like to know where you're currently living!")
  // } else {
  //   callback()
  // }
}

/** Check email is valid */
export const validateWhatDrawsYou = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

/** Check email is valid */
export const validateComment = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback('Please fill in this detail.')
  // } else {
  //   callback()
  // }
}

/** Check name is valid */
export const validateName = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback('Please fill in your name.')
  } else {
    callback()
  }
}

/** Check email is valid */
export const validateExperience = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback('Please fill in this detail.')
  // } else {
  //   callback()
  // }
}
