export function usePagination(page: number, list: Array<any>, perPage: number): Array<any> {
  const curPage = page * perPage

  return page === 1 ? list.slice(0, perPage) : list.slice(curPage - perPage, curPage)
}
