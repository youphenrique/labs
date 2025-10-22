package ObserverPattern;

public enum IDSensores {
    Sensor1andar(0),Sensor2andar(1),Sensor3andar(2);
    private int value;
    IDSensores(int value){
        this.value = value;
    }
    public int getValue() {
        return value;
    }
}
