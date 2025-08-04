import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        // ScrollView digunakan untuk membuat halaman yang dapat digulir
        // contentContainerStyle digunakan untuk mengatur gaya konten di dalam ScrollView
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Tentang Aplikasi Ini</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Tujuan Pembuatan</Text>
                <Text style={styles.description}>
                    Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah. Tujuannya adalah untuk mendemonstrasikan implementasi navigasi tab menggunakan Expo Router di React Native.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Fungsi Halaman</Text>
                <Text style={styles.point}>
                    <Text style={styles.pointTitle}>1. Home:</Text> Menampilkan informasi singkat mengenai Universitas Muhammadiyah Makassar beserta gambar ilustrasi.
                </Text>
                <Text style={styles.point}>
                    <Text style={styles.pointTitle}>2. About:</Text> Halaman yang sedang Anda lihat saat ini. Berisi penjelasan mengenai aplikasi dan fungsi dari setiap halamannya.
                </Text>
                <Text style={styles.point}>
                    <Text style={styles.pointTitle}>3. Profil:</Text> Menampilkan data diri dan foto profil pembuat aplikasi.
                </Text>
            </View>
        </ScrollView>
    );
}

// Style untuk halaman About
// Ini adalah style yang digunakan untuk mengatur tampilan halaman About
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1E90FF',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
    },
    point: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        color: '#555',
    },
    pointTitle: {
        fontWeight: 'bold',
    },
});