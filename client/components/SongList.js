import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from 'react-router';

class SongList extends Component {
	renderSongs() {
		const { songs } = this.props.data;
		return songs.map(({ id, title }) => (
			<li key={id}>
				<Link to={`/songs/${id}`}>
					{title}
				</Link>
			</li>
		));
	}
	render() {
		if (this.props.data.loading) {
			return <div>Loading</div>;
		}
		return <div>{this.renderSongs()}</div>;
	}
}

const query = gql`
	{
		songs {
			title,
			id
		}
	}
`;

export default graphql(query)(SongList);
