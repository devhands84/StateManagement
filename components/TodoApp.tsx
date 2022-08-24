import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function BlackButton({onPress, title}: {onPress(): void; title: string}) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      android_ripple={{color: 'white'}}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

function TodoItem({id, text, done}: {id: number; text: string; done: boolean}) {
  const onToggle = () => {
    console.log('toggle');
  };

  const onRemove = () => {
    console.log('remove');
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <BlackButton onPress={onRemove} title="delete" />
    </View>
  );
}

function Todos() {
  const todos = [
    {id: 1, text: 'learn react native', done: true},
    {id: 2, text: 'learn state change', done: false},
  ];

  return (
    <FlatList
      style={styles.todos}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} done={item.done} text={item.text} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
    />
  );
}

function TodoInput() {
  const [text, setText] = useState('');

  const onPress = () => {
    console.log('register');
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.inputWrapper}
        placeholder="Enter textInput"
        value={text}
        onChangeText={setText}
      />
      <BlackButton onPress={onPress} title="register" />
    </View>
  );
}
function TodoApp() {
  return (
    <SafeAreaView style={styles.block}>
      <Todos />
      <TodoInput />
    </SafeAreaView>
  );
}

export default TodoApp;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  inputWrapper: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  todos: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    flex: 1,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});
