package exercicios;

import java.util.Scanner;


public class Exercicios4 {

    public static void main(String[] args) {
        
       Scanner leia = new Scanner(System.in); 
       System.out.println("digite numero de eleitores");
        int Neleitores = leia.nextInt();
       System.out.println("digite numero de votos brancos"); 
        int votosB = leia.nextInt();
       System.out.println("digite votos nulos"); 
        int votosN = leia.nextInt();
       System.out.println("digite votos validos"); 
        int votosV = leia.nextInt();

        
        int result = (Neleitores );
        int result2 = (votosB / 100 );
        int result3 = (votosN / 100 );
        int result4 = (votosV / 100 );
        
        System.out.println("O percentual é: " + result + "%");
        System.out.println("O percentual é: " + result2+ "%");
        System.out.println("O percentual é: " + result3+ "%");
        System.out.println("O percentual é: " + result4+ "%");
          
        
    }
    
}
