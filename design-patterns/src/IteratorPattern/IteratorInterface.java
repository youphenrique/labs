package IteratorPattern;

public interface IteratorInterface {
    Card proximo();
    void remover();
    void fim(Card c);//final
    int size();
    boolean estaVazia();
}
