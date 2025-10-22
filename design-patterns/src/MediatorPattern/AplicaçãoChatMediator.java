package MediatorPattern;

public class AplicaçãoChatMediator {

    public static void main(String[] args){
        Mediator mediator= new ChatMediator();
        Colaborador aluno= new AlunoColaborador(mediator,"Pedro","Computação","Graduação");
        Colaborador aluno2= new AlunoColaborador(mediator,"Bruno","Administração","Mestrado");
        Colaborador aluno3= new AlunoColaborador(mediator,"Paulo","Matematica","Mestrado");
        Colaborador aluno4= new AlunoColaborador(mediator,"Whashington","Matematica","Doutorado");
        aluno.logIn();
        System.out.println("------------------------------");
        aluno2.logIn();
        System.out.println("------------------------------");
        aluno4.logIn();
        System.out.println("------------------------------");
        aluno3.logIn();
        System.out.println("------------------------------");
        aluno.enviarMensagem("aloha!!!!");
        System.out.println("------------------------------");
        aluno3.enviarMensagem("Bom dia!!!");
        System.out.println("------------------------------");
        aluno4.enviarMensagem("Opa, bom dia saindo. Volto mais tarde.");
        System.out.println("------------------------------");
        aluno4.logOut();
        System.out.println("------------------------------");
        aluno2.enviarMensagem("Bye.");
        System.out.println("------------------------------");
    }

}
