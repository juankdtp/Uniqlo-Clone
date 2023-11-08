import { View, Text, StyleSheet } from "react-native";

function LogoHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 0.5,
        borderColor: "#ababab",
        paddingVertical: 10,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row", gap: 2 }}>
        <View>
          <Text style={styles.logo}>ユニ</Text>
          <Text style={styles.logo}>クロ</Text>
        </View>
        <View>
          <Text style={styles.logo}>UNI</Text>
          <Text style={styles.logo}>QLO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "red",
    paddingHorizontal: 3,
    color: "white",
    fontWeight: "bold",
  },
});

export default LogoHeader;
