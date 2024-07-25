import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import WorkOrders from "../screen/WorkOrders";
import { MaterialCommunityIcons, Ionicons, FontAwesome5, Feather} from '@expo/vector-icons';
import { View, Dimensions, Image, Text, Platform, TouchableOpacity  } from 'react-native';
import WorkOrderCalendar from '../screen/WorkOrderCalendar';
import WorkOrderSearch from '../screen/WorkOrderSearch';
import IconWithModal from '../screen/WorkOrderSorting';
import { CardTwo } from '../components/Card';



const devicesWidth = Math.round(Dimensions.get('window').width);

// How to customise header;
function HeaderImage() {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={require('../assets/Ellipse 5.png')}/>
      <Text style={{color: '#ffff', fontSize: 16, padding: 10}}>Work Orders</Text>
    </View>
  )
};
function HeaderIcon({onPress}) {
  
  return(
    <View style={{flexDirection: 'row', alignItems: 'center', gap:25, padding: 15 }}>
      <TouchableOpacity onPress={onPress}> 
        <Feather name="search" size={20} color="white"/>
          </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <FontAwesome5 name="calendar-alt" size={20} color="white"/>
          </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chatbubble-ellipses-sharp" size={20} color="white" />
          </TouchableOpacity>
    </View>
  )
}
function Home() {
  return(
    <View>
     <Text>Home Screen</Text>
    </View>
  )
};
function Profile() {
  
  return(
    <View>
     <Text>Profile</Text>
    </View>
  )
};
function Notification() {
  
  return(
    <View>
     <Text>Notification</Text>
    </View>
  )
};

function DetailsScreen() {
  
  return(
          <CardTwo
              image={require('../assets/Frame (1).png')}
              asset='W0125689'
              action= 'In Progress'
              icon= {<MaterialCommunityIcons name="dots-vertical" size={24} color="gray"/>}
              title= 'Title: '
              description= 'Lorem ipsum dolor sit amet, consecteture'
              property= 'Asset: '
              type= 'AS548 - ABC Machine'
              assignment= 'Assigned to: '
              person= 'John Smith'
              date= '| Date: '
              time= '25 Feb 24'
              />
  )
}




// Top Tabs
const TopTabs = createMaterialTopTabNavigator();

export function TopTabsGroup() {

  return( 
    <TopTabs.Navigator 
      screenOptions={{
        tabBarActiveTintColor: "#0b72e4",
        tabBarInactiveTintColor: "#888888", 
        tabBarGap: 5,
        tabBarStyle: {
        display: 'flex'
      },
      tabBarItemStyle: {paddingHorizontal: 2},
      tabBarLabelStyle: {
        textTransform: 'capitalize',
        fontSize: 14     
      },
    }}>
      <TopTabs.Screen name='All' component={WorkOrders}/>
      <TopTabs.Screen name='Assigned' component={Home}/>
      <TopTabs.Screen name='Completed' component={Profile}/>
      <TopTabs.Screen name='icon' component={Notification}
         options={{
          tabBarIcon: () => (<IconWithModal/>),
          tabBarShowLabel: false,
          tabBarIconStyle: {top: 6}
    }}
    />
    </TopTabs.Navigator>
  )
}


// Bottom Tabs
const Tab = createBottomTabNavigator();

 const TabGroup  = () => {
  
    return (
        <Tab.Navigator 
            screenOptions={{
              tabBarItemStyle: {
                height: 50,
                paddingBottom: 8 
        }
        }}>
            <Tab.Screen 
              name="Work Order" 
              component={TopTabsGroup}
              options={{
                headerTitle: () => <HeaderImage/>,
                headerStyle: {
                  backgroundColor: '#003680',
                  height: 100
                },
                headerRight: () => <HeaderIcon/>,
                headerTintColor: '#ffff',
                headerTitleStyle: {
                  fontSize: 16
                },
                tabBarActiveTintColor: "#0b72e4",
                tabBarInactiveTintColor: "#888888",
                headerShown: true,
                tabBarIcon:({color, size }) =>
                  <FontAwesome5 name="clipboard-list" size={size} color={color} /> }}  />
            <Tab.Screen 
              name="Assets" 
              component={WorkOrderSearch}
              options={{
                tabBarActiveTintColor: "#0b72e4",
                tabBarInactiveTintColor: "#888888",
                headerShown: false,
                tabBarIcon:({color, size }) =>
                  <MaterialCommunityIcons name="hexagon-slice-6" size={size} color={color}/>}}/>
            <Tab.Screen 
               name="Menu" 
               component={WorkOrderCalendar}
                options={{
                  tabBarActiveTintColor: "#0b72e4",
                  tabBarInactiveTintColor: "#888888",
                  tabBarIcon:() => {
                    return(
                      <View style={{
                        top: Platform.OS == "android" ? -20 : -10,
                        width: Platform.OS == "android" ? 60 : 50,
                        height: Platform.OS == "android" ? 60 : 50,
                        borderRadius: Platform.OS =="android" ? 30 : 25,
                        alignItems: 'center',
                        justifyContent:'center',
                        backgroundColor: '#f2f2f2'
                      }}>
                        <TouchableOpacity style={{
                          width:50, 
                          height:50, 
                          borderRadius:25,
                          padding: 15, 
                          backgroundColor:'white', 
                          alignItems:'center'}} >
                            <MaterialCommunityIcons name="format-list-bulleted" size={20} color="gray" />
                        </TouchableOpacity>
                      </View>
                    )
                  }
                }}/>
            <Tab.Screen 
              name="Schedule" 
              component={DetailsScreen}
              options={{
                tabBarActiveTintColor: "#0b72e4",
                tabBarInactiveTintColor: "#888888",
                headerShown: false,
              tabBarIcon:({color, size }) =>
                <FontAwesome5 name="calendar-alt" size={size} color={color}/>}}/>
            <Tab.Screen 
               name="Inventory" 
               component={Profile}
               options={{
                  tabBarActiveTintColor: "#0b72e4",
                  tabBarInactiveTintColor: "#888888",
                  headerShown: false,
                  tabBarIcon:({color, size }) =>
                    <Ionicons name="settings" size={size} color= {color} />}}/>   
        </Tab.Navigator> 
    )
}


export default function NavigationApp() {
  return (
    <NavigationContainer>
      <TabGroup/>
    </NavigationContainer>
  )
}
