import { Column, TableHeader } from "react-aria-components";

interface YahtzeeTableHeaderProps {
    columns: number;
}
export default function YahtzeeTableHeader({ columns }: YahtzeeTableHeaderProps) {
    return (<TableHeader className='hidden'>
        <Column isRowHeader>Players</Column>
        {Array.from(Array(columns).keys()).map(c => (
            <Column key={'header' + c}>Name</Column>
        ))}
    </TableHeader>)
}