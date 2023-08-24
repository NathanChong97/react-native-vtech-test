import React, { useState, useContext } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,

} from 'react-native';
import { Button } from 'react-native-paper';

import useColors from '../theme/ColorHandler'
import Colors from '../theme/Colors'
import { ThemeContext } from "../theme/ThemeContext";


function BottomNavigationBar(props) {
    // const {colors} = useColors();
    const {colors, applyColors } = useContext(ThemeContext);
    const [currentSelectedTheme, setCurrentSelectedTheme] = useState(colors)

    function changeColor(newColor) {
        // setCurrentSelectedTheme(newColor)
        applyColors(newColor)
        console.log("new color:", newColor);
    }

    return (
        <View style={styles.mainContainer}>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={() => { 
                    changeColor('blue') 
                }}
                style={styles.pressedItem}
            > 
                <View style={[styles.button,{ backgroundColor: Colors['blue'].mainColor}]}>
                    <View style={[styles.colorSquare,{ backgroundColor: Colors['blue'].mainColor}]}/>
                    <Text style={styles.text}>Blue</Text>
                </View>
            </Pressable>

            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={() => { 
                    changeColor('purple') 
                }}                    style={styles.pressedItem}
                >
                <View style={[styles.button,{ backgroundColor: Colors['purple'].mainColor}]}>
                    <View style={[styles.colorSquare,{ backgroundColor: Colors['purple'].mainColor}]}/>
                    <Text style={styles.text}>Purple</Text>
                </View>
            </Pressable>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={() => { 
                    changeColor('green') 
                }} 
                style={styles.pressedItem}
                >
                <View style={[styles.button,{ backgroundColor: Colors['green'].mainColor}]}>
                
                    <View style={[styles.colorSquare,{ backgroundColor: Colors['green'].mainColor}]}/>
                    <Text style={styles.text}>Green</Text>
                </View>
            </Pressable>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={() => { 
                    changeColor('orange') 
                }} 
                style={styles.pressedItem}
                >
                <View style={[styles.button,{ backgroundColor: Colors['orange'].mainColor}]}>
            
                    <View style={[styles.colorSquare,{ backgroundColor: Colors['orange'].mainColor}]}/>
                    <Text style={{color: Colors['orange'].mainColor}}>Orange</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        position: 'absolute', 
        bottom: 0,
        justifyContent: 'center',
        alignContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    pressedItem: {
        opacity: 0.5,
        flex: 1,
    },
    button: {
        opacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    colorSquare: {
        width: 30,
        height: 30,
    },
})


export default BottomNavigationBar;
