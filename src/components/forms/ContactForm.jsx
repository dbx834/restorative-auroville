// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import { css } from "glamor";

import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import Form from 'antd/lib/form'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/form/style/css'

import Input from 'antd/lib/input'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/input/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
  validateCountry,
  validateCurrentLocation,
} from '../../methods/formHelpers'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const FormItem = Form.Item
const { TextArea } = Input

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** ContactForm */
class ContactForm extends React.Component {
  /** standard constructor. */
  constructor(props) {
    super(props)

    this.state = {
      loader: null,
      formSent: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /** handleSubmit - Post to google spreadsheet. */
  componentDidMount() {
    this.props.form.validateFields()
  }

  /** handleSubmit - Post to google spreadsheet. */
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.setState({
          // Show loader and reset errors if any.
          loader: true,
        })

        let { name, email, comment, originCountry, currentPlace } = values

        name = isUndefined(name) ? ' ' : name
        email = isUndefined(email) ? ' ' : email
        comment = isUndefined(comment) ? ' ' : comment
        originCountry = isUndefined(originCountry) ? ' ' : originCountry
        currentPlace = isUndefined(currentPlace) ? ' ' : currentPlace

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbypHlj_GjUiPjp9EbqdFJgK2T3WzWEaJ8cXLHrJlMZj5H9TOO4/exec?email=${email}&name=${name}&comment=${comment}&originCountry=${originCountry}&currentPlace=${currentPlace}&callback=?`,
            {
              method: 'GET',
              mode: 'no-cors',
            }
          )
            .then(response => {
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
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form
    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name')
    const originCountryError =
      isFieldTouched('originCountry') && getFieldError('originCountry')
    const currentPlaceError =
      isFieldTouched('currentPlace') && getFieldError('currentPlace')
    const emailError = isFieldTouched('email') && getFieldError('email')
    const commentError = isFieldTouched('comment') && getFieldError('comment')

    return (
      <div>
        {this.state.formSent === false && (
          <Form onSubmit={this.handleSubmit}>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Name */}
            <FormItem validateStatus={nameError ? 'error' : ''} help="">
              {getFieldDecorator('name', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateName }],
              })(<Input placeholder="Name" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Email */}
            <FormItem validateStatus={emailError ? 'error' : ''} help="">
              {getFieldDecorator('email', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateEmail }],
              })(<Input placeholder="Email" />)}
            </FormItem>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Origin */}
            <FormItem
              validateStatus={originCountryError ? 'error' : ''}
              help=""
            >
              {getFieldDecorator('originCountry', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateCountry }],
              })(<Input placeholder="What's your country of origin?" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Current Place */}
            <FormItem validateStatus={currentPlaceError ? 'error' : ''} help="">
              {getFieldDecorator('currentPlace', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateCurrentLocation }],
              })(<Input placeholder="Where are you living presently?" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comment */}
            <FormItem validateStatus={commentError ? 'error' : ''} help="">
              {getFieldDecorator('comment', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="Your questions / comments…"
                  autosize={{ minRows: 3, maxRows: 6 }}
                />
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
    )
  }
}

const WrappedForm = Form.create()(ContactForm)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedForm
