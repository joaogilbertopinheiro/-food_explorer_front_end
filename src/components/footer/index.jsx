import { Container, Content, Brand } from "./style"
import polygonFooter from "../../assets/icons/polygonFooter.svg"
import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <Container>
      <Content>
        <Brand>
          <img src={polygonFooter} alt="Logo Food Explorer" />
          <h1>food Explorer</h1>
        </Brand>

        <div>
          <p>© 2024 - Todos os direitos reservados.</p>
          <a target="_blank" href="https://www.linkedin.com/in/joão-pinheiro-450a76226/">
            <FaLinkedin />
          </a>
        </div>
      </Content>
    </Container>
  )
}
