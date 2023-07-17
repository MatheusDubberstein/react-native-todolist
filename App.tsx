import { StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { styles } from "./src/styles";

const App = () => {
  const [fontsLoaded] = useFonts({
    interRegular: require("./assets/fonts/Inter-Regular.ttf"),
    interBold: require("./assets/fonts/Inter-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.backgroundContainer} />
      <View onLayout={onLayoutRootView} style={styles.container}>
        <Home />
      </View>
    </>
  );
};

export default App;
