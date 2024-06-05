
package exercicios;

import java.util.Scanner;


public class Exercicios {

    public static void main(String[] args) {
        
       int contador = 0;
       
       while(contador == 0){ 
       System.out.println("digite um numero");
       
       Scanner leia = new Scanner(System.in); 
       
        int numero = leia.nextInt();
        
        System.out.println(--numero);
         System.out.println("------------------------------------");
    };
        
    }
    
}
