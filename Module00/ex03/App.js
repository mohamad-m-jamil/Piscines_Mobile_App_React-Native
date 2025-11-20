import { useState } from 'react';
import { View, StyleSheet, StatusBar, TextInput } from 'react-native';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { TouchableOpacity, Text } from 'react-native';
import { evaluate } from "mathjs";


export default function App() {

  const[textinput, settextinput] = useState("0");
  const[firstzero, setfirstzero] = useState(0);
  const[res, setres] = useState("0");
  const handlePress = (text) => {
    if(text == "AC")
    {
      setfirstzero(0);
      settextinput("0");
      setres("0");
      setfirstzero(0);
      return;
    }
    if(text == "C")
    {
      if(textinput.length > 1)
        settextinput(textinput.slice(0, -1));
      return;
    }
    if (text == "=") {
      try {
        const result = evaluate(textinput);
        setres(result.toString());
        settextinput("0");
      } catch (error) {
        setres("Error");
      }
      return;
    }
    if(textinput == "0" && firstzero == 0)
    {
      settextinput(text);
      setfirstzero(1);
    }
    else
      settextinput(textinput + text);
  };
  const CalcButton = ({ text, style }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(text)}>
      <Text style={[styles.buttonText, style]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header style={styles.heder}>
          <Appbar.Content style={styles.hedertext} title="Calculator" />
        </Appbar.Header>

        <TextInput style={styles.input} value={textinput} />
        <TextInput style={styles.input1} value={res} />

        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <CalcButton text="8" />
            <CalcButton text="7" />
            <CalcButton text="9" />
            <CalcButton text="C" style={styles.red} />
            <CalcButton text="AC" style={styles.red} />
          </View>

          <View style={styles.buttonRow}>
            <CalcButton text="4" />
            <CalcButton text="5" />
            <CalcButton text="6" />
            <CalcButton text="+" style={styles.operator} />
            <CalcButton text="-" style={styles.operator} />
          </View>

          <View style={styles.buttonRow}>
            <CalcButton text="1" />
            <CalcButton text="2" />
            <CalcButton text="3" />
            <CalcButton text="x" style={styles.operator} />
            <CalcButton text="/" style={styles.operator} />
          </View>

          <View style={styles.buttonRow}>
            <CalcButton text="0" />
            <CalcButton text="." style={styles.operator} />
            <CalcButton text="00" style={styles.operator} />
            <CalcButton text="=" style={styles.equal} />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
  },
  hedertext:{
    alignItems: 'center',
  },
  heder:{
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
  input: {
    width: '90%',
    height: 60,
    fontSize: 32,
    margin: 10,
    marginLeft: 30,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    textAlign: 'right',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  input1: {
    width: '90%',
    height: 60,
    fontSize: 32,
    margin: 10,
    marginLeft: 30,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    textAlign: 'right',
    color: 'green',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop:'25%',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
  },
  buttonText: {
    fontSize: 24,
    color:'white',
  },
  operator: {
    color: '#ffa500',
  },
  equal: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
});
