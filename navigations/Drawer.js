import { createDrawerNavigator } from "@react-navigation/drawer";
import Movies from "../pages/Movies";
import Favorites from "../pages/Favorites";

const drawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <drawer.Navigator>
      <drawer.Screen name="Movies" component={Movies} />
      <drawer.Screen name="Favorites" component={Favorites} />
    </drawer.Navigator>
  );
};

export default Drawer;
