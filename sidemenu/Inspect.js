import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddBtn from './component/addBtn';
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from './component/BottomNavigation';

const Inspect = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Rating');
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}>
        <View style={styles.blueBgContent}>
          <View style={styles.title}>
            <Image source={require('./assets/logo/frank(2).png')} style={styles.inspectionImg} />
            <Text style={styles.inspection}>Inspection</Text>
          </View>
          <View style={styles.iconParent}>
            <Icon style={styles.icon} name="search" size={15} color="#fff" />
            <Icon style={styles.icon} name="bars" size={15} color="#fff" />
            <Icon style={styles.icon} name="wechat" size={15} color="#fff" />
          </View>
        </View>
      </View>

      <View style={styles.inspectionContent}>
        <View style={styles.topBtn}>
          <TouchableOpacity style={styles.btnOption} onPress={() => navigation.navigate('')}>
            <Text>Inspection</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOption} onPress={() => navigation.navigate('')}>
            <Text>Forms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOption} onPress={() => navigation.navigate('')}>
            <Text>Indicate Report</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inspectionBox}>
          <View style={styles.inspectionBoxHeader}>
            <View style={styles.inspectionBoxLeft}>
              <Image source={require('./assets/logo/Frame314.png')} />
              <View>
                <Text>IN104051</Text>
                <Text style={styles.assignedText}>Assigned to: <Text style={styles.assignedTo}>David Roy</Text></Text>
              </View>
            </View>
            <Icon name="bars" size={20} />
          </View>
          <View style={styles.inspectionBoxBody}>
            <Text style={styles.assetText}>Asset: <Text style={styles.assetName}>AS2003 | ABC Machine</Text></Text>
            <Text style={styles.dateText}>Date: <Text style={styles.dateValue}>12 Feb 2024, 8:00pm</Text></Text>
          </View>
        </View>

        <View style={styles.inspectionBox}>
          <View style={styles.inspectionBoxHeader}>
            <View style={styles.inspectionBoxLeft}>
              <Image source={require('./assets/logo/Rectangle.png')} />
              <View>
                <Text>IN104051</Text>
                <Text style={styles.assignedText}>Assigned to: <Text style={styles.assignedTo}>David Roy</Text></Text>
              </View>
            </View>
            <Icon name="bars" size={20} />
          </View>
          <View style={styles.inspectionBoxBody}>
            <Text style={styles.assetText}>Asset: <Text style={styles.assetName}>AS2003 | ABC Machine</Text></Text>
            <Text style={styles.dateText}>Date: <Text style={styles.dateValue}>12 Feb 2024, 8:00pm</Text></Text>
          </View>
        </View>

        <View style={styles.inspectionBox}>
          <View style={styles.inspectionBoxHeader}>
            <View style={styles.inspectionBoxLeft}>
              <Image source={require('./assets/logo/Rectangle1.png')} />
              <View>
                <Text>IN104051</Text>
                <Text style={styles.assignedText}>Assigned to: <Text style={styles.assignedTo}>David Roy</Text></Text>
              </View>
            </View>
            <Icon name="bars" size={20} />
          </View>
          <View style={styles.inspectionBoxBody}>
            <Text style={styles.assetText}>Asset: <Text style={styles.assetName}>AS2003 | ABC Machine</Text></Text>
            <Text style={styles.dateText}>Date: <Text style={styles.dateValue}>12 Feb 2024, 8:00pm</Text></Text>
          </View>
        </View>

        <AddBtn onPress={handlePress} caption={<Icon name="plus" size={15} color="#fff" />} />
      </View>

      <BottomNavigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  blueContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#00367F',
    flexDirection: 'row',
  },
  blueBgContent: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inspection: {
    color: '#fff',
  },
  iconParent: {
    flexDirection: 'row',
    gap: 10,
  },
  inspectionContent: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: '100%',
  },
  topBtn: {
    flexDirection: 'row',
    height: 30,
  },
  btnOption: {
    width: '33.3%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inspectionBox: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 6,
    alignItems: 'center',
    paddingBottom: 10,
  },
  inspectionBoxHeader: {
    width: '95%',
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inspectionBoxLeft: {
    flexDirection: 'row',
    gap: 4,
  },
  assignedText: {
    color: 'gray',
    fontSize: 12,
  },
  assignedTo: {
    color: '#000',
  },
  inspectionBoxBody: {
    width: '95%',
  },
  assetText: {
    color: 'gray',
    fontSize: 12,
  },
  assetName: {
    color: '#000',
  },
  dateText: {
    color: 'gray',
    fontSize: 12,
  },
  dateValue: {
    color: '#000',
  },
});

export default Inspect;
