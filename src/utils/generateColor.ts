import randomInt from './randomInt';
import { colors } from '../constants';

const generateColor = (): string => colors[randomInt(colors.length)];

export default generateColor;