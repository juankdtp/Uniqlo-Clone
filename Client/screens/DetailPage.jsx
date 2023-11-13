import { View, Text, Image } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../config/queries";

function DetailPage({ route, navigation }) {
  const { id } = route.params;
  // console.log(id);
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      getProductByIdId: id,
    },
  });
  const productData = data?.getProductById;
  // console.log(productData);
  return (
    <View>
      {loading && <Text>Loading...</Text>}
      {!loading && (
        <>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {productData?.name}
          </Text>
          <Text>Product id: {id}</Text>
          <Text>Author: {productData?.User?.username}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={{ padding: 12 }}>
              <Image
                source={{
                  uri: productData?.Images[0]?.imgUrl,
                }}
                style={{ height: 80, width: 80, resizeMode: "contain" }}
              ></Image>
              <Image
                source={{
                  uri: productData?.Images[1]?.imgUrl,
                }}
                style={{ height: 80, width: 80, resizeMode: "contain" }}
              ></Image>
              <Image
                source={{
                  uri: productData?.Images[2]?.imgUrl,
                }}
                style={{ height: 80, width: 80, resizeMode: "contain" }}
              ></Image>
            </View>
            <View style={{ paddingRight: 10 }}>
              <Image
                source={{
                  uri: productData?.mainImg,
                }}
                style={{ height: 250, width: 250, resizeMode: "contain" }}
              ></Image>
            </View>
          </View>
          <Text>Rp. {productData?.price}</Text>
          <Text>{productData?.description}</Text>
        </>
      )}
    </View>
  );
}

export default DetailPage;
