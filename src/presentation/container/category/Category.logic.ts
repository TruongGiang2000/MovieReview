import { CategorySelector} from './Category.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
export const CategoryLogic = () => {
  const dispatch = useDispatch();
  const {} = useSelector(CategorySelector);
  return {};
}