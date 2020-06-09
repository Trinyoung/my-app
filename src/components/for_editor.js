import Editor from 'for-editor';
import React, { Component } from 'react';

export default class ForEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            // toolbar: {
            //     h1: true, // h1
            //     h2: true, // h2
            //     h3: true, // h3
            //     h4: true, // h4
            //     img: true, // 图片
            //     link: true, // 链接
            //     code: true, // 代码块
            //     preview: true, // 预览
            //     expand: true, // 全屏
            //     /* v0.0.9 */
            //     undo: true, // 撤销
            //     redo: true, // 重做
            //     save: true, // 保存
            //     /* v0.2.3 */
            //     subfield: true, 
            // }
        };
        this.$vm = React.createRef();
    }

    handleChange(value) {
        this.setState({ value });
    }

    addImg($file){
        this.$vm.current.$img2Url($file.name, 'file_url');
        console.log($file);
    }
    render() {
        const { value, toolbar } = this.state;
        return (
            <Editor value={value} 
                ref={this.$vm}
                toolbar = {toolbar}
                addImg={($file)=>this.addImg($file)}
                onChange={value => this.handleChange(value)}
            />
        );
    }
} 