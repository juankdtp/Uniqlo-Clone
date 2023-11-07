import { View, Text, Image } from "react-native";

function HomeListPage() {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 1 }}>
      {/* <Text>Ini Page List Home</Text> */}
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
  );
}

export default HomeListPage;
