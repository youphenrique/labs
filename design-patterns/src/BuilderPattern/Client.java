package BuilderPattern;

public class Client {

    public static void main(String[] args){
        AtendenteDirector atendente_1 = new AtendenteDirector(new FuncionarioMcDonalds());
        LancheProduct lanche_1 = atendente_1.montaLanche();
        System.out.println(atendente_1.imprimePedido());

        AtendenteDirector atendente_2 = new AtendenteDirector(new FuncionarioBurgerKing());
        LancheProduct lanche_2 = atendente_2.montaLanche();
        System.out.println(atendente_2.imprimePedido());

        AtendenteDirector atendente_3 = new AtendenteDirector(new FuncionarioBobs());
        LancheProduct lanche_3 = atendente_3.montaLanche();
        System.out.println(atendente_3.imprimePedido());
    }

}
