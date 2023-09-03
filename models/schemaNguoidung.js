import Realm from 'realm';
const NguoiDungSchema = {
    name: 'Nguoi_dung',
    primaryKey:'Ma_so',
    properties: {
        Ma_so:  'string',
        Ho_ten: 'string',
    }
};
const NhomNguoiDungSchema = {
    name: 'Nhom_Nguoi_dung',
    primaryKey:'Ma_so',
    properties: {
        Ma_so:  'string',
        Ten: 'string'
    }
};

const databaseOptions={
    path:'nguoidungApp.realm',
    schema:[NguoiDungSchema, NhomNguoiDungSchema],
    schemaVersion:1
}
const realm =new Realm(databaseOptions);



export const Them =  Nguoi_dung_moi =>  new Promise((resole,reject) => {
    try{
        realm.write(()=>{
            let Ket_qua = realm.create('Nguoi_dung',Nguoi_dung_moi);
            resole(Ket_qua);
        })
    }
    catch(error){
        reject(error);
    }
});
export const Cap_nhat = Nguoi_dung => new Promise((resole,reject)=>{
    try{
        realm.write(()=>{
            let Ket_qua=realm.objectForPrimaryKey("Nguoi_dung",Nguoi_dung.Ma_so);
            Ket_qua.Ho_ten=Nguoi_dung.Ho_ten;
            resole(Ket_qua);
        })
    }
    catch(error){
        reject(error);
    }
});
export const Xoa = Ma_so => new Promise((resole,reject)=>{
    try{
        realm.write(()=>{
            let Ket_qua=realm.objectForPrimaryKey('Nguoi_dung',Ma_so);
            realm.delete(Ket_qua);
            resole();
        })
    }
    catch(error){
        reject(error);
    }
});
export const Doc_Danh_sach = () => new Promise((resole,reject)=>{
    try{
        let Ket_qua=realm.objects('Nguoi_dung');
        resole(Ket_qua);
    }
    catch(error){
        reject(error);
    }    
})    

export default realm;