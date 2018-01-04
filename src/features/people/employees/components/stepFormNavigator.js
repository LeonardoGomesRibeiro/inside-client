import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, message, Form } from 'antd';

import { FORM_ITEM_LAYOUT } from './stepFormHelper';

const FormItem = Form.Item;
const nextButtonLayout = {
  ...FORM_ITEM_LAYOUT,
  label: ' ',
  colon: false,
};

class StepFormNavigator extends Component {
  render() {
    return (
      <FormItem {...nextButtonLayout} className="steps-action">
        {this.props.currentStep < this.props.maxStep && (
          <Button
            type="primary"
            htmlType="submit"
            onClick={event => this.props.submit(event)}
          >
            Próximo
          </Button>
        )}
        {this.props.currentStep === this.props.maxStep && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Finalizar
          </Button>
        )}
        {this.props.currentStep > 0 && (
          <Button
            style={{ marginLeft: 8 }}
            onClick={() => this.props.previousCallback()}
          >
            Anterior
          </Button>
        )}
      </FormItem>
    );
  }
}

StepFormNavigator.propTypes = {
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  previousCallback: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default StepFormNavigator;
