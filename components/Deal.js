import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Formatting';
import Conversion from './Conversion';
import Card from './Card';
import Poker from './Poker';

const Deal = (props) => {
    let cards = props.finalCards; 
    let [winner, setWinner] = useState([]);
    
    const evaluate = () => { setWinner(getWinner(cards)); }

    if(cards.indexOf(null) == -1) { // Show this section if all 9 cards are selected
        return (
            <View style = {styles.page}> {
                <TouchableOpacity onPress={() => evaluate()}>
                    <Text style={styles.font_h2}>Evaluate</Text>  
                </TouchableOpacity>
            }
            {
                <View style = {styles.card_space}> { 
                    winner.map((item) => { return ( 
                    <Card text = {Conversion.itoc(item)} owner = {0}/> 
                    )})
                } </View>     
            } </View> 
        )
    }
    else { return (<View/>) } // Do NOT show this section if there are not enough cards selected
}

function getWinner(cards)
{
    const deal = new Poker(cards);
    return deal.strongestHand();
}

export default Deal;