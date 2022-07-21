import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListComponent from './src/components/ListComponent/ListComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Try out to click any movie!</Text>
      <ListComponent search="marvel"></ListComponent>
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
});
