'use client';

import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { generateData } from '../utils/generateData';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData(10));
  }, []);

  return <Table columns={columns} dataSource={data} />;
}