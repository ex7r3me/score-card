import { Cell, Row } from "react-aria-components";

import TableInput from "@/components/table-input/table-input";

interface YahtzeeTablePlayersProps {
    playerNames: string[];
    onChange: (index: number, value: string) => void
}
export default function YahtzeeTablePlayers({ playerNames, onChange }: YahtzeeTablePlayersProps) {
    return ( 
    <Row className="text-center border-b border-primary-gray" >
        <Cell className="font-bold" >Upper</Cell>
        <Cell className="border-l border-primary-gray">
            <TableInput
                value={playerNames[0]}
                onChange={(e) => onChange(0, e.target.value)}
            /></Cell>
        <Cell className="border-l border-primary-gray">
            <TableInput
                value={playerNames[1]}
                onChange={(e) => onChange(1, e.target.value)}
            /></Cell>
        <Cell className="border-l border-primary-gray">
            <TableInput
                value={playerNames[2]}
                onChange={(e) => onChange(2, e.target.value)}
            /></Cell>
        <Cell className="border-l border-primary-gray">
            <TableInput
                value={playerNames[3]}
                onChange={(e) => onChange(3, e.target.value)}
            /></Cell>
    </Row>
    )
}