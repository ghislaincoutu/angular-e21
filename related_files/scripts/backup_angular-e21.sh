#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie de sécurité des fichiers relatifs à l'application angular-e21"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

source=/var/www/html/d002/angular-e21
destination=/home/xd21/angular-e21/related_files/publication
rm $destination/*.tar.gz
tar -czvf $destination/pub_angular-e21_`(date +%Y%m%d-%H%M)`.tar.gz $source/

source=/home/xd21/angular-e21/
destination=/home/Backups/angular-e21_`(date +%Y%m%d-%H%M)`.tar.gz
tar --exclude=".angular" --exclude=".git" --exclude="node_modules" -czvf $destination $source
