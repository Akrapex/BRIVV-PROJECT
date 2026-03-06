import { Pressable, Text,View, StyleProp, ViewStyle, TextStyle} from "react-native";
import { Link, RelativePathString } from "expo-router";

type stylesType = StyleProp<ViewStyle>;
type textStyle = StyleProp<TextStyle>;

interface Button {
  text: string;
  path: RelativePathString;
  styles?: stylesType;
  textStyles?: textStyle;
}

export default function ({ text, path, styles, textStyles }: Button) {
  return (
    <Pressable >
      <Link href={{ pathname: path }} replace >
        <View style={styles}>
          <Text style={textStyles}>{text}</Text>
        </View>
      </Link>
    </Pressable>
  );
}
