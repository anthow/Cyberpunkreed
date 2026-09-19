# Table connectée — Daily NightCity

Serveur local pour un lancer de d10 partagé autour de la table (WiFi maison, pas de compte).

## Installer (une seule fois)

```bash
cd server
npm install
```

## Lancer

1. Depuis la racine du repo :

   ```bash
   npm run table
   ```

   Le terminal affiche l'adresse, par exemple :

   ```
   Table connectée démarrée : http://192.168.1.20:4000
   ```

2. **Le MJ ouvre `/mj` en premier** et choisit son nom + son code à 4 chiffres. Cette identité est ensuite verrouillée : personne d'autre ne peut créer un second MJ.

3. **Ensuite seulement**, donner l'adresse racine aux tablettes des joueurs :

   - MJ : `http://IP:4000/mj`
   - Joueurs : `http://IP:4000/`

Chaque personne crée (ou reprend) un personnage avec un nom et un code. Le même nom + le même code retrouvent le personnage après une coupure WiFi ou une tablette qui s'est mise en veille.

Node 20 requis. Cette commande ne lance pas le site Gatsby.
