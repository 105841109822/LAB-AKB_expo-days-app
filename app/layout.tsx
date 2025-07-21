import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Static Fonts
    "Roboto": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    "Montserrat": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "DancingScript": require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    "BitcountGridSingle": require("../assets/fonts/BitcountGridSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "Inter": require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),

    // Variable Fonts
    "Monofett": require("../assets/fonts/Monofett-Regular.ttf"),
    "RubikDirt": require("../assets/fonts/RubikDirt-Regular.ttf"),
    "TiltNeon": require("../assets/fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf"),
    "FasterOne": require("../assets/fonts/FasterOne-Regular.ttf"),
    "PTSans": require("../assets/fonts/PTSans-Regular.ttf"),

    // Tambahan dari font lab sebelumnya dan bersifat static
    "PlayfairDisplay": require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) {
    return null;
  }

  return <Stack />;
}
