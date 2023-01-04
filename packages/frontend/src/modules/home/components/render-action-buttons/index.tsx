import React from 'react';

import { IActionButton, ISelectedButtons } from '../../../common/types';

import { Box } from '../../../common/components/index.styled';
import { StyledActionButton } from './index.styled';

interface IProps {
  setActive: React.Dispatch<React.SetStateAction<ISelectedButtons | null>>;
  setActiveBtnHover: React.Dispatch<
    React.SetStateAction<ISelectedButtons | null>
  >;
  fromToSSectionsArr: IActionButton[];
  fromToSectionsArr: IActionButton[];
  activeBtn: ISelectedButtons | null;
}

const RenderActionsButtons = ({
  setActive,
  fromToSectionsArr,
  fromToSSectionsArr,
  activeBtn,
  setActiveBtnHover,
}: IProps) => {
  const onClickHandler = (el: IActionButton) => {
    setActive({ value: el.res, color: el.color });
  };
  const onMouseEnter = (el: IActionButton) => {
    if (!activeBtn) {
      setActiveBtnHover({ value: el.res, color: el.color });
    }
  };
  const onMouseLeave = () => {
    setActiveBtnHover(null);
  };
  return (
    <Box
      justify="center"
      changeDirection={true}
      width="750px"
      margin="10px 0 0 76px">
      <Box>
        {fromToSectionsArr.map((el, index) => {
          return (
            <StyledActionButton
              key={index}
              width="185px"
              {...el}
              onMouseEnter={() => onMouseEnter(el)}
              onClick={() => onClickHandler(el)}
              onMouseLeave={onMouseLeave}>
              {el.value}
            </StyledActionButton>
          );
        })}
      </Box>
      <Box>
        {fromToSSectionsArr.map((el, i) => {
          return (
            <StyledActionButton
              key={i}
              onClick={() => onClickHandler(el)}
              onMouseEnter={() => onMouseEnter(el)}
              onMouseLeave={onMouseLeave}
              width="90px"
              {...el}>
              {el.value}
            </StyledActionButton>
          );
        })}
      </Box>
    </Box>
  );
};
export default RenderActionsButtons;
