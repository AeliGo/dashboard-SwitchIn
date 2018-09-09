import React  from 'react'
import {Modal,Form,Input,Radio,Button} from 'antd'

class UserModel extends React.Component{


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submitData();
      }
    });
  }


  render(){
    const {form:{ getFieldDecorator }, newItem, hideWindow, updateItem}=this.props;
    const {id,loading,visible,name,age,gender,email,phone} = newItem;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const modalProps={
      title:id? "Edit User" : "Create User",
      visible:visible,
      footer: [
        <Button key="back" onClick={hideWindow}>Cancel</Button>,
        <Button key="ok" loading={loading} type="primary" onClick={this.handleSubmit}>Save</Button>
      ],
      onCancel: hideWindow ,
      confirmLoading: loading,
      onOk: this.handleSubmit,
      maskClosable:false,
      width :700
    }

    return (
      <span>
        <Modal {...modalProps}>
          <Form>
              <Form.Item label="Name"  {...formItemLayout}>
                  {getFieldDecorator('name', {
                          initialValue:name,
                          rules: [{ required: true, message: 'Please input your Name!' }],
                      })(<Input onChange={(e) => updateItem({ name: e.target.value })}/>)}
              </Form.Item>
              <Form.Item label="Age"  {...formItemLayout}>
                  {getFieldDecorator('age', {
                          initialValue:age,
                          rules: [{ required: true, message: 'Please input your Age!' }],
                      })(<Input onChange={(e) => updateItem({ age: e.target.value })}/>)}
              </Form.Item>
              <Form.Item label="Gender"  {...formItemLayout}>
                  {getFieldDecorator('gender', {
                          initialValue: gender||'Male',
                      })(
                      <Radio.Group onChange={(e) => updateItem({ gender: e.target.value })}>
                        <Radio.Button value="Male">Male</Radio.Button>
                        <Radio.Button value="Female">Female</Radio.Button>
                      </Radio.Group>
                    )}
              </Form.Item>
              <Form.Item label="Phone"  {...formItemLayout}>
                  {getFieldDecorator('phone', {
                          initialValue: phone,
                          rules: [{ required: true, message: 'Please input your PhoneNum!' }],
                      })(<Input onChange={(e) => updateItem({ phone: e.target.value })}/>)}
              </Form.Item>
              <Form.Item label="Email"  {...formItemLayout}>
                  {getFieldDecorator('email', {
                          initialValue: email,
                          rules: [{ required: true, message: 'Please input your Email!' }],
                      })(<Input onChange={(e) => updateItem({ email: e.target.value })}/>)}
              </Form.Item>
          </Form>
        </Modal>
      </span>
    )
  }
}
export default Form.create()(UserModel);