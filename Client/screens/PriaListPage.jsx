import { View, Text, Image } from "react-native";
import LogoHeader from "../components/LogoHeader";

function PriaListPage() {
  return (
    <View>
      <LogoHeader />
      <Image
        source={{
          uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKz4Cs-Et6mWDmCHdIGeZ6n02nqnYcpGJS6KiqrhL_U17l5QL9",
        }}
        style={{ height: 250 }}
      />
      <Image
        source={{
          uri: "https://im.uniqlo.com/global-cms/spa/resfbfaef46da9843e0ca6572043d8ec752fr.jpg",
        }}
        style={{ height: 450 }}
      />
      {/* <Text>Ini Page List Pria</Text> */}
    </View>
  );
}

export default PriaListPage;
