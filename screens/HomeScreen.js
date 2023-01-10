import {Text, View} from "nativewind/dist/preflight";
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
            navigation.setOptions({
                headerTitleAlign: "center",
            });
        }
    );

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="font-family">Home Screen</Text>
        </View>
    );
}

export default HomeScreen;