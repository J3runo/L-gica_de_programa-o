package exercicios;

import java.util.Scanner;


public class Exercicios3 {

    public static void main(String[] args) {
        
       Scanner leia = new Scanner(System.in); 
       System.out.println("digite ano");
        int ano = leia.nextInt();
       System.out.println("digite mes"); 
        int mes = leia.nextInt();
       System.out.println("digite dia"); 
        int dia = leia.nextInt();

        int result = (ano*365)+(mes*30)+ dia;
        
         System.out.println("O total de dias é: " + result);
        
        
    }
    
}
