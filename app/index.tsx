import { Redirect } from 'expo-router';

export default function Index() {
  // kode ini berfungsi Mengalihkan pengguna dari halaman utama (/) ke halaman (/mahasiswa)
    return <Redirect href="/mahasiswa" />;
}