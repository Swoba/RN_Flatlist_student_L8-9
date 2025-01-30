import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import ListItemSeparator from "@/components//ListItemSeparator";
import ListItem from "@/components//ListItem";
import { dataType, DATA } from "@/data//appData";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("");

  /*
  delcaring a function called selectedList that recieves
  a param of type dataType that we will refer to as 'item'
  I can access the values of item using dot notation
  */

  const selectedList = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected" + item.title);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Title</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            renderItem={({ item }) => (
              <ListItem
                item={item}
                isSelected={item.id === selectedId}
                onPress={selectedList}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
