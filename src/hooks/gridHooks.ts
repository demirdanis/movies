import { ICustomGridPagination } from "@/components/CustomDataGrid/CustomDataGrid.types";
import { useState } from "react";

export interface IGridHook {
  initialKeyword?: string;
  pageSize: number;
  onPageChange?: (page: number) => void;
  onKeywordChange?: (changedKeyword: string) => void;
}

export const useGridHooks = ({
  initialKeyword,
  pageSize,
  onPageChange,
  onKeywordChange,
}: IGridHook) => {
  const [keyword, setKeyword] = useState<string>(initialKeyword ?? "");

  const [pagination, setPagination] = useState<ICustomGridPagination>({
    paginationModel: {
      page: 0,
      pageSize: pageSize,
    },
    totalRowCount: 0,
  });

  const handlePageChange = (page: number) => {
    pagination.paginationModel.page = page;
    setPagination(pagination);
    onPageChange?.(page);
  };

  const handleKeywordChange = (changedKeyword: string) => {
    setKeyword(changedKeyword);
    onKeywordChange?.(changedKeyword);
  };

  return {
    keyword,
    pagination,
    handleKeywordChange,
    handlePageChange,
  };
};
