import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';

export class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Добавить задачу</Text>
                <View>
                    <TextInput placeholder="Название"/>
                    <TextInput placeholder="Название"/>
                    <TextInput placeholder="Название"/>
                    <Button raised title="Добавить"/>
                </View>
            </View>
        );
    }
}