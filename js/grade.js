function getGrade(score) {
    let grade;
    if (score >= 0 && score < 30) {
        grade = "F";
    }
    else if (score >= 30 && score <= 35) {
        grade = "E";
    }
    else if (score >= 35 && score < 45) {
        grade = "D";
    }
    else if (score >= 45 && score < 55) {
        grade = "C";
    }
    else if (score >= 55 && score < 65) {
        grade = "B";
    }
    else if (score >= 65 && score < 75) {
        grade = "A";
    }
    else if (score >= 75 && score < 85) {
        grade = "S";
    }
    else if (score >= 85 && score <= 100) {
        grade = "S+";
    }
    else if (score >= 101) {
        grade = "God";
    }
    return grade;
}