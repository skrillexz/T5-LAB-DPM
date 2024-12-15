import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Jadwal Hari Ini</Text>
      <View style={styles.card}>
        <Text style={styles.time}>08:00 - 09:40</Text>
        <Text style={styles.subject}>Matematika Diskrit</Text>
        <Text style={styles.room}>Ruang: R101</Text>
        <Text style={styles.lecturer}>Dosen: Dr. Ahmad</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>10:00 - 11:40</Text>
        <Text style={styles.subject}>Pemrograman Web</Text>
        <Text style={styles.room}>Ruang: R102</Text>
        <Text style={styles.lecturer}>Dosen: Prof. Sarah</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  room: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  lecturer: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
