import { Dimensions } from "react-native"

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const globalStyle = {
    colors: {
        verde: '#007C82',
        cinzaClaro: '#EEEEEE',
        cinza: 'rgba(0, 0, 0, 0.45)',
        cinzaEscuro: '#393E46'
    },
    vw: (size: number): string => { return(`${size * width / 100}px`); },
    vh: (size: number): string => { return(`${size * height / 100}px`); }
}