import * as S from './styles'

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Title>Boilerplate NextJS</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}
