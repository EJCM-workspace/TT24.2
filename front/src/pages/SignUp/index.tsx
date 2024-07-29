import { SignupView, ZoeTropeLogoView } from "./style";
import ZoeTropeLogo from '../../assets/ZoeTropeLogo.svg';
import InputBox from "../../components/inputBox";

export default function SignUp() {
    return (
        <SignupView>
            <ZoeTropeLogoView>
                <ZoeTropeLogo width='83.33%' height='83.33%'/>
            </ZoeTropeLogoView>

            <InputBox title="Nome" variation="normal" placeholder="Insira seu nome"/>
            <InputBox title="Email" variation="normal" placeholder="exemplo@email.com"/>
            <InputBox title="Senha" variation="password" placeholder="Digite a sua senha"/>
            <InputBox title="Repetir Senha" variation="password" placeholder="Repita sua senha"/>
        </SignupView>
    );
}