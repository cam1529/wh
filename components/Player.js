class Player {
    
    constructor(arr) {
        let cards=[];
        for(var i=0; i<52; ++i) {
            if(arr.indexOf(i)==-1) cards[i]=false;
            else cards[i]=true;
        }
        this.cards = cards;
    }

    /** Finds this player's strongest hand. */
    getStrong() {
        let [quad, sets, pairs, singles] = this.getMatches();
        let level2 = this.getStraightFlush();
        let level5 = this.getFlush();
        let level6 = this.getStraight();

        if(level2.length >= 5)      return [2].concat(level2);      //Royal Flush / Straight Flush
        else if(quad.length >= 1 )  return [3].concat(...quad[0]);  //4 of a kind
        else if(sets.length == 2 )  return [4, ...sets[0], ...sets[1]]; // Full House
        else if(sets.length == 1 && pairs.length == 1) return [4, ...sets[0], ...pairs[0]];
        else if(level5.length >= 5) return [5, ...level5];          // Flush
        else if(level6.length >= 5) return [6, ...level6];          // Straight
        else if(sets.length == 1 )  return [7, ...sets[0]];         // 3 of a kind
        else if(pairs.length == 2 ) return [8, ...pairs[0], ...pairs[1]]; // 2-pair
        else if(pairs.length == 1)  return [9, ...pairs[0]];        // 1-pair
        else                        return [10, ...singles[0]];     // High-card
    }

    /** Identifies all quads, sets, pairs and singles. */
    getMatches() {
        let quad = [];
        let sets = [];
        let pairs = [];
        let singles = [];
        for(var val=12; val>=0; --val) {
            let matches = [];
            for(var suit=0; suit<4; ++suit) {
                let index = (13*suit) + val;
                if(this.cards[index]) matches.push(index);
            }
            if(matches.length==4) quad.push(matches);
            else if(matches.length==3) sets.push(matches);
            else if(matches.length==2) pairs.push(matches);
            else if(matches.length==1) singles.push(matches);
        }
        return [[...quad], [...sets], [...pairs], [...singles]];
    }

    /** Identifies a royal or straight flush set. */
    getStraightFlush() { // NOTE: DOES NOT SUPPORT BABY FLUSH (A->5)
        let cards = this.cards;
        for(var val=8; val>=0; --val) {
            for(var suit=0; suit<4; ++suit) {
                let index = (13*suit) + val;
                if(cards[index] && cards[index+1] && cards[index+2] && cards[index+3] && cards[index+4]) {
                    return [index, index+1, index+2, index+3, index+4]; 
                }
            }
        }
        return [];
    }

    /** Identifies a flush set. */
    getFlush() {
        for(var suit=0; suit<4; ++suit) {
            let suit_cards=[];
            for(var val=12; val>=0; --val) {
                let index = (13*suit) + val;
                if(this.cards[index]) suit_cards.push(index);
            }
            if(suit_cards.length>=5) return suit_cards;
        }
        return [];
    }

    /** Identifies a straight set. */
    getStraight() {
        let streak = [];
        for(var val=12; val>=0; --val) {
            let current_val = -1;
            for(var suit=0; suit<4; ++suit) {
                let index = (13*suit) + val;
                if(this.cards[index] && current_val==-1) current_val=index;
            }
            if(current_val == -1) streak=[];
            else streak.push(current_val);
            if(streak.length>=5) return streak;
        }
        return [];
    }
}

export default Player;