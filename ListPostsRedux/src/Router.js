import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import List from './components/List';
import PostDetail from './components/PostDetail';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="listPosts" component={List} title="My Posts" initial />
                <Scene key="postDetail" component={PostDetail} title="Post Detail" />
            </Stack>            
        </Router>
    );
};


export default RouterComponent;
