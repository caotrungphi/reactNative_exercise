const url_Doc_Danh_sach_Nguoi_dung='https://services-uc7i.onrender.com/dsNguoidung';

function* Doc_Danh_sach_Nguoi_dung(){
    const Dap_ung= yield fetch(url_Doc_Danh_sach_Nguoi_dung, {
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:'',
    });    
   
    const Ket_qua= yield Dap_ung.status===200? Dap_ung.json(): [];	
    return Ket_qua;
    //=======================================================
    // const Dap_ung = yield fetch(url_Doc_Danh_sach_Nguoi_dung);    
    // const Ket_qua = yield Dap_ung.json();
    // return Ket_qua;
}


export const Api ={
    Doc_Danh_sach_Nguoi_dung
   
}