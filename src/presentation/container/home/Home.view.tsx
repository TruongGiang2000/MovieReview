import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Home.styles';
import {HomeLogic} from './Home.logic';
import {translate} from '@helpers';
import {ICON_EN, ICON_VI} from '@assets';
import DropDownPicker from 'react-native-dropdown-picker';
import {ItemIntro, ItemPopular} from './modules';
import moment from 'moment';
import {App} from '@resources';
export const Home = (props: any) => {
  const {} = props;
  const {
    open,
    setOpen,
    value,
    setValue,
    upComingMovie,
    popularMovie,
    topRatingMovie,
    goToDetailMovie,
  } = HomeLogic(props);
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

  //Render Item Upcoming
  const renderItemUpcoming = ({item}: any) => {
    const {title, release_date, vote_average, poster_path, id} = item;
    const year = !!release_date
      ? moment(release_date, 'yyyy-mm-dd').format('yyyy')
      : translate('coming_soon');
    return (
      <ItemIntro
        name={title}
        year={year}
        rating={vote_average / 2}
        poster={{uri: App.linkPoster + poster_path}}
        onPress={goToDetailMovie(id)}
      />
    );
  };
  //Render Item Popular
  const renderItemPopular = ({item}: any) => {
    const {title, release_date, vote_average, poster_path, id} = item;
    const year = !!release_date
      ? moment(release_date, 'yyyy-mm-dd').format('yyyy')
      : translate('coming_soon');
    return (
      <ItemPopular
        name={title}
        year={year || translate('coming_soon')}
        rating={vote_average / 2}
        poster={{uri: App.linkPoster + poster_path}}
        onPress={goToDetailMovie(id)}
      />
    );
  };
  return (
    <ScrollView style={styles.container}>
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
        customItemContainerStyle={{backgroundColor: 'pink'}}
      />
      <View style={styles.viewTop}>
        <Text style={styles.watchNow}>{translate('watch_now')}</Text>
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
        <FlatList
          data={popularMovie}
          renderItem={renderItemPopular}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>{translate('top_rating')}</Text>
          <Text style={styles.txtShowAll}>{translate('show_all')}</Text>
        </View>
        <FlatList
          data={topRatingMovie}
          renderItem={renderItemPopular}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};
