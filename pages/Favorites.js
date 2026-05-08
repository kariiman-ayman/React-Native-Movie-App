import { useContext } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { moviesContext } from "../contexts/moviesContextProvider";

const Favorites = ({ navigation }) => {
  const { state, dispatch } = useContext(moviesContext);

  if (state.favorites.length == 0) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../assets/empty.png")}
            style={{
              width: 220,
              height: 220,
              resizeMode: "contain",
            }}
          />

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            No Favorites Yet
          </Text>

          <Text
            style={{
              color: "gray",
              marginTop: 10,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Add movies to favorites and they will appear here
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={state.favorites}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("details", item);
            }}
            style={{
              backgroundColor: "white",
              margin: 12,
              borderRadius: 20,
              overflow: "hidden",
              elevation: 5,
            }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={{
                width: "100%",
                height: 450,
              }}
            />

            <View
              style={{
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    flex: 1,
                  }}
                >
                  {item.title}
                </Text>

                <Entypo
                  name="heart"
                  size={28}
                  color="red"
                  onPress={() => {
                    dispatch({
                      type: "TOGGLEFAVORITE",
                      payload: item,
                    });
                  }}
                />
              </View>

              <Text
                style={{
                  color: "gray",
                  marginTop: 8,
                  fontSize: 15,
                }}
              >
                Release Date: {item.release_date}
              </Text>

              <Text
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  color: "#444",
                }}
              >
                Rating: {item.vote_average.toFixed(1)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Favorites;
