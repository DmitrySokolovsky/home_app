import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.db = firebase.database();
    }

    getData = () => {
        var starCountRef = firebase.database().ref('todos/');
        starCountRef.on('value', function(snapshot) {
            console.log(snapshot.val());
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={this.getData}>
                    <View>
                        <Text style={{ color: 'red' }}>TEST</Text>                        
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}