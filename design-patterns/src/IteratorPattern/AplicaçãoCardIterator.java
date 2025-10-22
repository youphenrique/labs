package IteratorPattern;

import IteratorPattern.Iterators.IteratorArrayList;
import IteratorPattern.Iterators.IteratorPilha;

import java.util.ArrayList;
import java.util.Random;
import java.util.Stack;

public class AplicaçãoCardIterator {

    public static void main(String[] args){
        ArrayList<Card> jogador1 = new ArrayList<>();
        Stack<Card> jogador2 = new Stack<>();

        Random rand = new Random(System.currentTimeMillis());
        for(int i = 0; i < 20; i++){
            jogador1.add(new Card(rand.nextInt(20) + 1));
            jogador2.push(new Card(rand.nextInt(20) + 1));
        }

        IteratorInterface iterator1 = new IteratorArrayList(jogador1);
        IteratorInterface iterator2 = new IteratorPilha(jogador2);
        while( !(iterator1.estaVazia() || iterator2.estaVazia()) ){
            Card card1 = iterator1.proximo();
            Card card2 = iterator2.proximo();
            System.out.println("Jogador 1 escolheu carta: " + card1.getValue());
            System.out.println("Jogador 2 escolheu carta: " + card2.getValue());
            if(card1.getValue() < card2.getValue()){
                System.out.println("Jogador 2 ganhou rodada.");
                iterator1.fim(card1);
                iterator1.fim(card2);
                iterator2.remover();
                iterator1.remover();
            }else if(card1.getValue() > card2.getValue()){
                System.out.println("Jogador 1 ganhou rodada.");
                iterator2.fim(card2);
                iterator2.fim(card1);
                iterator1.remover();
                iterator2.remover();
            }else{
                System.out.println("Rodada Empatada.");
                iterator1.fim(card1);
                iterator2.fim(card2);
                iterator1.remover();
                iterator2.remover();
            }
            System.out.println("Jogador 1 tem: " + iterator1.size() + " cartas.");
            System.out.println("Jogador 2 tem: " + iterator2.size() + " cartas.");
        }
        if(iterator1.estaVazia()) System.out.println("Jogador 1 is the Winner.");
        else System.out.println("Jogador 2 is the Winner.");
    }

}
