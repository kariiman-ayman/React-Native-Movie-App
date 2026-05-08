import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { moviesContext } from "../contexts/moviesContextProvider";

const Details = () => {
  const { params } = useRoute();
  const { state, dispatch } = useContext(moviesContext);
  const isFavorite = state.favorites.find((m) => m.id == params.id);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            margin: 15,
            borderRadius: 20,
            overflow: "hidden",
            elevation: 5,
          }}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${params.poster_path}`,
            }}
            style={{
              width: "100%",
              height: 500,
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
                  fontSize: 28,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                {params.title}
              </Text>

              <Entypo
                name={isFavorite ? "heart" : "heart-outlined"}
                size={30}
                color="red"
                onPress={() => {
                  dispatch({
                    type: "TOGGLEFAVORITE",
                    payload: params,
                  });
                }}
              />
            </View>

            <Text
              style={{
                marginTop: 10,
                color: "gray",
                fontSize: 16,
              }}
            >
              Release Date: {params.release_date}
            </Text>

            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
              }}
            >
              Rating: {params.vote_average.toFixed(1)}
            </Text>

            <Text
              style={{
                marginTop: 20,
                fontSize: 17,
                lineHeight: 28,
              }}
            >
              {params.overview}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
