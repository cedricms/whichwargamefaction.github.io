var app = angular.module("wargameApp", []);

app.controller("ArmyController", function($scope) {
  $scope.armies = [
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Undead", name: "Start Collecting! Skeleton Horde", priceDollars: 85, numberOfMiniatures: 16, strategyType: "Versatile, Magic", theme: "Skeletons"},
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Skaven", name: "Start Collecting! Skaven Pestilens", priceDollars: 85, numberOfMiniatures: 22, strategyType: "Hand to hand, Magic", theme: "Rats"},
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Chaos Demons", name: "Start Collecting! Daemons of Khorne", priceDollars: 85, numberOfMiniatures: 14, strategyType:  "Hand to hand", theme: "Demons"},
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Seraphon", name: "Start Collecting! Seraphon", priceDollars: 85, numberOfMiniatures: 21, strategyType: "Hand to hand, Cavalery", theme: "Lizards"},
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Chaos Warriors", name: "Start Collecting! Slaves to Darkness", priceDollars: 85, numberOfMiniatures: 18, strategyType: "Hand to hand, Cavalery, Armor", theme: "Barbarians"},
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Chaos Demons", name: "Start Collecting! Daemons of Nurgle", priceDollars: 85, numberOfMiniatures: 17, strategyType: "Hand to hand", theme: "Demons"},
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Orcs", name: "Start Collecting! Greenskinz", priceDollars: 85, numberOfMiniatures: 18, strategyType: "Hand to hand", theme: "Orcs"},
    { manufacturer: "Games Workshop", univers: "Age of Sigmar", faction: "Undead", name: "Start Collecting! Malignants", priceDollars: 85, numberOfMiniatures: 9, strategyType: "Cavalery, Magic", theme: "Ghosts"},
    
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Space Marines", name: "Start Collecting! Space Marines", priceDollars: 85, numberOfMiniatures: 12, strategyType: "Versatile, Armor", theme: "Knights in Space"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Astra Militarum", name: "Start Collecting! Astra Militarum", priceDollars: 85, numberOfMiniatures: 13, strategyType: "Shooty", theme: "Starship Troopers"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Chaos Demons", name: "Start Collecting! Daemons of Khorne", priceDollars: 85, numberOfMiniatures: 14, strategyType:  "Hand to hand", theme: "Demons"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Tau Empire", name: "Start Collecting! Tau Empire", priceDollars: 85, numberOfMiniatures: 23, strategyType:  "Versatile", theme: "Anime, Mecha"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Chaos Demons", name: "Start Collecting! Daemons of Nurgle", priceDollars: 85, numberOfMiniatures: 17, strategyType: "Hand to hand", theme: "Demons"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Necrons", name: "Start Collecting! Necrons", priceDollars: 85, numberOfMiniatures: 17, strategyType: "Shooty", theme: "Undead, Robots"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Tyranids", name: "Start Collecting! Tyranids", priceDollars: 85, numberOfMiniatures: 13, strategyType: "Hand to hand", theme: "Space Bugs, Aliens"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Space Wolves", name: "Start Collecting! Space Wolves", priceDollars: 85, numberOfMiniatures: 14, strategyType: "Hand to hand, Armor", theme: "Vikings in Space"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Skitarii", name: "Start Collecting! Skitarii", priceDollars: 85, numberOfMiniatures: 12, strategyType: "Shooty", theme: "Mecha, Cyborgs"},
    { manufacturer: "Games Workshop", univers: "Warhammer 40000", faction: "Orks", name: "Start Collecting! Orks", priceDollars: 85, numberOfMiniatures: 19, strategyType: "Hand to hand", theme: "Orcs"},
    
    { manufacturer: "Wyrd", univers: "Malifaux", faction: "Guild", name: "LADY JUSTICE BOX SET", priceDollars: 45, numberOfMiniatures: 6, strategyType: "Versatile", theme: "Justice"},
    { manufacturer: "Wyrd", univers: "Malifaux", faction: "Guild", name: "SONNIA CRIID BOX SET", priceDollars: 45, numberOfMiniatures: 6, strategyType: "Versatile", theme: "Flame"},
    { manufacturer: "Wyrd", univers: "Malifaux", faction: "Guild", name: "PERDITA ORTEGA BOX SET", priceDollars: 45, numberOfMiniatures: 6, strategyType: "Versatile", theme: "Western, Cowboys"},
    
    { manufacturer: "Corvus Belli", univers: "Infinity", faction: "Ariadna", name: "USAriadna Ranger Force Sectorial Starter Pack", priceDollars: 45, numberOfMiniatures: 6, strategyType: "Versatile", theme: "Rangers"},
    { manufacturer: "Corvus Belli", univers: "Infinity", faction: "Ariadna", name: "PanOceania Starter Pack", priceDollars: 45, numberOfMiniatures: 6, strategyType: "Versatile", theme: "Tech"}
  ];

});