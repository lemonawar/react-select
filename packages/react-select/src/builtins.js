// @flow

import type { GroupType, OptionType } from './types';

export const formatGroupLabel = (group: GroupType): string => group.label;

export const getOptionLabel = (option: OptionType): string => option.label;

export const getOptionValue = (option: OptionType, dupCnt): string => (dupCnt && dupCnt >= 1) ? `${option.value}${dupCnt}` : option.value;

export const isOptionDisabled = (option: OptionType): boolean =>
  !!option.isDisabled;
