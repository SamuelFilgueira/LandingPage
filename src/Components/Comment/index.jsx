import { Container } from './style';

const Comment = () => {
    return (
      <Container>
        <form>
          <h2>Deixe aqui seu comentário</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="digite seu email"
            />

            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              className="form-control "
              id="nome"
              placeholder="digite seu email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea className="form-control" id="mensagem" rows="4"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar Comentário
          </button>
        </form>
      </Container>
    );
}

export default Comment;