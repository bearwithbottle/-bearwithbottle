import {
  MainGithubBox,
  MainGithubWrap,
  MainGithubLogo,
  MainGithubSpan,
} from "../../styles/btn/githubbtn";

function GithubBtn() {
  return (
    <MainGithubBox>
      <MainGithubWrap>
        <MainGithubLogo />
        <MainGithubSpan>깃허브 계정으로 시작</MainGithubSpan>
      </MainGithubWrap>
    </MainGithubBox>
  );
}

export default GithubBtn;
