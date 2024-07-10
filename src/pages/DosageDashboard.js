import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { Modal, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const DosageDashboard = ({ user, week, monthly_doses, missed = [], dates = [], doses = [] }) => {
  const windowWidth = useWindowDimensions().width;

  const openModal = () => {
    // Show the modal overlay and box
    setModalVisible(true);
  };

  const closeModal = () => {
    // Hide the modal overlay and box
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{user?.Name || 'Patient'}</Text>
      </View>
      <ScrollView>
        <View style={styles.chartCard}>
          <View style={styles.chartBox}>
            <Text style={styles.heading}>{user?.Name} {user?.Age} Y/O {user?.Gender}</Text>
            <Text>Daily Dosage for {week}</Text>
            <BarChart
              data={{
                labels: dates,
                datasets: [{
                  data: doses,
                }]
              }}
              width={windowWidth - 20} // Adjusted to use window width
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: "rgba(211, 15, 69, 0.3)",
                backgroundGradientFrom: "rgba(211, 15, 69, 0.3)",
                backgroundGradientTo: "rgba(211, 15, 69, 0.3)",
                decimalPlaces: 0,
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
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        </View>

        <View style={styles.chartCard}>
          <View style={styles.chartBox}>
            <Text style={styles.heading}>Missed Doses in Week {week}</Text>
            <ScrollView>
              {missed.map((date, index) => (
                <Text key={index}>{date}</Text>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity onPress={closeModal} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Doctor has paused or ended your therapy.</Text>
            <Text style={styles.modalText}>Therapy has been paused for you. To restart or continue with therapy, contact your doctor for assistance.</Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL(`tel:${user['Kin Contact']}`)}>
        <Text>Call {user?.['Kin name']}</Text>
      </TouchableOpacity>
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
  chartCard: {
    marginTop: 20,
    padding: 10,
  },
  chartBox: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'rgb(105, 105, 110)',
    backgroundColor: 'rgba(102, 212, 207, 0.3)',
  },
  heading: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'rgb(105, 105, 110)',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
  },
  callButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF375F',
  },
});

export default DosageDashboard;
