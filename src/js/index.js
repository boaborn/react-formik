import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import '../less/style.less'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

// desturct props from formik
const App = ({
  values,
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form>
      <div>
        { (touched.email && errors.email && <p>{ errors.email }</p>) }
        <Field type="email" name="email" placeholder="Email"/>
      </div>
      <div>
        { (touched.password && errors.password && <p>{ errors.password }</p>) }
        <Field type="password" name="password" placeholder="Password"/>
      </div>
      <label>
        <Field type="checkbox" name="newsletter" checked={ values.newsletter } />
        Join our newsletter
      </label>
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="">Premium</option>
      </Field>
      <button disabled={ isSubmitting } type="submit">Submit</button>
    </Form>
  )
}

// destruct from jsx props then pass into function
const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) { // destruct password from props
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || true,
      plan: plan || 'free'
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({ email: 'That email is already taken'})
      } else {
        resetForm()
      }
      setSubmitting(false)

    }, 2000)
    console.log(values)
  }
})(App)

ReactDOM.render( <FormikApp email="andrew@test.io"/>, document.getElementById('app'))
