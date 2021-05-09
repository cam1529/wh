import React from 'react';
import { View, Text } from 'react-native';
import styles from './Formatting';
import Conversion from './Conversion';

const Card = (props) => {
    let owner = props.owner;
    let rank = props.text.slice(0, props.text.length-1);
    let suit = props.text[props.text.length-1];

    return (
        <View style = {[styles.card, getCardColour(owner)]}>
        { <Text style = {[styles.card_font, getFontColour(Conversion.stoi(suit))]}>{rank}{"\n"}{suit}</Text> }
        </View>
    )
}

/** Style helper functions */
function getCardColour(owner)
{
    if(owner==1){ return styles.clr_p1; }
    else if(owner==2){ return styles.clr_p2; }
    else if(owner==3){ return styles.clr_pool; }
    else { return styles.clr_def; }
}
function getFontColour(suit)
{
    if(suit==1||suit==2){ return styles.fontclr_red; }
    else { return styles.fontclr_black; }
}

export default Card;