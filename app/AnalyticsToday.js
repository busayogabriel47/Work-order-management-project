import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function AnalyticsToday() {
  const navigation = useNavigation();

  const handleSignIn = () => {
  
      navigation.navigate('AnalyticsWeekly'); 
      };

  return (
    <View style={styles.container}>
      {/**the blue bg heading  */}
       <View style={styles.blueContainer}>
      <Icon style={styles.arrowIcon} name="arrow-right" size={10} color="#fff"  />
        <Text style={styles.blueBgText}>Analytics</Text>
        </View>
       
       {/** the today,weekly and monthly boxes */}
        <View style={styles.daysBox}>
          <View style={styles.daysOption}>
            <Text>Today</Text>
          </View>
          <View style={styles.daysOption}>
          <Text>weekly</Text>
          </View>
          <View style={styles.daysOption}>
          <Text>montly</Text>
          </View>
        </View>

        <View style={styles.otherContainer}>
          {/**the overdue,breakdown and emergency box */}
          <View style={styles.overdueContainer}>
            {/**the overdue box */}
            <View style={styles.overduebox}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>0</Text>
            <Text>overdue</Text>
            </View>
            {/**the breakdown box */}
            <View style={styles.overduebox}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>0</Text>
            <Text>breakdown</Text>
            </View>
            {/**the emergency box */}
            <View style={styles.overduebox}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>0</Text>
            <Text>emergency</Text>
            </View>

          </View>

          {/**asset summary */}
        <View style={styles.assetsummaryContainer}>
        <View style={styles.assetsummaryHeading}>
          <Text>asset summary</Text>
          <View style={{ flexDirection: 'row', gap: 6}}>
            <Text>view all</Text>
            <Icon style={styles.contactIcon} name="arrow-right" size={10} color="#000"  />
          </View>
          </View>
        </View>

        {/**asset summary list */}
        <View style={styles.assetListContainer}>
        <View style={styles.assetListContent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.assetListContent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.assetListContent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.assetListContent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.assetListContent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.assetListContent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>
        </View>

        <View style={styles.maintanceContainer}>
          <View style={styles.maintanceHeading}>
          <Text>Maintainace & services</Text>
          <View style={{ flexDirection: 'row', gap: 6}}>
            <Text>view all</Text>
            <Icon style={styles.contactIcon} name="arrow-right" size={10} color="#000"  />
          </View>
          </View>
          <View style={styles.maintanceListContainer}>
        <View style={styles.maintanceList}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.maintanceList}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.maintanceList}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>
        </View>
          </View>

          <View style={styles.inspectingContainer}>
        <View style={styles.inspectingHeading}>
          <Text>Inspecting & Compliance</Text>
          <View style={{ flexDirection: 'row', gap: 6}}>
            <Text>view all</Text>
            <Icon style={styles.contactIcon} name="arrow-right" size={10} color="#000"  />
          </View>
          </View>
        </View>

        <View style={styles.inspectingListContainer}>
        <View style={styles.inspectingListcontent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.inspectingListcontent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.inspectingListcontent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>

        <View style={styles.inspectingListcontent}>
          <Text>Total asset:</Text>
          <Text>3</Text>
        </View>
        </View>

        
        </View>
        
        <TouchableOpacity style={styles.nextPageButton}  onPress={handleSignIn}>
          <Text >next page</Text>
          </TouchableOpacity>
        
    </View>
  )
}


const styles = StyleSheet.create({
  //the container
  container:{
    backgroundColor: '#F2F2F2',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  //the blue bg 
  blueContainer:{
      width: '100%',
      height: 50,
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "#00367F",
      flexDirection: 'row',
      paddingLeft: 10
      
  },
   // the arroe in the blue bg 
   arrowIcon:{
    marginRight: 50,
},
// the text in the blue bg 
blueBgText:{
    color: '#fff',

},
daysBox:{
  width: '100%',
  height: 40,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "white"
},
daysOption: {
  flex: 1,
},
otherContainer:{
  width: '100%',
  backgroundColor: '#f2f2f2',
  flex: 1,
  marginTop: 20,
},
overdueContainer:{
  width: '100%',
  height: 60,
  backgroundColor: '#fff',
  flexDirection: 'row'
},
overduebox:{
  flex: 1,
  marginHorizontal: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
assetsummaryContainer:{
backgroundColor: '#fff',
width: '100%',
marginTop: 5,
alignItems: 'center'


},
assetsummaryHeading:{
width: '90%',
justifyContent: 'space-between',
alignItems: 'center',
height: 30,
backgroundColor: '#fff',
flexDirection: 'row',

},
assetListContainer:{
  height: 150,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 2,
 
},
assetListContent:{
  width: '90%',
  justifyContent: 'space-between',
alignItems: 'center',
flexDirection: 'row',
marginTop: 5


},
maintanceContainer:{
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 2,
},
maintanceHeading:{
  width: '90%',
justifyContent: 'space-between',
alignItems: 'center',
height: 30,
backgroundColor: '#fff',
flexDirection: 'row',
},
maintanceListContainer:{
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 5,
width: '100%',

},
maintanceList:{
  width: '90%',
  justifyContent: 'space-between',
alignItems: 'center',
flexDirection: 'row',
marginTop: 5,
paddingBottom: 3

},
inspectingContainer:{
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 2,
},
inspectingHeading:{
  width: '90%',
justifyContent: 'space-between',
alignItems: 'center',
height: 30,
backgroundColor: '#fff',
flexDirection: 'row',
},
inspectingListContainer:{
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 2,
},
inspectingListcontent:{
  width: '90%',
  justifyContent: 'space-between',
alignItems: 'center',
flexDirection: 'row',
marginTop: 5,
paddingBottom: 3

}


})