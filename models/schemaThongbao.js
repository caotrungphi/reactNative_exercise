import Realm from 'realm';
export const Thong_bao ='Thong_bao';
export const Nhom_Thong_bao ='Nhom_Thong_bao';

// Tạo bảng ThongBao
export const ThongBao={
    name:Thong_bao,
    primaryKey:'id',
    properties:{
        id:'string',
        Noi_dung:'string',
        Ngay_Cap_nhat:'date',
        Nhom_Thong_bao:'string'
    }
}
// Tạo bảng NhomThongBao
export const NhomThongBao={
    name:Nhom_Thong_bao,
    primaryKey:'id',
    properties:{
        id:'string',
        Ten:'string'
    }
}

const databaseOptions={
    path:'thongbaoApp.realm',
    schema:[ThongBao,NhomThongBao],
    schemaVersion:1
}

// Tạo Đọc, Thêm, Sửa, Xóa, Xóa Tất cả
export const Them = Thong_bao_moi => new Promise((resole,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            realm.create(Thong_bao, Thong_bao_moi);
            resole();
        }).catch((error)=> {
            reject(error)
        });
    })    
});
export const Cap_nhat = Thong_bao_Cap_nhat => new Promise((resole,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let Ket_qua=realm.objectForPrimaryKey(Thong_bao,Thong_bao_Cap_nhat.id);
            Ket_qua.Noi_dung=Thong_bao_Cap_nhat.Noi_dung;
            resole(Ket_qua);
        }).catch((error)=> {
            reject(error)
        });
    })    
});
export const Xoa = id_Thong_bao => new Promise((resole,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let Ket_qua=realm.objectForPrimaryKey(Thong_bao,id_Thong_bao);
            realm.delete(Ket_qua);
            resole();
        }).catch((error)=> {
            reject(error)
        });
    })    
});
export const Xoa_Tat_ca = () => new Promise((resole,reject)=>{
    
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let Ket_qua=realm.objects(Thong_bao);
            realm.delete(Ket_qua);
            resole();
        }).catch((error)=> {
            reject(error)
        });
    })    
});
export const Doc_Danh_sach = () => new Promise((resole,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        let Ket_qua=realm.objects(Thong_bao);
        resole(Ket_qua);
    }).catch((error)=> {
        reject(error)
    });
})    

export default new Realm(databaseOptions)