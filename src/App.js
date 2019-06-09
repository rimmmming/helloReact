import React, { Component } from 'react';
import styled from 'styled-components';
import NoteList from './components/note-list/note-list';
import Modal from './components/modal/modal';
import './App.scss';

const Container = styled.div`
	padding: 20px;
	text-align: center;
`;
const AppDiv = styled.div`
	max-width: 1240px;
	margin: 0 auto;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 10px 6px -6px #777;
`;
const AppHeader = styled.h1`
	font-size: 36px;
	font-weight: bold;
`;
const AddBtn = styled.div`
	margin-top: 20px;
	button {
		display: inline-block;
		position: relative;
		width: 30px;
		height: 30px;
		border: 1px solid #aaa;
		border-radius: 100%;
		background: #ffeb81;
		vertical-align: top;
			&:before, &:after {
			position: absolute;
			left: 50%;
			top: 50%;
			background: #aaa;
			content: '';
		}
			&:before {
			width: 4px;
			height: 20px;
			margin-left: -2px;
			margin-top: -10px;
		}
			&:after {
			width: 20px;
			height: 4px;
			margin-left: -10px;
			margin-top: -2px;
		}
	}
`;

class App extends Component {
	state = {
		notes: [
			{
				date: new Date(),
				title: '첫 번째 메모입니다.',
				text: '첫 번째 메모 텍스트',
				edited: false
			},
			{
				date: new Date(),
				title: 'SECOND',
				text: '두 번째 메모',
				edited: false
			}
		],
		createToggle: false
	};
	changeCreateToggle = () => {
		this.setState({
			createToggle: !this.state.createToggle
		})
	};
	render() {
		return (
			<Container>
				<AppDiv>
					<AppHeader>My Note</AppHeader>
					<NoteList notes={this.state.notes}></NoteList>
					<AddBtn>
						<button type="button" onClick={this.changeCreateToggle}><span className="blind">노트 추가</span></button>
					</AddBtn>
				</AppDiv>
				{this.state.createToggle && (
					<Modal />
				)}
			</Container>	
		);
	}
}

export default App;