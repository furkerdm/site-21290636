<?php

if($_SERVER["REQUEST_METHOD"] == "GET"){
    
    //htmlspecialchars(), kullanıcının input olarak kod bloğu girebilmesini engeller.
    $name = htmlspecialchars($_GET["name"]);
    $email = htmlspecialchars($_GET["email"]);
    $phone = htmlspecialchars($_GET["phone"]);
    $subject = htmlspecialchars($_GET["subject"]);
    $message = htmlspecialchars($_GET["message"]);
    
    //database bağlantısı
    $conn = new mysqli('localhost', 'root', '', 'formsave');
    if($conn->connect_error){
        die("Bağlantı Hatası : " .$conn->connect_error);
    }
    else{
        $stmt =$conn->prepare("insert into formsave(name, email, phone, subject, message)
            values(?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiss", $name, $email, $phone, $subject, $message);
        $stmt->execute();
        $stmt->close();
        $conn->close();

    }

    //başarılı gönderimde başarı sayfasına atar.
    header("Location: ../html/basari.html"); 

}
else{
    //kullanici, php sayfasina bilgi göndermeden ulasmayi becerirse boş sayfa görünmesin diye geri yönlendirir.
    header("Location: ../html/iletisim.html");
}

?>