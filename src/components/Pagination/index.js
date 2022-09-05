import React, {memo} from 'react';
import ReactPaginate from 'react-paginate';
import classes from './styles.module.scss';

const Pagination= ({currentPage, onChangePage}) => {

  return (
    <ReactPaginate
      className={classes.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

export default memo(Pagination);