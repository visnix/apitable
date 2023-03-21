import styled from 'styled-components';
import { CloseOutlined } from '@apitable/icons';

export const PortalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--linkEditorZIndex);
`;

export const PortalContent = styled.div`
  width: 540px;
  height: 630px;
  background: var(--highBg);
  box-shadow: var(--shadowCommonHigh);
  border-radius: 8px;
  padding-top: 24px;
  overflow: hidden;
  position: relative;
`;

export const PortalTitleWrapper = styled.h2`
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  padding: 0 24px;
  margin-bottom: 16px;
  color: var(--fc1);
`;

export const PortalTitle = styled.span`
  display: inline-block;
  max-width: 320px;
  vertical-align: bottom;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CloseIcon = styled(CloseOutlined)`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
`;