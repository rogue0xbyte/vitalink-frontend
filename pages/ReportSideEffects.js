import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ReportSideEffects = () => {
    const [otherSideEffect, setOtherSideEffect] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmission = () => {
        // Handle submission logic here
        console.log('Submitted');
        setSubmitted(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Report Side Effects</Text>
            </View>
            <Text style={styles.title}>Report Side Effects</Text>
            <View style={styles.formControl}>
                <Checkbox label="Heavy Menstrual Bleeding" />
                <Checkbox label="Black or Bloody Stool" />
                <Checkbox label="Severe Headache" />
                <Checkbox label="Severe Stomach Pain" />
                <Checkbox label="Joint Pain, Discomfort or Swelling" />
                <Checkbox label="Vomiting of Blood" />
                <Checkbox label="Coughing up Blood" />
                <Checkbox label="Bruising without Injury" />
                <Checkbox label="Dizziness or Weakness" />
                <Checkbox label="Vision Changes" />
            </View>
            <TextInput
                style={styles.textInput}
                placeholder="Other"
                value={otherSideEffect}
                onChangeText={setOtherSideEffect}
            />
            <View style={styles.buttonContainer}>
                        <Button title="Submit" onPress={() => handleSubmission()} color=" rgb(211, 15, 69)" />
                    </View>
        </View>
    );
};

const Checkbox = ({ label }) => {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.checkboxContainer}>
            <Button
                title={label}
                onPress={() => setChecked(!checked)}
                disabled={checked}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: 'rgb(211, 15, 69)',
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    formControl: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    checkboxContainer: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
     buttonContainer: {
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
        marginLeft: 140,
        marginRight: 140,
    },
});

export default ReportSideEffects;
