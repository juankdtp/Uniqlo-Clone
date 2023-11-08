import { View, Text, Image } from "react-native";

function DetailPage({ route, navigation }) {
  const { id } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Jaket Parka Seamless Down
      </Text>
      <Text>Product id: {id}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{ padding: 12 }}>
          <Image
            source={{
              uri: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449725/sub/goods_449725_sub13.jpg?width=750",
            }}
            style={{ height: 80, width: 80, resizeMode: "contain" }}
          ></Image>
          <Image
            source={{
              uri: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/sub/idgoods_449725_sub7.jpg?width=750",
            }}
            style={{ height: 80, width: 80, resizeMode: "contain" }}
          ></Image>
          <Image
            source={{
              uri: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449725/sub/goods_449725_sub11.jpg?width=750",
            }}
            style={{ height: 80, width: 80, resizeMode: "contain" }}
          ></Image>
        </View>
        <View style={{ paddingRight: 10 }}>
          <Image
            source={{
              uri: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/item/idgoods_69_449725.jpg?width=750",
            }}
            style={{ height: 250, width: 250, resizeMode: "contain" }}
          ></Image>
        </View>
      </View>
      <Text>Rp. 299000</Text>
      <Text>
        Jaket Pria dengan desain tudung yang dapat memberi perlindungan lebih
        terhadap udara dingin sangat cocok untuk digunakan traveling lokasi yang
        dingin.
      </Text>
    </View>
  );
}

export default DetailPage;
