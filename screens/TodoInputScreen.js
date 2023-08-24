import React, { useState, useContext, useEffect } from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    FlatList,
    Alert,
} from 'react-native';

import TodoItem from '../components/TodoItem'
import {ThemeContext} from '../theme/ThemeContext';
import Colors from '../theme/Colors'
import SQLite from 'react-native-sqlite-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';


function TodoInputScreen(props) {
    const { colors } = useContext(ThemeContext);

    const [enteredTodoText, setEnteredTodoText] = useState("")
    const [todoItems, setTodoItems] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)

    useEffect(() => {
        getData(); 
    }, []) 

    const getData = () => {
        try {
            AsyncStorage.getItem("TodoItemList")
                .then(value => {
                    if(value != null) {
                        let todoData = JSON.parse(value)
                        setTodoItems(todoData)
                        console.log("my data:", todoData)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    function todoInputHandler(enteredText) {
        setEnteredTodoText(enteredText)
    }

    function addTodoHandler2() {
        setData(enteredTodoText);
        setEnteredTodoText("");
    }


    const setData = async (enteredTodoText) => {
        if(enteredTodoText.length == 0) {
             Alert.alert('Warning', "Please enter your data")
        } else {
            try {
                var todoItem = { 
                    text: enteredTodoText, 
                    children: [{}]
                }
                var todoItemList = [
                    ...todoItems,
                    {id: Math.random().toString(), ...todoItem}
                ]
                addTodoHandler(todoItemList)
                await AsyncStorage.setItem("TodoItemList", JSON.stringify(todoItemList))
            } catch (error) {
                console.log(error);
            }
        }
    } 

    function addTodoHandler(todoItemList) {
        // setTodoItems([...todoItems, enteredTodoText])
        //-----------------------
        // setTodoItems((currentTodoItem) => {
        //   return [
        //     ...currentTodoItem,
        //     enteredGoalText
        //   ];
        // })
        //----------------------
        // setTodoItems((currentTodoItem) => {
        //     return [
        //         ...currentTodoItem,
        //         {id: todoItems.length + 1, item: todoItem}
        //     ];
        // })
        setTodoItems(todoItemList)
        endTodoHandler()
    }

    function deleteTodoHandler(id) {
        const newData = todoItems.filter(item => {
            return item.id !== id;
          });
        setTodoItems(newData);
        removeData(newData)

        // setTodoItems(enteredTodoItems => {
        //     console.log("test:", enteredTodoItems[0].id)
        //     return enteredTodoItems.filter((item) => item.id !== id);
        // })
        // let filteredArray = todoItems.filter(item => item.id !== 2)
        // setTodoItems(filteredArray);
    }

    const removeData = async (newData) => {
        try {
            await AsyncStorage.setItem("TodoItemList", JSON.stringify(newData))
        } catch (error) {
            console.log(error);
        }
    } 


    function startAddTodoHandler() {
        setModalIsVisible(true)
        navigation.navigate("TodoInputScreen")
    }

    function endTodoHandler() {
        setModalIsVisible(false)
    }

    return (
        <View style={styles.mainContainer}>
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
                        color= {
                            Colors[colors].mainColor
                        }
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
            <View style={styles.todoContainer}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={todoItems}
                renderItem={(itemData) => {
                return (
                <TodoItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteTodoHandler}
                    />
                )
                }}
            />
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
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
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    todoContainer: {
        flex: 5,
    },
})

export default TodoInputScreen;