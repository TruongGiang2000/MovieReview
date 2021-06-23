import { SearchSelector} from './Search.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
export const SearchLogic = () => {
  const dispatch = useDispatch();
  const {} = useSelector(SearchSelector);
  return {};
}