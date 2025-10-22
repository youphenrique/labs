package MediatorPattern;

public class AlunoColaborador extends Colaborador {
    private String nome;
    private String curso;
    private String categoria;
    public AlunoColaborador(Mediator m,String nome,String curso,String categoria){
        super(m);
        this.nome=nome;
        this.curso=curso;
        this.categoria=categoria;
    }
    @Override
    public void receberMensagem(String msg) {
        System.out.println("Aluno "+nome+" recebeu mensagem: "+msg);
    }

    @Override
    public String gerarId() {
        return "["+nome+"-"+categoria+"-"+curso+"]";
    }
}
