import Conversion from './Conversion';
import Player from './Player';

class Poker {
    
    constructor(deal) {
        let pool=[...deal].splice(4, 5);
        let p1_arr = Conversion.itoa([deal[0],deal[1], ...pool]);
        let p2_arr = Conversion.itoa([deal[2],deal[3], ...pool]);
        this.p1 = new Player(p1_arr); // Custom type
        this.p2 = new Player(p2_arr);
    }

    /** Accessed publicly. Returns the winning hand. */
    strongestHand() {
        let strongest_hand = [...this.getWinner()];
        strongest_hand.splice(0,1);
        return Conversion.atoi(strongest_hand);
    }

    /** Compares the two players' strongest hands. */
    getWinner() {
        let p1_strong = this.p1.getStrong();
        let p2_strong = this.p2.getStrong();
        let p1_rank = p1_strong[0];
        let p2_rank = p2_strong[0];

        if(p1_rank == p2_rank) {
            for(var i=1; i<p1_strong.length; ++i) {
                if((p1_strong[i]%13)>(p2_strong[i]%13)) return p1_strong;
                else if((p2_strong[i]%13)>(p1_strong[i]%13)) return p2_strong;
            }
            return p1_strong; // NOTE: DOES NOT SUPPORT MULTIPLE WINNERS (ie. 10D vs 10H)
        }
        else if(p1_rank < p2_rank) return p1_strong;
        else return p2_strong;
    }
}

export default Poker;