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
    else if (score >= 101 && score <= 110) {
        grade = "God";
    } else if (score >= 111 && score <= 150) {
        grade = "Whale";
    }
    else if (score >= 151 && score <= 200) {
        grade = "Mega Whale";
    }
    else if (score >= 201 && score <= 250) {
        grade = "Ultra Whale";
    } else if (score > 251 && score <= 300) {
        grade = "Giga Whale";
    } else if(score > 300){
        grade = "Giga Oiler";
    }
    else {
        grade = "Invalid (Something went wrong)";
    }
    return grade;
}