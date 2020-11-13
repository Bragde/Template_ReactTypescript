import React from "react";
import { Column } from "react-table";
import Table from "./Table";
import {PubOverview} from "../types/types"

export const Home = () => {
    const columns: Column<PubOverview>[] = React.useMemo(() => [
        {
            Header: "Namn",
            accessor: "name"
        },
        {
            Header: "Folk",
            accessor: "people"
        },
        {
            Header: "Atmosfär",
            accessor: "enviroment"
        },
        {
            Header: "Mat",
            accessor: "food"
        },
        {
            Header: "Öl",
            accessor: "beer"
        }
    ],[])

    return <Table columns={columns} />
}