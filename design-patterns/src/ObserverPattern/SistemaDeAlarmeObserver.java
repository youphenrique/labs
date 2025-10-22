package ObserverPattern;

import java.util.ArrayList;

public class SistemaDeAlarmeObserver implements Observer,Subject{
    private String address;
    private boolean on;
    private Sensores sensores;
    protected ArrayList<Observer> observers;

    public SistemaDeAlarmeObserver(Sensores sensores,String address){
        this.sensores = sensores;
        observers = new ArrayList<>();
        on = false;
        this.address = address;
    }
    public void LigarSistema(){
        if(!on) {
            sensores.Attach(this);
            on=true;
        }
    }
    public void DesligarSistema(){
        if(on) {
            sensores.deAttach(this);
            on=false;
        }
    }
    @Override
    public void update() {
        Notify();
    }

    public String getRelatorio() {
        String rel="";
        boolean invasion=false;
        rel+="----------------------------------------------\n";
        rel+="Sistema Ligado\n";
        rel+="----------------------------------------------\n";
        int counter=1;
        for(boolean s:sensores.getEstadosensores()){
            if(s){
                rel+="Presença no "+String.valueOf(counter)+"º andar.\n";
                invasion =true;
            }
            else rel+=String.valueOf(counter)+ " Limpo.\n";
            counter++;
        }
        rel+="----------------------------------------------\n";
        if(invasion)rel+="Possivel Invasão "+address+".\n";
        else rel+="Tudo Ok.";
        return rel;
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
            for (Observer o : observers) {
                o.update();
            }
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
