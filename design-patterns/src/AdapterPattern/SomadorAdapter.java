package AdapterPattern;

import java.util.ArrayList;
import java.util.List;

public class SomadorAdapter implements SomadorEsperadoTarget{
    private SomadorExistenteAdaptee somadorExistente;
    private List<Integer> lista = new ArrayList<>();

    public SomadorAdapter(){
        somadorExistente = new SomadorExistenteAdaptee();
    }

    @Override
    public int somaVetor(int[] vetor){
        for(int i = 0; i < vetor.length; i++){
            lista.add(vetor[i]);
        }
        int resultado = somadorExistente.somaLista(lista);
        lista.clear();
        return resultado;
    }
}
