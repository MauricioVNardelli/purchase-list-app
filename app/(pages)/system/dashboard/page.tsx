import { Table, TableData } from '@mantine/core';
import style from '@/app/ui/pages/dashboard.module.scss'

export default function Dashboard() {

  const tableData: TableData = {
    caption: 'Some elements from periodic table',
    head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
    body: [
      [6, 12.011, 'C', 'Carbon'],
      [7, 14.007, 'N', 'Nitrogen'],
      [39, 88.906, 'Y', 'Yttrium'],
      [56, 137.33, 'Ba', 'Barium'],
      [58, 140.12, 'Ce', 'Cerium'],
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