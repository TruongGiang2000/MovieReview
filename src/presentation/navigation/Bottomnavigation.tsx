import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Home, Category, Search, Setting} from '@containers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CATEGORY, HOME, SEARCH, SETTING} from '@assets';
const Tab = createBottomTabNavigator();
const tabBarBottomIcon: any = {
  Home: HOME,
  Search: SEARCH,
  Category: CATEGORY,
  Setting: SETTING,
};

const tabBar = (props: BottomTabBarProps) => {
  const {state, navigation} = props;
  const navigateRoute = (route: string) => navigation.navigate(route);
  return (
    <View style={styles.containerBottom}>
      {state.routes?.map((route: any, index: number) => {
        const isFocused = state?.index == index;
        const nameRoute = route?.name;
        return (
          <TouchableOpacity
            key={route?.name}
            style={styles.containerItem}
            onPress={() => navigateRoute(nameRoute)}>
            {isFocused ? (
              <>
                <View style={styles.viewLine} />
                <Image
                  source={tabBarBottomIcon[nameRoute]}
                  style={[styles.icon, {marginTop: hp(2), tintColor: '#fff'}]}
                />
              </>
            ) : (
              <Image source={tabBarBottomIcon[nameRoute]} style={styles.icon} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const MyTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => tabBar(props)}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Search'} component={Search} />
      <Tab.Screen name={'Category'} component={Category} />
      <Tab.Screen name={'Setting'} component={Setting} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  containerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    backgroundColor: '#000000bd',
    justifyContent: 'space-between',
  },
  containerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp(2),
    marginHorizontal: wp(1),
  },
  viewLine: {
    width: '60%',
    height: wp(1.3),
    backgroundColor: 'white',
    borderRadius: wp(1.5),
  },
  icon: {width: wp(6), height: wp(6), tintColor: '#968E8E'},
});
