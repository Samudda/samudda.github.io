const nama ="Samudra Rizqi";
let usia = 22;

function generateBiodata() {
    if(usia == 22) {
        console.log('sudah dewasa');
    }else {
        console.log('belum dewasa');
    }
    console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
}

console.log(nama);
generateBiodata();