<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$products = [
    [
        "_id" => 1,
        "name" => "Classic Milk Tea",
        "description" => "A rich and creamy milk tea with chewy boba pearls.",
        "price" => 500,
        "imageUrl" => "https://assets.epicurious.com/photos/5953ca064919e41593325d97/4:3/w_4992,h_3744,c_limit/bubble_tea_recipe_062817.jpg"
    ],
    [
        "_id" => 2,
        "name" => "Green Tea Boba",
        "description" => "A refreshing green tea blend with chewy boba pearls.",
        "price" => 550,
        "imageUrl" => "https://greenheartlove.com/wp-content/uploads/2023/05/matcha-boba-tea-5.jpg"
    ],
    [
        "_id" => 3,
        "name" => "Taro Milk Tea",
        "description" => "A delicious taro-flavored milk tea with chewy pearls.",
        "price" => 600,
        "imageUrl" => "https://raepublic.com/wp-content/uploads/2023/07/Taro-Milk-Tea-Recipe-by-Raepublic-12.jpg"
    ],
];

echo json_encode($products);
?>
