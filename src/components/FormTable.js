import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "../styles/comp/formtable.scss";

const FormTable = ({ data, columns, pagination, title, hidesearch }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = data.filter((item) =>
      Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  const CustomHeader = () => (
    <thead className="formdata-table-header">
      <tr>
        {columns.map((column) => (
          <th key={column.dataIndex} className="formdata-table-header-cell">{column.title}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <div className="formtable-parent">
      <div className="formdata-table">
        <div className="table-header form-row">
          <h2 className='w-full heading'>
            {title}
          </h2>
          {
            !hidesearch ?
              <Input
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                style={{ marginBottom: 16 }}
                prefix={<SearchOutlined />}
                className='w-full search-bar'
              />
              :
              ''
          }
        </div>

        <Table
          columns={columns}
          dataSource={!hidesearch ? filteredData : data}
          components={{ header: { wrapper: CustomHeader } }}
          pagination={pagination}
          rowClassName="formdata-table-row"
        />
      </div>
    </div>
  );
};

export default FormTable;
