import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

const DrawerContent = ({ navigation }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setOpenDrawer(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={handleDrawerOpen}>
        <Ionicons name="menu-outline" size={24} color="black" />
      </TouchableOpacity>
      <Drawer.Section>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('DosageDashboard')}>
          <Text style={styles.drawerItemText}>Dosage Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('TakeDose')}>
          <Text style={styles.drawerItemText}>Take Dose</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('UpdateINR')}>
          <Text style={styles.drawerItemText}>Update INR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('ReportOtherMedications')}>
          <Text style={styles.drawerItemText}>Report Other Medications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('ReportRecentIllness')}>
          <Text style={styles.drawerItemText}>Report Recent Illness</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('ReportSideEffects')}>
          <Text style={styles.drawerItemText}>Report Side Effects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('MyProfile')}>
          <Text style={styles.drawerItemText}>My Profile</Text>
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 10,
    marginTop: 10,
  },
  drawerItem: {
    padding: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
});

export default DrawerContent;
