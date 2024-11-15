import { Image, StyleSheet, Platform, Button } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View, Text, Modal, TextInput } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
	const [money, setMoney] = useState(0);
	const [modalShown, setModalShown] = useState(false);
	const [newItemVal, setNewItemVal] = useState(0);

	const openModal = () => {
		setModalShown(true);
	};
	const closeModal = () => {
		setModalShown(false);
	};

	const addNewItem = () => {
		setMoney((prev) => prev + newItemVal);
		closeModal();
	};

	const btn = () => {
		setMoney((prev) => prev + 10);
	};

	const set = (a: string) => {
		setNewItemVal(Number(a));
	};

	return (
		<View style={styles.cont}>
			<Text style={styles.title}>Saved this week: {money}</Text>

			<View>
				<Button
					onPress={openModal}
					title="+"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalShown}
				onRequestClose={closeModal}
			>
				<View style={styles.modalCont}>
					<Text>Test</Text>
					<TextInput keyboardType="number-pad" style={styles.textInput} onChangeText={set} />
					<Button
						onPress={addNewItem}
						title="ADD"
						color="#841584"
						accessibilityLabel="Learn more about this purple button"
					/>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	textInput: {
		backgroundColor: "#b9e777",
		height: "20%",
		fontSize: 20,
		paddingHorizontal: 10,
	},
	modalCont: {
		flex: 0.5,
		backgroundColor: "#e78b77",
		margin: "auto",
		width: "80%",
	},
	cont: {
		marginTop: 50,
		paddingHorizontal: 20,
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#ffffff",
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ffffff",
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
// export default function HomeScreen() {
// 	return (
// 		<ParallaxScrollView
// 			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
// 			headerImage={
// 				<Image
// 					source={require("@/assets/images/partial-react-logo.png")}
// 					style={styles.reactLogo}
// 				/>
// 			}
// 		>
// 			<ThemedView style={styles.titleContainer}>
// 				<ThemedText type="title">Welcome!</ThemedText>
// 				<HelloWave />
// 			</ThemedView>
// 			<ThemedView style={styles.stepContainer}>
// 				<ThemedText type="subtitle">Step 1: Try it</ThemedText>
// 				<ThemedText>
// 					Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
// 					Press{" "}
// 					<ThemedText type="defaultSemiBold">
// 						{Platform.select({ ios: "cmd + d", android: "cmd + m" })}
// 					</ThemedText>{" "}
// 					to open developer tools.
// 				</ThemedText>
// 			</ThemedView>
// 			<ThemedView style={styles.stepContainer}>
// 				<ThemedText type="subtitle">Step 2: Explore</ThemedText>
// 				<ThemedText>
// 					Tap the Explore tab to learn more about what's included in this starter app.
// 				</ThemedText>
// 			</ThemedView>
// 			<ThemedView style={styles.stepContainer}>
// 				<ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// 				<ThemedText>
// 					When you're ready, run{" "}
// 					<ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{" "}
// 					<ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{" "}
// 					<ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
// 					<ThemedText type="defaultSemiBold">app-example</ThemedText>.
// 				</ThemedText>
// 			</ThemedView>
// 		</ParallaxScrollView>
// 	);
// }
