package ObserverPattern;

interface Subject {
    public void Attach(Observer o);
    public void deAttach(Observer o);
    public void Notify();
}
