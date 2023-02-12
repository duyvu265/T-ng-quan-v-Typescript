class nhanvien {
    name: string;
    gioitinh: string;
    ngaysinh: string;
    email: string;
    phonenumber: number | null;

    constructor(name: string, gioitinh: string, ngaysinh: string, email: string, phonenumber: number | null) {
        this.name = name;
        this.gioitinh = gioitinh;
        this.ngaysinh = ngaysinh;
        this.email = email;
        this.phonenumber = phonenumber;
    }

    hienthi(nhanvien:nhanvien) {
        console.log("nhân viên " + this.name + "giới tính :" + this.gioitinh + "ngay sinh " + this.ngaysinh + "co email :" + this.email + "sdt :" + this.phonenumber)
    }
    addnhanvien(nhanvienmoi:nhanvien){
        nhanvienmoi.name=this.name;
        nhanvienmoi.gioitinh=this.gioitinh;
        nhanvienmoi.ngaysinh=this.ngaysinh;
        nhanvienmoi.phonenumber=this.phonenumber;
        nhanvienmoi.email=this.email;
    }

    xoanhanvien(index:number):void{
        index=this.addnhanvien[index];
        if (index==0){
            console.log("loi");
        }else {
            arrnhanvien.splice(index,1)
        }
    }
}

let arrnhanvien:nhanvien[]=[];
arrnhanvien.push(new nhanvien("thanh","nu","26/5/2002","thanhthanh@gamil.com",12345679));
arrnhanvien.push(new nhanvien("duy","nam","26/12/1992","thanhduy@gamil.com",12345645879));
arrnhanvien.push(new nhanvien("thanh","nu","22/6/2012","thanhho@gamil.com",24345679));
arrnhanvien.push(new nhanvien("nam","nam","23/5/1997","namthanh@gamil.com",12775809));