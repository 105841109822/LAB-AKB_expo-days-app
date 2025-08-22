import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";
import React from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { DATA_MAHASISWA } from "../../data/mahasiswa";

type MahasiswaType = {
    nim: string;
    nama: string;
    foto: string;
};

export default function HalamanDaftarMahasiswa() {
    const renderItem = ({ item }: { item: MahasiswaType }) => (
        <Link
            href={{ pathname: "/mahasiswa/[nim]", params: { nim: item.nim } }}
            asChild
        >
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.itemContent}>
                    <AntDesign name="meh" size={32} color="#e24a7dff" />
                    <Text style={styles.itemText}>{item.nama}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#B0B0B0" />
            </TouchableOpacity>
        </Link>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA_MAHASISWA}
                renderItem={renderItem}
                keyExtractor={(item) => item.nim}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4F8",
    },
    listContent: {
        paddingVertical: 10,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemText: {
        fontSize: 18,
        marginLeft: 15,
        fontWeight: "500",
        color: "#333",
    },
});