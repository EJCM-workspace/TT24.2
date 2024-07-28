import { HeaderPhoto } from "../../pages/Home/style";
import styled from "styled-components/native";

interface PostProps {
    date?: boolean;
}

export const Container = styled.View`
    width: 90%;
    padding: 30px 0px;
    display: flex;
    justify-content: "center";
    align-items: "center";
    background-color: white;
    gap: 40px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    gap: 10px;
    margin: 0px 10px;
`;

export const UserImage = styled(HeaderPhoto)`
    width: 100px;
    height: 100px;
`;

export const Texts = styled.Text<PostProps>`
    font-size: 35px;
    font-weight: ${(props: PostProps) => (props.date ? "bold" : "none")};
`;

export const Paragrafo = styled.Text`
    font-size: 35px;
    margin: 0px 10px;
`;

export const PhotoPost = styled.Image`
    width: 100%;
    height: 400px;
`;

export const Reactions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 50px;
`;

export const ImagesReactions = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Duo = styled.TouchableOpacity`
    flex-direction: row;
`;
