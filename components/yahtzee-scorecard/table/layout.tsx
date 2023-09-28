import { Cell, Row, Table, TableBody } from "react-aria-components";
import { YAHTZEE_LOWER_ROWS, YAHTZEE_UPPER_ROWS, calculateGrandTotal, calculateTotal } from "@/scorecards/yahtzee";
import { YahtzeeTableHeader, YahtzeeTablePlayers, YahtzeeTableScores, YahtzeeTableTitleRow, YahtzeeTableTotal } from ".";

interface YahtzeeTableLayoutProps {
    playersCount: number
    state: any
    handlePlayerChange: (index: number, value: string) => void
    handleScoreChange: (rowIndex: number, colIndex: number, value: string, scoresType: string) => void
    showTotal: boolean
}

export default function YahtzeeTableLayout({ playersCount, state, handlePlayerChange, handleScoreChange, showTotal }: YahtzeeTableLayoutProps) {
    return (<Table className="self-center table-auto " aria-label="Yahtzee Scores Board">
        <YahtzeeTableHeader columns={playersCount} />
        <TableBody className="text-center text-primary-gray">
            <YahtzeeTablePlayers playerNames={state.playerNames} onChange={handlePlayerChange} />
            <YahtzeeTableScores
                rows={YAHTZEE_UPPER_ROWS}
                scores={state.upperScores}
                onChange={(e, rowIndex, colIndex) =>
                    handleScoreChange(rowIndex, colIndex, e.target.value, 'upperScores')
                }
            />
            <YahtzeeTableTotal columns={playersCount} calculator={calculateTotal} scores={state.upperScores} />
            <YahtzeeTableTitleRow />
            <YahtzeeTableScores
                rows={YAHTZEE_LOWER_ROWS}
                scores={state.lowerScores}
                onChange={(e, rowIndex, colIndex) =>
                    handleScoreChange(rowIndex, colIndex, e.target.value, 'lowerScores')
                }
            />
            <YahtzeeTableTotal columns={playersCount} calculator={calculateTotal} scores={state.lowerScores} />
            {showTotal &&
                <Row className="border-b border-primary-gray">
                    <Cell>
                        <span>Grand Total</span>
                    </Cell>
                    {Array.from({ length: playersCount }).map((_, colIndex) => (
                        <Cell className="border-l border-primary-gray" key={colIndex}>
                            {calculateGrandTotal(colIndex, state.upperScores, state.lowerScores) || ''}
                        </Cell>
                    ))}
                </Row>
            }
        </TableBody>
    </Table>
    )
}