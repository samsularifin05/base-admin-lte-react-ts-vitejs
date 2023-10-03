import { Col, Input, Row, TablePaginationConfig, Button, Table } from "@/utils";

import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { TableMasterProps } from "@/interface";
import { useSelector } from "react-redux";
import { RootState, UtilityState } from "@/reduxStore";

const TableMaster = (props: TableMasterProps) => {
  const {
    dataSource,
    columns,
    addButtonTitle,
    rowKey,
    total,
    loading,
    isLoading = false,
    changePagenation,
    onAddButtonClick,
    scrollX,
    handleSearch,
  } = props;

  const utility = useSelector<RootState<string>, UtilityState<string>>(
    (state) => state.utility
  );

  const [value, setvalue] = useState("");
  useState<TablePaginationConfig>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleSearch) {
      setvalue(e.target.value);
      handleSearch(e);
    }
  };

  const handleTableChange = (pagination: TablePaginationConfig) => {
    if (changePagenation) {
      changePagenation({
        ...pagination,
        q: value || "",
      });
    }
  };

  const tableProps = {
    loading,
  };

  return (
    <Row>
      <Col span={6}>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          value={value}
          onChange={handleSearchChange}
          style={{ marginBottom: "16px" }}
        />
      </Col>
      <Col span={18} className="text-end">
        {addButtonTitle !== undefined && (
          <Button type="primary" onClick={onAddButtonClick}>
            {addButtonTitle}
          </Button>
        )}
      </Col>
      <Col span={24} className="mt-4">
        <Table
          {...tableProps}
          dataSource={dataSource}
          columns={columns}
          loading={utility.getLoading.table || isLoading}
          rowKey={rowKey}
          scroll={{ x: scrollX ? 1300 : 0 }}
          pagination={{
            total: total || 0, // totalData count returned from backend
          }}
          onChange={handleTableChange}
        />
      </Col>
    </Row>
  );
};

export default TableMaster;
