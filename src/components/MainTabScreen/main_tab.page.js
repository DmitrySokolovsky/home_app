import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Todo } from '../../screens';

export class MainTabView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                index: 0,
                routes: [
                    { key: 'todos', title: 'Задания', iconName: 'check-circle' },
                    { key: 'chat', title: 'Чат', iconName: 'comment-dots' },
                    { key: 'productList', title: 'Покупки', iconName: 'dollar-sign' },
                    { key: 'statistics', title: 'Статистика', iconName: 'chart-bar' },
                ]
        }
    }

    renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((item, index) => index);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                        inputIndex => (inputIndex === i ? '#61dafb' : 'white')
                    ),
                });

                let AnimatedIcon = Animated.createAnimatedComponent(Icon);

                return (
                    <TouchableOpacity
                        key={i}
                        style={styles.tabItem}
                        onPress={() => this.setState({ index: i })}>
                        <View style={styles.tabBarItem}>
                            <AnimatedIcon style={[{ color }, styles.tabText]} size={24} name={route.iconName} />
                        </View>
                    </TouchableOpacity>
                );
                })}
            </View>
        );
      }

    render() {
        return (
            <TabView 
                navigationState={this.state}
                renderScene={SceneMap({
                    todos: Todo,
                    chat: Test2,
                    productList: Test3,
                    statistics: Test4
                })}
                renderTabBar={this.renderTabBar}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                tabBarPosition="bottom"
            />
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        width: '100%',
        borderTopColor: '#61dafb',
        borderTopWidth: 2,
        backgroundColor: '#282c34',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabBarItem: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40
    }
});

const Test = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#61dafb'}}>
        </View>
    );
}

const Test2 = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#282c34'}}></View>
    );
}

const Test3 = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#61dafb'}}></View>
    );
}

const Test4 = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#282c34'}}></View>
    );
}

