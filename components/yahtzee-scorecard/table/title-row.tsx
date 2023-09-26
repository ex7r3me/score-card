import { Cell, Row } from "react-aria-components";

export default function YahtzeeTableTitleRow() {
    return (<Row className="font-bold border-b border-primary-gray">
        <Cell><span>Lower</span></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
    </Row>)
}