import React from 'react'
import Wrapper from '../assets/wrappers/Pagination'
import Pagination from 'rc-pagination'
const PaginationC = ({ currentPage, totalItems, onChangePage }) => {
  return (
    <Wrapper>
      <Pagination
        className='pagination'
        current={currentPage}
        total={totalItems}
        pageSize={20}
        onChange={onChangePage}
      />
    </Wrapper>
  )
}

export default PaginationC
