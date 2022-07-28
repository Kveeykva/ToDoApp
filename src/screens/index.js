import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TextInput, Pressable } from "react-native";
import styles from "./styles";
import Todo from "../components/Todo";

let lastId = 0;




const TodoApp = () => {
    const [completedTask, setCompletedTask] = useState(1);
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);


    useEffect(() => {
        const list = todoList.filter(todo => !todo.complated);
        setCompletedTask(list);
    }, [todoList]);


    function handleSaveTodo() {
        if (todo === '') return alert('Henüz todo girmediniz');
        setTodoList([...todoList, { id: lastId++, todo, completed: false }]);
        setTodo('');
    }

    const toggleTodo = item => {
        const newTodoList = todoList.map(t =>
            t.id === item.id ? { ...t, completed: !t.completed } : t,
        );
        console.log(newTodoList);
        setTodoList(newTodoList);
    };

    return (
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.container}>
                <Text style={styles.title}> YAPILACAKLAR  </Text>
                <Text style={styles.titleTask}>{completedTask.length} </Text>
            </View>
            <View>
                <FlatList
                    data={todoList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Todo onToggle={() => toggleTodo(item)} item={item} />
                    )}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    value={todo}
                    onChangeText={setTodo}
                    placeholder="Yapılacak..."
                    placeholderTextColor={"grey"}
                    style={styles.searchInput}
                />
                <Pressable onPress={handleSaveTodo}>
                    <View
                        style={[
                            styles.buttonContainer,
                            todo !== '' && { backgroundColor: 'yellow' },
                        ]}>
                        <Text style={[styles.text, todo !== '' && { color: 'black' }]}>
                            Kaydet
                        </Text>
                    </View>
                </Pressable>

            </View>
        </SafeAreaView>
    );
};
export default TodoApp;
