import React, { useEffect, useMemo, useState } from 'react';

import RenderActionsButtons from './components/render-action-buttons';
import RenderNumberButtons from './components/render-number-buttons';
import { generateBTNS, getData, returnMessage } from '../common/helpers';
import { IButton, ISelectedButtons } from '../common/types';

import { Box } from '../common/components/index.styled';
import { StyledButtonText } from './index.styled';

const HomePageContainer = () => {
  const [activeBtn, setActiveBtn] = useState<null | ISelectedButtons>(null);

  const [activeBtnHover, setActiveBtnHover] = useState<null | ISelectedButtons>(
    null,
  );

  const [win, setWin] = useState<null | IButton>(null);
  const [data, setData] = useState<null | IButton[]>(null);

  const constBtns = useMemo(() => {
    if (data) return generateBTNS(data);
    return null;
  }, [data]);

  const onChange = async () => {
    if (!!activeBtn || win) {
      const number = await getData('result', () => {}, true);

      data && setWin(data.find((el) => el.value === number) || null);

      setTimeout(function run() {
        setWin(null);
        setActiveBtn(null);
      }, 4000);
    }
  };

  useEffect(() => {
    getData('', setData);
  }, []);

  if (!data || !constBtns) {
    return <Box justify="center">Loading...</Box>;
  }

  return (
    <Box justify="center">
      <StyledButtonText onClick={onChange} disabled={!!win}>
        <h1>
          {(win?.value ?? 'Select your bet') + ' '}
          {returnMessage(win, activeBtn)}
        </h1>
      </StyledButtonText>
      <Box justify="center">
        <RenderNumberButtons
          setActiveBtnHover={setActiveBtnHover}
          actionsBtns={constBtns.ACTIONS_BTNS}
          numbers={data}
          setActive={setActiveBtn}
          activeBtn={activeBtn}
          actionsBtnsHover={activeBtnHover}
        />
        <RenderActionsButtons
          fromToSectionsArr={constBtns.FROM_TO_SECTIONS}
          fromToSSectionsArr={constBtns.FROM_TO_S_SECTIONS}
          setActive={setActiveBtn}
          setActiveBtnHover={setActiveBtnHover}
          activeBtn={activeBtn}
        />
      </Box>
    </Box>
  );
};

export default HomePageContainer;
