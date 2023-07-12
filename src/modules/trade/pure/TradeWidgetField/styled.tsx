import { transparentize } from 'polished'
import styled from 'styled-components/macro'

export const TradeWidgetFieldBox = styled.div`
  background: ${({ theme }) => theme.grey1};
  border-radius: 16px;
  min-height: 58px;
  font-size: 18px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  flex: 1;
  gap: 3px;
`

export const TradeWidgetFieldLabel = styled.span`
  color: ${({ theme }) => transparentize(0.3, theme.text1)};
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`

export const ErrorText = styled.div<{ type?: 'error' | 'warning' }>`
  color: ${({ theme, type }) => {
    if (type === 'error') return theme.red1
    else if (type === 'warning') return theme.yellow2
    else return theme.text1
  }};
  font-size: 12px;
  margin-top: 5px;
`