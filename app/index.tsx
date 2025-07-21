import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}>
        {/* PRAKTIKUM SEBELUMNYA */}
        {/* <Text
          style={{
            fontFamily: "PlayfairDisplay-Italic",
            fontSize: 18,
            color: "black",
            fontWeight: "bold",
          }}
        >
          MOBILE LEGEND
        </Text> */}

        {/* TUGAS 4 FONTS*/}
        <View style={{ marginTop: 30, width: "100%" }}>
          <Text
            style={{
              fontFamily: "PlayfairDisplay",
              fontSize: 26,
              color: "blue",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
            }}>
            NAMA-NAMA TEMAN SAYA 5 KEATAS & 5 KEBAWAH DARI NAMA DI ABSENSI
          </Text>

          {/* NAMA-NAMA TEMAN SAYA 5 KEATAS & 5 KEBAWAH DARI NAMA DI ABSENSI */}
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              marginBottom: 10,
            }}>
            12. 10584109222 - Besse Taleha
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 25,
              marginBottom: 10,
            }}>
            13. 10584109322 - Dinda Safitri
          </Text>

          <Text
            style={{
              fontFamily: "DancingScript",
              fontSize: 25,
              marginBottom: 10,
            }}>
            14. 10584109422 - MUH. FARREL APTA INDRATAMA
          </Text>

          <Text
            style={{
              fontFamily: "BitcountGridSingle",
              fontSize: 25,
              marginBottom: 10,
            }}>
            15. 10584109622 - FAUZAN AZHARI RAHMAN
          </Text>

          <Text
            style={{
              fontFamily: "Inter",
              fontSize: 25,
              marginBottom: 20,
            }}>
            16. 10584109722 - MUH. FADHIL AHMAD
          </Text>

          {/* NAMA SAYA SENDIRI */}
          <Text
            style={{
              fontFamily: "SpaceMono-Regular",
              fontSize: 30,
              fontWeight: "bold",
            }}>
            17. 105841109822 - DAYANG AISYAH
          </Text>

          {/* NAMA TEMAN-TEMAN SAYA 5 KE BAWAH DARI NAMA DI ABSENSI */}
          <Text
            style={{
              fontFamily: "Monofett",
              fontSize: 26,
              marginTop: 20,
              marginBottom: 10,
            }}>
            18. 10584110022 - ILFAUZA FEBRIANTY FAISAL
          </Text>

          <Text
            style={{
              fontFamily: "RubikDirt",
              fontSize: 24,
              marginBottom: 10,
            }}>
            19. 10584110322 - SA'BAN
          </Text>

          <Text
            style={{
              fontFamily: "TiltNeon",
              fontSize: 24,
              marginBottom: 10,
            }}>
            20. 10584110422 - NUR FADILLAH SARI
          </Text>

          <Text
            style={{
              fontFamily: "FasterOne",
              fontSize: 24,
              marginBottom: 10,
            }}>
            21. 10584110622 - Wa Nanda Sulystrian
          </Text>

          <Text
            style={{
              fontFamily: "PTSans",
              fontSize: 24,
              marginBottom: 10,
            }}>
            22. 10584110722 - MUH. TEGAR AL FIKRI
          </Text>
        </View>
        {/* <GridComponent /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
