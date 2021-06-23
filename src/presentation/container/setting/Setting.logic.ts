import { SettingSelector} from './Setting.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
export const SettingLogic = () => {
  const dispatch = useDispatch();
  const {} = useSelector(SettingSelector);
  return {};
}