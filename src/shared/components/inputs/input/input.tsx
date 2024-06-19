import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, TitleInput } from './input.styles';

//Fazendo assim, consigo passar para meu input personalizado todos os atributos que um input tem, como value, name, onChange e etc
interface InputProps extends InputPropsAntd {
  title?: string;
  margin?: string;
}

const Input = ({ title, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
