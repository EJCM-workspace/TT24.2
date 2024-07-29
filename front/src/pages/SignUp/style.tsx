import styled from "styled-components/native";
import { globalStyle } from '../../../Global';
import { Animated } from "react-native";


export const SignupView = styled.View `
    height: 100%;
    width: 100%;
    background-color: white;

    align-items: center;
`;

export const ZoeTropeLogoView = styled.View `
    display: flex;
    width: 32%;
    height: 14.778%;

    margin-top: ${globalStyle.vh(4)};

    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: ${globalStyle.colors.cinza};
`;

export const InputboxOptions = styled(Animated.View) `
    
`;