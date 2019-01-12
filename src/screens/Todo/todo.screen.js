import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AddTodoHeader, AddTodoForm } from '../../components';
import { List } from '../../shared';
import firebase from 'react-native-firebase';

export class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            addFormVisible: false
        };

        this.db = firebase.database();
    }

    componentDidMount() {
        console.log("REQ");
        const todoRef = this.db.ref('todos/');
        
        todoRef.once('value').then((snapshot) => {
            console.log(snapshot.val());
            this.setState({
                todos: snapshot.val()
            });
        }).catch((err) => console.log(err));
    }

    toggleForm = () => {
        this.setState({
            addFormVisible: !this.state.addFormVisible
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTodoHeader toggleForm={this.toggleForm} formOpened={this.state.addFormVisible}/>
                {
                    this.state.addFormVisible ? <AddTodoForm /> : <List data={this.state.todos}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    actionBar: {
        flex: 0,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
