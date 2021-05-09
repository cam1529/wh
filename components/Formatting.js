import { StyleSheet } from 'react-native';
import background1 from "../assets/img/Picture1.jpg";
import background2 from "../assets/img/Picture2.jpg";
import background3 from "../assets/img/Picture3.jpg";
import background4 from "../assets/img/Picture4.jpg";

const styles = StyleSheet.create
({
    /* ELEMENT STYLES */
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    instruction_bar: {
        backgroundColor: '#000066',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 40,
        marginBottom: 30
    },

    card_space: {
        alignItems: 'center',
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingBottom: 30,
    },

    card: {
        minHeight: 100,  
        minWidth: 60,
        borderRadius: 10,  
        borderColor: '#000066',
        borderWidth: 3,
        marginHorizontal: 8,  
        marginVertical: 8,
        justifyContent: 'center',  
        alignItems: 'center',
    },

    /* FONT STYLES */
    font_h2: {
        fontFamily: 'Tahoma',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#FFFFFF',
    },

    card_font: {
        fontFamily: 'MS Gothic',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    /* PREFERENCES */
    bg1: { backgroundImage: `url(${background1})` },
    bg2: { backgroundImage: `url(${background2})` },
    bg3: { backgroundImage: `url(${background3})` },
    bg4: { backgroundImage: `url(${background4})` },

    fontclr_red: { color: '#F11553' },
    fontclr_black: { color: '#000066' },
    fontclr_white: { color: '#FFFFFF' },

    clr_p1: { backgroundColor: '#FF99FF' }, // light pink
    clr_p2: { backgroundColor: '#99CCFF' }, // light blue
    clr_pool: { backgroundColor: '#FFFF99' }, // light yellow
    clr_def: { backgroundColor: '#FFFFFF' }, // white
});

export default styles;