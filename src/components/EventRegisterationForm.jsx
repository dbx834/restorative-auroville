// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";
import isNull from "lodash/isNull";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Form from "antd/lib/form";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/form/style/css";

import Input from "antd/lib/input";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/input/style/css";

import Button from "antd/lib/button";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

import Radio from "antd/lib/radio";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/radio/style/css";

import Tooltip from "antd/lib/tooltip";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tooltip/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import domestic from "../assets/domestic.png";
import international from "../assets/international.png";
import formHelpers from "../helpers/formHelpers";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const {
  hasErrors,
  validateEmail,
  validateName,
  validateMobile,
  validateCountry,
  validateCurrentLocation,
  validateWhatDrawsYou,
  validateComment,
  validateExperience,
} = formHelpers;
const { Fragment } = React;
const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const radioStyle = {
  display: "block",
  height: "24px",
  lineHeight: "24px",
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventRegisterationForm */
class EventRegisterationForm extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);

    this.state = {
      loader: null,
      formSent: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** componentDidMount */
  componentDidMount() {
    const { form } = this.props;
    form.validateFields();
  }

  /** handleSubmit - Post to google spreadsheet. */
  handleSubmit(e) {
    e.preventDefault();
    const {
      form,
      event: {
        node: { fields, frontmatter },
      },
    } = this.props;
    const event = `${frontmatter.title} @ ${fields.humanDate}`;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({
          loader: true,
        });

        let {
          name,
          email,
          mobile,
          country,
          whatDrawsYou,
          currentLocation,
          comment,
          experience,
          journey,
          wouldLikeInfo,
        } = values;

        name = isUndefined(name) ? " " : name;
        email = isUndefined(email) ? " " : email;
        mobile = isUndefined(mobile) ? " " : mobile;
        country = isUndefined(country) ? " " : country;
        whatDrawsYou = isUndefined(whatDrawsYou) ? " " : whatDrawsYou;
        currentLocation = isUndefined(currentLocation) ? " " : currentLocation;
        comment = isUndefined(comment) ? " " : comment;
        experience = isUndefined(experience) ? " " : experience;
        journey = isUndefined(journey) ? " " : journey;
        wouldLikeInfo = isUndefined(wouldLikeInfo) ? " " : wouldLikeInfo;
        const note = " ";

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbz1G8vtcd588oE4sJBXlUHhBAjad2ScUF55kNfB_xNNnzE8ClEw/exec?name=${name}&email=${email}&event=${event}&mobile=${mobile}&country=${country}&whatDrawsYou=${whatDrawsYou}&comment=${comment}&currentLocation=${currentLocation}&experience=${experience}&journey=${journey}&wouldLikeInfo=${wouldLikeInfo}&note=${note}&callback=?`,
            {
              method: "GET",
              mode: "no-cors",
            },
          )
            .then(response => {
              console.log(response);
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
      form,
      event: {
        node: { fields, frontmatter },
      },
    } = this.props;

    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = form;
    // Only show error after a field is touched.
    const nameError = isFieldTouched("name") && getFieldError("name");
    const emailError = isFieldTouched("email") && getFieldError("email");
    const countryError = isFieldTouched("country") && getFieldError("country");
    const commentError = isFieldTouched("comment") && getFieldError("comment");
    const whatDrawsYouError =
      isFieldTouched("whatDrawsYou") && getFieldError("whatDrawsYou");
    const mobileError = isFieldTouched("mobile") && getFieldError("mobile");
    const currentLocationError =
      isFieldTouched("currentLocation") && getFieldError("currentLocation");
    const experienceError =
      isFieldTouched("experience") && getFieldError("experience");
    const journeyError = isFieldTouched("journey") && getFieldError("journey");
    const wouldLikeInfoError =
      isFieldTouched("wouldLikeInfo") && getFieldError("wouldLikeInfo");

    const { loader, formSent } = this.state;

    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    const begins = moment(
      !isNull(frontmatter.startDate) ? frontmatter.startDate : frontmatter.date,
    );
    const beginDateInt = parseInt(begins.format("YYYYMMDD"), 10);
    let eventStatus = null;
    if (todayInt > beginDateInt) {
      eventStatus = "past";
    } else if (todayInt < beginDateInt) {
      eventStatus = "future";
    } else {
      eventStatus = "present";
    }

    return (
      <Fragment>
        {(eventStatus === "past" || eventStatus === "present") && (
          <Fragment>
            <h3>Registration Closed</h3>
            <p>Registration for this event is now closed.</p>
          </Fragment>
        )}
        {eventStatus === "future" && (
          <Fragment>
            <h3>Fee</h3>
            <p>
              <strong>
                <i>{frontmatter.cost}</i>
              </strong>
            </p>
            {frontmatter.cost === "On donation" ? (
              <Fragment>
                <p>
                  You may join free of charge, as we offer this space as a
                  service to the community. And we also welcome any contribution
                  you'd like to make, so as to support our work.
                </p>
              </Fragment>
            ) : (
              <p>Please make your payment to confirm your seat.</p>
            )}
            <p>
              Select the Domestic option for Indian bank/credit cards, or the
              International option for foreign bank/credit cards.
            </p>
            <div className="mask-p">
              <OutLink
                to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                style={{ marginRight: 17, borderBottom: 0 }}
              >
                <Tooltip title="Indian Card">
                  <div style={{ display: "inline-block" }}>
                    <Image
                      src={domestic}
                      rawHeight={450}
                      rawWidth={450}
                      className="icon"
                      style={{
                        height: 50,
                        width: 50,
                        display: "inline-block",
                        background: "transparent",
                        border: "unset",
                      }}
                    />
                  </div>
                </Tooltip>
              </OutLink>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                style={{ display: "inline-block" }}
                className="hover"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="WFXM5RNDGBXL4"
                />
                <Tooltip title="International Card">
                  <input
                    type="image"
                    src={international}
                    border="0"
                    name="submit"
                    alt="PayPal – The safer, easier way to pay online!"
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </Tooltip>
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <h3>Register</h3>
            {formSent === false ? (
              <p>
                You are about to register for{" "}
                <strong>{frontmatter.title}</strong> on{" "}
                <strong>{fields.humanDate}</strong>.
              </p>
            ) : (
              <p>
                You registered for <strong>{frontmatter.title}</strong> on{" "}
                <strong>{fields.humanDate}</strong>.
              </p>
            )}
            {formSent === false && (
              <Form onSubmit={this.handleSubmit} className="mask-p">
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
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile */}
                <FormItem
                  validateStatus={mobileError ? "error" : ""}
                  help={mobileError || ""}
                >
                  {getFieldDecorator("mobile", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateMobile }],
                  })(<Input placeholder="Mobile / WhatsApp" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Country Selection */}
                <FormItem
                  validateStatus={countryError ? "error" : ""}
                  help={countryError || ""}
                >
                  {getFieldDecorator("country", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateCountry }],
                  })(<Input placeholder="What's your country of origin?" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Location */}
                <FormItem
                  validateStatus={currentLocationError ? "error" : ""}
                  help={currentLocationError || ""}
                >
                  {getFieldDecorator("currentLocation", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateCurrentLocation }],
                  })(<Input placeholder="Where are you living presently?" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Draws You */}
                <FormItem
                  validateStatus={whatDrawsYouError ? "error" : ""}
                  help={whatDrawsYouError || ""}
                >
                  {getFieldDecorator("whatDrawsYou", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateWhatDrawsYou }],
                  })(
                    <TextArea
                      placeholder="What draws you to this practice group / workshop?"
                      autosize={{ minRows: 3, maxRows: 5 }}
                    />,
                  )}
                </FormItem>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Experience Level */}
                <span style={{ marginBottom: 8, display: "block" }}>
                  Do you have any previous experience with NVC and/or RC (or
                  Restorative Justice)?
                </span>
                <FormItem
                  validateStatus={experienceError ? "error" : ""}
                  help={experienceError || ""}
                >
                  {getFieldDecorator("experience", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateExperience }],
                  })(
                    <RadioGroup>
                      <Radio
                        style={radioStyle}
                        value="Beginner (0-5 days of NVC/RC/RJ training)"
                      >
                        Beginner (0-5 days of NVC/RC/RJ training)
                      </Radio>
                      <Radio
                        style={radioStyle}
                        value="Intermediate (5-10 days of NVC/RC/RJ training)"
                      >
                        Intermediate (5-10 days of NVC/RC/RJ training)
                      </Radio>
                      <Radio
                        style={radioStyle}
                        value="Advanced (over 10 days of NVC/RC/RJ training)"
                      >
                        Advanced (over 10 days of NVC/RC/RJ training)
                      </Radio>
                      <Radio
                        style={radioStyle}
                        value="NVC Certification Candidate"
                      >
                        NVC Certification Candidate
                      </Radio>
                      <Radio style={radioStyle} value="NVC Trainer">
                        NVC Trainer
                      </Radio>
                    </RadioGroup>,
                  )}
                </FormItem>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Journey */}
                <FormItem
                  validateStatus={journeyError ? "error" : ""}
                  help={journeyError || ""}
                >
                  {getFieldDecorator("journey", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateComment }],
                  })(
                    <TextArea
                      placeholder="Please share a few sentences about your NVC and/or RC journey."
                      autosize={{ minRows: 3, maxRows: 5 }}
                    />,
                  )}
                </FormItem>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ More Info. */}
                <span style={{ marginBottom: 8, display: "block" }}>
                  Would you be like to receive information about future NVC
                  and/or RC events?
                </span>
                <FormItem
                  validateStatus={wouldLikeInfoError ? "error" : ""}
                  help={wouldLikeInfoError || ""}
                >
                  {getFieldDecorator("wouldLikeInfo", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateExperience }],
                  })(
                    <RadioGroup>
                      <Radio
                        style={radioStyle}
                        value="Yes, I'd like to receive information every now and then."
                      >
                        Yes, I'd like to receive information every now and then.
                      </Radio>
                      <Radio
                        style={radioStyle}
                        value="No, I'd not like to receive information."
                      >
                        No, I'd not like to receive information.
                      </Radio>
                    </RadioGroup>,
                  )}
                </FormItem>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comment */}
                <FormItem
                  validateStatus={commentError ? "error" : ""}
                  help={commentError || ""}
                >
                  {getFieldDecorator("comment", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateComment }],
                  })(
                    <TextArea
                      placeholder="Any other comments / questions?"
                      autosize={{ minRows: 3, maxRows: 5 }}
                    />,
                  )}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Submit */}
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={hasErrors(getFieldsError())}
                    loading={loader}
                  >
                    Submit
                  </Button>
                </FormItem>
              </Form>
            )}
            {/* On-sent message */}
            {formSent === true && (
              <p className="home" style={{ textIndent: 0 }}>
                Thank you for registering! We'll get back to you shortly.
              </p>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

EventRegisterationForm.propTypes = {
  form: PropTypes.object,
  event: PropTypes.object,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Form.create()(EventRegisterationForm);
