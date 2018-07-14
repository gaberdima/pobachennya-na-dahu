<?php

$recepient = "gaberdima@gmail.com";
$sitename = "pobachennya-na-dahu.lviv.ua";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$phone2 = trim($_POST["phone2"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nТелефон2: $phone2 \nemail: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>