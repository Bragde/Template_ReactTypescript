import React from 'react';
import { Column } from 'react-table';
import PubOverviewTable from './Table';
import { PubOverview } from '../types/types';
import * as MockData from '../mockdata/mockdata';
import AddPubBtn from './AddPub';

const Home = (): JSX.Element => {
  const columns: Column<PubOverview>[] = React.useMemo(
    () => [
      {
        Header: 'Namn',
        accessor: 'name',
      },
      {
        Header: 'Folk',
        accessor: 'pepole',
      },
      {
        Header: 'Atmosfär',
        accessor: 'enviroment',
      },
      {
        Header: 'Mat',
        accessor: 'food',
      },
      {
        Header: 'Öl',
        accessor: 'beer',
      },
    ],
    [],
  );

  const data: PubOverview[] = React.useMemo(() => MockData.pubOverview(5), []);

  return (
    <>
      <AddPubBtn />
      <PubOverviewTable columns={columns} data={data} />
    </>
  );
};

export default Home;
