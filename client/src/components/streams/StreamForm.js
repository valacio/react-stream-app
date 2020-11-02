import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = ` field ${meta.error && meta.touched ? 'error' : ''} `;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log('StreamForm onSubmit', formValues);

    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'> Submit </button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  try {
    if (!formValues.title) {
      errors.title = 'Title is required';
    }

    if (!formValues.description) {
      errors.description = 'Description is required';
    }
  } catch (e) {
    console.warn(`Oh no:${e}`);
  } finally {
    return errors;
  }
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

//export default connect(null, { createStream })(formWrapped);
