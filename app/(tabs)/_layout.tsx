import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#e24a7dff' }}>
      {/* kode ini sebagai navigator utama dari aplikasi */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="home" color={color} />,
        }}
      />
      {/* ini sebagai halaman daftar mahasiswa */}
      <Tabs.Screen
        name="mahasiswa"
        options={{
          title: 'Mahasiswa',
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="users" color={color} />,
        }}
      />
      {/* selain 2 navigasi diatas disini bisa ditambahkan sesuai kebutuhan */}
    </Tabs>
  );
}