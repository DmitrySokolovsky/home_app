import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class AddTodoHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    onIconPress = () => {
        if (this.props.toggleForm) {
            this.props.toggleForm();
        }
    }

    render() {
        return (
            <View style={styles.actionBar}> 
            <Icon name="plus" size={30} color="#900" onPress={this.onIconPress}/>
            {
                this.props.formOpened ? null :
                <View>
                    <TouchableOpacity>
                        <Text>ВСЕ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>МОИ</Text>
                    </TouchableOpacity>  
                </View>
            }                              

            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionBar: {
        flex: 0,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});