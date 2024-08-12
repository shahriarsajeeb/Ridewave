import { Person } from "@/assets/icons/person";
import color from "@/themes/app.colors";
import { Car, CarPrimary, Category, Home, HomeLight } from "@/utils/icons";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "home") {
              if (focused) {
                iconName = (
                  <Home colors={color.buttonBg} width={24} height={24} />
                );
              } else {
                iconName = <HomeLight />;
              }
            } else if (route.name === "services/index") {
              iconName = (
                <Category colors={focused ? color.buttonBg : "#8F8F8F"} />
              );
            } else if (route.name === "history/index") {
              if (focused) {
                iconName = <CarPrimary color={color.buttonBg} />;
              } else {
                iconName = <Car colors={"#8F8F8F"} />;
              }
            } else if (route.name === "profile/index") {
              if (focused) {
                iconName = <Person fill={color.buttonBg} />;
              } else {
                iconName = <Person fill={"#8F8F8F"} />;
              }
            }
            return iconName;
          },
        };
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="services/index" />
      <Tabs.Screen name="history/index" />
      <Tabs.Screen name="profile/index" />
    </Tabs>
  );
}
