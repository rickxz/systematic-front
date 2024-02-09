import { useState, useMemo } from "react";

interface SortOptions {
  sortBy: string | null;
  sortDesc: boolean;
}

const useTableSorting = (headerData: string[], bodyData: (string | number)[][]) => {
  const [sortOptions, setSortOptions] = useState<SortOptions>({ sortBy: null, sortDesc: false });

  const handleSort = (column: string) => {
    if (sortOptions.sortBy === column) {
      setSortOptions({ ...sortOptions, sortDesc: !sortOptions.sortDesc });
    } else {
      setSortOptions({ sortBy: column, sortDesc: false });
    }
  };

  const sortedData = useMemo(() => {
    if (sortOptions.sortBy !== null) {
      return [...bodyData].sort((a, b) => {
        const valueA = a[headerData.indexOf(sortOptions.sortBy!)];
        const valueB = b[headerData.indexOf(sortOptions.sortBy!)];
        const comparison =
          typeof valueA === "number" && typeof valueB === "number"
            ? valueA - valueB
            : String(valueA).localeCompare(String(valueB));

        return sortOptions.sortDesc ? comparison * -1 : comparison;
      });
    } else {
      return bodyData;
    }
  }, [bodyData, headerData, sortOptions]);

  return { sortOptions, handleSort, sortedData };
};

export default useTableSorting;
