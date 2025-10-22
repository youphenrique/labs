package MediatorPattern;

public interface Mediator {
    public void logIn(Colaborador aluno);
    public void logOut(Colaborador aluno);
    public void enviarMensagem(String mensagem,Colaborador aluno);
}
