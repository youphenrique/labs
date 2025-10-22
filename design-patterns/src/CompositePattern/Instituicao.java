package CompositePattern;

import java.util.ArrayList;
import java.util.List;

public class Instituicao extends Participante{
    public List<Participante> membros;

    public Instituicao(String nome){
        this.nome = nome;
        membros = new ArrayList<>();
    }

    @Override
    public void adicionar(Participante participante){
       membros.add(participante);
    }

    @Override
    public void remover(Participante participante){
        membros.remove(participante);
    }

    @Override
    public int getSize() {
        int size = 0;
        for(Participante p: membros){
            size += p.getSize();
        }
        return size;
    }

    @Override
    public void print() {
        System.out.println("------Instituição " + getNome() + "------");
        for(Participante p: membros){
            p.print();
        }
        System.out.println("----------------------------");
    }

    public void imprimeMembros(){
        System.out.println("Instituição " + getNome());
        for(Participante p: membros){
            p.print();
        }
    }
}
