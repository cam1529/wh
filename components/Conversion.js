class Conversion {

    /** Finds the index (strength) of the given suit/rank. Note range of ranks: 2->A. */
    static rtoi(ranking) { return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].indexOf(ranking); }
    static stoi(suit) { return ["♣", "♦", "♥", "♠"].indexOf(suit); }

    /** Converts an index to the appropriate character. */
    static rtoc(rank_index) { return ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"][rank_index]; }
    static stoc(suit_index) { return ["♣", "♦", "♥", "♠"][suit_index]; }
    static itoc(index) { 
        let rank=index%13; 
        let suit=Math.floor(index/13);
        return Conversion.rtoc(rank)+" "+Conversion.stoc(suit);
    }

    /** Adjusts an index (or array of indices) such that A is the highest rank. */
    static itoa(index) { 
        if(typeof index == "number") { // singular index
            if(index % 13 == 0) return index+12;
            return index-1;
        }
        else { // array of indices
            let a_indices = [];
            for (var i=0; i<index.length; ++i) a_indices[i] = Conversion.itoa(index[i]);
            return a_indices;
        }
    }

    /** Reverts an adjusted index (or array of indices) to its original value(s). */
    static atoi(a_index) {
        if(typeof a_index == "number") { // singular index
            if(a_index % 13 == 12) return a_index-12;
            return a_index+1;
        }
        else { // array of indices
            let indices = [];
            for (var i=0; i<a_index.length; ++i) indices[i] = Conversion.atoi(a_index[i]);
            return indices;
        }
    }

    /** Converts index to the appropriate instruction string. */
    static getInstruction(index) {
        if (index == -1)    return "Press 'Evaluate' to find the winning hand!";
        else if (index < 2) return "Choose 2 cards for Player 1.";
        else if(index < 4)  return "Choose 2 cards for Player 2.";
        else if(index < 9)  return "Choose 5 cards for the Pool."; 
    }
    
    /** Converts a card to its owner's index. */
    static getOwner(selected_cards, card) {
        let owner = selected_cards.indexOf(card);
        if(owner >= 0 && owner < 2)      return 1; // owned by player 1
        else if(owner >= 2 && owner < 4) return 2; // owned by player 2
        else if(owner >= 4 && owner < 9) return 3; // owned by the pool
        else                             return 0; // not in selected cards -> no owner
    }
    
    /** Returns next valid background index. */
    static getNextBackground(index) {
        if(index==4) return 1; // warp
        return index+1;
    }
}

export default Conversion;