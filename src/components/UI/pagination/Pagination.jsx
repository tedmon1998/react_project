import React from 'react'
import MyButton from '../button/MyButton'

const Pagination = ({ pagesArray, changePage, page }) => {
   return (
      <div>
         {
            pagesArray.map(numberPage =>
               <MyButton
                  key={numberPage}
                  onClick={() => changePage(numberPage)}
                  status={page === numberPage ? true : false}>
                  {numberPage}
               </MyButton>
            )
         }
      </div>
   )
}

export default Pagination
