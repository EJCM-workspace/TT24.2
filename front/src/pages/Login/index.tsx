import { Pressable, Text, TextInput, TouchableOpacity, } from "react-native";
import LogoZoeT from '../../assets/Login/logoZoetrope.svg';
import CloseEye from '../../assets/Login/eyeClose.svg';
import OpenEye from '../../assets/Login/eyeOpen.svg';
import Google from '../../assets/Login/googleIcon.svg';
import Facebook from '../../assets/Login/facebookIcon.svg';
import { useState } from "react";
import { AllSocialMedia, ButtonStyle, Container, ContainerInput, ContainerLogo, EnterWithBar, EnterWithContainer, EnterWithText, ForgotPassword, Inputs, InputStyles, InputTitle, LogoZoe, PasswordEye, RegisterText, RegisterTextContainer, SocialMediaContainer, SocialMediaImage, SocialMediaText, TextButton, TitleZoe } from "./style";

export default function Login() {
    const [passwordSafe, setPasswordSafe] = useState(false);
    const mudarSenha = () => {
        setPasswordSafe(!passwordSafe)
    }
    return (
        <Container>
          {/*Logo e Titulo*/}
          <ContainerLogo>
            <LogoZoe>
              <LogoZoeT/>
              `
            </LogoZoe>
          </ContainerLogo>
          <TitleZoe>Zoetrope</TitleZoe>
    
          {/*Input de E-mail e Senha*/}
          <Inputs>
            <InputTitle>Email</InputTitle>
            <ContainerInput>
              <InputStyles placeholder="Escreva seu E-mail" />
            </ContainerInput>
    
            <InputTitle>Senha</InputTitle>
            <ContainerInput>
              <InputStyles secureTextEntry={passwordSafe} placeholder="Escreva sua Senha" />
              {/*Logica de mudar icone de esconder senha*/}
              {passwordSafe ? (
                <Pressable onPress={mudarSenha}>
                  <OpenEye />
                </Pressable>
              ) : (
                <Pressable onPress={mudarSenha}>
                  <CloseEye/>
                </Pressable>
              )}
            </ContainerInput>
    
            {/*Esqueci a Senha*/}
            <Pressable>
              <ForgotPassword>Esqueci a Senha</ForgotPassword>
            </Pressable>
          </Inputs>
    
          {/*Botao de Entrar*/}
          <ButtonStyle>
            <TextButton>Entrar</TextButton>
          </ButtonStyle>
    
          {/*"Entrar Com"*/}
          <EnterWithContainer>
            <EnterWithBar />
            <EnterWithText>Entre com</EnterWithText>
            <EnterWithBar />
          </EnterWithContainer>
          <AllSocialMedia>
            <SocialMediaContainer>
              <Facebook />
              <SocialMediaText>Facebook</SocialMediaText>
            </SocialMediaContainer>
            <SocialMediaContainer>
              <Google/>
              <SocialMediaText>Google</SocialMediaText>
            </SocialMediaContainer>
          </AllSocialMedia>
    
          <RegisterTextContainer>
            <RegisterText>Não é registrado?</RegisterText>
            <Pressable>
              <RegisterText>Crie uma Conta</RegisterText>
            </Pressable>
          </RegisterTextContainer>
        </Container>
      );
    }