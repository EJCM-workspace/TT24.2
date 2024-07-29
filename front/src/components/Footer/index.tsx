import { Image } from "react-native";
import { Container, Icon } from "./style";

import Home from '../../assets/Chat/mdi-light_home.svg';
import Account from '../../assets/Chat/mdi-light_account.svg';
import Chat from '../../assets/Chat/Icon-chat.svg';
import Bell from '../../assets/Chat/mdi-light_bell.svg';

export default function Footer(){
    return(
        <Container>
         <Home/>
         <Account/>
         <Chat/>
         <Bell/>
        </Container>
    )
}