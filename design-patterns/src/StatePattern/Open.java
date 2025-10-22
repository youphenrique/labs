package StatePattern;

public class Open implements SubjectState{

    @Override
    public SubjectState studentEnrollsSubject(int totalStudents, int maxNumberVacancies){
        if(totalStudents + 1 == maxNumberVacancies){
            return new Closed();
        }
        return new Open();
    }

    @Override
    public SubjectState studentLeavesSubject(int totalStudents){
        if(totalStudents == 1){
            return new Offered();
        }
        return new Open();
    }

    @Override
    public SubjectState cancelsSubject(int totalStudents){
        return new Canceled();
    }

    @Override
    public SubjectState offerSubject(){
        return new Open();
    }

}
