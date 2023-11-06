/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let column = new Set(),
        row = new Set(),
        box = new Set()
    let currentRowValue, currentColumnValue, currentBox

    for(let i = 0; i<board.length; i++) {

        // Clear the sets
        row.clear(), column.clear(), box.clear();

        for(let j = 0; j < board[i].length; j++) {
            currentRowValue = board[i][j]
            currentColumnValue = board[j][i]
            currentBox= board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
            if(currentRowValue != '.') {
                if (row.has(currentRowValue)) {
                    return false;
                }
                row.add(currentRowValue);
            }

            if(currentColumnValue != '.') {
                if (column.has(currentColumnValue)) {
                    return false;
                } 
                column.add(currentColumnValue);
                    
            }

            if (currentBox != '.') {
                if (box.has(currentBox)) {
                    return false;
                }
                box.add(currentBox);
            } 
        }
    }
            return true

};