<?php

header('Access-Control-Allow-Origin: *');

$nome_db = "mach5_db";
$servername = "localhost";
$nomeUtente = "root";
$password = "";

/* 
$servername = "www.senegalesidiparma.it:3306";
$nomeUtente = "msenegae_lamine";
$password = "001992"; 
*/

// Create connection
//$conn = new mysqli($servername, $nomeUtente, $password, $nome_db);
$conn = new mysqli($servername, $nomeUtente, $password, $nome_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM CONCERTI";
$result = $conn->query($sql);

$rows = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;   
        // echo $row;
//        echo "Id: " . $row["ID"]. " - Name: " . $row["NOME"]. " - Tipo: " . $row["TIPO"]. " - Messaggio: " . $row["MESSAGGIO"]. " - Data_Ora: " . $row["DATA_ORA"]. "<br>";
    }
    echo json_encode(array_values($rows));
} else {
    echo "0";
}
$conn->close();
?>
