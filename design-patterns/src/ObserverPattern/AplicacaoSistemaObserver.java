package ObserverPattern;

public class AplicacaoSistemaObserver {
    public static void main(String[] args){
        Sensores sensores = new Sensores();
        SistemaDeAlarmeObserver s = new SistemaDeAlarmeObserver(sensores,"Rua das Camelias,1245");
        CiaSegurosObserver seguro = new CiaSegurosObserver(s);
        DelegaciaObserver delegacia = new DelegaciaObserver(s);
        sensores.ativarSensor(IDSensores.Sensor1andar);
        sensores.desativarSensor(IDSensores.Sensor1andar);
        s.LigarSistema();
        sensores.ativarSensor(IDSensores.Sensor1andar);
        seguro.contataCliente();
        sensores.ativarSensor(IDSensores.Sensor2andar);
        sensores.desativarSensor(IDSensores.Sensor1andar);
        sensores.ativarSensor(IDSensores.Sensor3andar);
        sensores.desativarSensor(IDSensores.Sensor2andar);
        //entra policia
        delegacia.enviaViatura();
        sensores.ativarSensor(IDSensores.Sensor1andar);
        sensores.ativarSensor(IDSensores.Sensor2andar);
        sensores.desativarSensor(IDSensores.Sensor1andar);
        sensores.desativarSensor(IDSensores.Sensor2andar);
        sensores.ativarSensor(IDSensores.Sensor2andar);
        sensores.desativarSensor(IDSensores.Sensor3andar);
        sensores.ativarSensor(IDSensores.Sensor1andar);
        sensores.desativarSensor(IDSensores.Sensor2andar);
        sensores.desativarSensor(IDSensores.Sensor1andar);
        s.DesligarSistema();
    }
}
