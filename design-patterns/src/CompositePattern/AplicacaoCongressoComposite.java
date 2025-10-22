package CompositePattern;

public class AplicacaoCongressoComposite {

    public static void main(String[] args){
        Congresso meucongresso = new Congresso("HPC/intel",40);
        meucongresso.adicionarParticipante(new Individuo("Pedro",meucongresso.getTotalparticipantes() + 1));
        meucongresso.adicionarParticipante(new Individuo("Jorge",meucongresso.getTotalparticipantes() + 1));
        meucongresso.adicionarParticipante(new Individuo("Paulo",meucongresso.getTotalparticipantes() + 1));
        meucongresso.adicionarParticipante(new Individuo("Henrique",meucongresso.getTotalparticipantes() + 1));

        Instituicao ifce = new Instituicao("IFCE");
        ifce.adicionar(new Individuo("Augusto",meucongresso.getTotalparticipantes() + ifce.getSize() + 1));
        ifce.adicionar(new Individuo("Júnior",meucongresso.getTotalparticipantes() + ifce.getSize() + 1));
        ifce.adicionar(new Individuo("Severino",meucongresso.getTotalparticipantes() + ifce.getSize() + 1));

        meucongresso.adicionarParticipante(ifce);
        System.out.println("Número de Participantes : " + meucongresso.getTotalparticipantes());
        meucongresso.imprimeParticipantes();
    }

}
