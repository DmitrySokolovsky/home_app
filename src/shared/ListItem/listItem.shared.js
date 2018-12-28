import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, description } = this.props.item;
        console.log(this.props.item);
        return (
            
            <View style={styles.itemContainer}>
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarTitle}>B</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    
                </View><Text style={styles.description}>{description}</Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row'
    },
    itemContainer: {
        flex: 0,
        width: '100%',
        // height: 100,
        borderWidth: 2,
        borderColor: '#282c34',
        backgroundColor: '#61dafb',
        flexDirection: 'column',
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