import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import LogoHeader from "../components/LogoHeader";
import { GET_PRODUCTS } from "../config/queries";
import { useQuery } from "@apollo/client";

function HomeListPage({ navigation }) {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const onPressCard = (id) => {
    navigation.navigate("DetailPage", {
      id,
    });
  };

  // console.log(data);
  return (
    <>
      <ScrollView>
        <LogoHeader />
        {loading && <Text>Loading...</Text>}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 1,
            paddingLeft: 4,
          }}
        >
          {/* <Text>Ini Page List Home</Text> */}
          {!loading &&
            data?.getAllProduct?.map((product) => (
              // <FlatList key={product?.id}>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingTop: 1,
                  gap: 1,
                }}
                key={product?.id}
              >
                <TouchableOpacity
                  style={{
                    // backgroundColor: "#cacaca",
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    // width: 15,
                    // height: 15,
                  }}
                  onPress={() => onPressCard(product.id)}
                >
                  <Image
                    source={{ uri: product.mainImg }}
                    style={{ height: 200, width: 200, resizeMode: "contain" }}
                  ></Image>
                  <View>
                    <Text style={{ color: "#ababab" }}>
                      {product.Category.name}
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 11 }}>
                      {product.name}
                    </Text>
                    <Text style={{ color: "red", fontWeight: "bold" }}>
                      Rp. {product.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              // </FlatList>
            ))}
          {/* dkdk */}
        </View>
      </ScrollView>
    </>
  );
}

export default HomeListPage;
