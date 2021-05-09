import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Card from './components/Card';
import Deal from './components/Deal';
import styles from './components/Formatting';
import Conversion from './components/Conversion';

export default function App() 
{
    const [background, setBackground] = useState(1);
    const cards = [ "A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣",
                    "A♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦",
                    "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥",
                    "A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠" ] ;
    const [selection, setSelection] = useState([null, null, null, null, null, null, null, null, null]);
    
    const selectCard = (card) => {
        if(selection.indexOf(card) == -1) {
            if(lengthOf(selection)<9) {
                let copy = [...selection];
                let insert_index = nextFreeIndex(selection);
                copy.splice(insert_index, 1, card);
                setSelection([...copy]);
            }
        }
        else unselectCard(card);
    }
    const unselectCard = (card) => {
        let copy = [...selection];
        let rm_index = selection.indexOf(card);
        copy.splice(rm_index, 1, null);
        setSelection([...copy]);
    }
    const changeBackground = () => { setBackground(Conversion.getNextBackground(background)) }

    return (
        <View style={[styles.page, getBackground(background)]}>
        { /* change background */
            <TouchableOpacity onPress={() => changeBackground()}>
                <Text style={styles.fontclr_white}>Change background</Text>
            </TouchableOpacity>
        }
        { /* instruction line */ 
            <View style={styles.instruction_bar}>
                <Text style={styles.font_h2}>{ Conversion.getInstruction(nextFreeIndex(selection) )}</Text>
            </View> 
        }
        { /* cards section */
            <View style={styles.card_space}> {
                cards.map((item, index) => {
                    return (
                        <TouchableOpacity key = {index} onPress={() => selectCard(index)}> {
                            <Card text = {item} owner = {Conversion.getOwner(selection, index)} />
                        }</TouchableOpacity>
                    )
                })
            }
            </View>
        }
        { /* get winner button + winning cards */
            <Deal finalCards = {selection} /> 
        }
        </View>
    );
}

/** Style helper function */
function getBackground(option) {
    if (option==1) return styles.bg1; 
    else if (option==2) return styles.bg2; 
    else if (option==3) return styles.bg3; 
    else return styles.bg4;
}

/** Helper functions for the selected cards array ('selected') */
function nextFreeIndex(arr) { return arr.indexOf(null); }
function lengthOf(arr) {
    let null_count=0;
    for(var i=0; i<9; ++i) {
        if(arr[i]==null) ++null_count;
    }
    return 9-null_count;
}