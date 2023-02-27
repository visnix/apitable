/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const NotificationOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M7.25008 2.30999V1.75C7.25008 1.33579 7.58587 1 8.00008 1C8.41429 1 8.75008 1.33579 8.75008 1.75V2.31006C10.9029 2.65831 12.5717 4.48095 12.6628 6.72771L12.712 7.93912C12.749 8.8528 13.0798 9.73017 13.6551 10.4409L13.6734 10.4635C14.335 11.2808 13.7533 12.5 12.7018 12.5H10.9585C10.7204 13.9189 9.48646 15 7.99996 15C6.51347 15 5.27948 13.9189 5.04144 12.5H3.29789C2.24641 12.5 1.66475 11.2808 2.32632 10.4635L2.34461 10.4409C2.91996 9.73017 3.25071 8.8528 3.28776 7.93912L3.33689 6.72771C3.42801 4.4808 5.09705 2.65807 7.25008 2.30999ZM7.99996 13.5C7.34686 13.5 6.79124 13.0826 6.58532 12.5H9.41461C9.20869 13.0826 8.65307 13.5 7.99996 13.5ZM7.99987 3.75C6.3008 3.75 4.9045 5.09082 4.83566 6.78849L4.78653 7.9999C4.7429 9.07591 4.39818 10.1147 3.79622 11H12.2035C11.6015 10.1147 11.2568 9.07591 11.2132 7.9999L11.1641 6.78849C11.0952 5.09082 9.69893 3.75 7.99987 3.75Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'notification_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M7.25008 2.30999V1.75C7.25008 1.33579 7.58587 1 8.00008 1C8.41429 1 8.75008 1.33579 8.75008 1.75V2.31006C10.9029 2.65831 12.5717 4.48095 12.6628 6.72771L12.712 7.93912C12.749 8.8528 13.0798 9.73017 13.6551 10.4409L13.6734 10.4635C14.335 11.2808 13.7533 12.5 12.7018 12.5H10.9585C10.7204 13.9189 9.48646 15 7.99996 15C6.51347 15 5.27948 13.9189 5.04144 12.5H3.29789C2.24641 12.5 1.66475 11.2808 2.32632 10.4635L2.34461 10.4409C2.91996 9.73017 3.25071 8.8528 3.28776 7.93912L3.33689 6.72771C3.42801 4.4808 5.09705 2.65807 7.25008 2.30999ZM7.99996 13.5C7.34686 13.5 6.79124 13.0826 6.58532 12.5H9.41461C9.20869 13.0826 8.65307 13.5 7.99996 13.5ZM7.99987 3.75C6.3008 3.75 4.9045 5.09082 4.83566 6.78849L4.78653 7.9999C4.7429 9.07591 4.39818 10.1147 3.79622 11H12.2035C11.6015 10.1147 11.2568 9.07591 11.2132 7.9999L11.1641 6.78849C11.0952 5.09082 9.69893 3.75 7.99987 3.75Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});