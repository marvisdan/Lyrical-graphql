import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
class SongList extends Component {
	renderSongs() {
		const { songs, loading, error } = this.props.data;
		return songs.map(({ id, title }) => <li key={id}>{title}</li>);
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
			title
		}
	}
`;

export default graphql(query)(SongList);
