package IteratorPattern.Iterators;

import IteratorPattern.Card;
import IteratorPattern.IteratorInterface;

import java.util.Stack;

public class IteratorPilha implements IteratorInterface {
    protected Stack<Card> pilha;

    public IteratorPilha(Stack<Card> stack){
        pilha=stack;
    }

    @Override
    public Card proximo() {
        return pilha.peek();
    }

    @Override
    public void remover() {
        pilha.pop();
    }

    @Override
    public void fim(Card c) {
        pilha.add(0,c);
    }

    @Override
    public int size() {
        return pilha.size();
    }

    @Override
    public boolean estaVazia() {
        return pilha.empty();
    }
}
