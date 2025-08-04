import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
            {/* ini adalah gambar ilustrasi dari universitas */}
            <Image
                source={require('../../assets/images/logo-unismuh.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Tentang Unismuh</Text>
                {/* keterangan atau deskripsi singkat Tentang unismuh */}
                <Text style={styles.description}>
                    Universitas Muhammadiyah Makassar (disingkat Unismuh Makassar) adalah sebuah perguruan tinggi swasta di Kota Makassar, Sulawesi Selatan. Universitas ini berada di bawah naungan persyarikatan Muhammadiyah.
                </Text>
                <Text style={styles.description}>
                    Kampus utama terletak di Jl. Sultan Alauddin No. 259, Makassar, yang merupakan lokasi strategis dan mudah diakses dari berbagai penjuru kota.
                </Text>
            </View>
        </ScrollView>
    );
}

// ini untuk style pada halaman awal nya 
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    infoContainer: {
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1E90FF',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        marginBottom: 10,
        color: '#555',
    },
});
