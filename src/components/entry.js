import React, {Component} from 'react';
import { StyleSheet, TextInput, Animated, View, Text, Easing, TouchableOpacity, Alert } from 'react-native';
import { Login, MainTabView } from './';
import { connect } from 'react-redux';

class _Entry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { userName } = this.props;
        return (
            <View style={{ flex: 1 }}>
            {
                !!userName ? <MainTabView/> : <Login/>
            }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    let userName = state.user.user;
    return {
        userName
    };
};


export const Entry = connect(mapStateToProps)(_Entry);