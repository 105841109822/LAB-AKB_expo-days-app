import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        // Menggunakan Tabs dari expo-router untuk membuat navigasi tab
        // Setiap tab akan mengarah ke halaman yang sesuai
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#1E90FF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                },
                headerStyle: {
                    backgroundColor: '#1E90FF',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            {/* Tab untuk halaman utama */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="home" color={color} />
                    ),
                }}
            />
            {/* Tab untuk halaman About dan Profile */}
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="info-circle" color={color} />
                    ),
                }}
            />
            {/* Tab untuk halaman Profile */}
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="user" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
