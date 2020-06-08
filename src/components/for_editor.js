import Editor from 'for-editor';
import React from 'react';

export default class ForEditor extends React.Component {
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
            <Editor value={value} onChange={() => this.handleChange()} />
        );
    }
} 