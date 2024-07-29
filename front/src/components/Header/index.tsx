import { Container, LogoZoetrope, Profile, SearchIcon } from "./style";
import ProfileIMG from '../../assets/Chat/ProfilePic.svg';
import LogoIMG from '../../assets/Chat/Logo.svg';
import SearchIMG from '../../assets/Chat/SearchIcon.svg'
export default function Header(){
    return(
        <Container>
            <ProfileIMG/>
            <LogoIMG/>
            <SearchIMG/>
        </Container>
    )
}