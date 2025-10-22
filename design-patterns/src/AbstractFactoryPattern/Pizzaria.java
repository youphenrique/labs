package AbstractFactoryPattern;

import AbstractFactoryPattern.Pizzaiolos.PizzaioloFactoryA;
import AbstractFactoryPattern.Pizzaiolos.PizzaioloFactoryB;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Pizzaria {
    private boolean aberta;
    private PizzaioloAbstractFactory dPizzaioloAbstractFactory;
    public Pizzaria(String data) throws ParseException {
        SimpleDateFormat format1=new SimpleDateFormat("dd/MM/yyyy");
        Date date = format1.parse(data);
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        int dayOfWeek = c.get(Calendar.DAY_OF_WEEK);
        switch(dayOfWeek){
            case 2: case 4: case 6:
                aberta=true;
                dPizzaioloAbstractFactory = new PizzaioloFactoryA();
                break;
            case 0: case 3: case 5:
                aberta=true;
                dPizzaioloAbstractFactory = new PizzaioloFactoryB();
                break;
            case 1:
                aberta=false;
                break;
            default:
                System.out.println("erro data invalida");
                break;
        }
    }
    public Pizza recebePedido(String pedido){
        Pizza pizza;
        if(!aberta){
            System.out.println("Pizzaria Fechada");
            return null;
        }
        switch(pedido.toLowerCase()){
            case "pizza calabresa":
                pizza = dPizzaioloAbstractFactory.makePizzaCalabresa();
                break;
            case "pizza presunto":
                pizza = dPizzaioloAbstractFactory.makePizzaPresunto();
                break;
            default:
                System.out.println("Pedido Invalido");
                return null;
        }
        return pizza;
    }
}
