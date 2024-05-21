import React, { useState, useRef, useCallback } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaRegAddressCard } from "react-icons/fa6";
import MainHeader from "../../../components/MainHeader";
import { MdAdd } from "react-icons/md";
import broken from "../../../assets/broken.webp";
import "./doctorlist.scss";

const DoctorList = () => {
  const initialData = [
    {
      key: "1",
      name: "sunil",
      photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715849629~exp=1715853229~hmac=4d113c475c0c576e4499bf4372fff6e17a1790b5bcbf108e3966af8abad5eb53&w=1380",
      uhid: "1234567890",
      mobile: "1234567890",
    },
    {
      key: "2",
      name: "zaigham",
      photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715849629~exp=1715853229~hmac=4d113c475c0c576e4499bf4372fff6e17a1790b5bcbf108e3966af8abad5eb53&w=1380",
      uhid: "1234567890",
      mobile: "1234567890",
    },
    {
      key: "3",
      name: "rishabh",
      photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715849629~exp=1715853229~hmac=4d113c475c0c576e4499bf4372fff6e17a1790b5bcbf108e3966af8abad5eb53&w=1380",
      uhid: "1234567890",
      mobile: "1234567890",
    },
    {
      key: "4",
      name: "harsh",
      photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715849629~exp=1715853229~hmac=4d113c475c0c576e4499bf4372fff6e17a1790b5bcbf108e3966af8abad5eb53&w=1380",
      uhid: "1234567890",
      mobile: "1234567890",
    },
    // Add more data objects as needed
  ];

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [data, setData] = useState(initialData);
  const searchInput = useRef(null);

  // Custom debounce function
  const debounce = (func, delay) => {
    let debounceTimer;
    return function(...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    debouncedFilterData(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
    setData(initialData);
  };

  // Filter data based on search input
  const filterData = (query) => {
    if (query) {
      const filteredData = initialData.filter(item =>
        Object.values(item).some(
          value => typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
        )
      );
      setData(filteredData);
    } else {
      setData(initialData);
    }
  };

  // Debounced version of the filterData function
  const debouncedFilterData = useCallback(debounce(filterData, 300), []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
              debouncedFilterData(selectedKeys[0]);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const columns = [
    {
      title: "Doctor Number",
      dataIndex: "uhid",
      key: "uhid",
      width: 100,
      align: "center",
      ...getColumnSearchProps('uhid'),
    },
    {
      title: "Doctor Photo",
      dataIndex: "photo",
      key: "photo",
      width: 100,
      render: (photo) => (
        <img
          src={photo ? photo : broken}
          alt="Doctor"
          className="object-cover"
          style={{
            height: "calc(var(--unit) * 5)",
            borderRadius: "100%",
            aspectRatio: "1",
          }}
        />
      ),
    },
    {
      title: "Doctor Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      align: "center",
      ...getColumnSearchProps('name'),
    },
    {
      title: "Mobile No.",
      dataIndex: "mobile",
      key: "mobile",
      width: 100,
      align: "center",
      ...getColumnSearchProps('mobile'),
    }
  ];

  return (
    <div className="doctor-list-parent parent">
      <MainHeader
        title="Doctor List"
        link1="#"
        link1_text="Doctor"
        link2="/doctorlist"
        link2_text="DoctorList"
      />
      <div className="doctor-list-body">
        <Table
          dataSource={data}
          columns={columns}
          pagination={true} // Enable pagination if required
          scroll={{ y: "calc(100svh - var(--unit) * 22)" }}
        />
      </div>
    </div>
  );
};

export default DoctorList;
