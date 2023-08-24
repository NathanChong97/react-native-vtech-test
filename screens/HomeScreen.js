import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ActivityIndicator, 
    Linking,
    BackHandler,
    View,
    StatusBar,
    Button,
    FlatList,
} from 'react-native';
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

export default function HomeScreen({navigation, route}) {
    const [todoItems, setTodoItems] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)


    function addTodoHandler(enteredTodoText) {
        // setTodoItems([...todoItems, enteredTodoText])
        //-----------------------
        // setTodoItems((currentTodoItem) => {
        //   return [
        //     ...currentTodoItem,
        //     enteredGoalText
        //   ];
        // })
        //----------------------
        setTodoItems((currentTodoItem) => {
        return [
            ...currentTodoItem,
            { text: enteredTodoText, id: Math.random().toString() }
        ];
        })
        endTodoHandler()
    }

    function deleteTodoHandler(id) {
        setTodoItems(enteredTodoItems => {
        return enteredTodoItems.filter((item) => item.id !== id);
        })
    }

    function startAddTodoHandler() {
        setModalIsVisible(true)
        navigation.navigate("TodoInputScreen")
    }

    function endTodoHandler() {
        setModalIsVisible(false)
    }

    return (
        <>
          <StatusBar barStyle="light-content" />
          <View style={styles.appContainer}>
            <Button
              title="Add New Todo Item"
              onPress={startAddTodoHandler} />
            {/* <TodoInput
              modalVisible={modalIsVisible}
              onAddTodo={addTodoHandler}
              onCancelModal={endTodoHandler} /> */}
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
        </>
      );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      backgroundColor: '#fff'
    },
    todoContainer: {
      flex: 5,
    },
  });