import {Button, Text, View} from "react-native";
import Todo from "../models/todo";

const TodoTile = ({
                  todo,
                  onCompleted
              }: {
   todo: Todo,
    onCompleted: () => void
}) => {
    return <View style={
        {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#f0f0f0',
            borderRadius: 5,
            marginVertical: 4
        }
    }>
        <Text>{todo.text}</Text>
        <Button title="Complete" color={
            'green'
        } onPress={onCompleted}/>
    </View>
}

export default TodoTile