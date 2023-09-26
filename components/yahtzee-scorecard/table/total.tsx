import { Cell, Row } from "react-aria-components";

interface YahtzeeTableTotalProps {
    columns: number,
    calculator: (colIndex: number, scores: any[]) => number,
    scores: any[]
}

export default function YahtzeeTableTotal({ columns, calculator, scores }: YahtzeeTableTotalProps) {
    return (
        <Row className="border-b border-primary-gray">
            <Cell><span>Total</span></Cell>
            {Array.from({ length: columns }).map((_, colIndex) => (
                <Cell className="border-l border-primary-gray" key={colIndex}>{calculator(colIndex, scores) || ''}</Cell>
            ))}
        </Row>
    )

}