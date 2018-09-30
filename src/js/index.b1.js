import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import '../less/style.less'
import Form from './components/form'
import { withFormik, Form } from 'formik'
import Yup from 'yup'

// desturct props from formik
const App = ({
  values,
  handleChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={ handleSubmit }>
      <input type="email" name="email" placeholder="Email" value={ values.email } onChange={ handleChange } />
      <input type="password" name="password" placeholder="Password" value={ values.password } onChange={ handleChange } />
      <button type="submit">Submit</button>
    </form>
  )
}

// destruct from jsx props then pass into function
const FormikApp = withFormik({
  mapPropsToValues({ email, password }) { // destruct password from props
    return {
      email: email || '',
      password: password || ''
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})(App)

ReactDOM.render(<FormikApp email="andrew@test.io" />, document.getElementById('app'))
