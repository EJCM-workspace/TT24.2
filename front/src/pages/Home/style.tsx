import styled from "styled-components/native";

interface photoProps {
    profile?: boolean;
}

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: "center",
    },})`
    flex: 1;
    background-color: #eeeeee;
`;

export const Header = styled.View`
    width: 100%;
    height: 150px;
    background-color: white;
    padding: 2%;
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderPhoto = styled.Image<photoProps>`
    width: 100px;
    height: 100px;
    border-radius: ${(props: photoProps) => (props.profile ? "100%" : "0px")};
`;
