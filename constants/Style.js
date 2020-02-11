import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  splashContainer: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Auth screens styles
  splashSection: {
    flex: .33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 10,
  },
  authText: {
    fontSize: 24,
    color: "#fff",
  },
  authButton: {
    height: 40,
    margin: 5,
    backgroundColor: '#fff',
  },
  authGoogle: {
    height: 40,
    margin: 5,
    backgroundColor: '#fff',
  }
});