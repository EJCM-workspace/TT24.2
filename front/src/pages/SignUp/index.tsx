import { SignUpView } from "./style";
import ZoeTropeLogo from '../../assets/ZoeTropeLogo.svg';
import { InputboxTitle, ZoeTropeLogoView } from "../../components/inputBox/style";

type InputBoxInfo = {
    title: string;
    isVisible: boolean;
    password?: boolean;
}

export default function SignUp(InputBoxInfo: InputBoxInfo) {
    return (
        <SignUpView>
            <ZoeTropeLogoView>
                <ZoeTropeLogo/>
            </ZoeTropeLogoView>
            <InputboxTitle>Título</InputboxTitle>
        </SignUpView>
    );
}