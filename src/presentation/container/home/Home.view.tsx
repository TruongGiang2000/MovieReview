import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Home.styles';
import {HomeProps} from './types';
import {HomeLogic} from './Home.logic';
import {Fonts} from '@resources';
import {translate} from '@helpers';
import {ICON_EN, ICON_VI} from '@assets';
import DropDownPicker from 'react-native-dropdown-picker';
export const Home: React.FC<HomeProps> = (props) => {
  const {} = props;
  const {open, setOpen, value, setValue} = HomeLogic();

  const items = [
    {
      icon: () => <Image source={ICON_VI} style={styles.icon} />,
      label: translate('vietnamese'),
      value: 'vi',
    },
    {
      icon: () => <Image source={ICON_EN} style={styles.icon} />,
      label: translate('english'),
      value: 'en',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Text style={styles.watchNow}>{translate('watch_now')}</Text>
        <View style={{flex: 1}}>
          <DropDownPicker
            items={items}
            open={open}
            value={value}
            setValue={setValue}
            dropDownContainerStyle={styles.dropDownContainer}
            theme={'DARK'}
            setOpen={setOpen}
            style={styles.dropDown}
            textStyle={styles.txtLangugeStyle}
          />
        </View>
      </View>
    </View>
  );
};
