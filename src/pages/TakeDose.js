import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TakeDose = ({ user, tdyComp, missedDoses = [], takeToday, now, drug = { strength: 0, type: 'Warfarin', days: [] } }) => {
    const [strength, setStrength] = useState(drug.strength);
    const [btnText, setBtnText] = useState('Click When Taken');

    const handleSubmission = () => {
        // Handle submission logic here
        console.log('Dose taken');
        setBtnText('Thanks');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Daily Dose</Text>
            </View>
            <View style={styles.pageContent}>
                {tdyComp === "false" ? (
                    <View style={styles.chipContainer}>
                        <Text style={styles.chipText}>{now} - Take dose</Text>
                    </View>
                ) : (
                    <View style={styles.chipContainer}>
                        <Text style={styles.chipText}>{now} - Today's Dose <Text style={styles.bold}>Taken</Text></Text>
                    </View>
                )}

                {missedDoses.map(i => (
                    <View key={i} style={styles.chipContainer}>
                        <Text style={styles.chipText}>{i} - Missed dose</Text>
                    </View>
                ))}

                {takeToday && tdyComp === "false" && (
                    <View style={styles.cardContainer}>
                        <View style={styles.cardContent}>
                            <Text>{now}</Text>
                            <Text>Drug: <Text style={styles.bold}>{drug.type}</Text></Text>
                            <Text>Total Dosage level: <Text style={styles.bold}>{drug.strength}</Text></Text>
                            <Text>Days to take: <Text style={styles.bold}>{drug.days.join(', ')}</Text></Text>

                            <TextInput
                                style={styles.textInput}
                                value={strength.toString()}
                                onChangeText={setStrength}
                                keyboardType="numeric"
                            />

                            <Button
                                title={btnText}
                                onPress={handleSubmission}
                                color="#FF375F"
                            />
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    pageContent: {
        paddingTop: 50,
    },
    chipContainer: {
        alignItems: 'center',
    },
    chipText: {
        backgroundColor: 'rgba(102, 212, 207, 0.3)',
        padding: 10,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    cardContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    cardContent: {
        width: '75%',
        backgroundColor: '#3E4EB8',
        padding: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default TakeDose;
