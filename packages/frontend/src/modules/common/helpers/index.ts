import { COLORS } from '../../theme';
import { randomDataService } from '../services/random-data.service';
import { IButton, ISelectedButtons } from '../types';

export const generateBTNS = (NUMBERS: IButton[]) => {
  const SORTED_NUMBERS = [...NUMBERS].sort((a, b) => a.value - b.value);

  const ACTIONS_BTNS = [
    { value: '2:1', color: COLORS.black, res: NUMBERS.slice(0, 12) },
    { value: '2:1', color: COLORS.black, res: NUMBERS.slice(12, 24) },
    { value: '2:1', color: COLORS.black, res: NUMBERS.slice(24) },
  ];

  const FROM_TO_SECTIONS = [
    {
      value: '1 to 12',
      color: COLORS.black,
      res: SORTED_NUMBERS.slice(0, 12),
    },
    {
      value: '13 to 24',
      color: COLORS.black,
      res: SORTED_NUMBERS.slice(12, 24),
    },
    {
      value: '25 to 36',
      color: COLORS.black,
      res: SORTED_NUMBERS.slice(24),
    },
  ];

  const FROM_TO_S_SECTIONS = [
    {
      value: '1 to 18',
      color: COLORS.black,
      res: SORTED_NUMBERS.slice(0, 18),
    },
    {
      value: 'EVEN',
      color: COLORS.black,
      res: SORTED_NUMBERS.filter((el) => el.value % 2 === 0),
    },
    {
      value: '',
      color: COLORS.blue,
      res: SORTED_NUMBERS.filter((el) => el.color === COLORS.blue),
    },
    {
      value: '',
      color: COLORS.pink,
      res: SORTED_NUMBERS.filter((el) => el.color === COLORS.pink),
    },
    {
      value: 'ODD',
      color: COLORS.black,
      res: SORTED_NUMBERS.filter((el) => el.value % 2 !== 0),
    },
    {
      value: '19 to 36',
      color: COLORS.black,
      res: SORTED_NUMBERS.slice(18),
    },
  ];

  return { ACTIONS_BTNS, FROM_TO_SECTIONS, FROM_TO_S_SECTIONS, SORTED_NUMBERS };
};

export const checkIsActive = (
  buttonNumber: IButton,
  activeBtn: ISelectedButtons | null,
  actionsBtnsHover: ISelectedButtons | null,
) => {
  if (!activeBtn) {
    if (actionsBtnsHover) {
      if (typeof actionsBtnsHover?.value === 'number') {
        return actionsBtnsHover?.value === buttonNumber.value;
      }
      return actionsBtnsHover.value.some(
        (el) => el.value === buttonNumber.value,
      );
    }
    return true;
  }
  if (typeof activeBtn?.value === 'number') {
    return activeBtn?.value === buttonNumber.value;
  }
  return activeBtn.value.some((el) => el.value === buttonNumber.value);
};

export const returnMessage = (
  win: IButton | null,
  activeBtn: ISelectedButtons | null,
) => {
  if (win && activeBtn) {
    if (Number.isInteger(activeBtn.value)) {
      return win.value === activeBtn.value ? 'You win' : 'You loose';
    }

    if (Array.isArray(activeBtn.value)) {
      if (activeBtn.value[0].value) {
        const isFindnumber = activeBtn.value.some(
          (el) => el.value === win.value,
        );

        return isFindnumber ? 'You win' : 'You loose';
      }
    }
  }
};

export const getData = async (
  atr: string = '',
  fn?: (data: IButton[]) => void,
  isReturn?: boolean,
) => {
  const data = await randomDataService.getRandomArr(atr);
  fn && Array.isArray(data) && fn(data);

  if (isReturn) {
    return data;
  }
};
