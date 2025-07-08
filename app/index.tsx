import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import GridComponent from "./components/GridComponent";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}>
        {/* Header - NIM dan Nama */}
        <View
          style={{
            backgroundColor: "black",
            padding: 10, // padding untuk memberikan ruang di sekitar konten
            alignItems: "center",
            marginBottom: 20, // margin bawah untuk memberikan ruang di bawah header
          }}>
          <Text style={{ fontSize: 20, color: "white", marginBottom: 4 }}>
            105841109822
          </Text>
          <Text style={{ color: "skyblue", fontWeight: "bold", fontSize: 18 }}>
            DAYANG AISYAH
          </Text>
        </View>

        {/* Bulatan Kecil */}
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: "mediumseagreen",
            borderRadius: 10, // Membuat bulatan di sekitar konten
            marginBottom: 15,
          }}
        />

        {/* Segitiga */}
        <View
          style={{
            borderLeftWidth: 40, // border adalah jarak antara sisi kiri dan kanan segitiga
            borderRightWidth: 40,
            borderBottomWidth: 60,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "mediumseagreen",
            marginBottom: 15,
          }}
        />

        {/* Persegi Panjang dengan Nama */}
        <View
          style={{
            width: 160, // Lebar
            height: 50, // tinggi
            backgroundColor: "mediumseagreen",
            justifyContent: "center",
            alignItems: "center", // berfungsi untuk menempatkan teks di tengah persegi panjang
            marginBottom: 15,
          }}>
          <Text style={{ color: "yellow", fontWeight: "bold", fontSize: 18 }}>
            DAYANG AISYAH
          </Text>
        </View>

        {/* Bentuk Pil Vertikal dengan NIM */}
        <View
          style={{
            width: 50,
            height: 180,
            backgroundColor: "mediumseagreen",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: "yellow",
              fontWeight: "bold",
              fontSize: 15,
              textAlign: "center",
              transform: [{ rotate: "-90deg" }],
            }}>
            105841109822
          </Text>
        </View>

        {/* Gambar + GIF */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 30,
          }}>
          {/* Gambar Profil */}
          <Image
            // image komponen untuk menampilkan gambar ataupun GIF
            style={{
              width: 200,
              height: 200,
              margin: 10,
              borderRadius: 10,
              marginRight: 20,
            }}
            source={{
              uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841109822_.jpg",
            }}
          />

          {/* Gambar dengan GIF */}
          <Image
            style={{
              width: 200,
              height: 200,
              margin: 10,
              borderRadius: 10,
            }}
            source={{
              uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif",
            }}
          />
        </View>

        {/* Grid Gambar 3x3 */}
        <GridComponent />
      </ScrollView>
    </SafeAreaView>
  );
}
