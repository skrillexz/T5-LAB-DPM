import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default function RoomScheduleScreen() {
  const [roomList, setRoomList] = useState([
    { id: 'R101', name: 'Ruang R101', status: 'Tersedia', capacity: 40 },
    { id: 'R102', name: 'Ruang R102', status: 'Terpakai', capacity: 60 },
    { id: 'R103', name: 'Ruang R103', status: 'Tersedia', capacity: 100 },
  ]);

  const [newRoom, setNewRoom] = useState({
    id: '',
    name: '',
    status: 'Tersedia',
    capacity: '',
  });

  const handleInputChange = (name, value) => {
    setNewRoom({
      ...newRoom,
      [name]: value,
    });
  };

  const handleAddRoom = () => {
    setRoomList([...roomList, newRoom]);
    setNewRoom({ id: '', name: '', status: 'Tersedia', capacity: '' });
  };

  return (
    <ScrollView style={styles.container}>
      <Text h4 style={styles.header}>Jadwal Ruangan Kelas</Text>
      
      {/* Input Form for New Room */}
      <Card containerStyle={styles.card}>
        <Card.Title>Tambah Ruang Baru</Card.Title>
        <Card.Divider />
        <TextInput
          style={styles.input}
          placeholder="Kode Ruangan (Contoh: R104)"
          value={newRoom.id}
          onChangeText={(text) => handleInputChange('id', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nama Ruangan"
          value={newRoom.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Kapasitas"
          value={newRoom.capacity}
          onChangeText={(text) => handleInputChange('capacity', text)}
          keyboardType="numeric"
        />
        <Button title="Tambah Ruang" onPress={handleAddRoom} />
      </Card>

      {/* Display Available and Occupied Rooms */}
      <Text h4 style={styles.subheader}>Ruang yang Tersedia:</Text>
      {roomList.filter(room => room.status === 'Tersedia').map(room => (
        <Card key={room.id} containerStyle={styles.card}>
          <Card.Title>{room.name}</Card.Title>
          <Card.Divider />
          <Text>Kapasitas: {room.capacity} Orang</Text>
          <Text>Status: <Text style={{ color: 'green' }}>Tersedia</Text></Text>
        </Card>
      ))}

      <Text h4 style={styles.subheader}>Ruang yang Terpakai:</Text>
      {roomList.filter(room => room.status === 'Terpakai').map(room => (
        <Card key={room.id} containerStyle={styles.card}>
          <Card.Title>{room.name}</Card.Title>
          <Card.Divider />
          <Text>Kapasitas: {room.capacity} Orang</Text>
          <Text>Status: <Text style={{ color: 'red' }}>Terpakai</Text></Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20,
  },
  header: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  subheader: {
    marginVertical: 10,
    color: '#333',
  },
  card: {
    borderRadius: 8,
    elevation: 3,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
