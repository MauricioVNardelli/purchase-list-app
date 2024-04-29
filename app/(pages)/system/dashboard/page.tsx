import { Table, TableData } from '@mantine/core';
import style from '@/app/ui/pages/dashboard.module.scss'

export default function Dashboard() {

  const tableData: TableData = {
    //caption: 'Some elements from periodic table',
    head: ['Date', 'Marketplace', 'Product', 'Value ($)'],
    body: [
      ['2024-04-29', 'Amazon', 'Smartphone', 500.00],
      ['2024-04-30', 'eBay', 'Laptop', 899.99],
      ['2024-05-01', 'Walmart', 'Tablet', 300.00],
      ['2024-05-02', 'Best Buy', 'Headphones', 180.99],
      ['2024-05-03', 'Target', 'Fitness Tracker', 50.00],
    ],
  };

  return (
    <div className={style.container}>
      <div className={style.table}>
        <Table data={tableData} />
      </div>
    </div>
  );
}