/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { DrawerActions } from 'react-navigation'
import Header from '../../drawer_navigation/header'
import FootballAPI from '../../api/API'


export default class HomeScreen extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         result: null,
         id: this.props.navigation.getParam('id',0)
      };
    };
    
    on_press = (text) => () => {
        console.log(text);
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <View>
                <Header {...this.props} title="Home"/>
                <Text onPress={this.on_press("sfasfd")} >
                    Home
                </Text>
                <Text>
                    {this.state.id}
                </Text>
            </View>
        );
    }
}