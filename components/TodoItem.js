import React, { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function TodoItem(props) {
    return (
        <View style={styles.todoItem}>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.todoText}>{props.text}</Text>
            </Pressable>
        </View >
    )
};

const styles = StyleSheet.create({
    todoItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    todoText: {
        padding: 8,
        color: '#ffffff',
    },
})

export default TodoItem;