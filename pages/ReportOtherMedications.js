import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ReportOtherMedications = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Report Other Medications</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Other Medication Record</Text>
                
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Medication"
                    />

                    <TextInput
                        style={styles.dateInput}
                        placeholder="Select Date"
                        type="date"
                    />

                   <Text>Select a file:</Text>
          <input type="file" id="myfile" name="filename" accept=".pdf,.png,.jpg" capture="camera" />

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
        borderWidth: 1,
        borderColor: 'grey',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
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
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    dateInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        overflow: 'hidden',
        marginLeft: 60,
        marginRight: 60,
    },
});

export default ReportOtherMedications;
