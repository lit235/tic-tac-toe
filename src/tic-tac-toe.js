class TicTacToe {
    constructor() {
        this.place = [[null, null, null],
            [null, null, null],
            [null, null, null]];
        this.step = 1;
    }
    getCurrentPlayerSymbol() {
        return this.step%2==0 ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex,columnIndex)==null){
            this.place[rowIndex][columnIndex]=this.getCurrentPlayerSymbol();
            this.step++;
        }
    }

    isFinished() {
        if (this.noMoreTurns()==true || this.getWinner()){
            return true;
        }
        return false;
    }

    getWinner() {
        for(var i=0;i<3;++i) {
            if (this.place[i][0] == this.place[i][1] && this.place[i][0] == this.place[i][2] && this.place[i][0] != null) {
                return this.place[i][0];
            }
            if (this.place[0][i] == this.place[1][i] && this.place[0][i] == this.place[2][i] && this.place[0][i] != null) {
                return this.place[0][i];
            }
        }
        if (this.place[0][0] == this.place[1][1] && this.place[0][0] == this.place[2][2] && this.place[0][0] != null){
            return this.place[1][1];
        }
        if (this.place[0][2] == this.place[1][1] && this.place[0][2] == this.place[2][0] && this.place[0][2] != null) {
            return this.place[0][2];
        }
        return null;
    }

    noMoreTurns() {
        return this.step <=9 ? false: true;
    }

    isDraw() {
        if (this.noMoreTurns() == true && !this.getWinner()){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.place[rowIndex][colIndex];
    }
 }

module.exports = TicTacToe;
