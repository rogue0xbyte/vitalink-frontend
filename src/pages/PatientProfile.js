import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const PatientProfile = ({ user = { Name: 'Sanjay' }, patient = {}, monthly_average_inr, current_inr, sides, lifestyles, other_meds, prolonged }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{user?.Name}</Text>
      </View>

      <ScrollView>
        <View style={styles.card}>
          {patient.medical_history && patient.medical_history.length > 0 && (
  <View style={styles.infoBox}>
    <Text style={styles.title}>Medical Diagnosis</Text>
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <Text style={styles.tableHeader}>Medical Condition</Text>
        <Text style={styles.tableHeader}>Duration</Text>
      </View>
      {patient.medical_history.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <Text style={styles.tableCell}>{item.condition}</Text>
          <Text style={styles.tableCell}>{item.duration}</Text>
        </View>
      ))}
    </View>
  </View>
)}

          <View style={styles.infoBox}>
            <Text style={styles.title}>Past INR Levels</Text>
            <BarChart
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      data: monthly_average_inr || [], // Handle empty or undefined data
    }]
  }}
              width={400}
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: "rgb(211, 15, 69, 0.3)",
                backgroundGradientFrom: "rgba(211, 15, 69, 0.3)",
                backgroundGradientTo: "rgba(211, 15, 69, 0.3)",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>

          <View style={[styles.infoBox, styles.flexColumn]}>
            <View>
              <Text style={styles.title}>Type of Therapy: {patient["drugtype"]?.toUpperCase()} Therapy</Text>
              <Text>Evenings (Around 6PM)</Text>
              <Text>Assigned Drug Dosage Level: {patient["drugstrength"]} mg</Text>
              <Text>{patient["beforefood"] ? "Before Food" : ""} {patient["beforefood"] && patient["afterfood"] ? "and" : ""} {patient["afterfood"] ? "After Food" : ""}</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableHeader}>Day</Text>
                  <Text style={styles.tableHeader}>Dosage</Text>
                </View>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <View style={styles.tableRow} key={day}>
                    <Text style={styles.tableCell}>{day}</Text>
                    <Text style={styles.tableCell}>{patient[day.toLowerCase()] || ''}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <Text style={styles.title}>Therapy Start Date: {patient["startdate"]}</Text>
            </View>
            <View>
              <Text style={styles.title}>Current INR: {current_inr > 0 ? current_inr : "UNKNOWN"}</Text>
              <Text>Target INR: {patient["targetinr"]}</Text>
            </View>
            <View>
              <Text style={styles.title}>Reports Raised:</Text>
              <View style={styles.list}>
                <Text style={styles.listItem}>Side-effects: {sides}</Text>
                <Text style={styles.listItem}>Lifestyle Changes: {lifestyles}</Text>
                <Text style={styles.listItem}>Other Medication: {other_meds}</Text>
                <Text style={styles.listItem}>Prolonged Illnesses: {prolonged}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Contact: {patient["contact"]}</Text>
              <Text style={styles.title}>Kin Name and Contact: {patient["kinname"]}, {patient["kincontact"]}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#e0dcec',
    alignItems: 'center',
  },
  infoBox: {
    width: '75%',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableCell: {
    fontSize: 16,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  list: {
    paddingLeft: 10,
  },
  listItem: {
    marginBottom: 5,
  },
});

export default PatientProfile;
