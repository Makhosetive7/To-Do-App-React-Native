import { StyleSheet, SafeAreaView, Text, TextInput, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react';

const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  const addToDo = () => {
    if (newToDo.trim() === '') return;
    setToDo([...toDo, { key: newToDo }]);
    setNewToDo('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>
          Add New Task
        </Text>
      </View>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.inputField}
          placeholder='add new to-do to your endless list'
          value={newToDo}
          onChangeText={setNewToDo}
        />
        <Button title='add' onPress={addToDo} />
      </View>
      <View>
        <FlatList
          data={toDo}
          renderItem={({ item }) => <Text style={styles.todoItem}>{item.key}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    backgroundColor: '#3498db',
    padding: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  inputField: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: 'gold',
  },
  todoItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoList;
