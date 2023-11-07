import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PriaListPage from "./screens/PriaListPage";
import WanitaListPage from "./screens/WanitaListPage";
import AnakListPage from "./screens/AnakListPage";
import HomeListPage from "./screens/HomePage";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeListPage} />
      <Tab.Screen name="Wanita" component={WanitaListPage} />
      <Tab.Screen name="Pria" component={PriaListPage} />
      <Tab.Screen name="Anak" component={AnakListPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <View style={styles.container}>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeListPage} />
              <Tab.Screen name="Wanita" component={WanitaListPage} />
              <Tab.Screen name="Pria" component={PriaListPage} />
              <Tab.Screen name="Anak" component={AnakListPage} />
            </Tab.Navigator>
            {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <View style={{ flexDirection: "row", gap: 2 }}>
              <View>
                <Text style={styles.logo}>ユニ</Text>
                <Text style={styles.logo}>クロ</Text>
              </View>
              <View>
                <Text style={styles.logo}>UNI</Text>
                <Text style={styles.logo}>QLO</Text>
              </View>
            </View>
            <View>
              <Text>Menu</Text>
            </View>
          </View> */}
            {/* <Text>Open up App.js to start working on your app! HOLAA</Text> */}
            <StatusBar style="auto" />
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    backgroundColor: "red",
    paddingHorizontal: 3,
    color: "white",
    fontWeight: "bold",
  },
});
