import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Category, Priority, Status } from '../../models';
import { DetailsItem } from '../DetaiksItem';

export class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            descriptionVisible: false,
            expandDescriptionValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        console.log(this.props.item);
    }

    toggleDescription = () => {
        this.setState({
            descriptionVisible : !this.state.descriptionVisible  //Step 2
        });

    }

    _getPriorityBackground = (priorityId) => {
        if (priorityId) {
            switch(priorityId) {
                case Priority.LOW: 
                    return '#42f47d'
                    break;
                case Priority.MEDIUM:
                    return '#dff442'
                    break;
                case Priority.HIGH: 
                    return '#f76116'
                default:
                    return '#61dafb'
            }
        }
    }

    _getIconName = (categoryId) => {
        if (categoryId) {
            const categoryIconName = Category.find(item => item.id === categoryId);
            console.log(categoryIconName, "categoryIconName");

            return categoryIconName.icon;
        }
    }

    _getStatus = (statusId) => {
        if (statusId) {
            switch(statusId) {
                case Status.ACTIVE:
                    return 'В работе'
                    break;
                case Status.DONE:
                    return 'Готово'
                    break;
                default:
                    return ''
            }
        }
    }

    render() {
        const { title, description, assignee, categoryId, deadline, priorityId, statusId } = this.props.item;
        const iconName = this._getIconName(categoryId);
        const priorityColor = this._getPriorityBackground(priorityId);
        const statusName = this._getStatus(statusId);

        return (
            <TouchableWithoutFeedback onPress={this.toggleDescription}>
            <View style={styles.itemContainer}>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Icon name={iconName} size={50}/>
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.status}>{statusName}</Text>
                    </View>
                    <View style={[styles.avatar, {backgroundColor: priorityColor}]}>
                        <Text style={styles.avatarTitle}>{assignee[0]}</Text>
                    </View>

                </View>
                {
                    this.state.descriptionVisible ? 
                        <DetailsItem description={description} deadline={deadline} titleBtn="Закрыть задание"/>
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
        justifyContent: 'space-between',
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
        padding: 5
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
    status: {
        color: '#282c34',
        fontSize: 15
    },
    description: {
        color: 'white',
        fontSize: 15,
        marginLeft: 3
    },
    descriptionContainer: {
        padding: 5,
        flex: 0,
        flexDirection: 'row'
    },
    iconContainer: {
        width: 50
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: '#282c34',
        borderWidth: 2,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarTitle: {
        color: '#282c34',
        fontSize: 25
    }
});