import React, {useEffect, useRef, useState} from 'react';
import {HomeSelector} from './Home.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {setLanguage} from '@shared-state';
import CodePush from 'react-native-code-push';

export const HomeLogic = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(HomeSelector);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(!!language ? language : 'vi');
  const refLanguage = useRef(language);

  useEffect(() => {
    if (refLanguage.current == value) return;
    dispatch(setLanguage(value));
    refLanguage.current = value;
    setTimeout(() => {
      CodePush.restartApp();
    }, 500);
  }, [value]);

  return {open, setOpen, value, setValue};
};
