import React from 'react';
import { Animated, Dimensions, TouchableOpacity, View, Text, Easing } from 'react-native';
import { height, width } from './Constant';
class MultiAnimated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pos1: new Animated.Value(0),
            pos2: new Animated.Value(0)
        };
        this.animatePos1 = Animated.timing(this.state.pos1, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bounce
        })
        this.animatePos2 = Animated.timing(this.state.pos2, {
            toValue: -200,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bounce
        })
    }
    stagger() {
        Animated.stagger(1000, [this.animatePos1, this.animatePos2]).start(() => {
            this.reset()
        }) // pos 1 run 1s them pos 2 start

    }
    sequence() {
        Animated.sequence([this.animatePos1, this.animatePos2]).start(() => {
            this.reset()
        }) // pos 1 then pos 2

    }
    parallel() {
        Animated.parallel([this.animatePos1, this.animatePos2]).start(() => {
            this.reset()
        }) // run together
    }
    reset() {
        this.state.pos1.setValue(0)
        this.state.pos2.setValue(0)
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
                        marginLeft: this.state.pos1
                    }}
                >
                </Animated.View>
                <Animated.View
                    style={{
                        width: 50,
                        marginTop: 20,
                        height: 50, backgroundColor: 'red',
                        marginLeft: this.state.pos2
                    }}
                >
                </Animated.View>
                <TouchableOpacity
                    onPress={() => this.stagger()}
                    style={{ marginTop: 10, backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Stagger</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.sequence()}
                    style={{ marginTop: 10, backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Sequence</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.parallel()}
                    style={{ marginTop: 10, backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Parallel</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default MultiAnimated;