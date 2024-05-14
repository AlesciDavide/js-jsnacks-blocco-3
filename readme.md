1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero.


2. La coda dell'Array
Cartella: array_tail
Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente  conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array


3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


--------------------
1. Tutti frutti

creo array con dentro i frutti
aggiungo la pesca all'array con push
faccio il controlo se dentro l'array c'è il cocomero con questa modalità:
      -creo una variabile con dentro 0 per il controllo della presenza del cocomero
      -faccio un for per scorrere la lista
         -con un if controllo la presenza del prodotto
            se è presente modifico la variabile con 1
      -faccio un'altro if per il controllo della variabile
         se è 1 il prodotto è presente
         altrimenti se è rimasto a 0 non è presente.

-------------------
2. La coda dell'Array

-inizializzo un'array e due variablie
-chiedo all'utente quanti elementi vuole mettere nell'array 
-faccio un ciclo for per quanti elementi dovrò inserire
      in ogni ciclo creo un numero random e lo inserisco nella posizione dettata dal ciclo
-stampo gli ultimi 5 numeri con slice (lunghezza array -5)
-chiedo all'utente quanti elementi vuole stampare (con un controllo che non siano maggiori della lunghezza dell'array)
-stampo gli ultimi numeri decisi dell'utente con slice (lunghezza array -numeriutente)

-------------------

3. bonus

-creo 2 array con numei diversi di elementi e una variabile
con un if controllo quale dei 2 è più corto
   con un ciclo for aggiungo gli elementi all'array più corto con in controllo del for dandogli come fine la lunghezza dell'array più lungo salvando il check dell'if in una variabile 