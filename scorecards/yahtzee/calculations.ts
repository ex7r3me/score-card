export const calculateGrandTotal = (colIndex: number, upperScores: number[][], lowerScores: number[][]) => {
    return upperScores.reduce((acc, row) => acc + row[colIndex], 0) + lowerScores.reduce((acc, row) => acc + row[colIndex], 0)
}

export const calculateTotal = (colIndex: number, scores: any[]) => {
    return scores.reduce((acc, row) => acc + row[colIndex], 0);
}

function calculateColumnSums(matrix: number[][]) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const columnSums = new Array(numCols).fill(0);

    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            columnSums[col] += matrix[row][col];
        }
    }

    return columnSums;
}
export const calculateAllGrandTotal = (state: any) => {
    const { upperScores, lowerScores } = state
    let scores = []
    scores.push(calculateColumnSums(upperScores))
    scores.push(calculateColumnSums(lowerScores))
    const totals = calculateColumnSums(scores)
    return totals
}
