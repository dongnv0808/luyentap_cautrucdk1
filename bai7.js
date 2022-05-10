function tinhToan(){
    let goiNoiMang = document.getElementById('goiNoiMang').value;
    goiNoiMang = parseInt(goiNoiMang);

    let goiNgoaiMang = document.getElementById('goiNgoaiMang').value;
    goiNgoaiMang = parseInt(goiNgoaiMang);

    let smsNoiMang = document.getElementById('smsNoiMang').value;
    smsNoiMang = parseInt(smsNoiMang);

    let smsNgoaiMang = document.getElementById('smsNgoaiMang').value;
    smsNgoaiMang = parseInt(smsNgoaiMang);

    let smsQuocTe = document.getElementById('smsQuocTe').value;
    smsQuocTe = parseInt(smsQuocTe);

    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    let result4 = 0;
    let result5 = 0;
    let tongTien = 0;

    result1 = goiNoiMang * 890;
    document.getElementById('result1').innerHTML = `${result1}đ`;
    result2 = goiNgoaiMang * 1090;
    document.getElementById('result2').innerHTML = `${result2}đ`;
    result3 = smsNoiMang * 300;
    document.getElementById('result3').innerHTML = `${result3}đ`;
    result4 = smsNgoaiMang * 350;
    document.getElementById('result4').innerHTML = `${result4}đ`;
    result5 = smsQuocTe * 2500;
    document.getElementById('result5').innerHTML = `${result5}đ`;
    
    tongTien = result1 + result2 + result3 + result4 + result5;
    document.getElementById('tongTien').innerHTML = `${tongTien}đ`;
}