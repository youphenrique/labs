package CompositePattern;


public class Individuo extends Participante {
    private int assento;

    public Individuo(String nome, int assento){
        this.nome = nome;
        this.assento = assento;
    }

    @Override
    public int getAssento(){
        return assento;
    }

    @Override
    public int getSize() {
        return 1;
    }

    @Override
    public void print() {
        System.out.println(getNome() + ": " + getAssento());
    }
}
