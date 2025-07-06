import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* Segitiga */}
      <View
        style={{
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 60,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "blue",
          marginTop: 30,
        }}
      />
      {/* Tabung dengan Stambuk */}
      <View
        style={{
          width: 190,
          height: 50,
          backgroundColor: "green",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
          }}>
          105841109822
        </Text>
      </View>
      {/* Persegi Panjang dengan Nama */}
      <View
        style={{
          width: 180,
          height: 50,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          DAYANG AISYAH
        </Text>
      </View>
    </View>
  );
}
