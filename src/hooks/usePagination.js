export const DOTS = "...";
Array.range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);
function usePagination({currentPage,  totalCount,  pageSize}) {
  let paginationArray = [1];
  const totalPageCount = Math.ceil(totalCount / pageSize);

  //Case 1: Display range of pages if total number of pages is less than or equal to 5
  if(totalPageCount <= 5){
    paginationArray = Array.range(1,totalPageCount+1);
  }
  //Case 2: Display pages as 1 2 3 4.. 99 when current page is 3 or less
  else if(currentPage <= 3){
    paginationArray = [1,2,3,4,DOTS,totalPageCount];
  }
  //Case 3: Display pages as 1...6 7 8 9 when current page is less than or
  //equal to 3 of the total pages
  else if (currentPage >= totalPageCount-2){
    let endSequenceArray = Array.range(currentPage-1,totalPageCount+1);
    paginationArray = [1,DOTS].concat(endSequenceArray);
  }
  //Case 4: Display pages as 1...4 5 6...99 where 5 is the current page
  else{
    paginationArray = [1,DOTS,currentPage-1,currentPage,currentPage+1,DOTS,totalPageCount];
  }
  
return paginationArray;  
}

export default usePagination;
