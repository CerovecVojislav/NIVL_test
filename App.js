import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store/store'; 
import MainComponent from './src/mainComponent';
export default function App() {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainComponent />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
