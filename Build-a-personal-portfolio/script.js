// Navigasi
// 1. tangkap element dengan class/id navbar
const navbar = document.querySelector("#navbar");

// 2. jika element dengan class/id navbar diklik
navbar.addEventListener('click', function (e) {
    // 3. maka ambil element apa yang diklik oleh user
    const targetNavbar = e.target;

    // 4. lalu cek, jika element itu adalah link dengan class nav-link
    if (targetNavbar.classList.contains('nav-link')) {

        // 5. maka ambil menu link yang aktif
        const navbarLinkActive = document.querySelector("ul#navbar li a.active");

        // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
        if (navbarLinkActive !== null && targetNavbar.getAttribute('href') !== navbarLinkActive.getAttribute('href')) {

            // 7. maka hapus class active pada menu yang sedang aktif
            navbarLinkActive.classList.remove('active');
        }

        // 8. terakhir tambahkan class active pada menu yang di klik oleh user
        targetNavbar.classList.add('active');
    }
});