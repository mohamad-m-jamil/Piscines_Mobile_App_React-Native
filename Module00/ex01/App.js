import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button, StatusBar } from 'react-native';



export default function App() {

  const[mytext, setmytext] = useState("A Simple Text");
  const[issimple, setissimple] = useState(false);
  const handlePress = () => {
    let i = 0;
    if(!issimple)
    {
      setmytext("Hello World");
      setissimple(true);
    }
    else
    {
      setmytext("A Simple Text");
      setissimple(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mytext}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: '#f5f5dc',
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: '#f5f5dc',
  },
  buttonText: {
    color: '#228b22',
    backgroundColor: '#f5f5dc'
  },
  text:{
    backgroundColor:'#228b22',
    borderWidth: 2,
    borderColor: '#228b22',
    paddingHorizontal: 7,
    paddingVertical: 4,
    fontFamily: 'Arial',
    borderRadius:7,
    fontSize:25,
  },
});
