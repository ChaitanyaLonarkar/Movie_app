import React from "react";
import ReactPaginate from "react-paginate";
export default function Pagination(props) {
  return (
    // <div>
    //   <nav aria-label="...">
    //     <ul class="pagination bg-dark">
    //       <li class="page-item disabled">
    //         <a class="page-link" href="#" tabindex="-1">
    //           Previous
    //         </a>
    //       </li>
    //       <li class="page-item">
    //         <a class="page-link" href="#">
    //           1
    //         </a>
    //       </li>
    //       <li class="page-item active">
    //         <a class="page-link" href="#">
    //           2 <span class="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li class="page-item">
    //         <a class="page-link" href="#">
    //           3
    //         </a>
    //       </li>
    //       <li class="page-item">
    //         <a class="page-link" href="#">
    //           Next
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    <ReactPaginate
    className="paginate"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e)=>{props.setCurrentPage((e.selected+1))}}
        pageRangeDisplayed={1}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    
  );
}
