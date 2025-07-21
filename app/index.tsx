import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ marginTop: 30, width: "100%" }}>
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

        <Text style={{ fontFamily: "Roboto", fontSize: 25, marginBottom: 10 }}>
          12. 10584109222 - Besse Taleha
        </Text>

        <Text
          style={{ fontFamily: "Montserrat", fontSize: 25, marginBottom: 10 }}>
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

        <Text style={{ fontFamily: "Inter", fontSize: 25, marginBottom: 20 }}>
          16. 10584109722 - MUH. FADHIL AHMAD
        </Text> */}

        {/* Nama Sendiri */}
        {/* <Text
          style={{
            fontFamily: "SpaceMono-Regular",
            fontSize: 30,
            fontWeight: "bold",
          }}>
          17. 105841109822 - DAYANG AISYAH
        </Text> */}

        {/* <Text
          style={{
            fontFamily: "Monofett",
            fontSize: 26,
            marginTop: 20,
            marginBottom: 10,
          }}>
          18. 10584110022 - ILFAUZA FEBRIANTY FAISAL
        </Text>

        <Text
          style={{ fontFamily: "RubikDirt", fontSize: 24, marginBottom: 10 }}>
          19. 10584110322 - SA'BAN
        </Text>

        <Text
          style={{ fontFamily: "TiltNeon", fontSize: 24, marginBottom: 10 }}>
          20. 10584110422 - NUR FADILLAH SARI
        </Text>

        <Text
          style={{ fontFamily: "FasterOne", fontSize: 24, marginBottom: 10 }}>
          21. 10584110622 - Wa Nanda Sulystrian
        </Text>

        <Text style={{ fontFamily: "PTSans", fontSize: 24, marginBottom: 10 }}>
          22. 10584110722 - MUH. TEGAR AL FIKRI
        </Text>
      </View> */}

      {/* ICON */}
      <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "center", marginTop: 20 }}>
        <AntDesign name="codesquareo" size={24} color="black" />
        <AntDesign name="swap" size={24} color="black" />
        <AntDesign name="frown" size={24} color="black" />
        <AntDesign name="home" size={24} color="black" />
        <AntDesign name="meh" size={24} color="black" />
        <AntDesign name="picture" size={24} color="black" />
        <AntDesign name="qrcode" size={24} color="black" />
        <AntDesign name="cloudo" size={24} color="black" />
        <AntDesign name="enviromento" size={24} color="black" />
        <AntDesign name="hearto" size={24} color="black" />
      </View>

      {/* GRID COMPONENT */}
      {/* <GridComponent /> */}
    </SafeAreaView>
  );
}
