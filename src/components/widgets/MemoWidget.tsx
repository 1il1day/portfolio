import styled from 'styled-components'

type Props = {
  title: string;
  contents: React.ReactNode;
}

export default function MemoWidget({title, contents}: Props) {
  return (
    <MemoWidgetWrap>
      <MemoWidgetInner>
        <MemoTitle>{title}</MemoTitle>
        {contents}
      </MemoWidgetInner>
    </MemoWidgetWrap>
  )
}

const MemoWidgetWrap = styled.article`
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  @media (min-width: 1201px) {
    max-width: 418px;
    margin: unset;
  }
`;
const MemoWidgetInner = styled.div`
  padding: 20px 24px;
`;
const MemoTitle = styled.h3`
  padding-bottom: 10px;
  border-bottom: 1px solid #d0d0d0;
  color: #999;
`;