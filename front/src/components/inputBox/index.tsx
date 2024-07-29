import { useState } from "react";
import { InputboxInput, InputboxPasswordIcon, InputboxTitle, InputboxView } from "./style";


import Visible from '../../assets/SignUp/visible.svg';
import NotVisible from '../../assets/SignUp/notVisible.svg';

type InputBoxInfo = {
    title: string;
    placeholder?: string
    variation: string;
}

export default function InputBox(BoxInfo: InputBoxInfo) {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <InputboxView>
            <InputboxTitle>{BoxInfo.title}</InputboxTitle>
            <InputboxInput placeholder={BoxInfo.placeholder}/>

            {
                BoxInfo.variation === 'password' &&
                <InputboxPasswordIcon onPress={()=> isVisible? setIsVisible(false):setIsVisible(true)}>
                {
                    isVisible?
                    <Visible style={{width: '100%', height: '100%'}}/>
                    :
                    <NotVisible style={{width: '100%', height: '100%'}}/>
                }
                </InputboxPasswordIcon>
            }
        </InputboxView>
    );
}