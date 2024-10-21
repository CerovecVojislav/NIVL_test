import { Provider, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TextInput, Button } from 'react-native';
import { changeValue } from './slice/slice';
import { useState } from 'react';

export default function MainComponent(){
    const displayText = useSelector(state => state.displayText);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(changeValue(inputText));
    };
    
    const [inputText, setInputText] = useState(''); 
    return(
        <>
        <h1>{displayText.value}</h1>
        <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Enter new text"
        />
        <br />
        <Button title="Change Text" onPress={handleSubmit} />
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        width: '80%',
    },
});