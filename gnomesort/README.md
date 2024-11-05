
# Gnome Sort AKA. Stupid Sort

En meget ueffektiv sorterings algoritme.
Kort fortalt tager den udgangspunkt i et index og kigger på venstre nabos værdi (medmindre det er index 0), hvis den er større end naboen, gør vi ikke noget og kigger i stedet på det næste index.

Hvis værdien af naboen mod venstre til gengæld er større, så swapper vi de to værdier, og decrementer index med en.

Kort kan man sige man flytter alle elementer mod venstre, indtil de støder på en nabo mod venstre som er mindre, ryk et indeks frem, repeat. Gentag indtil vi når slutningen af arrayet.

https://en.wikipedia.org/wiki/Gnome_sort

```
 function gnomeSort(arr[]):
   i = 0
   while i < arr.length:
       if (i == 0 or a[i] >= a[i-1]):
           i++
       else:
           swap a[i] and a[i-1]
           i--
``` 

## Tidskompleksiten

Tidskompleksiten er generelt O(n<sup>2</sup>)

Dette array:
`[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`
Vil tage O(n<sup>2</sup>), altså 10*10 = 100 iterationer.
    
