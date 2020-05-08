import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import classNames from 'classnames';

export class CodeHighlight extends Component {

	static defaultProps = {
		className: null,
		style: null,
		lang: 'markup'
	};

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		lang: PropTypes.string
	};

	componentDidMount() {
		this.highlightCode();
	}

	componentDidUpdate() {
		this.highlightCode();
	}

	highlightCode() {
		if(Prism) {
			Prism.highlightElement(this.codeElement);
		}
	}

	render() {
		return (
			<pre style={this.props.style} className={classNames('language-'+this.props.lang, this.props.className)}>
                <code ref={el => this.codeElement = el} className={this.props.className}>
                    {this.props.children}
                </code>
            </pre>
		);
	}
}
