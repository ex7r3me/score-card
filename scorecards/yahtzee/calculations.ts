export const calculateGrandTotal = (colIndex: number, upperScores: number[][], lowerScores: number[][]) => {
    return upperScores.reduce((acc, row) => acc + row[colIndex], 0) + lowerScores.reduce((acc, row) => acc + row[colIndex], 0)
}

export const calculateTotal = (colIndex: number, scores: any[]) => {
    return scores.reduce((acc, row) => acc + row[colIndex], 0);
}