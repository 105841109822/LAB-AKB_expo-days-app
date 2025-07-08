import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// Daftar gambar utama dan alternatif
type BaseImageItem = {
    id: number;
    main: any;
    alt: any;
};

type ImageItem = BaseImageItem & {
    current: any;
    scale: number;
};

const initialImages: BaseImageItem[] = [
    {
        id: 1,
        main: require("../images/main1.jpg"),
        alt: require("../images/alt1.jpg"),
    },
    {
        id: 2,
        main: require("../images/main2.jpg"),
        alt: require("../images/alt2.jpg"),
    },
    {
        id: 3,
        main: require("../images/main3.jpg"),
        alt: require("../images/alt3.jpg"),
    },
    {
        id: 4,
        main: require("../images/main4.jpg"),
        alt: require("../images/alt4.jpg"),
    },
    {
        id: 5,
        main: require("../images/main5.jpg"),
        alt: require("../images/alt5.jpg"),
    },
    {
        id: 6,
        main: require("../images/main6.jpg"),
        alt: require("../images/alt6.jpg"),
    },
    {
        id: 7,
        main: require("../images/main7.jpg"),
        alt: require("../images/alt7.jpg"),
    },
    {
        id: 8,
        main: require("../images/main8.jpg"),
        alt: require("../images/alt8.jpg"),
    },
    {
        id: 9,
        main: require("../images/main9.jpg"),
        alt: require("../images/alt9.jpg"),
    },
    ];

    const GridComponent = () => {
    const [images, setImages] = useState<ImageItem[]>(
        initialImages.map((img) => ({ ...img, current: img.main, scale: 1 }))
    );

    const handlePress = (id: number) => {
        setImages((prevImages) =>
        prevImages.map((img) =>
            img.id === id
            ? {
                ...img,
                current: img.current === img.main ? img.alt : img.main,
                scale: Math.min(img.scale * 1.2, 2),
                }
            : img
        )
        );
    };

    return (
        <View style={styles.container}>
        {images.map((img) => (
            <TouchableOpacity key={img.id} onPress={() => handlePress(img.id)}>
            <Image
                source={img.current}
                style={[styles.image, { transform: [{ scale: img.scale }] }]}
            />
            </TouchableOpacity>
        ))}
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: 36,
    },
    image: {
        width: 150,
        height: 150,
        margin: 20,
        borderRadius: 5,
    },
    });

export default GridComponent;
