import { useState, useMemo } from "react";
import { StudyInterface } from "../../public/interfaces/IStudy";
import { TableHeadersInterface } from "../../public/interfaces/ITableHeaders";

interface SortOptions {
  sortBy: string | null;
  sortDesc: boolean;
}

const useTableSorting = (newStudiesData: StudyInterface[], newHeader: TableHeadersInterface) => {
  const [sortOptions, setSortOptions] = useState<SortOptions>({ sortBy: null, sortDesc: false });

const a = newStudiesData[0];
if (a != null) console.log(a[Object.keys(newHeader).find(key => newHeader[key as keyof TableHeadersInterface] === sortOptions.sortBy) as keyof StudyInterface]);

  const handleSort = (column: string) => {
    if (sortOptions.sortBy === column) {
      setSortOptions({ ...sortOptions, sortDesc: !sortOptions.sortDesc });
      } else {
        setSortOptions({ sortBy: column, sortDesc: false });
    }
  };

  const sortedData = useMemo(() => {
    if (sortOptions.sortBy !== null) {
      return [...newStudiesData].sort((a, b) => {
        console.log(sortOptions.sortBy)
        const valueA = a[Object.keys(newHeader).find(key => newHeader[key as keyof TableHeadersInterface] === sortOptions.sortBy) as keyof StudyInterface];
        const valueB = b[Object.keys(newHeader).find(key => newHeader[key as keyof TableHeadersInterface] === sortOptions.sortBy) as keyof StudyInterface];
        const comparison =
          typeof valueA === "number" && typeof valueB === "number"
            ? valueA - valueB
            : String(valueA).localeCompare(String(valueB));

        return sortOptions.sortDesc ? comparison * -1 : comparison;
      });
    } else {
      return newStudiesData;
    }
  }, [newStudiesData, newHeader, sortOptions]);

  return { sortOptions, handleSort, sortedData };
};

export default useTableSorting;