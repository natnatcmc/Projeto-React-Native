import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notificações</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Tema Escuro</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={setDarkTheme}
        />
      </View>
      <Text style={styles.status}>
        Notificações: {isNotificationsEnabled ? 'Ativadas' : 'Desativadas'}
      </Text>
      <Text style={styles.status}>
        Tema: {isDarkTheme ? 'Escuro' : 'Claro'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  settingText: {
    fontSize: 18,
  },
  status: {
    fontSize: 16,
    marginTop: 20,
  },
});
