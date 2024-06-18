import { Input as InputAntd, InputProps as InputPropsAntd } from "antd";

import { BoxInput, TitleInput } from "./input.styles";

//Fazendo assim, consigo passar para meu input personalizado todos os atributos que um input tem, como value, name, onChange e etc
interface InputProps extends InputPropsAntd{
    title?: string;
}

const Input = ({ title, ...props }: InputProps) => {

    return (
        <BoxInput>
            {title && <TitleInput>{title}</TitleInput>}            
            <InputAntd {...props} />
        </BoxInput>        
    );

};

export default Input;