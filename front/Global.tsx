import { Dimensions } from "react-native"

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const globalStyles = {
    colors: {
        verde: '#007C82',
        cinza: '#EEEEEE',
        cinzaEscuro: '#393E46'
    },
    vw: (size: number): string => { return(`${size * width / 100}px`); },
    vh: (size: number): string => { return(`${size * height / 100}px`); }
}