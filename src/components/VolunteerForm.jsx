// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Form from "antd/lib/form";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/form/style/css";

import Select from "antd/lib/select";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/select/style/css";

import Input from "antd/lib/input";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/input/style/css";

import Button from "antd/lib/button";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
  validateCountry,
  validateCurrentLocation,
} from "../helpers/formHelpers";
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Contact Us",
  nakedPageSlug: "contact-us",
  pageAbstract: "Write to us at joylivinglearning@gmail.com.",
};

const seoData = seoHelper(pageData);

const {
  pageTitle,
  generalMetaData,
  twitterSummaryCardData,
  openGraphSummaryData,
  webpageSchemaData,
  breadcrumbSchemaData,
} = seoData;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({});
const pageWrapperClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class IndexPage extends React.Component {
  /** standard constructor. */
  constructor(props) {
    super(props);

    this.state = {
      loader: null,
      formSent: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** handleSubmit - Post to google spreadsheet. */
  componentDidMount() {
    this.props.form.validateFields();
  }

  /** handleSubmit - Post to google spreadsheet. */
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loader: true,
        });

        let {
          name,
          email,
          originCountry,
          currentPlace,
          aboutYourself,
          whatDrawsYou,
          whatSkills,
          whatAcknowledgement,
          anyOtherComment,
        } = values;

        name = isUndefined(name) ? " " : name;
        email = isUndefined(email) ? " " : email;
        originCountry = isUndefined(originCountry) ? " " : originCountry;
        currentPlace = isUndefined(currentPlace) ? " " : currentPlace;
        aboutYourself = isUndefined(aboutYourself) ? " " : aboutYourself;
        whatDrawsYou = isUndefined(whatDrawsYou) ? " " : whatDrawsYou;
        whatSkills = isUndefined(whatSkills) ? " " : whatSkills;
        whatAcknowledgement = isUndefined(whatAcknowledgement)
          ? " "
          : whatAcknowledgement;
        anyOtherComment = isUndefined(anyOtherComment) ? " " : anyOtherComment;

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbz5JIQcdqZVgIKOL1QfxRxXZtcouqV3NRSAgbKXKZqE6pFGF3w8/exec?email=${email}&name=${name}&originCountry=${originCountry}&currentPlace=${currentPlace}&aboutYourself=${aboutYourself}&whatDrawsYou=${whatDrawsYou}&whatSkills=${whatSkills}&whatAcknowledgement=${whatAcknowledgement}&anyOtherComment=${anyOtherComment}&callback=?`,
            {
              method: "GET",
              mode: "no-cors",
            },
          )
            .then(response => {
              this.setState({
                loader: false,
                formSent: true,
              });
            })
            .catch(error => {
              this.setState({
                loader: false,
              });
            });
        }, 1500);
      }
    });
  }

  /** standard renderer */
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;
    // Only show error after a field is touched.
    const nameError = isFieldTouched("name") && getFieldError("name");
    const emailError = isFieldTouched("email") && getFieldError("email");
    const originCountryError =
      isFieldTouched("originCountry") && getFieldError("originCountry");
    const currentPlaceError =
      isFieldTouched("currentPlace") && getFieldError("currentPlace");
    const aboutYourselfError =
      isFieldTouched("aboutYourself") && getFieldError("aboutYourself");
    const whatDrawsYouError =
      isFieldTouched("whatDrawsYou") && getFieldError("whatDrawsYou");
    const whatSkillsError =
      isFieldTouched("whatSkills") && getFieldError("whatSkills");
    const whatAcknowledgementError =
      isFieldTouched("whatAcknowledgement") &&
      getFieldError("whatAcknowledgement");
    const anyOtherCommentError =
      isFieldTouched("anyOtherComment") && getFieldError("anyOtherComment");

    return (
      <div>
        {this.state.formSent === false && (
          <Form onSubmit={this.handleSubmit}>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Name */}
            <FormItem
              validateStatus={nameError ? "error" : ""}
              help={nameError || ""}
            >
              {getFieldDecorator("name", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateName }],
              })(<Input placeholder="Name" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Email */}
            <FormItem
              validateStatus={emailError ? "error" : ""}
              help={emailError || ""}
            >
              {getFieldDecorator("email", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateEmail }],
              })(<Input placeholder="Email" />)}
            </FormItem>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Origin */}
            <FormItem
              validateStatus={originCountryError ? "error" : ""}
              help={originCountryError || ""}
            >
              {getFieldDecorator("originCountry", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateCountry }],
              })(<Input placeholder="What's your country of origin?" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Current Place */}
            <FormItem
              validateStatus={currentPlaceError ? "error" : ""}
              help={currentPlaceError || ""}
            >
              {getFieldDecorator("currentPlace", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateCurrentLocation }],
              })(<Input placeholder="Where are you living presently?" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ About Yourself */}
            <FormItem
              validateStatus={aboutYourselfError ? "error" : ""}
              help={aboutYourselfError || ""}
            >
              {getFieldDecorator("aboutYourself", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="Please tell us a little bit about you..."
                  autosize={{ minRows: 3, maxRows: 6 }}
                />,
              )}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Draws You */}
            <FormItem
              validateStatus={whatDrawsYouError ? "error" : ""}
              help={whatDrawsYouError || ""}
            >
              {getFieldDecorator("whatDrawsYou", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="What draws you to wanting to volunteer with Restorative Auroville?"
                  autosize={{ minRows: 3, maxRows: 6 }}
                />,
              )}
            </FormItem>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Skills */}
            <FormItem
              validateStatus={whatSkillsError ? "error" : ""}
              help={whatSkillsError || ""}
            >
              {getFieldDecorator("whatSkills", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="What skills or support would you like to offer?"
                  autosize={{ minRows: 3, maxRows: 6 }}
                />,
              )}
            </FormItem>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Acknowledgement */}
            <FormItem
              validateStatus={whatAcknowledgementError ? "error" : ""}
              help={whatAcknowledgementError || ""}
            >
              {getFieldDecorator("whatAcknowledgement", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="What acknowledgement or support would you like to receive in return?"
                  autosize={{ minRows: 3, maxRows: 6 }}
                />,
              )}
            </FormItem>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Any Other Comment */}
            <FormItem
              validateStatus={anyOtherCommentError ? "error" : ""}
              help={anyOtherCommentError || ""}
            >
              {getFieldDecorator("anyOtherComment", {
                validateTrigger: ["onChange", "onBlur"],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="Anything else you'd like to tell us..."
                  autosize={{ minRows: 3, maxRows: 6 }}
                />,
              )}
            </FormItem>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Submit */}
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
                loading={this.state.loader}
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        )}
        {/* On-sent message */}
        {this.state.formSent === true && (
          <p className="home" style={{ textIndent: 0 }}>
            We recieved your message. We'll get back to you shortly.
          </p>
        )}
      </div>
    );
  }
}

const WrappedForm = Form.create()(IndexPage);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedForm;
