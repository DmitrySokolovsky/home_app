import React from 'react';
import { StyleSheet, TextInput, Animated, View, Text, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { verifyUser } from '../../store/actions';

export class _Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ''
        }
    
        this.spinValue = new Animated.Value(0);
      }
    
      componentDidMount() {
        this.spin();
      }
    
      spin() {
        this.spinValue.setValue(0);
        Animated.timing(
          this.spinValue,
          {
            toValue: 1,
            duration: 7000,
            easing: Easing.linear
          }
        ).start(() => this.spin());
      }

      onNameChange = (text) => {
        this.setState({
          name: text
        });
      }

      onLogInPress = () => {
        this.props.setUser(this.state.name);
      }
    
      render() {
        const spin = this.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        });
    
        return (
          <View style={styles.container}>
              <Animated.Image 
                style={{
                  transform: [{rotate: spin}],
                  width: 150,
                  height: 150
                  }} 
                source={require('../../assets/logo.png')} />
              <TextInput style={styles.nameInput} placeholderTextColor="#282c34" placeholder="ИМЯ" onChangeText={(text) => this.setState({ name: text })}/>
              <TouchableOpacity onPress={this.onLogInPress}>
                <View style={styles.btnContainer}>
                  <Text style={styles.btnText}>Войти</Text>
                </View>
              </TouchableOpacity>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      image: {
        width: 120,
        height: 120
      },
      btnText: {
        color: '#61dafb',
        fontSize: 25
      },
      btnContainer: {
        marginTop: 40
      },
      answerLabel: {
        color: 'white'
      },
      nameInput: {
        marginTop: 40,
        backgroundColor: 'white',
        width: 190,
        borderRadius: 3,
        fontSize: 20,
        color: '#282c34',
      }
    });

    const mapDispatchToProps = (dispatch) => ({
      setUser: (userName) => {
        dispatch(verifyUser(userName));
      }
    });

    export const Login = connect(null, mapDispatchToProps)(_Login);