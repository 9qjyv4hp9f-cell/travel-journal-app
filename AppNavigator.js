import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

/* your screens */
import Signup from "./screen/signup";
import HomeScreen from "./screen/HomeScreen";
import AddTripScreen from "./screen/AddTripScreen";
import MapScreen from "./screen/MapScreen";

/* ⭐ Favorites screen (shows only starred trips) */
import FavoritesScreen from "./screen/FavoritesScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* ------------------------- */
/* LUXURY BOTTOM TAB BAR     */
/* ------------------------- */

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: "#fff",
          borderRadius: 25,
          height: 70,
          borderTopWidth: 0,
          elevation: 10,
        },

        tabBarIcon: ({ focused }) => {
          let iconName;
          let size = 28;
          let color = focused ? "#0891b2" : "#7e7e7e";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          if (route.name === "Favorites") {
            iconName = focused ? "star" : "star-outline";
          }

          if (route.name === "AddTrip") {
            return (
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 40,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 30,
                  elevation: 10,
                  shadowColor: "#000",
                  shadowOpacity: 0.25,
                  shadowOffset: { width: 0, height: 4 },
                  shadowRadius: 10,
                }}
              >
                <Ionicons name="add" size={45} color="#0891b2" />
              </View>
            );
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AddTrip" component={AddTripScreen} />

      {/* ⭐ Star tab → show only favorite trips */}
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

/* ------------------------- */
/* MAIN STACK NAVIGATOR      */
/* ------------------------- */

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Tabs" component={BottomTabs} />

        {/* 📍 Real Map screen for choosing location */}
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
