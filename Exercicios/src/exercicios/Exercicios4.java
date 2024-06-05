package exercicios;

import java.util.Scanner;


public class Exercicios4 {

    public static void main(String[] args) {
        
          int contador = 0;
       
       while(contador == 0){
       Scanner leia = new Scanner(System.in); 
       System.out.println("digite numero de eleitores");
        double Neleitores = leia.nextDouble();
       System.out.println("digite numero de votos brancos"); 
        double votosB = leia.nextDouble();
       System.out.println("digite votos nulos"); 
        double votosN = leia.nextDouble();
       System.out.println("digite votos validos"); 
        double votosV = leia.nextDouble();

        
       
        double percentualB = (votosB * 100)/ Neleitores ;
        double percentualN = (votosN * 100)/ Neleitores ;
        double percentualV = (votosV * 100)/ Neleitores ;
        
        
        System.out.println("O percentual é: " + percentualB+ "%");
        System.out.println("O percentual é: " + percentualN+ "%");
        System.out.println("O percentual é: " + percentualV+ "%");
        System.out.println("------------------------------------"); 
       } 
    }
    
}
