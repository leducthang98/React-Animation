import React from 'react';
import { Animated, Dimensions, TouchableOpacity, View, Text, Easing } from 'react-native';
import { height, width } from './Constant';
class MoveAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: new Animated.Value(0)
        };
        this.state.pos.addListener(
            ({ value }) => this._value = value    //get value of state animate
        );

    }
    moveLeft() {
        Animated.timing(this.state.pos, {
            toValue: this.state.pos._value - 200,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bounce
        }).start(async ({ finished }) => {
            console.log('done')
        });
    }
    moveRight() {
        Animated.spring(this.state.pos, {
            toValue: this.state.pos._value + 200,
            duration: 1000,
            useNativeDriver: false,
        }).start(async ({ finished }) => {
            console.log('done')
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
                        marginLeft: this.state.pos
                    }}
                >
                </Animated.View>
                <TouchableOpacity
                    onPress={() => this.moveLeft()}
                    style={{ marginTop: 10, backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Left (use timing animated with bounce easing)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.moveRight()}
                    style={{ marginTop: 10, backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Right(use spring animated)</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default MoveAnimation;