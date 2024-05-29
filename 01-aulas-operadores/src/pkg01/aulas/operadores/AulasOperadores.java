package pkg01.aulas.operadores;


public class AulasOperadores {
    
    public static void main(String[] args) {
        //Aritiméticos
        int a = 10+1;
        int b = a+10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.5 + 1.7;
 
        String mostrarA = "o valor de A: " + a;
        System.out.println(mostrarA);
        
        a += 10;
        b -= 1;
        c *= 5;
        d /= 1;
        
        System.out.println("o valor de A: " + a);
        System.out.println("o valor de A: " + b);
        System.out.println("o valor de A: " + c);
        System.out.println("o valor de A: " + d);
        
        //------------------------------------------
        //Lógicos 
        
       boolean ehmaior = 10 > 20;
       boolean ehmenor = 10 < 20;
       boolean ehmenorIgual = 10 <= 20;
       boolean ehmaiorIgual = 10 >= 20;
       boolean ehIgual = 10 == 20;
       boolean ehdiferente = 10 != 20;
       
       //10 > 10
       //10 >= 10
       
        System.out.println("Maior: " + ehmaior);
        System.out.println("Menor: " + ehmenor);
        System.out.println("Menor igual: " + ehmenorIgual);
        System.out.println("Maior igual: " + ehmaiorIgual);
        System.out.println("Igual: " + ehIgual);
        System.out.println("Diferente: " + ehdiferente);
       
       
       System.out.println(ehmaior);
       if (ehmaior == true){
           System.out.println("esse valor e: " + ehmaior);
       }
       else {System.out.println("esse valor e: " + ehmaior);}
        
       boolean valor = (10>9) && (5>1);
       boolean valor1 = true && true;
       boolean valor2 = true && false;
       boolean valor3 = false || true;
       boolean valor4 = false || false;        
       boolean valor5 = (10>9) || (5>1);
       boolean valor6 = (10>9) && (5>1) && (120<1) &&  31 > 3;
       boolean valor7 = ((10>9) && (5>1)) || ((120<1) &&  31 > 3);
       
        System.out.println(valor );
        System.out.println(valor1 );
        System.out.println(valor2 );
        System.out.println(valor3 ); 
        System.out.println(valor4 );
        System.out.println(valor5 );
        System.out.println(valor6 );
        System.out.println(valor7 );
        
        
        
        
        
        
        //-------------------------------------------------------
       //
        
        
        
        
        
        
        
        
        
        
        
    }
    
}
