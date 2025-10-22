package StatePattern;

public class Offered implements SubjectState{

    @Override
    public SubjectState studentEnrollsSubject(int totalStudents, int maxNumberVacancies) {
        return new Open();
    }

    @Override
    public SubjectState studentLeavesSubject(int totalStudents){
        return new Offered();
    }

    @Override
    public SubjectState cancelsSubject(int totalStudents){
        return new Canceled();
    }

    @Override
    public SubjectState offerSubject(){
        return new Offered();
    }

}
