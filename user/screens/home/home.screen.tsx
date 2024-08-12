import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";
import LocationSearchBar from "@/components/location/location.search.bar";
import color from "@/themes/app.colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import RideCard from "@/components/ride/ride.card";

export default function HomeScreen() {
  const [recentRides, setrecentRides] = useState([]);

  const getRecentRides = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const res = await axios.get(
      `${process.env.EXPO_PUBLIC_SERVER_URI}/get-rides`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setrecentRides(res.data.rides);
  };

  useEffect(() => {
    getRecentRides();
  }, []);

  return (
    <View style={[commonStyles.flexContainer, { backgroundColor: "#fff" }]}>
      <SafeAreaView style={styles.container}>
        <View style={[external.p_5, external.ph_20]}>
          <Text
            style={{
              fontFamily: "TT-Octosquares-Medium",
              fontSize: 25,
            }}
          >
            Ride Wave
          </Text>
          <LocationSearchBar />
        </View>
        <View style={{ padding: 5 }}>
          <View
            style={[
              styles.rideContainer,
              { backgroundColor: color.whiteColor },
            ]}
          >
            <Text style={[styles.rideTitle, { color: color.regularText }]}>
              Recent Rides
            </Text>
            <ScrollView>
              {recentRides?.map((item: any, index: number) => (
                <RideCard item={item} key={index} />
              ))}
              {recentRides?.length === 0 && (
                <Text style={{ fontSize: 16 }}>
                  You don't have any ride history yet!
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
