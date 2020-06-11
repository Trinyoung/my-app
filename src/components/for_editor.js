import Editor from 'for-editor';
import React, { Component } from 'react';

export default class ForEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <Editor value={value} onChange={(value) => this.handleChange(value)} />
        );
    }
} 