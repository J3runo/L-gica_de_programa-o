package exercicios;

import java.util.Scanner;


public class Exercicios2 {

    public static void main(String[] args) {
        
         int contador = 0;
       
       while(contador == 0){
       Scanner leia = new Scanner(System.in); 
       System.out.println("digite altura");
        double altura = leia.nextDouble();
       System.out.println("digite largura"); 
        double largura = leia.nextDouble();

        double resut = (altura * largura);
        
         System.out.println("Area do retangulo é: " + resut + "M²");
        System.out.println("------------------------------------");
       }
    }
    
}
