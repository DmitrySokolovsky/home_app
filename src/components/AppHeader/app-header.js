import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { Avatar } from 'react-native-elements';

export class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exitBtnVisible: false
        }
        this.animatedValue = new Animated.Value(0);
        this.animatedValue1 = new Animated.Value(0);
    }

    animateAppearance = () => {
        this.setState({
            exitBtnVisible: true
        });

        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue,
            {
              toValue: 1,
              duration: 250,
              easing: Easing.linear
            }
        ).start();
    }

    animateExcape = () => {
        this.animatedValue1.setValue(0);
        Animated.timing(this.animatedValue1,
            {
              toValue: 1,
              duration: 250,
              easing: Easing.linear
            }
        ).start(() => {
            this.animatedValue1.setValue(0);
            this.setState({
                exitBtnVisible: false
            })
        });
    }



    toggleExitBtnHandler = () => {
        console.log(this.state.exitBtnVisible);
        if(!this.state.exitBtnVisible) {
            this.animateAppearance();
        } else {
            this.animateExcape();
        }
    }

    logOutHandler = () => {
        if (this.props.logOutHandler) {
            this.props.logOutHandler();
        }
    }

    render() {
        const marginTop = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 0]
        });

        const marginBottom = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200]
        });

        return (
            <View style={styles.container}>

                <TouchableOpacity>
                    <View style={styles.headerItem}>
                        <Text style={styles.routeText}>{this.props.routeName}</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                    {
                        this.state.exitBtnVisible ? 
                        
                            <TouchableOpacity onPress={this.props.onPressHandler}>
                                <Animated.View style={{ marginTop, marginBottom }}>
                                    <Text style={{ color: 'white', marginRight: 10, fontSize: 20 }}>Выход</Text>
                                 </Animated.View>
                            </TouchableOpacity>
                        
                        : null
                    }

                    <Avatar 
                        onPress={this.toggleExitBtnHandler}
                        rounded
                        small
                        title={this.props.userName[0]}
                        containerStyle={styles.avatarContainer}
                        titleStyle={styles.avatarText}
                    />
                    
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        height: 55,
        backgroundColor: '#282c34',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    routeText: {
        color: '#61dafb',
        fontSize: 20,
        marginLeft: 10
    },
    userNameText: {
        color: '#61dafb',
        marginRight: 10
    },
    headerItem: {
        height: '100%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        backgroundColor: '#61dafb',
        marginRight: 10
    },
    avatarText: {
        color: '#282c34'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBtn: {
        margin: 5
    }
});
