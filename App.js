import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigations/Stack";
import MoviesContextProvider from "./contexts/moviesContextProvider";

export default function App() {
  return (
    <MoviesContextProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </MoviesContextProvider>
  );
}
