import { View, Text, Image, TouchableOpacity } from "react-native";
import LogoHeader from "../components/LogoHeader";
function HomeListPage({ navigation }) {
  const onPressCard = (id) => {
    navigation.navigate("DetailPage", {
      id,
    });
  };
  return (
    <>
      <LogoHeader />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
          paddingLeft: 4,
        }}
      >
        {/* <Text>Ini Page List Home</Text> */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 1,
            gap: 1,
          }}
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
            onPress={() => onPressCard(50)}
          >
            <Image
              source={{
                uri: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/item/idgoods_69_449725.jpg?width=750",
              }}
              style={{ height: 200, width: 200, resizeMode: "contain" }}
            ></Image>
            <View>
              <Text style={{ color: "#ababab" }}>Pria</Text>
              <Text style={{ fontWeight: "bold" }}>
                Jaket Parka Seamless Down
              </Text>
              <Text style={{ color: "red", fontWeight: "bold" }}>
                Rp. 299000
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* dkdk */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 1,
            gap: 1,
          }}
        >
          <View
            style={{
              // backgroundColor: "#cacaca",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              // width: 15,
              // height: 15,
            }}
          >
            <Image
              source={{
                uri: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/item/idgoods_69_449725.jpg?width=750",
              }}
              style={{ height: 200, width: 200, resizeMode: "contain" }}
            ></Image>
            <View>
              <Text>Pria</Text>
              <Text>Jaket Parka Seamless Down</Text>
              <Text style={{ color: "red" }}>Rp. 299000</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 1,
            gap: 1,
          }}
        >
          <View
            style={{
              // backgroundColor: "#cacaca",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              // width: 15,
              // height: 15,
            }}
          >
            <Image
              source={{
                uri: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/item/idgoods_69_449725.jpg?width=750",
              }}
              style={{ height: 200, width: 200, resizeMode: "contain" }}
            ></Image>
            <View>
              <Text>Pria</Text>
              <Text>Jaket Parka Seamless Down</Text>
              <Text style={{ color: "red" }}>Rp. 299000</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 1,
            gap: 1,
          }}
        >
          <View
            style={{
              // backgroundColor: "#cacaca",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              // width: 15,
              // height: 15,
            }}
          >
            <Image
              source={{
                uri: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/item/idgoods_69_449725.jpg?width=750",
              }}
              style={{ height: 200, width: 200, resizeMode: "contain" }}
            ></Image>
            <View>
              <Text>Pria</Text>
              <Text>Jaket Parka Seamless Down</Text>
              <Text style={{ color: "red" }}>Rp. 299000</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default HomeListPage;
