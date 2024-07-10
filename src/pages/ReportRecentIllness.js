import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ReportRecentIllnesses = () => {
    const handleSubmission = () => {
        // Handle submission logic here
        console.log('Submitted');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Report Recent Illnesses</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Recent Illness:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type Here"
                        multiline={true}
                        numberOfLines={2}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Submit" onPress={() => confirmSubmit()} color=" rgb(211, 15, 69)" />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: ' rgb(211, 15, 69)',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    card: {
        backgroundColor: 'rgba(102, 212, 207, 0.5)',
        borderRadius: 25,
        padding: 25,
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
         borderWidth: 1,
        borderColor: 'grey',
    },

    cardContent: {},
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        height: 100,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
         borderWidth: 1,
        borderColor: 'black',
        marginLeft: 60,
        marginRight: 60,
    },
});

export default ReportRecentIllnesses;
