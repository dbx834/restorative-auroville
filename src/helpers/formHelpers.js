// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isEmpty from "lodash/isEmpty";
import replace from "lodash/replace";

import isEmail from "validator/lib/isEmail";
import isAlpha from "validator/lib/isAlphanumeric";

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** Check if a field has an error */
const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field]);

/** Check email is valid */
const validateEmail = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback("Please fill in your email.");
  } else {
    if (!isEmail(value)) {
      callback("That's not a valid email address!");
    } else {
      callback();
    }
  }
};

/** Check email is valid */
const validateMobile = (rule, value, callback) => {
  callback();
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
};

/** Check email is valid */
const validateCountry = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback("We'd like to know where you're from!");
  } else {
    callback();
  }
};

/** Check email is valid */
const validateCurrentLocation = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback("We'd like to know where you're currently living!");
  } else {
    callback();
  }
};

/** Check email is valid */
const validateWhatDrawsYou = (rule, value, callback) => {
  callback();
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
};

/** Check email is valid */
const validateComment = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback("Please fill in this detail.");
  } else {
    callback();
  }
};

/** Check name is valid */
const validateName = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback("Please fill in your name.");
  } else {
    if (!isAlpha(replace(value, " ", ""))) {
      callback("A name can have only characters (a-z, A-Z).");
    } else {
      callback();
    }
  }
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
const exportThis = {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
  validateCountry,
  validateCurrentLocation,
  validateWhatDrawsYou,
};

export default exportThis;
