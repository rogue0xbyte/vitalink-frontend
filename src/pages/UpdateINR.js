import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UpdateINR = () => {
  const validateDosage = (input) => {
    input.value = input.value.replace(/[^0-9.]/g, ''); // Allow only numbers and dot
    input.value = input.value.replace(/(\..*)\./g, '$1'); // Remove multiple dots
  };

  const confirmSubmit = () => {
    const inrValue = document.getElementById('inrValue').value;
    const location = document.getElementById('location').value;
    const labName = document.getElementById('labName').value;
    const confirmationMessage = `Are you sure you want to submit your INR Value ${inrValue} on ${new Date().toDateString()} at ${location}?`;

    const userConfirmation = confirm(confirmationMessage);
    if (userConfirmation) {
      // Submit the form to the backend
      alert('Your INR Value has been submitted.');
      document.getElementById('yourFormId').submit();
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>INR Report</Text>
    </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="INR Value"
              id="inrValue"
              name="level"
              onChangeText={validateDosage}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Lab Name"
              id="labName"
              name="labName"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Location"
              id="location"
              name="location"
            />
          </View>
          <Text>Select a file:</Text>
          <input type="file" id="myfile" name="filename" accept=".pdf,.png,.jpg" capture="camera" />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Date"
              type="date"
              id="dosage_assigned_date"
              name="datetime"
            />
          </View>
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
    padding: 25,
    borderRadius: 25,
     borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'rgba(102, 212, 207, 0.5)',
    marginLeft: 20,
    marginRight: 20,
  },
  cardContent: {
    maxWidth: '95vw',
    margin: '0 auto',
    borderRadius: 15,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
   buttonContainer: {
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
        marginLeft: 60,
        marginRight: 60,
    },
});

export default UpdateINR;
