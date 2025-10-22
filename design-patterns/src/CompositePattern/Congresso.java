package CompositePattern;

import java.util.ArrayList;

public class Congresso {
    public String nome;
    public int totalAssentos;
    public ArrayList<Participante> participantes;

    public Congresso(String nome, int totalAssentos){
        this.nome = nome;
        this.totalAssentos = totalAssentos;
        participantes = new ArrayList<>();
    }

    public void adicionarParticipante(Participante participante){
        if(getTotalparticipantes() + participante.getSize() < totalAssentos){
            participantes.add(participante);
            System.out.println(participante.getNome() + " registrado com sucesso.");
        }
        else{
            System.out.println("Impossivel registrar participante! Número de assentos indisponível");
        }
    }

    public void imprimeParticipantes(){
        System.out.println("nome:assento");
        for(Participante p: participantes) {
            p.print();
        }
    }

    public int getTotalparticipantes(){
        int size = 0;
        for(Participante p: participantes){
            size += p.getSize();
        }
        return size;
    }
}
