enum GT{
MALE,
FEMALE,
OTHER,
}
class ttnv{
    private name:string;
    private gioitinh:GT;
    private ngaysinh:string;
    private emial:string;
    private sdt:number|null;


    constructor(name: string, gioitinh: GT, ngaysinh: string, emial: string, sdt : number|null) {
        this.name = name;
        this.gioitinh = gioitinh;
        this.ngaysinh = ngaysinh;
        this.emial = emial;

            this.sdt = sdt;


    }

    hienthi(tt:ttnv){
    console.log(tt);
}

}
let danhsach:ttnv[]=[];
danhsach.push(new ttnv("nam",GT.MALE,"14/2/2000","123@gmail.com",123455678));
danhsach.push(new ttnv("thanh",GT.FEMALE,"26/5/2000","12463@gmail.com",null));
danhsach.push(new ttnv("nam",GT.OTHER,"29/2/2000","123456@gmail.com",12937955678));
danhsach.forEach((a)=>{
    a.hienthi(a);

})