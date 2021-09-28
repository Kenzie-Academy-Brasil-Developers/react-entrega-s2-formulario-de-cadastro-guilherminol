import { Body, PageTitle, ImgKenzie } from "./style";
import KenzieLogo from "./KenzieLogo.png";
import { useParams } from "react-router-dom";
const AppPage = () => {
  const params = useParams();
  return (
    <Body>
      <PageTitle>
        Parabéns {params.nome}, Agora você faz parte da escola de programação
        que mais cresce no Brasil
      </PageTitle>
      <ImgKenzie src={KenzieLogo} />
    </Body>
  );
};
export default AppPage;
