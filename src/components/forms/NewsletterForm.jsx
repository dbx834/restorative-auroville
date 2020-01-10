// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

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
} from '../../methods/formHelpers'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const FormItem = Form.Item
const { TextArea } = Input

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
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
/** Page */
class IndexPage extends React.Component {
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

        let { name, email, comment } = values

        name = isUndefined(name) ? ' ' : name
        email = isUndefined(email) ? ' ' : email
        comment = isUndefined(comment) ? ' ' : comment

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbzhQ705YWqcsohLqLzzv7_0UrzHD7tMlFVNOPr7D00uCaiUP-g/exec?email=${email}&name=${name}&comment=${comment}&callback=?`,
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
    const emailError = isFieldTouched('email') && getFieldError('email')
    const commentError = isFieldTouched('comment') && getFieldError('comment')

    return (
      <div>
        {this.state.formSent === false && (
          <Form onSubmit={this.handleSubmit} className={`${formStyle} mask-p`}>
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

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comment */}
            <p>
              What is your area of interest? What sort of information would you
              enjoy receiving?
            </p>
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
                loading={this.state.loader}
                className="mask-p"
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        )}
        {/* On-sent message */}
        {this.state.formSent === true && (
          <p className="home" style={{ textIndent: 0 }}>
            We've added your name and email to our list!
          </p>
        )}
      </div>
    )
  }
}

const WrappedForm = Form.create()(IndexPage)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedForm
