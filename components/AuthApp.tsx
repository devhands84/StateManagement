import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import useAuthActions from '../hooks/useAuthAction';
import useUser from '../hooks/useUser';

function AuthState() {
  const user = useUser();
  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인 하세요'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  const {authorize, logout} = useAuthActions();
  const onPressLogin = () => {
    authorize({
      id: 1,
      username: 'jone',
      displayName: 'john',
    });
  };

  return (
    <View>
      <Button title="Login" onPress={onPressLogin} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthState />
      <AuthButtons />
    </SafeAreaView>
  );
}

export default AuthApp;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
