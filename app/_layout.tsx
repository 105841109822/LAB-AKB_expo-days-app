import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Layout utama aplikasi yang mengatur navigasi */}
      {/* Stack digunakan untuk mengelola navigasi antar halaman */}
      {/* Tabs digunakan untuk mengelola navigasi tab di dalam aplikasi */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}