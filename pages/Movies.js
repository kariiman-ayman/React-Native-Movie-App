import { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moviesContext } from "../contexts/moviesContextProvider";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Movies = ({ navigation }) => {
  const { state, dispatch } = useContext(moviesContext);
  const [showFilters, setShowFilters] = useState(false);

  const filteredMovies = state.movies.filter((m) =>
    m.title.toLowerCase().includes(state.search.toLowerCase()),
  );

  const isFavorite = (id) => {
    return state.favorites.find((m) => m.id == id);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
        }}
      >
        <TextInput
          placeholder="Search Movie"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 12,
            padding: 12,
            marginRight: 10,
          }}
          onChangeText={(txt) => {
            dispatch({
              type: "SEARCH",
              payload: txt,
            });
          }}
        />

        <TouchableOpacity
          onPress={() => {
            setShowFilters(!showFilters);
          }}
        >
          <MaterialIcons name="filter-list" size={35} color="black" />
        </TouchableOpacity>
      </View>

      {showFilters && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          {[
            {
              label: "Popular",
              value: "popular",
            },

            {
              label: "Top Rated",
              value: "top_rated",
            },

            {
              label: "Upcoming",
              value: "upcoming",
            },

            {
              label: "Now Playing",
              value: "now_playing",
            },
          ].map((f) => (
            <TouchableOpacity
              key={f.value}
              style={{
                backgroundColor: "#222",
                padding: 10,
                borderRadius: 10,
                margin: 5,
              }}
              onPress={() => {
                dispatch({
                  type: "SETCATEGORY",
                  payload: f.value,
                });

                setShowFilters(false);
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                {f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <FlatList
        data={filteredMovies}
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
                  name={isFavorite(item.id) ? "heart" : "heart-outlined"}
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
                }}
              >
                Release Date: {item.release_date}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Movies;
