import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View
        style={{
          backgroundColor: "black",
          padding: 10,
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 20, color: "white", marginBottom: 4 }}>
          105841109822
        </Text>
        <Text style={{ color: "skyblue", fontWeight: "bold", fontSize: 18 }}>
          DAYANG AISYAH
        </Text>
      </View>
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: "mediumseagreen",
          borderRadius: 10,
          marginBottom: 15,
        }}
      />
      <View
        style={{
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 60,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "mediumseagreen",
          marginBottom: 15,
        }}
      />
      <View
        style={{
          width: 160,
          height: 50,
          backgroundColor: "mediumseagreen",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}>
        <Text style={{ color: "yellow", fontWeight: "bold", fontSize: 18 }}>
          DAYANG AISYAH
        </Text>
      </View>
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
    </View>
  );
}
