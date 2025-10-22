package ObserverPattern;

import java.util.ArrayList;

public class Sensores implements Subject {
    protected ArrayList<Observer> observers;
    private boolean[] estadosensores;

    public Sensores(){
        observers = new ArrayList<>();
        estadosensores =  new boolean[IDSensores.values().length];
    }
    public void ativarSensor(IDSensores id) {
        estadosensores[id.getValue()]=true;
        Notify();
    }
    public void desativarSensor(IDSensores id) {
        estadosensores[id.getValue()]=false;
        Notify();
    }

    public boolean[] getEstadosensores() {
        return estadosensores;
    }

    @Override
    public void Attach(Observer o) {
        observers.add(o);
    }
    @Override
    public void deAttach(Observer o) {
        observers.remove(o);
    }

    @Override
    public void Notify() {
        for(Observer o:observers){
            o.update();
        }
    }
}
