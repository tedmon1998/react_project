import { useMemo } from 'react'

export const useGetPageCount = (totalCounter, limit) => {
   return Math.ceil(totalCounter / limit)
}

export const useGetPages = (totalCounter, limit) => {
   const totalPage = useGetPageCount(totalCounter, limit)

   const result = useMemo(() => {
      let array = []
      for (let i = 0; i < totalPage; i++) {
         array.push(i + 1)
      }
      return array
   }, [totalPage])
   return result
}