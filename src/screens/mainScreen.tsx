import {Button, ScrollView, StatusBar, Text, TextInput, View} from "react-native";
import {useState} from "react";
import TodoTile from "../components/todoTile";
import Todo from "../models/todo";
import { v4 as uuidv4 } from 'uuid';

// Main and only screen of the app
const MainScreen = () => {
    const [text, setText] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    // Add a new task to the list
    const addTodo = () => {
        // Not adding empty tasks
        if (text === '') {
            return
        }

        // Add to the top of the list
        setTodos([{
            id: todos.length,
            text: text
        }, ...todos])
        clearText()
    }

    // Clear the text input
    const clearText = () => {
        setText('')
    }

    // Remove a task from the list
    const completeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return <View style={
        {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
            gap: 10,
        }
    }>
        {/*App title*/}
        <Text style={
            {
                fontSize: 24,
                fontWeight: 'bold',
            }
        }>Todo App</Text>

        {/* Add a task*/}
        <View style={{
            width: '100%',
            flexDirection: 'row',
            alignContent: 'space-between',
        }}>

            <TextInput
                value={text}
                onChangeText={(text) => {
                    setText(text)
                }}
                onSubmitEditing={() => {
                    addTodo()
                }}
                placeholder="Add a task"
                style={{
                    flex: 1,
                    marginRight: 10,
                    borderStyle: 'solid',
                    borderWidth: 0.5,
                    borderRadius: 5,
                }}/>
            <Button title="Add" onPress={
                () => {
                    addTodo()
                }
            }/>
        </View>

        {/*List of tasks*/}
        <ScrollView style={{
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            gap: 10,
            marginTop: 10,
        }} >
            {todos.map(todo => {
                return <TodoTile key={todo.id} todo={todo} onCompleted={() => {
                    completeTodo(todo.id)
                }}/>
            })}
        </ScrollView>

        {/*Safearea*/}
        <StatusBar/>
    </View>
}

export default MainScreen