import React, { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks } from './shelfAPI';

import styles from './Shelf.module.css';
import { setBooks, reorderBooks, allowDeleteBooks } from '../../actions';
import clsx from 'clsx';

function Shelf() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const allowDelete = useSelector((state) => state.allowDelete);
  useEffect(() => {
    fetchBooks().then((response) => dispatch(setBooks(response)));
  }, []);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    dispatch(reorderBooks(result));
  }

  return (
    <div className={styles.shelf}>
      <button onClick={() => dispatch(allowDeleteBooks())}>{allowDelete ? 'Reorder' : 'Delete'}</button>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="books" direction="horizontal">
          {(provided) => (
            <ul className={styles.books} {...provided.droppableProps} ref={provided.innerRef}>
              {books?.map(({ id, title }, index) => (
                <Draggable key={id} draggableId={id.toString()} index={index} isDragDisabled={allowDelete}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Book className={clsx(styles.book, styles.deleteBook, allowDelete && styles.allowDelete)} record={{ id, title }} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Shelf;
