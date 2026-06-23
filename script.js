/**
 * Fungsi Utama untuk Membuka Undangan
 * Dipicu saat pengguna mengklik tombol "Lihat Undangan"
 */
function bukaUndangan() {
    // 1. Membuka kunci scroll pada halaman web dengan menghapus class 'locked'
    document.body.classList.remove('locked');
    
    // 2. Memberikan class 'opened' pada cover agar bergeser ke atas dan menghilang secara mulus
    const cover = document.getElementById('coverPage');
    if (cover) {
        cover.classList.add('opened');
    }
    
    // 3. Memutar musik latar otomatis (Aman dari kebijakan pemblokiran autoplay browser)
    const musik = document.getElementById('backsound');
    if (musik) {
        musik.play().catch(error => {
            console.log("Autoplay musik diblokir sistem browser sebelum interaksi pengguna dilakukan.");
        });
    }

    // 4. Memunculkan tombol kontrol musik di pojok kanan bawah
    const tombolMusik = document.getElementById('btnMusik');
    if (tombolMusik) {
        tombolMusik.style.visibility = 'visible';
    }
    
    // 5. Otomatis mengarahkan layar (scroll) secara smooth ke bagian info acara
    const kontenAcara = document.getElementById('kontenAcara');
    if (kontenAcara) {
        kontenAcara.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

/**
 * Fungsi Kontrol Musik (Play/Pause) lewat tombol mengapung di pojok kanan bawah
 */
function toggleMusik() {
    const musik = document.getElementById('backsound');
    const tombolMusik = document.getElementById('btnMusik');

    if (musik && tombolMusik) {
        if (musik.paused) {
            musik.play();
            tombolMusik.innerHTML = "🎵";
        } else {
            musik.pause();
            tombolMusik.innerHTML = "🔇";
        }
    }
}