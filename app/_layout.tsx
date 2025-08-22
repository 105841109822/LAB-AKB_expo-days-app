import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
    return (
        <Stack>
            {/* ini sebagai navigator utama */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* ini sebagai halaman detail mahasiswa */}
            <Stack.Screen name="mahasiswa/[nim]" />
        </Stack>
    );
}
