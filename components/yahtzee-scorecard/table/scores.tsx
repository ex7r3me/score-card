import { Cell, Row } from "react-aria-components";

import TableInput from "@/components/table-input/table-input";

interface YahtzeeTableScoresProps {
    rows: string[]
    scores: number[][]
    onChange: (e: any,rowIndex: any, colIndex: any)=> any
}

export default function YahtzeeTableScores({ rows, scores, onChange }: YahtzeeTableScoresProps) {
    return (
        <>
            {scores.map((row, rowIndex) => (
                <Row className="border-b border-primary-gray" key={rowIndex}>
                    <Cell className='' ><span>{rows[rowIndex]}</span></Cell>
                    {row.map((score, colIndex) => (
                        <Cell className="border-l border-primary-gray" key={colIndex}>
                            <TableInput
                                value={score}
                                onChange={(e)=>onChange(e,rowIndex, colIndex)}
                            />
                        </Cell>
                    ))}
                </Row>
            ))}
        </>
    )
}