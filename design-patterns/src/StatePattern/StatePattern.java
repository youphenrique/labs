package StatePattern;

public class StatePattern{

    public static void main(String[] args){
        EnrollmentContext context = new EnrollmentContext("Padrões de Projeto", 5);

        /* Cancels discipline before enrolling first student */
        context.cancelsSubject();
        /* Offers subject */
        context.offerSubject();
        /* Enroll first student */
        context.studentEnrollsSubject();
        /* Student leaves the subject */
        context.studentLeavesSubject();
        /* Enrollment of five students */
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        /* Get number of students in the subject */
        System.out.println("Total number of students in the subject: " + context.getTotalStudents());
        /* Attempt of enrollment of student with closed subject */
        context.studentEnrollsSubject();
        /* Two students leave the subject */
        context.studentLeavesSubject();
        context.studentLeavesSubject();
        /* Get number of students in the subject */
        System.out.println("Total number of students in the subject: " + context.getTotalStudents());
        /* Cancels subject */
        context.cancelsSubject();
        /* Attempt to enroll student in canceled subject */
        context.studentEnrollsSubject();
        /* Offers subject */
        context.offerSubject();
        /* Enrollment of five students */
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        context.studentEnrollsSubject();
        /* Student leaves the subject */
        context.studentLeavesSubject();
        /* Get number of students in the subject */
        System.out.println("Total number of students in the subject: " + context.getTotalStudents());
        /* Enrollment of student */
        context.studentEnrollsSubject();
        /* Attempt to cancel subject */
        context.cancelsSubject();
    }

}
