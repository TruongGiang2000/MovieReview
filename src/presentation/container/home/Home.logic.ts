import React, {useState} from 'react';
import {HomeSelector} from './Home.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';

export const HomeLogic = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(HomeSelector);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(!!language ? language : 'vi');
  return {open, setOpen, value, setValue};
};
