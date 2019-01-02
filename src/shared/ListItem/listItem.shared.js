import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing } from 'react-native';

export class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            descriptionVisible: false,
            expandDescriptionValue: new Animated.Value(0)
        }
    }

    toggleDescription = () => {
        this.setState({
            descriptionVisible : !this.state.descriptionVisible  //Step 2
        });

    }

    render() {
        let { title, description } = this.props.item;

        return (
            <TouchableWithoutFeedback onPress={this.toggleDescription}>
            <View style={styles.itemContainer}>
                <View style={styles.container} onLayout={this._setMinHeight}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarTitle}>B</Text>
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                </View>
                {
                    this.state.descriptionVisible ? 
                        <Text style={styles.description}>{description}</Text> 
                    : null
                }
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 5,
    },
    itemContainer: {
        flex: 0,
        width: '100%',
        borderWidth: 2,
        borderColor: '#282c34',
        backgroundColor: '#61dafb',
        flexDirection: 'column',
    },
    name: {
        marginLeft: 25
    },
    text: {
        color: 'red'
    },
    title: {
        color: '#282c34',
        fontSize: 20
    },
    description: {
        color: 'white'
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: '#282c34',
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarTitle: {
        color: '#282c34'
    }
});