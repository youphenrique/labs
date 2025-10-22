package StatePattern;

public class EnrollmentContext{
    private SubjectState state;
    private int totalStudents;
    private int maxNumberVacancies;
    private String subject;

    public EnrollmentContext(String subject, int maxNumberVacancies){
        state = new Offered();
        totalStudents = 0;
        this.maxNumberVacancies = maxNumberVacancies;
        this.subject = subject;
        System.out.println("Subject offered.");
    }

    public void studentEnrollsSubject(){
        SubjectState statePrevious = state;
        state = state.studentEnrollsSubject(totalStudents, maxNumberVacancies);
        if(statePrevious instanceof Closed && state instanceof Closed){
            System.out.println("Subject closed. There are no more vacancies in the subject.");
        }
        else if(statePrevious instanceof Open && state instanceof Closed){
            System.out.println("Student enrolled in the subject. Subject closed.");
            totalStudents++;
        }
        else if(state instanceof Canceled){
            System.out.println("Subject is canceled.");
        }
        else {
            System.out.println("Student enrolled in the subject. Subject open.");
            totalStudents++;
        }
    }

    public void studentLeavesSubject(){
        state = state.studentLeavesSubject(totalStudents);
        if(state instanceof Offered) {
            System.out.println("Student leaves the subject. Subject offered.");
            totalStudents--;
        }
        else if(state instanceof Canceled){
            System.out.println("The subject is canceled.");
        }
        else {
            System.out.println("Student leaves the subject. Subject open.");
            totalStudents--;
        }
    }

    public void cancelsSubject(){
        state = state.cancelsSubject(totalStudents);
        if(!(state instanceof Canceled)) {
            System.out.println("Subject can not be canceled.");
        }
        else{
            System.out.println("Subject canceled.");
            totalStudents = 0;
        }
    }

    public void offerSubject(){
        SubjectState statePrevious = state;
        state = state.offerSubject();
        if(statePrevious instanceof Offered && state instanceof Offered) {
            System.out.println("Subject is already being offered or is already open.");
        }
        else if(state instanceof Offered){
            System.out.println("Subject offered.");
        }
        else{
            System.out.println("Subject can not be offered.");
        }
    }

    public int getTotalStudents(){
        return totalStudents;
    }
}
