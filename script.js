// version initiale

let email;

const maskEmail = (email) => {
 let emailLength = email.indexOf("@");
 console.log(emailLength);
 let cutEmail = email.slice(1, emailLength - 1);
 console.log(cutEmail);
 let emailMask = email.replace(cutEmail, "*".repeat(emailLength-2));
 console.log(emailMask);
 return emailMask;
}

email = "apple.pie@example.com";
console.log(maskEmail(email));

// version améliorée

let email = "apple.pie@example.com";

const maskEmail = (email) => {
  // Vérifie que l'adresse contient un "@"
  if (!email || email.indexOf("@") === -1) return email;
  // Sépare la partie avant et après le "@"
  const [name, domain] = email.split("@");
  // Si le nom est trop court (1 ou 2 lettres), on ne masque pas
  if (name.length <= 2) {
    return `${name}@${domain}`;
  }
  // On garde la première et la dernière lettre
  const first = name[0];
  const last = name[name.length - 1];
  // On remplace le reste par des étoiles
  const middle = "*".repeat(name.length - 2);
  // On recompose l'adresse masquée
  const maskedName = `${first}${middle}${last}`;
  return `${maskedName}@${domain}`;
};
// On affiche le résultat comme demandé
console.log(maskEmail(email));
