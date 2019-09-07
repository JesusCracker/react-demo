class Parent {
    constructor(age,name) {
        this.age = age;
        this.name=name;
    }

    fun1(){
        console.log(`年龄${this.age} 姓名${this.name}`);
    }
}
Parent.prototype.sex = '男';


class Child extends Parent{
    constructor(age,name,email){
        super(age,name);
        this.email=email;
    }

    static fun1() {
        console.log(`xxxxxxxxxxxxx`);
        super.fun1();
    }

    fun2(){
        super.fun1();
        // console.log(`年龄${this.age} 姓名${this.name}邮箱${this.email}`);
    }

}

let parent=new Child(12,'张哈哈','qq.com');

console.log(parent.fun1());

