import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class AddTodoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.rotationValue = new Animated.Value(this.props.formOpened ? 1 : 0);
    }

    onIconPress = () => {
        if (this.props.toggleForm) {
            this.props.toggleForm();
        }
    }

    componentWillReceiveProps(nextProps) {
        Animated.timing(
            this.rotationValue,
            {
                toValue: nextProps.formOpened ? 1 : 0,
                duration: 400,
                easing: Easing.linear
            }
        ).start();
    }

    render() {
        const rotateToClose = this.rotationValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });

        return (
            <View style={styles.actionBar}>
                <Animated.View style={ {transform: [{rotate: rotateToClose}], marginLeft: 10} }>
                    <Icon name="plus" size={30} color="#61dafb" onPress={this.onIconPress}/>
                </Animated.View>

                {
                    this.props.formOpened ? null :
                    <View style={styles.btnContainer}>
                        <TouchableOpacity>
                            <Text style={styles.btn}>ВСЕ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.btn}>МОИ</Text>
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
        alignItems: 'center',
        backgroundColor: '#282c34'
    },
    btnContainer: {
        flex: 0,
        flexDirection: 'row'
    },
    btn: {
        marginRight: 20,
        color: 'white'
    },
    icon: {
        marginLeft: 10
    }
});