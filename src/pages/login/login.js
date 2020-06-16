import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Row, Form, Input } from 'antd';
import { config } from '../../constants';
import styles from './loginS.less';

const FormItem = Form.Item;

const Login = ({ dispatch, form: { getFieldDecorator, validateFieldsAndScroll }, loginM }) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({ type: 'loginM/login', payload: values });
    });
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt="logo" src={require('../../assets/logo.svg')} />
        <span>{config.name}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input onPressEnter={handleOk} placeholder="Username" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input type="password" onPressEnter={handleOk} placeholder="Password" />)}
        </FormItem>
        <Row>
          <Button type="primary" onClick={handleOk} loading={loginM.loading}>
            Sign in
          </Button>
        </Row>
      </form>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(({ loginM }) => ({ loginM }))(Form.create()(Login));
