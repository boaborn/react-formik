import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withFormik } from 'formik'
import Yup from 'yup'

@observer
class Form extends Component {
  render() {
    return (
      <div>
        <input type="email" name="email" placeholder="Email"/>
      </div>
    )
  }
}

const FormikApp = withFormik(
  {
    mapPropsToValues({ email, password}) {
      return {
        email: email || '',
        password: password | ''
      }
    }
  }
)

export default Form
