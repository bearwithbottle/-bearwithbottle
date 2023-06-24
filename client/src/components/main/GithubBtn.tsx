import {
  MainGithubBox,
  MainGithubWrap,
  MainGithubLogo,
  MainGithubSpan,
} from "../../styles/mainbtn/githubbtn";

function GithubBtn() {
  return (
    <MainGithubBox>
      <MainGithubWrap>
        <MainGithubLogo />
        <MainGithubSpan>Github 계정으로 시작</MainGithubSpan>
      </MainGithubWrap>
    </MainGithubBox>
  );
}

export default GithubBtn;
