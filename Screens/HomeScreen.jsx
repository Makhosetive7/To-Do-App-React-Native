import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.banner}>
                <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2014/03/25/16/28/todo-list-297195_1280.png' }}
                    style={styles.heroImage}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.Introduction}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Plan your day{'\n'}with{' '}
                        <View style={styles.applicationName}>
                            <Text style={styles.appNameText}>TaskMaster</Text>
                        </View>
                    </Text>
                    <Text style={styles.text}>
                        Stay focused on today's tasks. Productivity isn't about perfection; it's about consistent effort.
                    </Text>
                </View>
            </View>

            <View style={styles.navButton} >
                <TouchableOpacity
                    onPress={() => {
                        // handle onPress
                    }}>
                    <Button
                        title="lets go"
                        onPress={() => navigation.navigate('to-do')}
                    />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        backgroundColor: '#FFFFFF',
        margin: 12,
        borderRadius: 16,
        padding: 16,
    },
    heroImage: {
        width: '100%',
        height: 400,
    },

    Introduction: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 24,
        margin: 10,

    },
    header: {
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 20,
    },
    text: {
        marginTop: 10,
    },
    applicationName: {
        backgroundColor: '#3498db',
        paddingHorizontal: 6,
    },
    appNameText: {
        fontSize: 28,
        fontWeight: '700',
        color: '#ffffff',
    },
    navButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 24,
        margin: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 26,
    }
});