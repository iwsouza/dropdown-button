import * as S from './styles';
import GlobalStyles from './styles/global';
import { CodeFormatting } from './components/code-formatting';
import { steps } from './mapped';
import { GithubLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import { DropdownButton } from './components/dropdown-button';
const App: React.FC = () => {
  const list = [
    {
      id: 0,
      name: 'Item 1',
      handle: () => alert('Você clicou no item 1'),
    },
    {
      id: 1,
      name: 'Item 2',
      handle: () => alert('Você clicou no item 2'),
    },
    {
      id: 2,
      name: 'Item 3',
      handle: () => alert('Você clicou no item 3'),
    },
  ];
  const accordionList = [
    {
      id: 0,
      name: 'Item 1',
      handle: () => alert('Você clicou no item 1'),
    },
    {
      id: 1,
      name: 'Item 2',
      subItems: [
        {
          id: 0,
          name: 'Accordion item 1',
          handle: () => alert('Você clicou no accordion item 2'),
        },
        {
          id: 1,
          name: 'Accordion item 2',
          handle: () => alert('Você clicou no accordion item 2'),
        },
      ],
    },
    {
      id: 2,
      name: 'Item 3',
      handle: () => alert('Você clicou no item 3'),
    },
  ];
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <h1>Dropdown Button Up and Down | Wesley Souza</h1>

          <S.Align minorMargin>
            <a href="https://github.com/iwsouza">
              <GithubLogo />
            </a>
            <a href="https://instagram.com/iwsouza">
              <InstagramLogo />
            </a>
            <a href="https://www.youtube.com/@iwsouzaa">
              <YoutubeLogo />
            </a>
          </S.Align>

          <S.Align minorMargin minorPadding>
            <div>
              <span>Abre para cima (light)</span>
              <DropdownButton
                name="Ações"
                variant="up"
                theme="light"
                items={list}
              />
            </div>
            <div>
              <span>Abre para baixo (light)</span>
              <DropdownButton
                name="Ações"
                variant="down"
                theme="light"
                items={list}
              />
            </div>
            <div>
              <span>Abre para cima c/accordion (dark)</span>
              <DropdownButton
                name="Ações"
                variant="up"
                theme="dark"
                items={accordionList}
              />
            </div>
            <div>
              <span>Abre para baixo c/accordion (dark)</span>
              <DropdownButton
                name="Ações"
                variant="down"
                theme="dark"
                items={accordionList}
              />
            </div>
          </S.Align>
          {steps.map((item) => {
            return (
              <CodeFormatting
                key={item.description}
                description={item.description}
                codeString={item.codeString}
              />
            );
          })}
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default App;
