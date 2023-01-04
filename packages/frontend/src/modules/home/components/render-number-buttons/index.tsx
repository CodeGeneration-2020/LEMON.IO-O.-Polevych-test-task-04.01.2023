import React from 'react';

import NumberButton from '../number-button';
import {
  IActionButton,
  IButton,
  ISelectedButtons,
} from '../../../common/types';
import { checkIsActive } from '../../../common/helpers';

import { Box } from '../../../common/components/index.styled';

interface IProps {
  setActive: React.Dispatch<React.SetStateAction<ISelectedButtons | null>>;
  numbers: IButton[];
  actionsBtns: IActionButton[];
  actionsBtnsHover: ISelectedButtons | null;
  activeBtn: ISelectedButtons | null;
  setActiveBtnHover: React.Dispatch<
    React.SetStateAction<ISelectedButtons | null>
  >;
}

const RenderNumberButtons = ({
  setActive,
  numbers,
  actionsBtns,
  activeBtn,
  actionsBtnsHover,
  setActiveBtnHover,
}: IProps) => {
  const onClickHandler = (value: number | IButton[], color: string) => {
    setActive({ value, color });
  };

  const onMouseEnter = (value: number | IButton[], color: string) => {
    if (!activeBtn) {
      setActiveBtnHover({ value, color });
    }
  };
  const onMouseLeave = () => {
    setActiveBtnHover(null);
  };

  return (
    <Box>
      <NumberButton
        onClickHandler={() => {}}
        onMouseLeave={() => {}}
        onMouseEnter={() => {}}
        color="green"
        value={0}
        height="100%"
        isActive
      />
      <Box align="center" width="700px">
        <Box justify="space-between" width="550px">
          {numbers.map((number, i) => {
            const isActive = checkIsActive(number, activeBtn, actionsBtnsHover);
            return (
              <NumberButton
                isActive={isActive}
                key={i}
                onMouseEnter={() => onMouseEnter(number.value, number.color)}
                onClickHandler={() =>
                  onClickHandler(number.value, number.color)
                }
                onMouseLeave={() => onMouseLeave()}
                {...number}
              />
            );
          })}
        </Box>

        <Box changeDirection={true}>
          {actionsBtns.map((el, i) => {
            return (
              <NumberButton
                isActive
                key={i}
                onMouseEnter={() => onMouseEnter(el.res, el.color)}
                onClickHandler={() => onClickHandler(el.res, el.color)}
                onMouseLeave={() => onMouseLeave()}
                {...el}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default RenderNumberButtons;
