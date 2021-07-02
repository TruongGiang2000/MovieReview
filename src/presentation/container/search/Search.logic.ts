import {SearchSelector} from './Search.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
export const SearchLogic = () => {
  const dispatch = useDispatch();
  const {} = useSelector(SearchSelector);
  const [showModal, setShowModal] = useState(false);

  const showModalFun = () => setShowModal(true);
  const hideModalFun = () => setShowModal(false);
  return {showModal, showModalFun, hideModalFun};
};
