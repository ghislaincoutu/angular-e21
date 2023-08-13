#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie du code HTML et TypeScript dans les fichiers code-preview"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Source (so)
so=/home/Exercises/angular-e21/src/app
# Destination (de)
de=/home/Exercises/angular-e21/src/assets/code-preview/

cp $so/module01.service.ts $de/module01/
mv $de/module01/module01.service.ts $de/module01/typescript.txt

cp $so/module02.service.ts $de/module02/
mv $de/module02/module02.service.ts $de/module02/typescript.txt

cp $so/module03.service.ts $de/module03/
mv $de/module03/module03.service.ts $de/module03/typescript.txt

#cp $so/safe.pipe.ts $de/safe/
#mv $de/safe/safe.pipe.ts $de/safe/typescript.txt

cp $so/liste-sommaire/liste-sommaire.component.html $de/liste-sommaire/
mv $de/liste-sommaire/liste-sommaire.component.html $de/liste-sommaire/html.txt
cp $so/liste-sommaire/liste-sommaire.component.ts $de/liste-sommaire/
mv $de/liste-sommaire/liste-sommaire.component.ts $de/liste-sommaire/typescript.txt

cp $so/liste-detaillee/liste-detaillee.component.html $de/liste-detaillee/
mv $de/liste-detaillee/liste-detaillee.component.html $de/liste-detaillee/html.txt
cp $so/liste-detaillee/liste-detaillee.component.ts $de/liste-detaillee/
mv $de/liste-detaillee/liste-detaillee.component.ts $de/liste-detaillee/typescript.txt

cp $so/t01/t01.component.html $de/t01/
mv $de/t01/t01.component.html $de/t01/html.txt
cp $so/t01/t01.component.ts $de/t01/
mv $de/t01/t01.component.ts $de/t01/typescript.txt

cp $so/t02/t02.component.html $de/t02/
mv $de/t02/t02.component.html $de/t02/html.txt
cp $so/t02/t02.component.ts $de/t02/
mv $de/t02/t02.component.ts $de/t02/typescript.txt
