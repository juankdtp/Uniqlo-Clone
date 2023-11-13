import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

import PriaListPage from "./screens/PriaListPage";
import WanitaListPage from "./screens/WanitaListPage";
import AnakListPage from "./screens/AnakListPage";
import HomeListPage from "./screens/HomePage";
import DetailPage from "./screens/DetailPage";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const List = () => {
  return (
    <ApolloProvider client={client}>
      <Stack.Navigator>
        <Stack.Screen
          name="CardList"
          component={HomeListPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </ApolloProvider>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <View style={styles.container}>
            <Tab.Navigator>
              <Tab.Screen name="List" component={List} />
              <Tab.Screen name="Wanita" component={WanitaListPage} />
              <Tab.Screen name="Pria" component={PriaListPage} />
              <Tab.Screen name="Anak" component={AnakListPage} />
            </Tab.Navigator>
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
