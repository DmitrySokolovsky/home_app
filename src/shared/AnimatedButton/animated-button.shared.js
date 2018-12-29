import React from 'react';
import { Text, Animated, TouchableOpacity, Easing } from 'react-native';

export class AnimatedButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationPlayed: false
        };

        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.animateAppearance();
    }

    

    componentWillUnmount() {
        console.log('unmount');
        this.animateExcape();
    }

    render() {
        const marginTop = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 0]
        });

        return (
            <TouchableOpacity onPress={this.props.onPressHandler}>
                <Animated.View style={{ marginTop }}>
                    <Text style={{ color: 'white', marginRight: 10 }}>{this.props.title}</Text>
                 </Animated.View>
            </TouchableOpacity>
        );
    }
}