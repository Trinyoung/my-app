import React from 'react';
import { Editor, EditorState, RichUtils, ContentBlock } from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../css/editor.css';
export default class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = editorState => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.myBlockStyleFn = this.myBlockStyleFn.bind(this);
    }


    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
    }
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    _onTiltConclic() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, ''));
    }
    myBlockStyleFn() {
        const type = new ContentBlock().getType();
        if (type === 'blockquote') {
            return 'superFancyBlockquote';
        }
    }
    render() {
        return (
            <div className='Editor-container'>
                <div>
                    <button onClick={this._onBoldClick.bind(this)}>B</button>
                    <button onClick={this._onBoldClick.bind(this)}>BOLD</button>
                    <button onClick={this._onBoldClick.bind(this)}>BOLD</button>
                    <button onClick={this._onBoldClick.bind(this)}>BOLD</button>
                    <button onClick={this._onBoldClick.bind(this)}>BOLD</button>
                </div>
                
                <Editor className='Editor-Draft'
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    blockStyleFn={this.myBlockStyleFn}
                    handleKeyCommand={this.handleKeyCommand}
                />
            </div>
        );
    }
};