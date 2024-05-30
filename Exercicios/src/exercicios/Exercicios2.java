package exercicios;

import java.util.Scanner;


public class Exercicios2 {

    public static void main(String[] args) {
        
       Scanner leia = new Scanner(System.in); 
       System.out.println("digite altura");
        int altura = leia.nextInt();
       System.out.println("digite largura"); 
        int largura = leia.nextInt();

        int resut = (altura * largura);
        
         System.out.println("Area do retangulo é: " + resut + "M²");
        
        
    }
    
}
