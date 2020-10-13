import React from 'react';
import { Animated, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import { height, width } from './Constant';
class FadeAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: new Animated.Value(0)
        };
        this.state.fade.addListener(
            ({ value }) => this._value = value    //get value of state animate
        );

    }
    fadeHandler() {
        Animated.timing(this.state.fade, {
            toValue: this.state.fade._value === 1 ? 0 : 1,
            duration: 1000,
            useNativeDriver: false,
        }).start(async ({ finished }) => {
            console.log('animated finished')
        });
    }
    render() {
        return (
            <View style={{
                width: width,
                height: height,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Animated.View
                    style={{
                        width: 50,
                        height: 50, backgroundColor: 'red',
                        opacity: this.state.fade,
                        marginLeft: this.state.position
                    }}
                >
                </Animated.View>
                <TouchableOpacity
                    onPress={() => this.fadeHandler()}
                    style={{ marginTop: 10, backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Press Me</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FadeAnimation;