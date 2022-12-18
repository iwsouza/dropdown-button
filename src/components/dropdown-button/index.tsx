import { CaretDown, CaretUp } from 'phosphor-react';
import { Fragment, useState } from 'react';

import { SubItems } from './components/sub-items';
import * as S from './styles';

export type Props = {
  name: string;
  variant: 'up' | 'down';
  theme?: 'light' | 'dark';
  items: {
    id: string | number;
    name: string;
    handle?: () => void;
    subItems?: {
      id: string | number;
      name: string;
      handle: () => void;
    }[];
  }[];
};
/**
 * Botão Dropdown
 * @param name string
 * @param variant 'up' | 'bottom'
 * @param theme 'light' | 'dark';
 * @param items Array Objet {id: string; name: string; handle: () => void; subItems: items[]}
 */
export const DropdownButton: React.FC<Props> = ({
  name,
  variant,
  theme,
  items,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((old) => !old);
  };
  return (
    <S.Wrapper
      variant={variant}
      themeColor={theme ? theme : 'dark'}
      isOpen={isOpen}>
      <button onClick={() => toggleOpen()}>
        {name} {variant === 'down' && <CaretDown />}{' '}
        {variant === 'up' && <CaretUp />}
      </button>
      {isOpen && (
        <S.Dropdown variant={variant} themeColor={theme ? theme : 'dark'}>
          {items.map((item) => {
            return (
              <Fragment key={item.id}>
                {item.subItems ? (
                  <SubItems name={item.name} items={item.subItems} />
                ) : (
                  <li>
                    <button onClick={item.handle}>{item.name}</button>
                  </li>
                )}
              </Fragment>
            );
          })}
        </S.Dropdown>
      )}
    </S.Wrapper>
  );
};
