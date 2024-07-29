import styled from "styled-components/native";
import { globalStyle } from "../../../Global";

export const InputboxView = styled.View `
    display: flex;
    width: 91.466%;
    height: 9.852%;

    justify-content: space-between;
    
    position: relative;
`;

export const InputboxTitle = styled.Text `
    font-weight: 400;
    font-size: ${globalStyle.vw(5.5)};
`;

export const InputboxInput = styled.TextInput.attrs({
    placeholderTextColor: `${globalStyle.colors.cinza}`
}) `
    display: flex;
    width: 100%;
    height: 65%;

    padding: 0 5%;
    
    border: 1px solid black;
    border-radius: ${globalStyle.vw(1.33)};
`;

export const InputboxPasswordIcon = styled.Pressable `
    display: flex;
    width: 10%;
    height: 30%;

    position: absolute;
    right: 3%;
    top: 55%;
`;