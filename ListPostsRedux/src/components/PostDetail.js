import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Body } from 'native-base'
import { fetchPost } from '../actions';

class PostDetail extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.post_id);
    }

    render() {
        

        if(!this.props.post){
            return(
                <Spinner color='blue' /> 
            )
        }

        const { title, body } = this.props.post; 

        return (
            <ScrollView>
                <View>
                    <Card>
                        <CardItem>
                            <Body> 
                                <Text style={{fontSize:18, fontWeight:'bold'}}>{ title }</Text>
                                <Text>{ body }</Text>                                                                            
                            </Body>                
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return { post: state.posts.selected };
}

export default connect(mapStateToProps, { fetchPost })(PostDetail);