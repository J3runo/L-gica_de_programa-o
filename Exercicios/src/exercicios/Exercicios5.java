package exercicios;

import java.util.Scanner;


public class Exercicios5 {

    public static void main(String[] args) {
        
          int contador = 0;
       
       while(contador == 0){
       Scanner leia = new Scanner(System.in); 
       System.out.println("digite a temperatura em °C ");
        int grausC = leia.nextInt();
        
        float grausF = (float) ((grausC * 1.8) + 32);
        float grausK = (float) (grausC + 273.15);
        
        System.out.println("A temperatura em Graus °F é : " + grausF + "°F");
        System.out.println("A temperatura em Graus °K é : " + grausK + "°K");
         System.out.println("------------------------------------");
       }
    }
    
}
