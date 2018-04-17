import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Title, Left, Right, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import ListItem from './ListItem';
import { Actions } from 'react-native-router-flux';

class List extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    onItemPress(id) {
        Actions.postDetail({ post_id: id});
    }

    render () {

        if (!this.props.posts){
            return(            
                <Spinner color='blue' />                                   
            );
        }  

        const postItems = this.props.posts.map( post => {
            return <ListItem key={post.id}item={post} onItemPress={this.onItemPress} />
        }); 

                      

        return (            
            <ScrollView>
                {postItems}
            </ScrollView> 
        );                   
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts.all };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPosts }, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);