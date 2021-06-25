import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {styles} from './Home.styles';
import {HomeProps} from './types';
import {HomeLogic} from './Home.logic';
import {translate} from '@helpers';
import {ICON_EN, ICON_VI} from '@assets';
import DropDownPicker from 'react-native-dropdown-picker';
import {ItemIntro, ItemPopular} from './modules';
import moment from 'moment';
import {App} from '@resources';
export const Home: React.FC<HomeProps> = (props) => {
  const {} = props;
  const {open, setOpen, value, setValue, upComingMovie} = HomeLogic();
  //Render Item Upcoming
  const renderItemUpcoming = ({item}: any) => {
    const {title, release_date, vote_average, poster_path} = item;
    const year = moment(release_date, 'yyyy-mm-dd').format('yyyy');
    return (
      <ItemIntro
        name={title}
        year={year}
        rating={vote_average / 2}
        poster={{uri: App.linkPoster + poster_path}}
      />
    );
  };
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
            textStyle={styles.txtLanguageStyle}
          />
        </View>
      </View>
      <View style={styles.viewBelow}>
        <FlatList
          data={upComingMovie}
          renderItem={renderItemUpcoming}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>{translate('popular')}</Text>
          <Text style={styles.txtShowAll}>{translate('show_all')}</Text>
        </View>
        <ItemPopular />
      </View>
    </View>
  );
};
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
