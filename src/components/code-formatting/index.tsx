import * as S from './styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Arrow } from '../svg/arrow';

type Props = {
  description: string;
  codeString: string;
};
export const CodeFormatting: React.FC<Props> = ({
  description,
  codeString,
}: Props) => {
  return (
    <S.Wrapper>
      <div>
        <span>
          <Arrow /> {description}
        </span>
        <SyntaxHighlighter
          language="javascript"
          style={hybrid}
          children={codeString}
          showLineNumbers
        />
      </div>
    </S.Wrapper>
  );
};
