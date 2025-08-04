import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Data profil pengguna
// Ini adalah data yang akan ditampilkan di halaman profil
const myProfile = {
    name: 'DAYANG AISYAH',
    nim: '105841109822',
    class: 'Kelas 6C',
    major: 'Informatika',
    faculty: 'Fakultas Teknik',
    photo: require('../../assets/images/dayang.png'),
};

// Komponen untuk menampilkan baris informasi
// Ini adalah komponen yang digunakan untuk menampilkan setiap baris informasi di halaman profil
const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
    </View>
);

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={myProfile.photo} style={styles.profileImage} />
            <Text style={styles.name}>{myProfile.name}</Text>
            <View style={styles.infoCard}>
                <InfoRow label="NIM" value={myProfile.nim} />
                <InfoRow label="Kelas" value={myProfile.class} />
                <InfoRow label="Jurusan" value={myProfile.major} />
                <InfoRow label="Fakultas" value={myProfile.faculty} />
            </View>
        </ScrollView>
    );
}

// Style untuk halaman profil
// Ini adalah style yang digunakan untuk mengatur tampilan halaman profil
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#1E90FF',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    infoCard: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    infoValue: {
        fontSize: 16,
        color: '#333',
        textAlign: 'right',
        flexShrink: 1,
    },
});
