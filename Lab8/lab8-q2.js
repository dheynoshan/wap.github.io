function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function(grade){
    this.grades.push(grade);
}

Student.prototype.computeAverageGrade = function(){
    return this.grades.reduce(
        (accum,elem,index,array)=>{
            return accum += elem/array.length;
        },0);
}

const st1 = new Student("St1FName", "St1LName")
st1.inputNewGrade(90);
st1.inputNewGrade(80);
console.log(st1.computeAverageGrade());

const st2 = new Student("St2FName", "St2LName")
st2.inputNewGrade(85);
st2.inputNewGrade(95);
console.log(st2.computeAverageGrade());

const stuArray = [st1, st2];

const stuAve = stuArray.reduce((accum, elem, index, array)=>{
    return accum += elem.computeAverageGrade()/array.length;
},0);

console.log(stuAve);