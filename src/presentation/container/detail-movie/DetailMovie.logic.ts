import {DetailMovieSelector} from './DetailMovie.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  getCredits,
  getDetailMovie,
  getGalleryMovie,
  getListGenres,
  getRelate,
  getVideo,
} from '@shared-state';
import {RequestMovieDetail} from '@data';
import {languageRequest} from '@hooks';
import lodash from 'lodash';
import {App} from '@resources';
import moment from 'moment';
import {translate} from '@helpers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {isEmpty} from 'lodash';
export const DetailMovieLogic = (props: any) => {
  const dispatch = useDispatch();
  const {
    creditsMovie,
    detailMovie,
    galleryMovie,
    videoMovie,
    relateMovie,
  } = useSelector(DetailMovieSelector);
  const idMovie = props?.route?.params?.idMovie;
  const [loading, setLoading] = useState(true);

  const bodyDetailMovie: RequestMovieDetail = {
    movieID: idMovie,
    language: languageRequest(),
  };
  const backDrop =
    lodash.get(galleryMovie?.backdrops, '[0]', undefined) ||
    lodash.get(galleryMovie?.posters, '[0]', undefined);
  const uriBackDrop = App.linkPoster + backDrop?.file_path;

  const countries = lodash.get(detailMovie?.production_countries, '[0]', '');

  const ratio =
    backDrop?.height < backDrop?.width
      ? backDrop?.height / backDrop?.width
      : backDrop?.width / backDrop?.height;
  const heightBackDrop = wp(120) * (!!ratio ? ratio : 0.7);
  const year = !!detailMovie?.release_date
    ? moment(detailMovie?.release_date, 'yyyy-mm-dd').format('yyyy')
    : translate('coming_soon');

  useEffect(() => {
    if (!idMovie) return;
    dispatch(getDetailMovie(bodyDetailMovie));
    dispatch(
      getGalleryMovie({...bodyDetailMovie, include_image_language: 'en'}),
    );
    dispatch(getCredits(bodyDetailMovie));
    dispatch(getVideo({...bodyDetailMovie, language: 'en-US'}));
    dispatch(getRelate(bodyDetailMovie));
  }, [idMovie]);

  useEffect(() => {
    if (
      !isEmpty(detailMovie) &&
      !isEmpty(creditsMovie) &&
      !isEmpty(galleryMovie) &&
      !isEmpty(videoMovie) &&
      !isEmpty(relateMovie)
    ) {
      setLoading(false);
    }
  }, [detailMovie, creditsMovie, galleryMovie, videoMovie, relateMovie]);

  const goBack = () => props?.navigation?.goBack();

  return {
    goBack,
    uriBackDrop,
    backDrop,
    detailMovie,
    countries,
    year,
    heightBackDrop,
    creditsMovie,
    galleryMovie,
    videoMovie,
    relateMovie,
    loading,
  };
};
