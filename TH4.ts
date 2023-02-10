class Circle {
    private color: string;
    private r: number;

    constructor(color: string, r: number) {
        this.color = color;
        this.r = r;
    }

    hienthi(HT:Circle){
        console.log("hình tròn có màu "+ HT.color+"và có bán kính là "+HT.r);
    }
}
let Circlelis:Circle[]=[];

Circlelis.push(new Circle("red",15));
Circlelis.push(new Circle("blue",20));
Circlelis.push(new Circle("row",6));
Circlelis.forEach((a)=>{
    a.hienthi(a)
})

