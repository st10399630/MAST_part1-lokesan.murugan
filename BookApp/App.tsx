import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon, Button, Input } from 'react-native-elements';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  const addBook = () => {
    if (newBook) {
      setBooks([...books, newBook]);
      setNewBook('');
    }
  };

  const removeBook = (book) => {
    const updatedBooks = books.filter((item) => item !== book);
    setBooks(updatedBooks);
  };

  return (
    <View>
      <Input
        placeholder="Please enter your favorite book"
        value={newBook}
        onChangeText={(text) => setNewBook(text)}
      />
      <Button title="Add Book" onPress={addBook} />
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => removeBook(item)}>
              <Icon name="delete" size={30} color="blue" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default App;
