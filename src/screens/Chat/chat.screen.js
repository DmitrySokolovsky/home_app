import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import SvgUri from 'react-native-svg-uri';
import Svg,{
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.db = firebase.database();
    }

    getData = () => {
        var starCountRef = firebase.database().ref('todos/');
        starCountRef.on('value', function(snapshot) {
            console.log(snapshot.val());
        });
    }

    render() {
        return (
            <View >
                <TouchableOpacity onPress={this.getData}>
                    <View>
                        <Text style={{ color: 'red' }}>TEST</Text>    
                        <Svg height="500" width="500" viewBox="0 0 100 100">
                            <Path d="M8 2.1c1.1 0 2.2 0.5 3 1.3 0.8 0.9 1.3 1.9 1.3 3.1s-0.5 2.5-1.3 3.3l-3 3.1-3-3.1c-0.8-0.8-1.3-2-1.3-3.3 0-1.2 0.4-2.2 1.3-3.1 0.8-0.8 1.9-1.3 3-1.3z">
                            </Path>
                            <Circle 
                                    cx="8"
                                    cy="0"
                                    r="3"
                                    fill="white"/>
                            
                        </Svg>                
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}