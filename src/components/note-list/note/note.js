import React, {Component} from 'react';
import './note.scss';

class Note extends Component {
	static defaultProps = {
		title : '',
		text : '',
		date : new Date(),
		edited : false
	};

	render() {
		return(
			<div className="note">
				<div className="note-inner">
					<h2>{this.props.title}</h2>
					<div className="note-date">
						<span>
							{this.props.date.toISOString()}
							{this.props.edited && ' (edited)'}
						</span>
					</div>
					<div className="note-text">{this.props.text}</div>
				</div>
				<div className="note-menu">
					<div className="note-menu-l">
						<button type="button">추가</button>
					</div>
					<div className="note-menu-r">
						<button type="button" className="showChangeModal">편집</button>
						<button type="button" className="showDeleteModal">삭제</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Note;