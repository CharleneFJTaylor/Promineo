class TicTacToe {
    constructor(ObjIn){
        this.msgElem = null;
        this.tableElem = null;
        
        this.Data = [
            [null, null,null],
            [null, null,null],
            [null, null,null],
        ];
        this.currPlayer = "X";
        this.gameOver = false;
    }

    reset(){
        for (let r=0; r<this.Data.length; r++){
            for (let c=0; c<this.Data[r].length; c++){
                this.Data[r][c] = null;
            }
        }
        this.updateTable();
        this.msgElem.className = "center";
        this.msgElem.innerText = "Let's start with player 1.";
        this.msgElem.style.display = "block";
        this.currPlayer = "X";
        this.gameOver = false;
        document.getElementById('bnr-end').remove();
    }

    updateTable(){
        let thisCell;
        let strSelect;
        for (let r=0; r<this.Data.length; r++){
            for (let c=0; c<this.Data[r].length; c++){
                strSelect = `table.ttt td[data-row="${r}"][data-col="${c}"]`    
                thisCell = document.querySelector(strSelect);
                if(this.Data[r][c] !== null){
                    thisCell.innerText = this.Data[r][c];
                } else {
                    thisCell.innerHTML = "&nbsp;";
                }
            }        
        }

    }

    setMsgElem(strSelector){
        this.msgElem = document.querySelector(strSelector);
        if(this.msgElem === null ) this.showMsg(`setMsgElem error: Selector "${strSelector}" not found`);           
    }

    setTableElem(strSelector){
        this.tableElem = document.querySelector(strSelector);
        if(this.tableElem === null ) this.showMsg(`setTableElem error: Selector "${strSelector}" not found`);           
    }

    showMsg(strIn){
        console.log(strIn);
    }

    showBanner(strMsg){
        let elemBanner = document.createElement('div');
        elemBanner.className = "alert alert-primary";
        elemBanner.setAttribute("id","bnr-end");
        elemBanner.innerText = strMsg;
    
        let btnReset = document.createElement("button");
        btnReset.setAttribute("type","button");
        btnReset.innerText = "Try again!!!";
        btnReset.className ="btn btn-primary float-end";
        btnReset.addEventListener('click', ()=>{
            Game.reset();
        });

        elemBanner.append( btnReset );
        this.tableElem.before(elemBanner);
    }

    setTurnMsg() {
        if(this.gameOver) {
            return;
        }
        let strMsg = `Player ${this.currPlayer === "X" ? "One":"Two"}, it is your turn.`;
        this.msgElem.innerText = strMsg;
        if (this.currPlayer === "X") {
            this.msgElem.className = "center";
        } else {
            this.msgElem.className = "center";
        }
    }

    isEqual(val1, val2){
        if (val1 === null) return false;
        if (val2 === null) return false;
        if(val1===val2) return true;
        else return false;
    }

    nextPlayer() {
        this.currPlayer = this.currPlayer === "X" ? "O" : "X";
        this.showMsg(`Player ${this.currPlayer === "X" ? "One":"Two"}, it is your turn.`);
        this.setTurnMsg();
    }

    isCat(){
        if( this.Data[0].indexOf(null) === -1 && this.Data[1].indexOf(null) === -1 &&  this.Data[2].indexOf(null) === -1 ) {
            return true;
        } 
        return false;
    }

    isWinner(){
        if (this.isEqual(this.Data[0][0], this.Data[0][1]) && this.isEqual(this.Data[0][0],this.Data[0][2]) ) return true;
        if (this.isEqual(this.Data[1][0], this.Data[1][1]) && this.isEqual(this.Data[1][0],this.Data[1][2]) ) return true;
        if (this.isEqual(this.Data[2][0], this.Data[2][1]) && this.isEqual(this.Data[2][0],this.Data[2][2]) ) return true;
        if (this.isEqual(this.Data[0][0], this.Data[1][0]) && this.isEqual(this.Data[0][0],this.Data[2][0]) ) return true;
        if (this.isEqual(this.Data[0][1], this.Data[1][1]) && this.isEqual(this.Data[0][1],this.Data[2][1]) ) return true;
        if (this.isEqual(this.Data[0][2], this.Data[1][2]) && this.isEqual(this.Data[0][2],this.Data[2][2]) ) return true;
        if (this.isEqual(this.Data[0][0], this.Data[1][1]) && this.isEqual(this.Data[0][0], this.Data[2][2]) ) return true;
        if (this.isEqual(this.Data[2][0], this.Data[1][1]) && this.isEqual(this.Data[2][0], this.Data[0][2]) ) return true;

    }

    doClick(elemIn) {
        if (this.gameOver) return;

        let rowIn = parseInt( elemIn.getAttribute('data-row') );
        let colIn=parseInt( elemIn.getAttribute('data-col'));
        if (this.Data[rowIn][colIn] === null) {
            this.Data[rowIn][colIn] = this.currPlayer;
            this.updateTable();
            if( this.isCat() ) {
                this.gameOver = true;
                this.msgElem.style.display = "none";
                let strMsg = "GThe game is a tie, nobody wins.";
                this.showBanner(strMsg);
                this.showMsg(strMsg);
            } else if( this.isWinner() ) {
                this.gameOver = true;
                this.msgElem.style.display = "none";
                let strMsg = `${this.currPlayer === "X" ? "Player One" : "Player Two"} is the absolute winner!`;
                this.showBanner(strMsg);
                this.showMsg(strMsg);
            } else {
                this.nextPlayer();
            }
        } else {
            this.showMsg(`Square ${rowIn+1},${colIn+1} is already being played.`)
        }
    }        
}

