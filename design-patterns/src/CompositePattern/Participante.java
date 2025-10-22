package CompositePattern;

public abstract class Participante {
    protected String nome;

    public String getNome() {
        return nome;
    }

    public int getAssento() throws Exception {
        throw new Exception("Impossível determinar assento.");
    }

    public void adicionar(Participante participante) throws Exception {
        throw new Exception("Não pode realizar a operação de adicionar.");
    }

    public void remover(Participante participante) throws Exception {
        throw new Exception("Não pode realizar a operação de adicionar.");
    }

    public abstract int getSize();
    public abstract void print();
}
