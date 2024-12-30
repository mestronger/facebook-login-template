<?php
// Konfigurasi database
$host = 'localhost';
$username = 'nama_pengguna';
$password = 'kata_sandi';
$database = 'nama_database';

// Koneksi database
$conn = mysqli_connect($host, $username, $password, $database);

// Cek koneksi
if (!$conn) {
 die("Koneksi gagal: " . mysqli_connect_error());
}

// Variabel input
$email = $_POST['email'];
$password = $_POST['password'];

// Query login
$query = "SELECT * FROM pengguna WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($conn, $query);

// Cek hasil
if (mysqli_num_rows($result) > 0) {
 // Login sukses
 header('Location: beranda.php');
 exit;
} else {
 // Login gagal
 echo 'Email atau kata sandi salah!';
}

// Tutup koneksi
mysqli_close($conn);
?>
