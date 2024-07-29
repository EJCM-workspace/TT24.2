import React from "react";
import { Container, Icon, Input } from "./style";
import SearchIMG from '../../assets/Chat/SearchIcon.svg';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({ value, setValue }: Props) => {
  return (
    <Container>
      <Input
        placeholder="Buscar conversas"
        value={value}
        onChange={(event:any) => {
          setValue(event.target.value);
        }}
      />
      <SearchIMG/>
    </Container>
  );
};