//fungsi untuk membuat data dari session storage dan menampilkannya
function displayGuests(){
    const guestListUI = document.getElementById('guestList');
    guestListUI.innerHTML = ''; //Reset tampilan List

    //Mengambil data dari session storage, jika kosong buat array baru
    let guests = JSON.parse(sessionStorage.getItem('guests')) || [];

    guests.forEach((guest) => {
        let li = document.createElement('li');
        li.textContent = guest;
        guestListUI.appendChild(li); //appendChild: menambah elemen
    });
}

//Fungsi utk menambah data
function addGuest() {
    const input = document.getElementById('guestInput');
    const guestName = input.value;
    if(guestName === ''){
        alert('Nama tidak boleh kosong!');
        return;
    }

    //ambil data lama
    let guests = JSON.parse(sessionStorage.getItem('guests')) || [];
    //tambah data baru ke array
    guests.push(guestName);

    //simpan kembali ke storage dlm bentuk string
    sessionStorage.setItem('guests', JSON.stringify(guests));
    //bersihkan input dan perbarui tampilan
    input.value = '';
    displayGuest();
}

//Fungsi utk menghapus semua data
function clearList() {
    if(confirm('Hapus semua data tamu di sesi ini?')){
        sessionStorage.removeItem('guests');
        displayGuests();
    }
} 

//jalankan fungsi display saat halaman pertama kali dimuat
window.onload = displayGuests;