import { CaretDown } from 'phosphor-react';
import { useState } from 'react';

import * as S from './styles';
export type Props = {
  name: string;
  items: {
    id: string | number;
    name: string;
    handle: () => void;
  }[];
};
/**
 *
 * @param name string
 * @param items Array Object { id: string; name: string; handle: () => void; }
 */
export const SubItems: React.FC<Props> = ({ name, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((old) => !old);
  };
  return (
    <S.Wrapper key={name} isOpen={isOpen}>
      <button onClick={() => toggleOpen()}>
        {name} <CaretDown />
      </button>
      {isOpen && (
        <S.Accordion>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <button onClick={item.handle}>{item.name}</button>
              </li>
            );
          })}
        </S.Accordion>
      )}
    </S.Wrapper>
  );
};
