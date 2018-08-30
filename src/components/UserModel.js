import React  from 'react'
import PropTypes from 'prop-types'
import {Modal,Form,Input,Radio} from 'antd'

class UserModel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false, // In charge of visibility of Model
      loading: false
    };
    this._isMounted=true  
    //Just set a _isMounted property to true in componentDidMount and set it to false in componentWillUnmount, 
    //to check component's status.
  }

  static propTypes={
    ok:PropTypes.func.isRequired,
    record:PropTypes.object.isRequired
  }

  showModelHandler = e => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
      loading: false
    });
  };

  save=()=>{
    this.setState({loading:true})
    this.props.form.validateFields((err,val)=>{
      if(!err){
        this.props.ok(val);
        setTimeout(()=>{ //after 2s okbtn clicked invoke callback
          if(this._isMounted){
            this.hideModelHandler();
          }
        },2000)
      }
    });
  }

  clearInfo=()=>{
    this.props.form.resetFields();
  }

  componentWillUnmount=()=>{
    this._isMounted=false
  }

  render(){
    const {form:{ getFieldDecorator },children,title}=this.props;
    const {name,age,gender,email} =this.props.record
    const {visible,loading}=this.state
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title={title}
          visible={visible}
          onCancel={ this.hideModelHandler }
          confirmLoading={loading}
          onOk={ this.save }
          afterClose={this.clearInfo}> 
          <Form>
              <Form.Item label="Name"  {...formItemLayout}>
                  {getFieldDecorator('name', {
                          initialValue:name,
                          rules: [{ required: true, message: 'Please input your Name!' }],
                      })(<Input />)}
              </Form.Item>
              <Form.Item label="Age"  {...formItemLayout}>
                  {getFieldDecorator('age', {
                          initialValue:age,
                          rules: [{ required: true, message: 'Please input your Age!' }],
                      })(<Input />)}
              </Form.Item>
              <Form.Item label="Gender"  {...formItemLayout}>
                  {getFieldDecorator('gender', {
                          initialValue: gender||'Male',
                      })(
                      <Radio.Group>
                        <Radio.Button value="Male">Male</Radio.Button>
                        <Radio.Button value="Female">Female</Radio.Button>
                      </Radio.Group>
                    )}
              </Form.Item>
              <Form.Item label="Email"  {...formItemLayout}>
                  {getFieldDecorator('email', {
                          initialValue: email,
                          rules: [{ required: true, message: 'Please input your Email!' }],
                      })(<Input />)}
              </Form.Item>
          </Form>
        </Modal>
      </span>
    )
  }
}
export default Form.create()(UserModel);