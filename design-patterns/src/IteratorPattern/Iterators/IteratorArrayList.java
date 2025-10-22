package IteratorPattern.Iterators;

import IteratorPattern.Card;
import IteratorPattern.IteratorInterface;

import java.util.ArrayList;

public class IteratorArrayList implements IteratorInterface {
    protected ArrayList<Card> lista;


    public IteratorArrayList(ArrayList<Card> list){
        lista = list;
    }
    @Override
    public Card proximo() {
        return lista.get(0);
    }

    @Override
    public void remover() {
        lista.remove(0);
    }

    @Override
    public void fim(Card c) {
        lista.add(lista.size(),c);
    }

    @Override
    public int size() {
        return lista.size();
    }

    @Override
    public boolean estaVazia() {
        return lista.isEmpty();
    }
}
