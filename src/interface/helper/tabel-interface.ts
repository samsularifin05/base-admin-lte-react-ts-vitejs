import { TablePaginationConfig } from "antd";
import { ChangeEvent } from "react";

export interface TableColumn {
  title: string;
  dataIndex: string;
  key: string;
}

interface CustomTablePaginationConfig extends TablePaginationConfig {
  q?: string;
}
export interface TableMasterProps {
  dataSource: any;
  columns: TableColumn[];
  title?: string;
  addButtonTitle?: string;
  rowKey: string;
  isLoading?: boolean;
  scrollX?: boolean;
  total?: number;
  loading?: boolean;
  changePagenation?: (row: CustomTablePaginationConfig) => void;
  onAddButtonClick?: () => void;
  searchText?: string;
  handleSearch?: (row: ChangeEvent<HTMLInputElement>) => void;
}

export interface InterFaceFormDataUser {
  email: string;
  password: string;
}
export interface SearchInterface {
  current?: number;
  pageSize?: number;
  q?: string;
}

export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface TabelInterFace<T> {
  data: T[];
  total: number;
}
