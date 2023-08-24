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
import TodoTreeListItem from '../components/TodoTreeListItem'
import {ThemeContext} from '../theme/ThemeContext';
import Colors from '../theme/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

function SearchScreen(props) {
    const { colors } = useContext(ThemeContext);

    const [todoItems, setTodoItems] = useState([])
    const [filteredTodoItems, setFilteredTodoItems] = useState(todoItems)
    const [enteredSearchText, setEnteredSearchText] = useState("")
    const [isAddingNewItem, setIsAddingNewItem] = useState(false)
    const [enteredNewTodoText, setEnteredNewTodoText] = useState("")
    const [currentEditingItemID, setCurrentEditingItemID] = useState("")
    const [currentEditingItemLevel, setCurrentEditingItemLevel] = useState("")

      
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
                        setFilteredTodoItems(todoData)
                        // console.log(filteredTodoItems)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    function todoSearchInputHandler(enteredText) {
        setEnteredSearchText(enteredText)
    }

    function searchHandler() {
        if(enteredSearchText.length == 0) {
            setFilteredTodoItems(todoItems)
        } else {
            const newData = todoItems.filter(item => {
                return item.text === enteredSearchText;
              });
            setFilteredTodoItems(newData);
        }
    }

    function deleteTodoHandler(id) {

    }

    function todoAddInputHandler(enteredText) {
        setEnteredNewTodoText(enteredText)
    }

    function enableAddNewItemView(id, level) {
        setIsAddingNewItem(true)
        setCurrentEditingItemID(id)
        setCurrentEditingItemLevel(level)
    }

    function refreshHandler() {
        getData(); 
    }

    function addTodoHandler() {
        if(enteredNewTodoText.length == 0) {
            Alert.alert('Warning', "Please enter your data")
       } else {
        //unfinished
        const newItemData = todoItems.map((item, index) => {
            console.log("addTodoHandler item id", item.id)
            console.log("addTodoHandler id", currentEditingItemID)

            if (item.id !== currentEditingItemID) {
                var todoItem = { 
                    id: Math.random().toString(), 
                    text: enteredNewTodoText, 
                    children: []
                }
                var newTodoItemList = [
                    {
                        id: item.id,
                        text: item.text,
                        children: {...item.children, todoItem}
                    }      
                ]
                const child = item.children.filter(childItem => {
                    return childItem
                })
                return {...item, children: [...item.children, todoItem]};
                // return {...item, children: {...item.children, todoItem}};
            }
        })
        // setTodoItems(newItemData);
        console.log("addTodoHandler new data", newItemData)
       }

    }

    function cancelHandler() {
        setIsAddingNewItem(false)
        setEnteredNewTodoText("")
    }

    function goToDetailPage(id) {

    }

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text>Notes, Please click refresh button to refresh page.</Text>
                <View>
                    <Button
                        title='Refresh'
                        onPress={refreshHandler}
                        color= {
                            Colors[colors].mainColor
                        }
                    />
                </View>
            </View>
            {isAddingNewItem != true ? 
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder='Search Item'
                        onChangeText={todoSearchInputHandler}
                        value={enteredSearchText}
                    />
                    <View style={styles.button}>
                        <Button
                            title='Search'
                            onPress={searchHandler}
                            color= {
                                Colors[colors].mainColor
                            }
                        />
                    </View>
                </View>
                : 
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.addItemInputField}
                        placeholder='Enter new to do item'
                        onChangeText={todoAddInputHandler}
                        value={enteredNewTodoText}
                    />
                    <View style={styles.button}>
                        <Button
                            title='Add Item'
                            onPress={addTodoHandler}
                            color= {
                                Colors[colors].mainColor
                            }
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={cancelHandler}
                            color= {
                                "#aeaeae"
                            }
                        />
                    </View>
                </View>
            }
            <View style={styles.todoContainer}>
            <TodoTreeListItem
                data={filteredTodoItems}
                onAddPress={enableAddNewItemView}
                onArrowPress={goToDetailPage}
            />
            {/* <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={filteredTodoItems}
                renderItem={(itemData) => {
                    return (
                        // <TodoItem
                        //     text={itemData.item.item.text}
                        //     id={itemData.item.id}
                        //     onDeleteItem={deleteTodoHandler}
                        // />
                    )
                }}
            /> */}
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
    searchTextInput: {
        flex: 3,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: "#fff",
        color: '#120438',
        borderRadius: 6,
        width: '70%',
        padding: 12,
    },
    addItemInputField: {
        flex: 3,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: "#fff",
        color: '#120438',
        borderRadius: 6,
        padding: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        flex: 1,
        paddingHorizontal: 2,
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

export default SearchScreen;