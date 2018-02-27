import React from 'react'
import {Icon, Modal, Upload} from 'antd';
import {API_URL} from "../../../../../services/api/index"

export default class PicturesWallFormItem extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({fileList}) => {
    this.setState({fileList})
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {previewVisible, previewImage, fileList} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (


      <div>
        {getFieldDecorator('upload', {
          valuePropName: 'fileList',
          getValueFromEvent: this.normFile,
        })(
          <Upload
            action={API_URL+'/upload'}
            listType="picture-card"
            onPreview={this.handlePreview}
            onChange={this.handleChange}>
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
        )}
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{width: '100%'}} src={previewImage}/>
        </Modal>
      </div>
    );
  }
}