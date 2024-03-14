import React from 'react'

const OrderListPagination = ({ postsPerPage, totalPosts, setrCurrentPage, currentPage,}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={'page-item'}>
                        <div className={number === currentPage ? "active" : "" }>
                        <a onClick={() => setrCurrentPage(number)} className={'page-link'}>
                            
                                {number}
                                 {/* number == currentPage ? "active" : "" */}
                          
                        </a>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )

 }


export default OrderListPagination;
