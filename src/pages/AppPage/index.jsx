import { Body, PageTitle, ImgKenzie } from "./style";
import KenzieLogo from "./KenzieLogo.png";
const AppPage = () => {
  return (
    <Body>
      <PageTitle>
        Agora você faz parte da escola de programação que mais cresce no Brasil
      </PageTitle>
      <ImgKenzie src={KenzieLogo} />
    </Body>
  );
};
export default AppPage;
