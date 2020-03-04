// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { css } from 'glamor'

import isUndefined from 'lodash/isUndefined'
import isNull from 'lodash/isNull'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

import Form from 'antd/lib/form'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/form/style/css'

import Input from 'antd/lib/input'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/input/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Radio from 'antd/lib/radio'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/radio/style/css'

import Tooltip from 'antd/lib/tooltip'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tooltip/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import domestic from '../../assets/domestic.png'
import international from '../../assets/international.png'
import {
  hasErrors,
  validateEmail,
  validateName,
  validateMobile,
  validateCountry,
  validateCurrentLocation,
  validateWhatDrawsYou,
  validateComment,
  validateExperience,
} from '../../methods/formHelpers'

import inArray from '../../methods/inArray'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const FormItem = Form.Item
const { TextArea } = Input
const RadioGroup = Radio.Group
const radioStyle = {
  display: 'block',
  height: '24px',
  lineHeight: '24px',
}

const formStyle = css({
  // Space below error message
  '& .ant-form-explain': {
    '& > p': {
      marginBottom: 12,
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventRegisterationForm */
class EventRegisterationForm extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      loader: null,
      formSent: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /** componentDidMount */
  componentDidMount() {
    const { form } = this.props
    form.validateFields()
  }

  /** componentDidUpdate */
  componentDidUpdate(prevProps, prevState) {
    if (this.props.index !== prevProps.index) {
      if (prevState.formSent === true) {
        this.setState({
          loader: null,
          formSent: false,
        })
      }
    }
  }

  /** handleSubmit - Post to google spreadsheet. */
  handleSubmit(e) {
    e.preventDefault()
    const {
      form,
      event: {
        node: { fields, frontmatter },
      },
    } = this.props
    const event = `${frontmatter.title} @ ${fields.humanDate}`

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({
          loader: true,
        })

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
        } = values

        name = isUndefined(name) ? ' ' : name
        email = isUndefined(email) ? ' ' : email
        mobile = isUndefined(mobile) ? ' ' : mobile
        country = isUndefined(country) ? ' ' : country
        whatDrawsYou = isUndefined(whatDrawsYou) ? ' ' : whatDrawsYou
        currentLocation = isUndefined(currentLocation) ? ' ' : currentLocation
        comment = isUndefined(comment) ? ' ' : comment
        experience = isUndefined(experience) ? ' ' : experience
        journey = isUndefined(journey) ? ' ' : journey
        wouldLikeInfo = isUndefined(wouldLikeInfo) ? ' ' : wouldLikeInfo
        const note = ' '

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbz1G8vtcd588oE4sJBXlUHhBAjad2ScUF55kNfB_xNNnzE8ClEw/exec?name=${name}&email=${email}&event=${event}&mobile=${mobile}&country=${country}&whatDrawsYou=${whatDrawsYou}&comment=${comment}&currentLocation=${currentLocation}&experience=${experience}&journey=${journey}&wouldLikeInfo=${wouldLikeInfo}&note=${note}&callback=?`,
            {
              method: 'GET',
              mode: 'no-cors',
            }
          )
            .then(response => {
              console.log(response)
              this.setState({
                loader: false,
                formSent: true,
              })
            })
            .catch(error => {
              this.setState({
                loader: false,
              })
            })
        }, 1500)
      }
    })
  }

  /** standard renderer */
  render() {
    const {
      form,
      event: {
        node: { fields, frontmatter },
      },
      formattedDate,
      index = 1,
    } = this.props
    const { tags = [] } = frontmatter
    let cancelled = false
    if (inArray(tags, 'cancelled')) {
      cancelled = true
    }

    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = form
    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name')
    const emailError = isFieldTouched('email') && getFieldError('email')
    const countryError = isFieldTouched('country') && getFieldError('country')
    const commentError = isFieldTouched('comment') && getFieldError('comment')
    const whatDrawsYouError =
      isFieldTouched('whatDrawsYou') && getFieldError('whatDrawsYou')
    const mobileError = isFieldTouched('mobile') && getFieldError('mobile')
    const currentLocationError =
      isFieldTouched('currentLocation') && getFieldError('currentLocation')
    const experienceError =
      isFieldTouched('experience') && getFieldError('experience')
    const journeyError = isFieldTouched('journey') && getFieldError('journey')
    const wouldLikeInfoError =
      isFieldTouched('wouldLikeInfo') && getFieldError('wouldLikeInfo')

    const { loader, formSent } = this.state

    const todayInt = parseInt(moment().format('YYYYMMDD'), 10)
    const begins = moment(
      !isNull(frontmatter.startDate) ? frontmatter.startDate : frontmatter.date
    )
    const beginDateInt = parseInt(begins.format('YYYYMMDD'), 10)
    let eventStatus = null
    if (todayInt > beginDateInt) {
      eventStatus = 'past'
    } else if (todayInt < beginDateInt) {
      eventStatus = 'future'
    } else {
      eventStatus = 'present'
    }

    return (
      <Fragment>
        <p style={{ display: 'none' }}>{index}</p>
        {cancelled === false && (
          <Fragment>
            {(eventStatus === 'past' || eventStatus === 'present') && (
              <Fragment>
                <h3 style={{ marginTop: -10 }}>Registration Closed</h3>
                <p>Registration for this event is now closed.</p>
              </Fragment>
            )}
            {eventStatus === 'future' && (
              <Fragment>
                <h3 style={{ marginTop: -10 }}>Fee</h3>
                <p>
                  <strong>
                    <i>{frontmatter.cost}</i>
                  </strong>
                </p>
                {frontmatter.cost === 'On donation' ? (
                  <Fragment>
                    <p>
                      You may join free of charge, as we offer this space as a
                      service to the community. And we also welcome any
                      contribution you'd like to make, so as to support our
                      work.
                    </p>
                  </Fragment>
                ) : (
                  <p>Please make your payment to confirm your seat.</p>
                )}
                <p>
                  Select the Domestic option for Indian bank/credit cards, or
                  the International option for foreign bank/credit cards.
                </p>
                <div className="mask-p">
                  {/*
                  <OutLink
                    to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                    style={{ marginRight: 17 }}
                  >
                    <Tooltip title="Indian Card">
                      <div style={{ display: 'inline-block' }}>
                        <Image
                          src={domestic}
                          rawHeight={450}
                          rawWidth={450}
                          className="icon"
                          style={{
                            height: 65,
                            width: 65,
                            display: 'inline-block',
                            background: 'transparent',
                            border: 'unset',
                          }}
                        />
                      </div>
                    </Tooltip>
                  </OutLink>
                  */}
                  <OutLink
                    to="https://www.instamojo.com/@joylivinglearning/lc8626c75ec504947856a740e8ba71b94/"
                    style={{ marginRight: 17, borderBottom: 0 }}
                  >
                    <Tooltip title="Indian Card">
                      <div style={{ display: 'inline-block' }}>
                        <Image
                          src={domestic}
                          rawHeight={450}
                          rawWidth={450}
                          className="icon"
                          style={{
                            height: 50,
                            width: 50,
                            display: 'inline-block',
                            background: 'transparent',
                            border: 'unset',
                          }}
                        />
                      </div>
                    </Tooltip>
                  </OutLink>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_blank"
                    style={{ display: 'inline-block' }}
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
                    You are about to register for{' '}
                    <strong>{frontmatter.title}</strong> on{' '}
                    <strong>{formattedDate}</strong>.
                  </p>
                ) : (
                  <p>
                    You registered for <strong>{frontmatter.title}</strong> on{' '}
                    <strong>{formattedDate}</strong>.
                  </p>
                )}
                {formSent === false && (
                  <Form
                    onSubmit={this.handleSubmit}
                    className={`${formStyle} mask-p`}
                  >
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Name */}
                    <p>Name</p>
                    <FormItem
                      validateStatus={nameError ? 'error' : ''}
                      help={
                        nameError ? (
                          <p>
                            <small>{nameError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('name', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateName }],
                      })(<Input />)}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Email */}
                    <p>Email</p>
                    <FormItem
                      validateStatus={emailError ? 'error' : ''}
                      help={
                        emailError ? (
                          <p>
                            <small>{emailError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('email', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateEmail }],
                      })(<Input />)}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile */}
                    <p>Mobile / WhatsApp</p>
                    <FormItem
                      validateStatus={mobileError ? 'error' : ''}
                      help={
                        mobileError ? (
                          <p>
                            <small>{mobileError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('mobile', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateMobile }],
                      })(<Input />)}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Country Selection */}
                    <p>What's your country of origin?</p>
                    <FormItem
                      validateStatus={countryError ? 'error' : ''}
                      help={
                        countryError ? (
                          <p>
                            <small>{countryError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('country', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateCountry }],
                      })(<Input />)}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Location */}
                    <p>Where are you living presently?</p>
                    <FormItem
                      validateStatus={currentLocationError ? 'error' : ''}
                      help={
                        currentLocationError ? (
                          <p>
                            <small>{currentLocationError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('currentLocation', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateCurrentLocation }],
                      })(<Input />)}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Draws You */}
                    <p>What draws you to this practice group / workshop?</p>
                    <FormItem
                      validateStatus={whatDrawsYouError ? 'error' : ''}
                      help={
                        whatDrawsYouError ? (
                          <p>
                            <small>{whatDrawsYouError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('whatDrawsYou', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateWhatDrawsYou }],
                      })(<TextArea autosize={{ minRows: 3, maxRows: 5 }} />)}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Experience Level */}
                    <p>
                      Do you have any previous experience with RC (or
                      Restorative Justice or Nonviolent Communication)?
                    </p>
                    <FormItem
                      validateStatus={experienceError ? 'error' : ''}
                      help={
                        experienceError ? (
                          <p>
                            <small>{experienceError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('experience', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateExperience }],
                      })(
                        <RadioGroup>
                          <Radio
                            style={radioStyle}
                            value="Beginner (0-5 days of training)"
                          >
                            Beginner (0-5 days of training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="Intermediate (5-10 days of training)"
                          >
                            Intermediate (5-10 days of training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="Advanced (over 10 days of training)"
                          >
                            Advanced (over 10 days of training)
                          </Radio>
                        </RadioGroup>
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Journey */}
                    <p>
                      Please share a few sentences about your RC (and/or RJ or
                      NVC) journey.
                    </p>
                    <FormItem
                      validateStatus={journeyError ? 'error' : ''}
                      help={
                        journeyError ? (
                          <p>
                            <small>{journeyError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('journey', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateComment }],
                      })(<TextArea autosize={{ minRows: 3, maxRows: 5 }} />)}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ More Info. */}
                    <p>
                      Would you like to receive information about future RC
                      (and/or NVC) events?
                    </p>
                    <FormItem
                      validateStatus={wouldLikeInfoError ? 'error' : ''}
                      help={
                        wouldLikeInfoError ? (
                          <p>
                            <small>{wouldLikeInfoError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('wouldLikeInfo', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateExperience }],
                      })(
                        <RadioGroup>
                          <Radio
                            style={radioStyle}
                            value="Yes, I'd like to receive information every now and then."
                          >
                            Yes, I'd like to receive information every now and
                            then.
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="No, I'd not like to receive information."
                          >
                            No, I'd not like to receive information.
                          </Radio>
                        </RadioGroup>
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comment */}
                    <p>Any other comments / questions?</p>
                    <FormItem
                      validateStatus={commentError ? 'error' : ''}
                      help={
                        commentError ? (
                          <p>
                            <small>{commentError}</small>
                          </p>
                        ) : (
                          ''
                        )
                      }
                      className="mask-p"
                    >
                      {getFieldDecorator('comment', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateComment }],
                      })(<TextArea autosize={{ minRows: 3, maxRows: 5 }} />)}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Submit */}
                    <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                        loading={loader}
                        className="mask-p"
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
        )}
      </Fragment>
    )
  }
}

EventRegisterationForm.propTypes = {
  form: PropTypes.object,
  event: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Form.create()(EventRegisterationForm)
