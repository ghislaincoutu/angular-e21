#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Édition des adresses URL des fichiers externes"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Commande à tester pour rechercher et remplacer des chaînes de caractères dans un sous-répertoire.
# Find & Replace in Multiple Files
# grep -rl "old_string" . | xargs sed -i 's/old_string/new_string/g'

path01=https:\/\/172.17.0.1:2443\/r002\/angular-e21\/
path02=\/r002\/angular-e21\/
source=/var/www/html/r002/angular-e21

PS3='Sélectionner l’aménagement requis pour afficher tous les contenus (Développement ou Publication): '
options=("Développement" "Publication" "Quitter")
select opt in "${options[@]}"
do
    case $opt in
        "Développement")
            echo "Choix sélectionné $REPLY, lequel est $opt"
            sed -i "s|$path02|$path01|g" $source/json/data01v02.json
            sed -i "s|$path02|$path01|g" $source/json/data01v03.json
            grep -rl $path02 $source/fiches | xargs sed -i "s|$path02|$path01|g"
            break
            ;;
        "Publication")
            echo "Choix sélectionné $REPLY, lequel est $opt"
            sed -i "s|$path01|$path02|g" $source/json/data01v02.json
            sed -i "s|$path01|$path02|g" $source/json/data01v03.json
            grep -rl $path01 $source/fiches | xargs sed -i "s|$path01|$path02|g"
            break
            ;;
        "Quitter")
            break
            ;;
        *) echo "Option invalide $REPLY";;
    esac
done
