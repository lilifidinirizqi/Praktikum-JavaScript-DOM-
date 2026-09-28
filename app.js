// aktivitas 1
console.log("bismillah Praktikum dimulaiii ygy!");

// aktivitas 1 DOM SELECTION / SELEC ELEMEN
// kenapa kita harus selecsi karena "menangkap " atau mengambil id/class
// mengambil elemn html tersebut lalu disimpan di variable js

// 1. mengambil elemen judul dan sub judul
// dengan cara dokumen.getelemenById("....") mengambil berdasarkan atibut id.

const judulUtama = document.getElementById("judul-utama"); // menangkap : <h1 id="judul-utama">

// dokument.querySelector("....") 
// . (class) # (id)

const subJudul = document.querySelector("#sub-judul"); //menangkap : <p id="sub-judul">

// 2. mengambil elemen pada kartu 1 (kartu manipulasi teks dan style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

// 3. mengambil elemen tombol tombol aksi pada kartu 1 
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. mengambil elemen pada kartu 2 (fitur catatan dinamis / to do list sederhana)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");


//Aktivitas 2
// manipulasi teks dan style (card 1)
// addEventList("click", fungction() {......}) artinya adalah tolong dengarkan dulu/tunggu 
// sampai di klik user, jika diklik jalankan kode perintah didalam fungction

// A. mengubah teks dan warna secara langsung

btnUbahTeks.addEventListener("click", function() {
    //innertext itu mengganti atau mengisi secara langsung teks yang ada didalam html
    teksPreview.innerText = "Hebattt, teks ini berhasil diubah pakai DOM!";

    //.style.color = mengubah warna teks secara langsung (inline style)
    teksPreview.style.color = "#4f46e5";

    //console.log = untuk mencetak pesan di console browser
    console.log("[DOM] Teks preview telah diperbarui!");
});

// manipulasi class css menggunakan classList.toggle()
// membuat toggle aggar bisa di klik
btnToggleWarna.addEventListener("click", function() {
    // .class.toggle("nama-class") = fitur saklar otomatis
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM berhasil di switch");
});

// mengembalikan teks kesemula 
btnReset.addEventListener("click", function() {
    //1. kembalikan teks semula ke teks asli
    teksPreview.innerText = "Halo, Teks ini siap diubah oleh javasripct";

    //2. kosongkan warna agar kembali kewarna awal
    teksPreview.style.color = "";

    // 3. hapus class khusus untuk menggunakan .classList.remove("")
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    //console.log = untuk mencetak pesan di console browser
    console.log("DOM tampilan direset");
});

// aktivitas 3 dan 4 : elemen dinamis dan event handling (TO - DO List sederhana)
// di aktivitas ini jika belajar elemen baru HTML baru (<li>) secara otomatis dalam js
//mengisi teksnya, memberri tombol hapus, lalu menempelkan ke layar (<ul>)

//langkah 1 :membuat variabel penampung angtka jumlah catatan
// "let" digunkan untuk nilai variabel yang dpat diubah ubah bisa bertambah dan berkurang (counting)
let totalCatatan = 0;

//langkah 2 : fungtsi update angka counter dan pesan status 
function perbaruiJumlah () {
    //masukan angka total catatan terbaru kedalam tag <span id="jumlah-catatan"
    jumlahCatatan.innerText = totalCatatan;

    //conditionhal statement berup apakah catatanya itu kosong / 0
    if (totalCatatan === 0) {
        //jika 0 :hapus class "hidden" supaya teks "belum ada catatan" muncul kelayar
        pesanKosong.classList.remove("hidden");
    } else{
        //jika >0 :tambahkan class "hidden" agar teks "belum ada catatan" tersembunyi 
        pesanKosong.classList.add("hidden");
    }
}

//langkah 3: fungsi utama logika tambah catatan baru 
function tambahCatatan() {
    //3.1 inputCatatan.value fungsinya untuk mengambil teks yang diketik oleh user
    //.trim() = menghapus spasi diawal dan diakhir
    const isiTeks = inputCatatan.value.trim();

    //3.2 validasi input : jika isi teks kosong maka tampilan alert
    if (isiTeks === "") {
        alert("catatan kamu tidak boleh kosong yakkkk!");
        return;
    }

    //3.3 document.createElement ("li") -> membuat memori di js secara dinamis 
    const liBaru = document.createElement("li");
    liBaru.className = "note-item"; // menambahkan tag li 

    //3.4 .innerHTML = mengisi strutur dalam <li> dengan teks catatan dan tombol hapus
    // tanda backtik (`)
    liBaru.innerHTML = `<span>${isiTeks}</span> <button class = "btn-hapus">Hapus</button>`

    //3.5 menambahkan telinga / event listener untuk tombol hapus pada catatan dinamis 
    //liBaru.queryselector (".btn-hapus") = mengambil tombol ber class "btn-hapus" khsus di li
    const btnHapus = liBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function() {
        liBaru.remove(); //menghapus elemen list dari layar html
        totalCatatan--, //totalCatatan dikurangi sebaanyak 1x
        perbaruiJumlah(); //panggil fungsi perbaruiJumlah untuk update angka dilayar
        console.log(`Dom Catatan ${isiTeks}" dihapus.` );
    });

    //3.6 appenchild = memasukan elemen li kedalam wadah <ul id="daftar-catatan"> 
    daftarCatatan.appendChild(liBaru);

    //3.7 mengosongkan kembali isi kolom input (inputCattan.value = " ") supaya bisa diketik lagi
    inputCatatan.value = "" ;

    //3.8  totalCatatn++ artinya tambah nilai total catatan sebanyak 1x, lalu update angka ke layar
    totalCatatan++;
    perbaruiJumlah();

    console.log(`Dom Catatan baru ditambahkan: ${isiTeks}`);
}

//langkah 4 : event listener klik tombol + "tambah" 
//ketika tombol tambah di klik oleh user maka jalankan fungsi tambah catatan ()
btnTambah.addEventListener("click", function(){
    tambahCatatan ();
});

//langkah 5: event listener keyboard "Enter" pada kolom input
//ketika user mengklik tombol input dan melepas tombol event (`event keyup);
inputCatatan.addEventListener("keyup", function(event) {
    //periksa apakah tombol yang di klik adalah enter 
    if (event.key === "Enter") {
        tambahCatatan(); // jika ya,jalankan fungsi tambahCatatan()
    }
});