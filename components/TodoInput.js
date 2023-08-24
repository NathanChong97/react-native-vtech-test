import React, { useState } from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';

function TodoInput(props) {
    const [enteredTodoText, setEnteredTodoText] = useState("")

    function todoInputHandler(enteredText) {
        setEnteredTodoText(enteredText)
    }

    function addTodoHandler2() {
        props.onAddTodo(enteredTodoText);
        setEnteredTodoText("");
    }

    return (
        <Modal visible={props.modalVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter new to do item'
                    onChangeText={todoInputHandler}
                    value={enteredTodoText}
                />
                <View style={styles.button}>
                    <Button
                        title='Add Item'
                        onPress={addTodoHandler2}
                        color="#b180f0"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    {/* <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancelModal}
                            color="#f31282"
                        />
                    </View> */}
                </View>

            </View>
        </Modal>
    )
}



const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: "#fff",
        color: '#120438',
        borderRadius: 6,
        width: '70%',
        padding: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: "30%",
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
})

export default TodoInput;