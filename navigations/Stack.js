import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../pages/Splash";
import Drawer from "./Drawer";
import Details from "../pages/Details";
import { routes } from "../utils/routes";

const stack = createNativeStackNavigator();

const Stack = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name={routes.splash} component={Splash} />
      <stack.Screen name="home" component={Drawer} />
      <stack.Screen name={routes.details} component={Details} />
    </stack.Navigator>
  );
};

export default Stack;
