package BuilderPattern;

public class LancheProduct {
    private String sanduiche;
    private String batata;
    private String brinquedo;
    private String refrigerante;

    public String getSanduiche() {
        return sanduiche;
    }

    public String getBatata() {
        return batata;
    }

    public String getBrinquedo() {
        return brinquedo;
    }

    public String getRefrigerante() {
        return refrigerante;
    }

    public void setSanduiche(String sanduiche) {
        this.sanduiche = sanduiche;
    }

    public void setBatata(String batata) {
        this.batata = batata;
    }

    public void setBrinquedo(String brinquedo) {
        this.brinquedo = brinquedo;
    }

    public void setRefrigerante(String refrigerante) {
        this.refrigerante = refrigerante;
    }
}
