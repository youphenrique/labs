package StatePattern;

public class Closed implements SubjectState{

    @Override
    public SubjectState studentEnrollsSubject(int totalStudents, int maxNumberVacancies) {
        return new Closed();
    }

    @Override
    public SubjectState studentLeavesSubject(int totalStudents) {
        return new Open();
    }

    @Override
    public SubjectState cancelsSubject(int totalStudents) {
        return new Closed();
    }

    @Override
    public SubjectState offerSubject() {
        return new Closed();
    }

}
