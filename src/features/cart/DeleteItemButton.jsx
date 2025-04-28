/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItemButton({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
}
export default DeleteItemButton;
