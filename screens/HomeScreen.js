import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/1600x900/?classroom' }} // Ganti dengan gambar yang relevan
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Selamat Datang di Penjadwalan Ruang Kelas</Text>
        <Text style={styles.description}>
          Gunakan aplikasi ini untuk melihat jadwal ruang kelas dan status
          ruangan.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Lihat Jadwal Ruangan"
            onPress={() => navigation.navigate('RoomSchedule')}
            color="#4CAF50"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Detail Jadwal Hari Ini"
            onPress={() => navigation.navigate('Details')}
            color="#2196F3"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent overlay
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginBottom: 15,
    width: '80%',
  },
});
