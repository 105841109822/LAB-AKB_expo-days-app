import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { DATA_MAHASISWA } from '../../data/mahasiswa';

export default function DetailMahasiswa() {
    const { nim } = useLocalSearchParams();
    const mahasiswa = DATA_MAHASISWA.find(m => m.nim === nim);

    if (!mahasiswa) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Mahasiswa tidak ditemukan.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: mahasiswa.nama }} />
            <View style={styles.card}>
                <Image source={{ uri: mahasiswa.foto }} style={styles.foto} />
                <Text style={styles.nama}>{mahasiswa.nama}</Text>
                <View style={styles.nimContainer}>
                    <Text style={styles.nimText}>{mahasiswa.nim}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 8,
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 4,
        borderColor: '#4A90E2',
    },
    nama: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    nimContainer: {
        backgroundColor: '#E9F2FF',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    nimText: {
        fontSize: 18,
        color: '#4A90E2',
        fontWeight: '600',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
