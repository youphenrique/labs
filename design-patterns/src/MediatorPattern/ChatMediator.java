package MediatorPattern;

import java.util.ArrayList;
import java.util.List;

public class ChatMediator implements Mediator {
    private List<Colaborador> alunos;
    public ChatMediator(){
         alunos = new ArrayList<Colaborador>();
    }
    @Override
    public void logIn(Colaborador aluno) {
        alunos.add(aluno);
        enviarMensagem(" entrou na sala.",aluno);
    }
    @Override
    public void logOut(Colaborador aluno) {
        alunos.remove(aluno);
        enviarMensagem(" saiu da sala.",aluno);
    }

    @Override
    public void enviarMensagem(String mensagem,Colaborador aluno) {
        for(Colaborador naluno:alunos){
            if(!naluno.equals(aluno)){
                naluno.receberMensagem(aluno.gerarId()+" "+mensagem);
            }
        }
    }
}
