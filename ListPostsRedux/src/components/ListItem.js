import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base'
import PostDetail from './PostDetail';

const ListItem = ({ item, onItemPress }) => {
    const { title } = item;

    return(
        <View>
            <TouchableOpacity onPress={() => onItemPress(item.id)}>
                <Card>
                    <CardItem>
                        <Body>                        
                            <Text>{title}</Text>                                               
                        </Body>                
                    </CardItem>
                </Card>
            </TouchableOpacity>             
        </View>               
    );
};




export default ListItem;