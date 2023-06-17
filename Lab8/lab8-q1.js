const student = {
    firstName:'',
    lastName:'',
    grades:[],
    inputNewGrade(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade(){
        return this.grades.reduce(
            (accum,elem,index,array)=>{
                return accum += elem/array.length;
            },0);
    }
}

const st1 = Object.create(student);
st1.firstName = 'St1FName';
st1.lastName = 'St1LName';
st1.inputNewGrade(90);
st1.inputNewGrade(80);
console.log(st1.computeAverageGrade());

const st2 = Object.create(student);
st2.firstName = 'St2FName';
st2.lastName = 'St2LName';
st2.inputNewGrade(85);
st2.inputNewGrade(95);
console.log(st2.computeAverageGrade());

const stuArray = [st1, st2];

const stuAve = stuArray.reduce((accum, elem, index, array)=>{
    console.log(accum, elem)
    return accum += elem.computeAverageGrade()/array.length;
},0);

console.log(stuAve);


