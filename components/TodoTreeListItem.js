import React, { useState, useEffect, useContext } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import TreeView from 'react-native-final-tree-view'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../theme/Colors'
import {ThemeContext} from '../theme/ThemeContext';

function getIndicator(isExpanded, hasChildrenNodes) {
    if (!hasChildrenNodes) {
        return '-'
    } else if (isExpanded) {
        return 'v'
    } else {
        return '>'
    }
}

function TodoTreeListItem(props) {
    const { colors } = useContext(ThemeContext);

       //for testing
       const family = [
        {
        id: '12120',
        text: 'Grandpa',
        children: [
            {
            id: '21321',
            text: 'Me',
            children: [
                {
                id: '8983',
                text: 'Erick',
                },
                {
                id: '9812',
                text: 'Rose',
                },
            ],
            },
        ],
        },
    ]

    function onPressLa(level) {
        console.log("onPressLa", level);
    }

    return (
        <View
            style={styles.mainContainer}
        >
            <TreeView
                data={props.data} // defined above
                renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                    return (
                    <View style={styles.itemWrapper}>
                        <View style={styles.item}>
                            <Text
                                style={{
                                    marginLeft: 25 * level,
                                    fontSize: 20,
                                    alignItems: 'center',
                                    flex: 5,
                                }}
                            >
                            {getIndicator(isExpanded, hasChildrenNodes)} {node.text}
                            </Text>
                            <View style={styles.iconView}>
                                <Pressable
                                    android_ripple={{ color: "#dddddd" }}
                                    onPress={props.onAddPress.bind(this, node.id, level)}
                                    style={({pressed}) => pressed && styles.pressedItem}
                                >
                                    <Text style={[styles.textIcon, {color: Colors[colors].mainColor}]}>{"+"}</Text>
                                </Pressable>
                                <Pressable
                                    android_ripple={{ color: "#dddddd" }}
                                    onPress={props.onArrowPress.bind(this, node.id)}
                                    style={({pressed}) => pressed && styles.pressedItem}
                                >
                                    <Text style={[styles.textIcon, {color: Colors[colors].mainColor}]}>{"-->"}</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View
                            style={[styles.divider, {color: Colors[colors].mainColor}]}
                        >
                           <View style={{height: 2, width: '100%', backgroundColor: Colors[colors].mainColor}}/>
                        </View>
                    </View>
                    )
                }}
            />
        </View>
    
    )
}


{/* <View style={[styles.button,{ backgroundColor: Colors['blue'].mainColor}]}> */}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    pressedItem: {
        opacity: 0.5,
    },
    itemWrapper: {
        flexDirection: 'column',
    },
    item: {        
        // flex: 1,
        flexDirection: 'row',
        margin: 8,
    },
    iconView: {
        flexDirection: 'row',
        flex: 1,
    },
    textIcon: {
        margin: 5,
    },
    divider: {
        height: 2,
        width: '100%'
    }
})


export default TodoTreeListItem;

