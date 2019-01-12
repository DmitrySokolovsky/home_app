import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

export class DetailsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { description, deadline, titleBtn, btnClick } = this.props;
        return (
            <React.Fragment>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Описание:</Text> 
                <Text style={styles.descriptionValue}>{description}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Дэдлайн:</Text> 
                <Text style={styles.descriptionValue}>{`${deadline.date}.${deadline.month}.${deadline.year}`}</Text>
            </View>
            <Button title={titleBtn} onPress={btnClick}/>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        color: 'white',
        fontSize: 15,
        marginLeft: 3
    },
    descriptionValue: {
        color: '#282c34',
        fontSize: 15,
        marginLeft: 3
    },
    descriptionContainer: {
        padding: 5,
        flex: 0,
        flexDirection: 'row'
    }
});