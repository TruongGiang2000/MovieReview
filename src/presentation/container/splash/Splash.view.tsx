import React from 'react';
import {View, Text} from 'react-native';
import {splashLogic} from './Splash.logic';
import {styles} from './Splash.styles';
import {PacmanIndicator} from 'react-native-indicators';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '@resources';
import {translate} from '@helpers';
export const SplashScreen = () => {
  const {mode, label} = splashLogic();
  return (
    <View style={styles.container}>
      {/* <Text>
        {mode == 'staging' ? 'DEV ' : ''}
        {label}
      </Text> */}
      <Text style={styles.titleStyle}>Movie Review</Text>
      <Text style={styles.subTitle}>{translate('des_app')}</Text>
      <View style={styles.viewLoading}>
        <PacmanIndicator size={wp(15)} color={Colors.mainColor} />
      </View>
    </View>
  );
};
