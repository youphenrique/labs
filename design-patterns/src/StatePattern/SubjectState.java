package StatePattern;

public interface SubjectState{

    SubjectState studentEnrollsSubject(int totalStudents, int maxNumberVacancies);
    SubjectState studentLeavesSubject(int totalStudents);
    SubjectState cancelsSubject(int totalStudents);
    SubjectState offerSubject();

}
