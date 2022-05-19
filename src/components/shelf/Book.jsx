import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteBooks } from '../../actions';

function Item({ record, className }) {
  const { title, id } = record;
  const dispatch = useDispatch();
  const allowDelete = useSelector((state) => state.allowDelete);

  return (
    <div className={className}>
      {allowDelete && <div onClick={() => dispatch(deleteBooks(id))}>x</div>}
      {title}
    </div>
  );
}

Item.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default Item;
